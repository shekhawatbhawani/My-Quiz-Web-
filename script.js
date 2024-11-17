const questionsArray = [
    {
        question: "What is the capital of France?",
        option1: "Berlin",
        option2: "Madrid",
        option3: "Paris",
        option4: "Rome",
        answer: "Paris", // Correct answer
    },
    {
        question: "Which planet is known as the Red Planet?",
        option1: "Earth",
        option2: "Mars",
        option3: "Jupiter",
        option4: "Saturn",
        answer: "Mars", // Correct answer
    },
    {
        question: "What is the largest ocean on Earth?",
        option1: "Atlantic Ocean",
        option2: "Indian Ocean",
        option3: "Arctic Ocean",
        option4: "Pacific Ocean",
        answer: "Pacific Ocean", // Correct answer
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        option1: "William Shakespeare",
        option2: "Mark Twain",
        option3: "Charles Dickens",
        option4: "Leo Tolstoy",
        answer: "William Shakespeare", // Correct answer
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        option1: "Oxygen",
        option2: "Osmium",
        option3: "Gold",
        option4: "Oganesson",
        answer: "Oxygen", // Correct answer
    },
    {
        question: "How many continents are there on Earth?",
        option1: "5",
        option2: "6",
        option3: "7",
        option4: "8",
        answer: "7", // Correct answer
    },
    {
        question: "What is the smallest prime number?",
        option1: "1",
        option2: "2",
        option3: "3",
        option4: "5",
        answer: "2", // Correct answer
    },
    {
        question: "Which animal is known as the king of the jungle?",
        option1: "Tiger",
        option2: "Elephant",
        option3: "Lion",
        option4: "Leopard",
        answer: "Lion", // Correct answer
    },
    {
        question: "What is the freezing point of water?",
        option1: "0°C",
        option2: "32°C",
        option3: "100°C",
        option4: "212°C",
        answer: "0°C", // Correct answer
    },
    {
        question: "Which is the largest desert in the world?",
        option1: "Sahara",
        option2: "Arctic",
        option3: "Gobi",
        option4: "Kalahari",
        answer: "Arctic", // Correct answer
    },
];

const nextButton = document.querySelector("button");
const allLabel = document.querySelectorAll("label");
const allInput = document.querySelectorAll("input");
const mainContainer = document.querySelector(".container");

let index = 0;
let correctAns = 0;
let numberOfQuestions = questionsArray.length;

let loadQuestions = (index) => {
    const question = questionsArray[index];
    let data = Object.values(question);
    for (let i = 0; i < allLabel.length; i++) {
        allLabel[i].textContent = data[i];
    }
};
nextButton.addEventListener("click", () => {
    if (index < numberOfQuestions) {
        let ans = Array.from(allInput).find((element) => element.checked == true);
        let optionChosen = ans.id.slice(2);
        let question = questionsArray[index];
        let answer = Object.values(question)[5];
        let options = Object.values(question);
        let finalAns = options.indexOf(answer);
        // console.log(finalAns, optionChosen);
        if (finalAns == optionChosen) {
            correctAns++;
        }
    }
    if (index < numberOfQuestions) {
        index++;
        loadQuestions(index);
    } else {
        let result = correctAns >= 3 ? "Pass" : "Fail";
        mainContainer.innerHTML = `<div class="final">
        <h2>Completed Quiz</h2>
        <P id="p1">Number of Correct Answer ${correctAns}</P>
        <P id ="p2">Number of Wrong Answer ${numberOfQuestions - correctAns}</P>
        <P id ="p3">You Are ${result}</P>
    </div>`;
    }
    allInput.forEach((element) => {
        element.checked = false;
    });
});
loadQuestions(index);
