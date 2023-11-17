let answer1 = document.getElementById("answerOne");
let answer2 = document.getElementById("answerTwo");
let answer3 = document.getElementById("answerThree");
let answer4 = document.getElementById("answerFour");
let question = document.getElementById("question");
let checkAnswerBtn = document.getElementById("scores");
let answer = "";
let beginBtn = document.getElementById("begin");
let submitbtn = document.getElementById("submit");
let i = 0;
let begin = false;
let correctAnswers = 0;
let answerRecord = [];


checkAnswerBtn.style.display = "none";
submitbtn.style.display = "none";

if (begin == false) {
    beginBtn.addEventListener("click", function() {
        submitbtn.style.display = "block";
        beginBtn.style.display = "none";
        questionDisplay();
        answerDisplay();
        begin = true;
    })
}




answer1.addEventListener("click", function() {
    answer = answer1;
    answer.className = "selectedAnswer";
    answer2.className = "answer";
    answer3.className = "answer";
    answer4.className = "answer";
})

answer2.addEventListener("click", function() {
    answer = answer2;
    answer.className = "selectedAnswer";
    answer1.className = "answer";
    answer3.className = "answer";
    answer4.className = "answer";
})


answer3.addEventListener("click", function() {
    answer = answer3;
    answer.className = "selectedAnswer";
    answer1.className = "answer";
    answer2.className = "answer";
    answer4.className = "answer";
})


answer4.addEventListener("click", function() {
    answer = answer4;
    answer.className = "selectedAnswer";
    answer2.className = "answer";
    answer3.className = "answer";
    answer1.className = "answer";
})

submitbtn.addEventListener("click", function() {
    answer1.className = "answer";
    answer2.className = "answer";
    answer3.className = "answer";
    answer4.className = "answer";
    answerRecord.push(answer.innerHTML)
    if (factCheck(answer)) {
        correctAnswers += 1;
    }
    i += 1;
    if (i >= qarray.length) {
        answer1.className = "hidden";
        answer2.className = "hidden";
        answer3.className = "hidden";
        answer4.className = "hidden";
        question.className = "hidden";
        submitbtn.className = "hidden";
        checkAnswerBtn.style.display = "block";
        window.alert("You answerd " + i + " questions and " + correctAnswers + " are correct!");
    }
    answer = null;
    questionDisplay();
    answerDisplay();
})

const qarray = [{
        q: "What is your name?",
        a: [{ text: "1.Dinindu", isCorrect: true },
            { text: "2.Nisdi", isCorrect: false },
            { text: "3.Tashiya", isCorrect: false },
            { text: "4.Risdi", isCorrect: false }
        ]
    },
    {
        q: "What is your age?",
        a: [{ text: "1. 89", isCorrect: false },
            { text: "2. 20", isCorrect: false },
            { text: "3. 25", isCorrect: false },
            { text: "4. 19 ", isCorrect: true }
        ]
    },
    {
        q: "What is your village?",
        a: [{ text: "1.Colombo", isCorrect: false },
            { text: "2.Kandy", isCorrect: true },
            { text: "3.Rathnapura", isCorrect: false },
            { text: "4.Katugasthota", isCorrect: false }
        ]
    }

]


function factCheck(answer) {
    answer = answer.innerHTML;
    let answerTest = 0;
    for (answerTest; answerTest < 4; answerTest++) {
        let selectedAnswer = qarray[i].a[answerTest].isCorrect;
        if (selectedAnswer) {
            trueAnswer = qarray[i].a[answerTest].text;
            if (trueAnswer == answer) {
                return true;
            } else {
                return false;
            }
        }
    }
}


function questionDisplay() {
    question.innerHTML = qarray[i].q;;
}


function answerDisplay() {
    answer1.innerHTML = qarray[i].a[0].text;
    answer2.innerHTML = qarray[i].a[1].text;
    answer3.innerHTML = qarray[i].a[2].text;
    answer4.innerHTML = qarray[i].a[3].text;
}


checkAnswerBtn.addEventListener("click", function() {
    displayTable();
})

function displayTable() {
    //create table
    var table = document.createElement("table");
    table.border = "1"

    //create Headers Row
    var headerRow = document.createElement("tr");

    //Create Headers Cells
    var questionHeaderCell = document.createElement("th");
    questionHeaderCell.width = "50%"
    var selectedAnswerCell = document.createElement("th");
    var correctAnswerCell = document.createElement("th");

    //Set Names To Head
    questionHeaderCell.textContent = "Question";
    selectedAnswerCell.textContent = "Selected Answer";
    correctAnswerCell.textContent = "Correct Answer";

    //Append Headers To Header Row
    headerRow.appendChild(questionHeaderCell);
    headerRow.appendChild(selectedAnswerCell);
    headerRow.appendChild(correctAnswerCell);

    //Append Headers to Table Row
    table.appendChild(headerRow);

    var dataRows = [];
    for (var x = 0; x < qarray.length; x++) {
        //Create data row variable
        var dataRow = document.createElement("tr");

        //Create table data cells
        var questionCell = document.createElement("td");
        var answerCell = document.createElement("td");
        var trueAnswerCell = document.createElement("td");



        //Set the text of question cell
        questionCell.textContent = qarray[x].q


        //Get element by recorded answer
        answerCell.textContent = answerRecord[x]
        for (var y = 0; y < 4; y++) {
            let SCanswer = qarray[x].a[y].isCorrect;
            if (SCanswer) {
                trueAnswerCell.textContent = qarray[x].a[y].text;
                break;
            }
        }

        //append table data cells to table datarow
        dataRow.appendChild(questionCell);
        dataRow.appendChild(answerCell);
        dataRow.appendChild(trueAnswerCell);

        //append table data row to the table data rows array
        dataRows.push(dataRow);
    }

    //append the table data rows to table data rows array
    for (var z = 0; z < dataRows.length; z++) {
        table.appendChild(dataRows[z]);
    }

    //append this to body
    document.body.appendChild(table);

    var tableContainer = document.createElement("div");
    tableContainer.classList.add("table-container");

    // Append the table to the container
    tableContainer.appendChild(table);

    // Append the container to the .maindiv
    document.querySelector(".maindiv").appendChild(tableContainer);

    // Add a class to the table for styling
    table.classList.add("result-table");
}