let question = prompt("Hello, do you like my web page?")

if (question == "yes") {
    alert("You have good taste! 😉")
} else {
    alert(`What do you mean ${question} 🥺, I guess you can't please everyone 😎`)
}

let title = document.getElementById('title')

let secondQuestion = prompt("What color would you like my title to be? enter color name")

title.style.color = secondQuestion

const changeColor = () => {
    secondQuestion = prompt("What color would you like my title to be? enter color name")

    title.style.color = secondQuestion
}

