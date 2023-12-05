function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") {
        return "paper";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else if (input== "how are you") {
        return "i'm fine ! thanks for asking.how may i help you";
    } else if (input== "do you conduct industrial visit") {
        return "yes wo do conduct during 4th semester" ;
    } else {
        return "Try asking something else!";
    }
}