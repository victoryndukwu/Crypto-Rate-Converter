let question = document.getElementById("question");
let options = Array.from(document.getElementsByClassName("option-text"));

let questions = [
  {
    question: "what is my name",
    option1: "Shady",
    option2: "Victory",
    option3: "Lion",
    option3: "Slim",
    answer: 1,
  },
];

function getQuestion() {
  question.innerText = questions[0].question;
}
getQuestion();
