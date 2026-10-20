(function () {
  'use strict';

  var KEY = 'movePlatform.v1';
  var COURSE = window.COURSE;
  var app = document.getElementById('app');
  var TOTAL = COURSE.minicourses.length;

  // ---------- Storage ----------
  function load() {
    try {
      var s = JSON.parse(localStorage.getItem(KEY));
      if (s && s.passed) return s;
    } catch (e) { /* ignore corrupt data */ }
    return { passed: {} };
  }
  var state = load();
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {}
  }

  // ---------- Helpers ----------
  function el(tag, attrs, children) {
    var n = document.createElement(tag);
    attrs = attrs || {};
    Object.keys(attrs).forEach(function (k) {
      if (k === 'class') n.className = attrs[k];
      else if (k.indexOf('on') === 0) n.addEventListener(k.slice(2), attrs[k]);
      else n.setAttribute(k, attrs[k]);
    });
    (Array.isArray(children) ? children : [children]).forEach(function (c) {
      if (c === null || c === undefined) return;
      n.append(c.nodeType ? c : document.createTextNode(String(c)));
    });
    return n;
  }

  // 'passed' | 'open' | 'soon' (no content yet) | 'locked'
  function status(i) {
    var m = COURSE.minicourses[i];
    if (state.passed[m.id]) return 'passed';
    if (i > 0 && !state.passed[COURSE.minicourses[i - 1].id]) return 'locked';
    return m.content ? 'open' : 'soon';
  }

  function setView(nodes) {
    app.innerHTML = '';
    nodes.forEach(function (n) { app.append(n); });
    window.scrollTo(0, 0);
  }

  function backLink(text, href) {
    return el('a', { class: 'back', href: href }, text);
  }

  // ---------- Home ----------
  function renderHome() {
    var passedCount = COURSE.minicourses.filter(function (m) { return state.passed[m.id]; }).length;
    var coreList = COURSE.minicourses.filter(function (m) { return m.core; });
    var coreDone = coreList.filter(function (m) { return state.passed[m.id]; }).length;
    var courseDone = coreDone === coreList.length;

    var nodes = [];

    nodes.push(el('section', { class: 'card intro' }, [
      el('h2', {}, COURSE.title),
      el('p', {}, COURSE.intro),
      el('div', { class: 'progress-line' }, [
        el('div', { class: 'bar' }, [
          el('span', { style: 'width:' + Math.round(passedCount / TOTAL * 100) + '%' })
        ]),
        el('p', { class: 'small' },
          passedCount + ' of ' + TOTAL + ' mini-courses passed · ' +
          coreDone + ' of ' + coreList.length + ' core passed')
      ])
    ]));

    if (courseDone) {
      nodes.push(el('section', { class: 'card done-banner' }, [
        el('strong', {}, 'Course complete. '),
        'You have passed every core mini-course. Keep going with the optional ones, or return to them any time.'
      ]));
    }

    // Install instructions
    nodes.push(el('details', { class: 'card install' }, [
      el('summary', {}, 'Add this to your home screen'),
      el('h3', {}, 'iPhone (use Safari)'),
      el('ol', {}, [
        el('li', {}, 'Open this page in Safari.'),
        el('li', {}, 'Tap the Share button (a square with an arrow pointing up).'),
        el('li', {}, 'Scroll down and tap "Add to Home Screen".'),
        el('li', {}, 'Tap "Add". The Healthspan icon appears on your home screen.')
      ]),
      el('h3', {}, 'Android (use Chrome)'),
      el('ol', {}, [
        el('li', {}, 'Open this page in Chrome.'),
        el('li', {}, 'Tap the three dots menu in the top right.'),
        el('li', {}, 'Tap "Add to Home screen" or "Install app".'),
        el('li', {}, 'Tap "Add" or "Install". The icon appears on your home screen.')
      ]),
      el('p', { class: 'small' }, 'The app then opens full screen, like any other app, and lessons work without internet once loaded.')
    ]));

    // Mini-course list grouped by phase
    COURSE.phases.forEach(function (phaseTitle, p) {
      var section = el('section', { class: 'phase' }, [el('h2', {}, phaseTitle)]);
      COURSE.minicourses.forEach(function (m, i) {
        if (m.phase !== p) return;
        var st = status(i);
        var label = {
          passed: 'Passed ✓',
          open: m.tier === 'core' ? 'Core' : (m.tier === 'support' ? 'Recommended' : 'Optional'),
          soon: 'Being written',
          locked: 'Locked'
        }[st];
        var clickable = st === 'open' || st === 'passed';
        var item = el(clickable ? 'a' : 'div', { class: 'item ' + st }, [
          el('span', { class: 'num' }, String(i + 1)),
          el('span', { class: 'title' }, m.title),
          el('span', { class: 'tag' }, label)
        ]);
        if (clickable) item.setAttribute('href', '#/m/' + m.id);
        section.append(item);
      });
      nodes.push(section);
    });

    setView(nodes);
  }

  // ---------- Lesson ----------
  // One part at a time: the story, each section, the worked example, the weekly plan, and why it matters.
  function renderLesson(m, i) {
    var c = m.content;
    var defined = {};
    var terms = c.terms || {};

    function cap(s) { return s.charAt(0).toUpperCase() + s.slice(1); }

    // Plain text. Key words marked as [[word]] or [[shown|key]] are collected, so their
    // definitions appear in one box at the end of the part where they first occur.
    function richText(text, fresh) {
      var p = el('p', {});
      var last = 0;
      var re = /\[\[([^\]|]+)(?:\|([^\]]+))?\]\]/g;
      var mt;
      while ((mt = re.exec(text))) {
        if (mt.index > last) p.append(document.createTextNode(text.slice(last, mt.index)));
        var shown = mt[1];
        var key = (mt[2] || mt[1]).toLowerCase();
        p.append(document.createTextNode(shown));
        if (!defined[key] && terms[key]) { defined[key] = true; fresh.push(key); }
        last = re.lastIndex;
      }
      if (last < text.length) p.append(document.createTextNode(text.slice(last)));
      return p;
    }

    function keyWordsBox(keys) {
      if (!keys.length) return null;
      var dl = el('dl', { class: 'glossary' });
      keys.forEach(function (k) {
        dl.append(el('dt', {}, cap(k)));
        dl.append(el('dd', {}, terms[k]));
      });
      return el('div', { class: 'term-box' }, [el('p', { class: 'kicker' }, 'Key words'), dl]);
    }

    function recallBox(r) {
      var answer = el('p', { class: 'recall-answer', hidden: '' }, r.a);
      var toggle = el('button', { class: 'recall-btn', type: 'button' }, 'Show answer');
      toggle.addEventListener('click', function () {
        answer.hidden = !answer.hidden;
        toggle.textContent = answer.hidden ? 'Show answer' : 'Hide answer';
      });
      return el('div', { class: 'recall' }, [
        el('p', { class: 'kicker' }, 'Pause and recall'),
        el('p', { class: 'recall-q' }, r.q),
        toggle,
        answer
      ]);
    }

    var steps = [];

    // Part: the story and introduction
    var fresh0 = [];
    var intro = [el('p', { class: 'lede' }, m.intro)];
    if (c.scenario) {
      var sc = el('section', { class: 'card scenario' }, [
        el('p', { class: 'kicker' }, c.scenario.label),
        richText(c.scenario.text, fresh0)
      ]);
      var b0 = keyWordsBox(fresh0);
      if (b0) sc.append(b0);
      intro.push(sc);
    }
    steps.push({ label: 'The story', nodes: intro });

    // Parts: one per section
    c.sections.forEach(function (s) {
      var fresh = [];
      var nodes = s.paras.map(function (p) { return richText(p, fresh); });
      var box = keyWordsBox(fresh);
      if (box) nodes.push(box);
      if (s.recall) nodes.push(recallBox(s.recall));
      steps.push({ label: s.heading, nodes: nodes });
    });

    // Part: worked example
    if (c.worked) {
      var ol = el('ol', { class: 'steps' });
      c.worked.steps.forEach(function (step) { ol.append(el('li', {}, step)); });
      steps.push({ label: c.worked.title, nodes: [ol] });
    }

    // Part: one if-then plan
    if (c.action) {
      steps.push({
        label: 'Try this week',
        nodes: [
          el('p', { class: 'ifthen' }, c.action.ifThen),
          el('p', { class: 'small' }, c.action.why)
        ]
      });
    }

    // Part: why it matters, and what comes next
    var closing = [el('p', {}, c.stakes)];
    if (c.bridge) closing.push(el('p', { class: 'small' }, c.bridge));
    steps.push({ label: 'Why this matters most', nodes: closing });

    var last = steps.length - 1;

    function show(idx) {
      var st = steps[idx];
      var pct = Math.round((idx + 1) / steps.length * 100);
      var card = el('section', { class: 'card step' }, [el('h2', {}, st.label)].concat(st.nodes));
      var navNodes = [];
      if (idx > 0) {
        navNodes.push(el('button', { class: 'secondary big', type: 'button', onclick: function () { show(idx - 1); } }, '← Back'));
      }
      if (idx < last) {
        navNodes.push(el('button', { class: 'primary big', type: 'button', onclick: function () { show(idx + 1); } }, 'Next →'));
      } else {
        navNodes.push(el('a', { class: 'primary big', href: '#/m/' + m.id + '/quiz' }, 'Take the quiz'));
      }
      setView([
        backLink('← All mini-courses', '#/'),
        el('h1', { class: 'lesson-title' }, m.title),
        el('p', { class: 'counter' }, 'Part ' + (idx + 1) + ' of ' + steps.length),
        el('div', { class: 'stepbar' }, [el('span', { style: 'width:' + pct + '%' })]),
        card,
        el('div', { class: 'nav' }, navNodes)
      ]);
    }

    show(0);
  }

  // ---------- Spaced review ----------
  // Pick one question from the nearest earlier mini-course the reader has passed.
  function reviewQuestion(i) {
    for (var j = i - 1; j >= 0; j--) {
      var prev = COURSE.minicourses[j];
      if (state.passed[prev.id] && prev.content && prev.content.reviewBank && prev.content.reviewBank.length) {
        var bank = prev.content.reviewBank;
        var base = bank[i % bank.length];
        return Object.assign({}, base, { isReview: true, fromTitle: prev.title });
      }
    }
    return null;
  }

  // ---------- Quiz ----------
  // Every wrong answer shows an explanation and adds a retry question on the same idea.
  // The quiz only finishes when every question, including retries, is answered correctly.
  function renderQuiz(m, i) {
    var queue = m.content.questions.slice();
    var review = reviewQuestion(i);
    if (review) queue.unshift(review);
    var pos = 0;
    var missedFirstTime = 0;

    function paint() {
      var q = queue[pos];
      var answered = false;
      var optionsBox = el('div', { class: 'opts' });
      var label = q.isReview
        ? 'Review · from ' + q.fromTitle
        : 'Quiz · Question ' + (pos + 1);
      var card = el('section', { class: 'card quiz-card' }, [
        el('p', { class: 'kicker' }, label),
        el('h2', {}, q.q),
        optionsBox
      ]);

      q.options.forEach(function (text, idx) {
        var b = el('button', { class: 'opt', type: 'button' }, text);
        b.addEventListener('click', function () { choose(idx); });
        optionsBox.append(b);
      });

      function choose(idx) {
        if (answered) return;
        answered = true;
        var correct = idx === q.answer;
        Array.prototype.forEach.call(optionsBox.children, function (b, j) {
          b.disabled = true;
          if (j === q.answer) b.classList.add('right');
          else if (j === idx) b.classList.add('wrong');
        });

        card.append(el('div', { class: 'feedback ' + (correct ? 'good' : 'bad') }, [
          el('strong', {}, correct ? 'Correct. ' : 'Not quite. '),
          q.explain
        ]));

        if (!correct) {
          if (!q.isRepeat) missedFirstTime++;
          // A new question on the same idea, added to the end of the quiz
          if (q.retry) queue.push(Object.assign({ isRepeat: true }, q.retry));
          else queue.push(q);
        }

        var last = pos + 1 >= queue.length;
        var next = el('button', { class: 'primary big', type: 'button' }, last ? 'Finish' : 'Next');
        next.addEventListener('click', function () {
          pos++;
          if (pos >= queue.length) finish();
          else paint();
        });
        card.append(next);
      }

      setView([backLink('← Back to lesson', '#/m/' + m.id), card]);
    }

    function finish() {
      state.passed[m.id] = true;
      save();
      var nextM = COURSE.minicourses[i + 1];
      var msg = missedFirstTime === 0
        ? 'You answered every question correctly the first time.'
        : 'You missed ' + missedFirstTime + ' question' + (missedFirstTime > 1 ? 's' : '') +
          ' the first time. The retry questions helped you learn them, and you now have every answer right.';
      setView([
        el('section', { class: 'card done-banner' }, [
          el('h1', {}, 'Mini-course complete'),
          el('p', {}, msg)
        ]),
        nextM
          ? (nextM.content
              ? el('a', { class: 'primary big', href: '#/m/' + nextM.id }, 'Next: ' + nextM.title)
              : el('div', { class: 'card' }, [
                  el('strong', {}, 'Next: ' + nextM.title),
                  el('p', { class: 'small' }, 'This mini-course is being written. It will open here as soon as it is ready. Your progress is saved.')
                ]))
          : el('p', {}, 'That is the last mini-course in this course.'),
        el('a', { class: 'secondary big', href: '#/' }, 'Back to all mini-courses')
      ]);
    }

    paint();
  }

  // ---------- Router ----------
  function route() {
    var parts = location.hash.replace(/^#\/?/, '').split('/').filter(Boolean);
    if (parts[0] === 'm' && parts[1]) {
      var i = -1;
      COURSE.minicourses.forEach(function (m, idx) { if (m.id === parts[1]) i = idx; });
      if (i < 0) return renderHome();
      var st = status(i);
      if (st === 'locked' || st === 'soon') return renderHome();
      var m = COURSE.minicourses[i];
      if (parts[2] === 'quiz') return renderQuiz(m, i);
      return renderLesson(m, i);
    }
    renderHome();
  }

  document.getElementById('reset').addEventListener('click', function () {
    if (confirm('Clear all your passed mini-courses on this phone?')) {
      state = { passed: {} };
      save();
      location.hash = '#/';
      route();
    }
  });

  // Make in-app links reliable inside any frame: set the hash and render directly.
  document.addEventListener('click', function (e) {
    var a = e.target.closest ? e.target.closest('a[href^="#/"]') : null;
    if (!a) return;
    e.preventDefault();
    var h = a.getAttribute('href');
    if (location.hash !== h) location.hash = h;
    route();
  });

  window.addEventListener('hashchange', route);
  route();
})();
