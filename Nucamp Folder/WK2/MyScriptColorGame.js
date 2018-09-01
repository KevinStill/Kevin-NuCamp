
var user_guess
var color_wheel = ["Red", "Blue", "Green", "Yellow", "Orange","Black","Pink"]
var correct_color
var correct_color_index
var guesses = 0


function start_game() {
    color_wheel.sort();
    correct_color_index = Math.floor(Math.random() * color_wheel.length);
    correct_color = color_wheel[correct_color_index]
    do_game()
}


function do_game() {
    user_guess = prompt("Welcome to My Color Guessing Game! Which Color Am I Thinking of?\n" + color_wheel.join(", "));

    if (user_guess === null) {
        alert("Figured this Might Be Too Hard For You , Here is Something more your Speed:)")
        window.open("https://playtictactoe.org/");
        return;
    }
    else {
        if (user_guess != correct_color) {
            //handles if it is incorrect
            if (color_wheel.indexOf(user_guess) == -1) {
                alert("sorry dont recognize");
                guesses++;
                do_game();
            }
            else if (color_wheel.indexOf(user_guess) < correct_color_index) {
                alert("sorry your guess is too low");
                guesses++;
                do_game();
            }
            else {
                alert("sorry your guess is too high");
                guesses++;
                do_game();
            }
        }




        else {
            guesses++
            document.bgColor = correct_color;
            alert("correct!" + correct_color + " was my color! \n It took you " + guesses + " Guesses!");

        }
    }
}
