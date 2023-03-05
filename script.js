const quizData = [
    {
        question: "Who is the favourite cricket player of Sreeja?",
        a: "Virat Kohli",
        b: "MS.Dhoni",
        c: "Rohit Sharma",
        d: "Sachin Tendulkar",
        correct: "c",
    },
    {
        question: "What is the nickname of sreeja?",
        a: "Chinni",
        b: "Sweety",
        c: "Chinnu",
        d: "Bujji",
        correct: "c",
    },
    {
        question: "What is the favourite colour?",
        a: "Orange",
        b: "Green",
        c: "Pink",
        d: "Blue",
        correct: "b",
    },
    {
        question: "How do sreeja spends her free time ?",
        a: "texting",
        b: "music",
        c: "sleeping",
        d: "none of the above",
        correct: "d",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
