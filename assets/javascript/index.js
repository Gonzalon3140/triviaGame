$(document).ready(function () {
    let timeRemaining = 10
    let timeRemainingInterval
    let correct = 0;
    let incorrect = 0;
    let questionNumber = 0;
    let questions = [{
            question: 'What is the name of the actor who played " Sam Rothstein" in the movie Casino?',
            correctAnswer: 'Robert De Niro',
            options: ['Robert De Niro', 'Woody Harrelson', 'Colin Firth', 'Keanu Reeves'],
        },
        {
            question: 'When Was Back to the Future released into the theater ?',
            correctAnswer: '1985',
            options: ['1985', '1984', '1989', '1999'],
        },
        {
            question: 'Name four popular movies from the 1980s?',
            correctAnswer: 'Goonies',
            options: ['Indiana Jones', 'Goonies', 'E.T', 'Top Gun'],
        },
        {
            question: 'How did Jack Dawson win his Ticket aboard the Titanic?',
            correctAnswer: 'A poker game',
            options: ['A car race', 'A poker game', 'wrestling match', 'a drinking contest'],
        },
        {
            question: 'What is the name of the Dark Lord in Lord of the Rings?',
            correctAnswer: 'Sauron',
            options: ['Sauruman', 'Balrog', 'Sauron', 'Feanor'],
        },
        {
            question: 'Name four Movies Leonardo De Caprio has played in?',
            correctAnswer: 'Inception',
            options: ['Blood Diamonds', 'Inception', 'Aviator', 'Whats Eating Gilbert Grape'],
        },
        {
            question: 'Name a movie that Tom Hanks was in ?',
            correctAnswer: 'Joe Vs the Volcano',
            options: ['Big', 'Joe Vs the Volcano', 'Sleepless in Seattle', 'Forrest Gump'],
        },
        {
            question: '?',
            correctAnswer: 'Robert Dinero',
            options: ['Robert Dinero', 'Woody Harrelson', 'Colin Firth', 'Keanu Reeves'],
        },
        {
            question: 'Who is the main character in the movie Casino?',
            correctAnswer: 'Robert Dinero',
            options: ['Robert Dinero', 'Woody Harrelson', 'Colin Firth', 'Keanu Reeves'],
        },
    ];


    function startGame() {

        correct = 0;
        incorrect = 0;
        questionNumber = 0;
        updateDom()

    }

    function resetInterval() {
        timeRemaining = 10;
        $("#timer").text(timeRemaining)
        if (timeRemainingInterval) {
            clearInterval(timeRemainingInterval)
        }
        timeRemainingInterval = setInterval(function () {
            if (timeRemaining < 0) {
                alert('times Up');
                questionNumber++
                incorrect++
                checkGameStatus()
                updateDom()
            }
            timeRemaining--
            $("#timer").text(timeRemaining)
        }, 1000)
    }

    function updateDom() {
        $('#question').text(questions[questionNumber].question)
        $('#option0').text(questions[questionNumber].options[0])
        $('#option1').text(questions[questionNumber].options[1])
        $('#option2').text(questions[questionNumber].options[2])
        $('#option3').text(questions[questionNumber].options[3])
        resetInterval()
    }

    function checkGameStatus() {
        if (questionNumber > questions.length - 1) {
            $("#status").text(" You Scored " + correct + 'correct')
            startGame()
            return
        } else {
            return
        }
    }

    $('.options').on('click', function () {
        console.log(this.innerText);
        console.log(questions[questionNumber].correctAnswer)
        if (questions[questionNumber].correctAnswer === this.innerText) {
            $("#status").text("correct")
            questionNumber++
            correct++
            checkGameStatus()
            updateDom()
        } else {
            alert('wrong');
            questionNumber++
            incorrect++
            checkGameStatus()
            updateDom()
        }
    })


    startGame()
});