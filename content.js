// Course content. Add or edit lessons here.
//
// Lesson pattern (used by every mini-course with content):
//   scenario   a short story about a realistic person (labelled as a composite)
//   terms      definitions for key words. In the text, mark a key word as [[word]] or [[shown text|key]].
//              Each word is highlighted, and its definition appears right after the paragraph where it first appears.
//   sections   one idea each, with a recall prompt the reader answers before seeing the answer
//   worked     a worked example, step by step
//   action     one if-then plan to try this week
//   stakes     why this matters most
//   bridge     a preview of the next mini-course
//   questions  scenario-based quiz. A wrong answer shows the explanation, then a retry question
//              on the same idea. The quiz finishes only when every question is answered right.
//   reviewBank questions that are re-used as a spaced review in later mini-courses.
//
// A mini-course with content: null shows as "Being written" until its content is added.

window.COURSE = {
  title: "Movement, Exercise and Longevity",
  intro:
    "Short lessons, then a quiz. Each lesson builds on the last.",

  phases: [
    "Module 1: Why movement matters",
    "Module 2: How exercise works in the body",
    "Module 3: Muscle and ageing",
    "Module 4: Balance and falls",
    "Module 5: Aerobic fitness and intensity",
    "Module 6: Making it last",
    "Module 7: The long view"
  ],

  minicourses: [
    {
      id: "m1", phase: 0, core: true, tier: "core",
      title: "The body is built to move",
      intro:
        "Start here. This lesson explains why movement is the signal your body depends on, what happens when that signal stops, and what the evidence says you should aim for.",
      content: {
        scenario: {
          label: "Meet Tom (a composite example, not a real person)",
          text:
            "Tom is 65 and retired. He drives everywhere, spends most of the day sitting, and walks only to the shops. At his last check-up, his [[blood sugar]] was a little higher than it should be. He wants to know whether it is too late to change."
        },
        terms: {
          "muscle": "Tissue that pulls on your bones so your body can move. Muscle also takes up most of the sugar your body uses after a meal.",
          "glucose": "The simple sugar your body uses for energy. It travels in the blood.",
          "blood sugar": "The amount of glucose in your blood at any time.",
          "insulin": "A hormone, made in the pancreas, that signals your cells to take in sugar from the blood.",
          "insulin sensitivity": "How well your cells respond to insulin. High sensitivity means a small amount of insulin does a good job.",
          "moderate activity": "Movement that makes you breathe faster and feel warmer, but still lets you talk.",
          "muscle-strengthening activity": "Exercise that works your muscles against resistance, such as lifting, pushing, standing up from a chair, or using a resistance band.",
          "multi-component activity": "Exercise that combines balance, coordination, and muscle strengthening in one session, such as stepping, standing on one leg, or walking with turns."
        },
        sections: [
          {
            heading: "Your body is designed to be used",
            paras: [
              "For most of human history, people walked, carried loads, and worked with their hands for hours every day. Their bodies were shaped by that demand. Your body still runs on the same design, even though your daily life no longer asks for it.",
              "Bones, [[muscles|muscle]], the heart, and blood vessels all respond to the load placed on them. When they are used hard and often, they grow stronger and work more efficiently. When they are rarely used, they shrink and lose efficiency. The body does not keep spare capacity. It keeps only what it uses.",
              "This is the central idea of this course. Movement is not an optional extra for your body. It is the signal that tells your body to stay strong. Without that signal, the loss builds quietly for years, and most people feel nothing until the loss is large."
            ]
          },
          {
            heading: "Muscle is the first part to change",
            paras: [
              "Scientists call this 'use it or lose it.' [[Muscle]] shows the rule most clearly. Muscle is made of living cells. When muscle is not needed for work, the body breaks it down and reuses the material.",
              "The change can be fast. In a 2016 study in the journal Diabetes, healthy young adults stayed in bed for one week. Afterward, their [[muscles|muscle]] responded less well to [[insulin]]. The loss of response began within a single week, not after years.",
              "This matters because insulin is the signal that tells muscle to take in sugar. When muscle responds less well, sugar stays in the blood for longer after each meal. That is the first link in a chain that runs through the rest of this course: less movement, weaker muscle, poorer control of blood sugar."
            ],
            recall: {
              q: "What does insulin do?",
              a: "It signals your cells, mainly muscle, to take in sugar from the blood."
            }
          },
          {
            heading: "Muscle is the main place sugar goes after a meal",
            paras: [
              "After a meal, [[glucose]] enters the blood. The body must move it into cells quickly, or [[blood sugar]] stays high. Over many years, high blood sugar damages blood vessels, nerves, and organs, which is why it matters even when you feel well.",
              "Muscle does the largest share of this work. It can take up sugar in two ways. One is through insulin. The other is through the muscle contracting itself, which works even when insulin levels are low. This is why a short walk after a meal lowers blood sugar so quickly.",
              "So muscle is not only for movement. It is one of the body's main tools for controlling blood sugar. A body with less muscle, or with muscle that rarely works, has less capacity to do that job. Every hour of sitting leaves that tool idle."
            ]
          },
          {
            heading: "The same pattern, repeated across millions of lives",
            paras: [
              "Now multiply Tom's daily pattern across years and across the world. A 2012 review in The Lancet estimated that physical inactivity causes about 9% of early deaths worldwide. That was roughly 5.3 million deaths in one year, 2008. It is a large share of early death from a single cause that most people never think about.",
              "The World Health Organization (WHO) reported in 2024 that about 1.8 billion adults, close to one in three, still do not do enough physical activity. The WHO also warned that this share could keep rising if current trends continue.",
              "For Tom, this means he is not unusual. He is one of the people the research describes. The encouraging part is that the pattern can change, and the rest of this lesson shows how much change the evidence asks for."
            ]
          },
          {
            heading: "Sitting, and what the targets actually ask for",
            paras: [
              "Tom spends most of his day sitting. A single workout each week does not cancel out long hours of sitting. A 2016 review in The Lancet pooled more than one million adults from 16 studies. It found that long periods of sitting were linked with a higher risk of early death.",
              "The same review found a useful result. Among people who did 60 to 75 minutes of [[moderate activity]] a day, the extra risk linked to long sitting largely disappeared. The message is that movement spread across the whole day matters, not just one session.",
              "For adults aged 65 and over, the WHO sets three weekly targets. The first is at least 150 minutes of moderate activity. The second is [[muscle-strengthening activity]] on at least 2 days. The third is [[multi-component activity]] on at least 3 days. Each target protects a different part of the body, so meeting only one leaves gaps."
            ],
            recall: {
              q: "What daily amount of moderate activity was linked with largely removing the extra risk of long sitting?",
              a: "About 60 to 75 minutes."
            }
          }
        ],
        worked: {
          title: "Worked example: does Tom meet the targets?",
          steps: [
            "Tom walks briskly for 20 minutes, 4 days a week. Brisk walking counts as moderate activity for most people.",
            "Find his weekly walking total: 20 minutes × 4 days = 80 minutes.",
            "Compare with the moderate activity target: 150 − 80 = 70 minutes more are needed each week.",
            "Add the strength target: muscle-strengthening activity on at least 2 days. Walking does not count towards it.",
            "Add the balance target: multi-component activity on at least 3 days.",
            "Build one plan that covers every target: two extra 35-minute walks, plus balance and strength work on three separate days, such as Monday, Wednesday, and Friday. Those three sessions also meet the 2-day strength target. Each part of the plan has a job, so skipping one leaves a gap."
          ]
        },
        action: {
          ifThen: "If I have been sitting for 30 minutes, then I will stand up and walk for 3 minutes.",
          why: "Short walks break up long sitting. Choose a moment you already have each day, such as the kettle boiling or the end of a phone call."
        },
        stakes:
          "It is never too late. In a 1990 study, nursing home residents aged 72 to 98 did strength training for eight weeks. Their leg strength rose by about 174%. If the body can respond at 90, it can respond at 65. The so what: the movement you do now protects your independence later, including the ability to climb stairs, carry shopping, and get up from the floor.",
        bridge:
          "Next: sitting as a risk in its own right. You will see why being still for long periods is a problem even for people who exercise.",
        questions: [
          {
            q: "Tom's blood sugar stays high for longer after meals. Which change would help the most?",
            options: [
              "Sit still for longer after each meal",
              "Move the muscles, for example by walking after meals",
              "Stay in bed after meals",
              "Avoid all movement for a week"
            ],
            answer: 1,
            explain: "Muscles take up sugar when they move. A walk after a meal puts them to work.",
            retry: {
              q: "George, 66, eats lunch at his desk, then sits until 6 p.m. Which step would help his blood sugar the most?",
              options: [
                "Stay seated, since he has already eaten",
                "Take a 10-minute walk after lunch",
                "Lie down to rest",
                "Skip the walk to save energy"
              ],
              answer: 1,
              explain: "A short walk after eating uses the muscles and helps clear sugar from the blood.",
              retry: {
                q: "Mary, 68, eats dinner and then watches television for three hours. Which step would help her blood sugar the most?",
                options: [
                  "Sit until bedtime, since the meal is over",
                  "Walk for 10 minutes after dinner",
                  "Lie flat on the sofa",
                  "Eat a larger dinner"
                ],
                answer: 1,
                explain: "A short walk after a meal uses the muscles, which helps clear sugar from the blood."
              }
            }
          },
          {
            q: "Tom walks briskly for 20 minutes, 4 days a week, and does no strength or balance work. Which plan meets the WHO guidelines for his age?",
            options: [
              "Keep walking as it is, since 80 minutes is close to 150",
              "Add 70 minutes of brisk walking, plus strength and balance work on at least 3 days",
              "Do strength work only, since walking does not count",
              "Add 150 minutes of walking and nothing else"
            ],
            answer: 1,
            explain: "Walking gives 80 of the 150 minutes, so 70 more are needed. For adults aged 65 and over, strength and balance work are separate targets too.",
            retry: {
              q: "George walks for 30 minutes, 3 days a week, and does no strength or balance work. What does he still need?",
              options: [
                "60 more walking minutes, plus strength and balance work on at least 3 days",
                "Nothing, since 90 minutes is enough",
                "30 more walking minutes only",
                "Strength work every day of the week"
              ],
              answer: 0,
              explain: "George walks 90 minutes (30 × 3), so he needs 60 more. He also needs strength and balance work.",
              retry: {
                q: "Mary walks for 25 minutes, 5 days a week. How many more minutes of moderate activity does she need to reach 150 in a week?",
                options: ["0", "25", "50", "125"],
                answer: 1,
                explain: "Mary walks 125 minutes (25 × 5). 150 minus 125 is 25."
              }
            }
          },
          {
            q: "This is a core question. According to the 2016 Lancet review, what daily amount of moderate activity largely removed the extra risk linked to long sitting?",
            options: [
              "About 5 minutes",
              "About 20 minutes",
              "About 60 to 75 minutes",
              "About 3 hours"
            ],
            answer: 2,
            explain: "The review found that 60 to 75 minutes of moderate activity a day largely removed the extra risk linked to long sitting.",
            retry: {
              q: "Tom asks whether a 10-minute walk each day is enough to remove the extra risk of long sitting. What is the correct answer?",
              options: [
                "Yes, 10 minutes is enough",
                "No, the review's figure was 60 to 75 minutes a day",
                "Yes, if it is done twice",
                "The review did not study movement"
              ],
              answer: 1,
              explain: "The review's figure was 60 to 75 minutes of moderate activity a day. A 10-minute walk is a useful start, but it is not the figure the review found.",
              retry: {
                q: "A man sits for nine hours a day at work. Which plan matches the review's finding?",
                options: [
                  "Ten minutes of walking once a week",
                  "About an hour of moderate activity a day, spread through the day",
                  "Sitting for the same hours, but in a different chair",
                  "Strength training only"
                ],
                answer: 1,
                explain: "The review's figure was about 60 to 75 minutes of moderate activity a day. Spreading it through the day suits a long working day."
              }
            }
          },
          {
            q: "Which of these is an example of muscle-strengthening activity?",
            options: [
              "Brisk walking for 30 minutes",
              "Standing up and sitting down from a chair 10 times",
              "Sitting in a car for two hours",
              "Watching television with the legs up"
            ],
            answer: 1,
            explain: "Standing up from a chair works the leg muscles against your own body weight. That is resistance, so it counts as muscle strengthening.",
            retry: {
              q: "Which of these works muscles against a load?",
              options: [
                "Lifting a bag of shopping",
                "Walking to the shop",
                "Reading for an hour",
                "Sleeping"
              ],
              answer: 0,
              explain: "Lifting works the muscles against a load. That is resistance, which is the key feature of muscle strengthening.",
              retry: {
                q: "Which of these counts as muscle-strengthening activity?",
                options: [
                  "Pulling against a resistance band for 10 repetitions",
                  "Walking slowly around the garden",
                  "Driving to the shops",
                  "Sitting at a desk all morning"
                ],
                answer: 0,
                explain: "A resistance band makes the muscles work against a force. That is muscle strengthening."
              }
            }
          }
        ],
        reviewBank: [
          {
            q: "Which part of the body does the largest share of clearing sugar after a meal?",
            options: ["Bone", "Muscle", "Skin", "Hair"],
            answer: 1,
            explain: "Muscle does the largest share. This is why moving muscles after meals helps.",
            retry: {
              q: "What helps move sugar from the blood into the body's cells?",
              options: ["Insulin", "Vitamin C", "Salt", "Oxygen"],
              answer: 0,
              explain: "Insulin is the hormone that signals your cells to take in sugar from the blood."
            }
          }
        ]
      }
    },

    { id: "m2", phase: 0, core: true, tier: "core", title: "Start safely", content: null },
    { id: "m3", phase: 0, core: true, tier: "core", title: "Sitting and the 60 to 75 minute finding", content: null },
    { id: "m4", phase: 0, core: true, tier: "core", title: "What the targets ask for", content: null },
    { id: "m5", phase: 0, core: true, tier: "core", title: "Every step counts", content: null },
    { id: "m6", phase: 0, core: false, tier: "support", title: "Myths that keep people still", content: null },
    { id: "m7", phase: 1, core: true, tier: "core", title: "The heart and blood vessels", content: null },
    { id: "m8", phase: 1, core: true, tier: "core", title: "Blood sugar and insulin sensitivity", content: null },
    { id: "m9", phase: 1, core: true, tier: "core", title: "The brain: memory and mood", content: null },
    { id: "m10", phase: 1, core: true, tier: "core", title: "Bones: loading and fracture risk", content: null },
    { id: "m11", phase: 1, core: true, tier: "core", title: "Joints and pain", content: null },
    { id: "m12", phase: 1, core: false, tier: "support", title: "Disease risk beyond the heart", content: null },
    { id: "m13", phase: 1, core: false, tier: "extension", title: "Inflammation and immunity", content: null },
    { id: "m14", phase: 2, core: true, tier: "core", title: "Muscle as a health organ", content: null },
    { id: "m15", phase: 2, core: true, tier: "core", title: "Sarcopenia: losing muscle with age", content: null },
    { id: "m16", phase: 2, core: true, tier: "core", title: "Strength training: the 2-day target", content: null },
    { id: "m17", phase: 2, core: true, tier: "core", title: "Building muscle at any age", content: null },
    { id: "m18", phase: 2, core: false, tier: "support", title: "Protein and recovery", content: null },
    { id: "m19", phase: 3, core: true, tier: "core", title: "Why falls matter", content: null },
    { id: "m20", phase: 3, core: true, tier: "core", title: "Balance and multi-component training", content: null },
    { id: "m21", phase: 3, core: false, tier: "support", title: "Everyday movement skills", content: null },
    { id: "m22", phase: 4, core: true, tier: "core", title: "Fitness as a sign of survival", content: null },
    { id: "m23", phase: 4, core: true, tier: "core", title: "Aerobic training: moderate and vigorous", content: null },
    { id: "m24", phase: 4, core: false, tier: "support", title: "Short bursts and intensity", content: null },
    { id: "m25", phase: 4, core: false, tier: "support", title: "Choosing activities you can keep", content: null },
    { id: "m26", phase: 5, core: true, tier: "core", title: "Dose and consistency", content: null },
    { id: "m27", phase: 5, core: true, tier: "core", title: "Habits and if-then plans", content: null },
    { id: "m28", phase: 5, core: true, tier: "core", title: "Measuring your progress", content: null },
    { id: "m29", phase: 5, core: false, tier: "support", title: "Setbacks, injury, and illness", content: null },
    { id: "m30", phase: 6, core: false, tier: "support", title: "Life stages: 65 to 74, 75 to 84, and 85 and over", content: null },
    { id: "m31", phase: 6, core: true, tier: "core", title: "The feedback loops", content: null },
    { id: "m32", phase: 6, core: true, tier: "core", title: "The long view", content: null }
  ]
};
