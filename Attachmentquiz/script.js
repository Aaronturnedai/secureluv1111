let currentQuestion = 0;
let totalQuestions = 14;
let progressBar = document.getElementById("progress");
let scores = { secure: 0, anxious: 0, avoidant: 0, disorganized: 0 };

const questions = [
    { text: "I feel anxious when I don’t hear back from someone I’m dating.", anxious: 2, avoidant: 0, secure: 1, disorganized: 1 },
    { text: "I find it easy to express my feelings in relationships.", anxious: 1, avoidant: 0, secure: 2, disorganized: 1 },
    { text: "When my partner needs space, I worry that they’re pulling away.", anxious: 2, avoidant: 1, secure: 0, disorganized: 1 },
    { text: "I tend to overanalyze texts and conversations in my relationships.", anxious: 2, avoidant: 0, secure: 1, disorganized: 1 },
    { text: "I feel comfortable being vulnerable with someone I’m dating.", anxious: 1, avoidant: 0, secure: 2, disorganized: 1 },
    { text: "When conflicts arise, I stay calm and work toward a resolution.", anxious: 1, avoidant: 0, secure: 2, disorganized: 1 },
    { text: "My past relationships have been stable and supportive.", anxious: 0, avoidant: 1, secure: 2, disorganized: 1 },
    { text: "I often feel like I’m putting in more effort than my partner.", anxious: 2, avoidant: 0, secure: 1, disorganized: 1 },
    { text: "I’m confident about committing to a long-term relationship.", anxious: 1, avoidant: 0, secure: 2, disorganized: 1 },
    { text: "I worry a lot about my partner losing interest in me.", anxious: 2, avoidant: 0, secure: 1, disorganized: 1 },
    { text: "My relationships usually give me energy rather than drain me.", anxious: 0, avoidant: 1, secure: 2, disorganized: 1 },
    { text: "I have no trouble asking for what I need in a relationship.", anxious: 1, avoidant: 0, secure: 2, disorganized: 1 },
    { text: "Breakups or losses in relationships are very hard for me to handle.", anxious: 2, avoidant: 0, secure: 1, disorganized: 1 },
    { text: "I often feel like I’m too much or not enough in relationships.", anxious: 2, avoidant: 1, secure: 0, disorganized: 1 }
];

function loadQuestion() {
    document.getElementById("question").innerText = (currentQuestion + 1) + ". " + questions[currentQuestion].text;
    let options = ["💯 Absolutely!", "😃 Happens a lot.", "🤷🏽‍♂️ Sometimes...", "😕 Not really.", "🚫 Nope.", "❌ Never."];
    let buttons = options.map((answer, index) => `<button onclick="nextQuestion(${index})">${answer}</button>`).join("");
    document.getElementById("options").innerHTML = buttons;
}

function nextQuestion(value) {
    let current = questions[currentQuestion];
    let weight = [2, 1.5, 1, 0.5, 0, 0][value]; // Assign weights based on answer choice

    scores.secure += current.secure * weight;
    scores.anxious += current.anxious * weight;
    scores.avoidant += current.avoidant * weight;
    scores.disorganized += current.disorganized * weight;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
        updateProgress();
    } else {
        showResult();
    }
}

function updateProgress() {
    let progressPercent = ((currentQuestion + 1) / totalQuestions) * 100;
    progressBar.style.width = progressPercent + "%";
}

function showResult() {
    let resultContainer = document.getElementById("result");

    // Determine the highest-scoring attachment style
    let highest = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);

    // 🔥 Attachment style names with descriptions
    let attachmentTypes = {
        secure: "🔒 **Secure Attachment** – You value emotional safety, deep connection, and healthy relationships.",
        anxious: "❤️ **Anxious Attachment** – You love deeply but sometimes fear losing the people you care about.",
        avoidant: "🏃‍♂️ **Avoidant Attachment** – You appreciate independence but may struggle with letting people in.",
        disorganized: "⁉️ **Disorganized Attachment** – Your heart wants love, but trust and vulnerability might feel challenging."
    };

    // 🔥 Softer yet impactful psychological responses
    let responseBank = {
        secure: [
            "You navigate love well, but even secure attachments need nurturing. Keep growing.",
            "You're confident in love, but have you ever let yourself be completely vulnerable?",
            "You feel balanced, but what happens when someone challenges your emotions?",
            "You give love freely—just make sure you’re receiving it just as deeply.",
            "You're secure, but remember: even the strongest need reassurance sometimes."
        ],
        anxious: [
            "You love deeply, and that’s beautiful—just don’t forget to love yourself too.",
            "You fear being abandoned, but what if love was meant to stay?",
            "Your emotions are big, and that’s not a flaw. It’s a strength—when you learn to trust.",
            "You crave closeness, but true love doesn’t require you to chase it.",
            "You attach fast, but the right love will never make you feel like you need to prove yourself."
        ],
        avoidant: [
            "You value your space, and that’s okay. But connection isn’t a trap—it’s a choice.",
            "You’re comfortable alone, but does your heart ever crave more?",
            "You like to keep things surface-level, but what if depth could feel safe?",
            "You’re independent, but real intimacy won’t take your freedom—it will expand it.",
            "You think distance keeps you safe, but what if it’s just keeping you from something great?"
        ],
        disorganized: [
            "You’ve been through a lot, but love doesn’t always have to be chaos.",
            "You want love, but part of you fears it. It’s okay—healing is possible.",
            "You’ve felt both deep connection and deep fear. The right love will feel safe.",
            "Your emotions might be unpredictable, but your worth is not. You deserve stability.",
            "You push and pull in relationships, but what if love could just be steady?"
        ]
    };

    // Pick a random deep response from the highest-scoring category
    let deepStatement = responseBank[highest][Math.floor(Math.random() * responseBank[highest].length)];

    resultContainer.innerHTML = `
        <h2 class="glitch-text">${attachmentTypes[highest]}</h2>
        <p class="deep-text">${deepStatement}</p>
        <button class="share-btn" onclick="copyShareLink()">📢 Share Your Results</button>
    `;

    resultContainer.classList.remove("hidden");
}

function copyShareLink() {
    let shareText = "🔥 I just took the SecureLuv Attachment Quiz & my results got me thinking... Take it here: https://app.jotform.com/secureluv/SLPMA";
    navigator.clipboard.writeText(shareText);
    alert("Did you learn something new? 📢 Share with 3 Friends! Let's Make Dating Fun Again!");
}

// Start the quiz
loadQuestion();