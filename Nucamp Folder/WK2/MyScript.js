
// //let user_name = prompt("Whats Your Name");
// let user_name = prompt("Whats Your Nickname");


// document.write("Welcome to My Page " + user_name + "!")

// function greet_the_User(){
// alert("Hello");
// alert("WE start soon");
// prompt("Excited");

// }

// function check_user_age(){
//     if (age_of_user() < 18)
//     alert("You Are TOO Young To Buy Alcohol!")
// }

// function age_of_user(){
//     var age_text, age;
//     age_text=prompt("What is your Age?");
//     age=parseInt(age_text);
//     return age
// }



// alert("I'd Like To Code in JavaScript all night long!");
// function myFunction() {

//     do {
//         var response, finished;
//         finished = false;
//         response = prompt("Do You Agree?");
//         If(response.indexOf("y") == 0)
//         finished = true;
//     } while (finished = false);
// }
var user_guess
var factor = 10
var correct_number
var guesses = 0

function start_game() {
    correct_number = Math.floor((Math.random() * factor) + 1);
    user_guess = prompt("Welcome to My Guessing Game! Enter A Number Between 1 and " + factor);
    do_game()
}
function do_game() {
    if (user_guess === null) {
        alert("Figured this Might Be Too Hard For You , Here is Something more your Speed:)")
        window.open("https://playtictactoe.org/")
        return;
    }
    else {
        if (isNaN(user_guess)) {
            user_guess = prompt("That is not a number, TRY AGAIN! Enter A Number Between 1 and " + factor);
            do_game();
        }
        else if (user_guess < 1 || user_guess > factor) {
            user_guess = prompt("Number Not In Range, TRY AGAIN! Enter A Number Between 1 and " + factor);
            do_game();
        }
        else if (user_guess < correct_number) {
            user_guess = prompt("Your Number is Too LOW, TRY AGAIN");
            guesses++
            do_game();
        }
        else if (user_guess > correct_number) {
            user_guess = prompt("Your Number is Too HIGH, TRY AGAIN");
            guesses++
            do_game();
        }
        else {
            alert("You Win the Number Was: " + correct_number + "! It  took you " + (guesses + 1) + " Times to Guess Correctly! Lets try again but this time I'll Make it A Little Harder!!!!")
            factor *= 5
            guesses = 0
            start_game()
        }
    }
}