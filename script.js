const questions = [
    {
        question: "What is the capital of Bangladesh..?",
        answers: [
            
            {text:"Bogura", correct: false},
            {text:"Khulna", correct: false},
            {text:"Dhaka", correct: true},
            {text:"None of these", correct: false},                
        ]
    },
    {
        question: " How many total Districts are there in Bangladesh..?",
        answers: [
            
            {text:"60", correct: false},
            {text:"64", correct: true},
            {text:"68", correct: false},
            {text:"66", correct: false},                
        ]
    },
    {
        question: "What is the country calling code for Bangladesh..?",
        answers: [
            
            {text:"+880", correct: true},
            {text:"+97", correct: false},
            {text:"+230", correct: false},
            {text:"+49", correct: false},                
        ]
    },
    {
        question: "Who is the first president of Bangladesh..?",
        answers: [
            
            {text:" Abdus sattar", correct: false},
            {text:" Ziaur Rahman", correct: false},
            {text:"Sheikh Mujibur Rahman", correct: true},
            {text:" None of these", correct: false},                
        ]
    },
    {
        question: "Who is the first female pilot of Bangladesh..?",
        answers: [
            
            {text:" Nayma Haque", correct: true},
            {text:" Kaniz fatema Roksana", correct: false},
            {text:"Nasim begum", correct: false},
            {text:" None of these", correct: false},                
        ]
    },
    {
        question: " What is the population in Bangladesh..?",
        answers: [
            
            {text:"160 million", correct: false},
            {text:"150 million", correct: false},
            {text:"110 million", correct: false},
            {text:"130 million", correct: true},                
        ]
    },
    {
        question: "What is the currency of Bangladesh..?",
        answers: [
            
            {text:"Bangladeshi Rupee", correct: false},
            {text:"Bangladeshi Taka", correct: true},
            {text:"US Dollar", correct: false},
            {text:"Euro", correct: false},                
        ]
    },
    {
        question: "What is the name of the famous Bangladesh river that is one of the largest in the world..?",
        answers: [
            
            {text:"Brahmaputra River", correct: false},
            {text:" Ganges River", correct: false},
            {text:"Meghna River", correct: false},
            {text:"Padma River", correct: true},                
        ]
    },
    {
        question: "What is the name of the famous Bangladesh mosque that is the largest in the country and is a UNESCO World Heritage Site..?",
        answers: [
            
            {text:"Baitul Mukarram Mosque", correct: true},
            {text:"Star Mosque", correct: false},
            {text:"Sixty Dome Mosque", correct: false},
            {text:"Hussaini Dalan Mosque", correct: false},                
        ]
    },
    {
        question: "What is the name of the famous Bangladesh poet and Nobel laureate who wrote Gitanjali..?",
        answers: [
            
            {text:"Kazi Nazrul Islam", correct: false},
            {text:"Rabindranath Tagore", correct: true},
            {text:" Jasimuddin", correct: false},
            {text:"Jibanananda Das", correct: false},                
        ]
    },
    {
        question: "What is the name of the Bangladesh national holiday that celebrates the country's independence from Pakistan..?",
        answers: [
            
            {text:"Victory Day", correct: false},
            {text:"National Day", correct: false},
            {text:"Independence Day", correct: true},
            {text:"Republic Day", correct: false},                
        ]
    },
    {
        question: "Official language of Bangladesh is..?",
        answers: [
            
            {text:"Urdu", correct: false},
            {text:"Arabic", correct: false},
            {text:"Hindi", correct: false},
            {text:"Bengali", correct: true},                
        ]
    },
    {
        question: "National game of Bangladesh is..?",
        answers: [
            
            {text:" Kabadi", correct: true},
            {text:"Cricket", correct: false},
            {text:"Hockey", correct: false},
            {text:"Football", correct: false},                
        ]
    },
    {
        question: " When Bangladesh got independence..?",
        answers: [
            
            {text:"1966", correct: false},
            {text:"1971", correct: true},
            {text:"1970", correct: false},
            {text:"1952", correct: false},                
        ]
    },
    {
        question: "Who is the current prime minister of Bangladesh..?",
        answers: [
            
            {text:"Khaleda zia", correct: false},
            {text:"Sajeeb Wazed", correct: false},
            {text:"Shaikeh Hasina", correct: true},
            {text:"None of these", correct: false},                
        ]
    },
    {
        question: "Kazi Nazrul Islam is Associated with..?",
        answers: [
            
            {text:"Poetry", correct: true},
            {text:"Politics", correct: false},
            {text:"Hockey", correct: false},
            {text:"Cricket", correct: false},                
        ]
    },
    {
        question: "How many Bangladeshies live in rural areas..?",
        answers: [
            
            {text:"3/4", correct: true},
            {text:"1/2", correct: false},
            {text:"1/4", correct: false},
            {text:"All", correct: false},                
        ]
    },
    {
        question: "What is Bangladesh prone to..?",
        answers: [
            
            {text:"Tsunami", correct: false},
            {text:"Landslides and Earthquakes", correct: false},
            {text:"Flooding and Cyclones", correct: true},
            {text:"Storms", correct: false},                
        ]
    },
    {
        question: " How much money do the Bangladeshies survive on per day..?",
        answers: [
            
            {text:"$100", correct: false},
            {text:"Less then $1", correct: true},
            {text:"$1.50", correct: false},
            {text:" $2.00", correct: false},                
        ]
    },
    {
        question: " How many children are being vaccinated annually..?",
        answers: [
            
            {text:"100 million", correct: false},
            {text:"10 million", correct: false},
            {text:"5 billion", correct: false},
            {text:"4 million", correct: true},                
        ]
    }, 
   

];


const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
        currentQuestionIndex = 0;
        score = 0;
        nextButton.innerHTML = "NEXT";
        showQuestion();

}

function showQuestion(){
    resetstate();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {

        const button = document.createElement("button");
        button.innerHTML= answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);

    });

}

function resetstate(){

    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}


function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{selectedBtn.classList.add("incorrect");
}
Array.from(answerButton.children).forEach(button => {
    if(button.dataset.correct === "true"){
        button.classList.add("correct");
    }
    button.disabled = true;

});
nextButton.style.display = "block";

}

function showScore(){
    resetstate();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Try Again";
    nextButton.style.display = "block";
}



function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}



nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }
    else{
        startQuiz();
    }
})

startQuiz();