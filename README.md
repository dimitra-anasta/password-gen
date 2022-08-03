# password-gen

https://dimitra-anasta.github.io/password-gen/

![password gen](assets/Screen%20Shot%202022-08-02%20at%209.11.16%20PM.png)

## For this week's Challenge, I had to modify starter code to create an application that allows the user to generate a random password based on the characteristics they choose. My motivation was to create clean, concise code that would present the user with choices that work when chosen. For example, when the user chooses only to use symbols, the password generator will listen to the request and only generate a password of symbols. I built this project to provide the user an easier way to create a unique password, because passwords are very important and used everywhere in this day and age. It solves the problem of trying to create a password that meets specific criteria. I learned a lot about functions in this Challenge and how to use Confirm, Math.floor, and Math.random.


## Installation

The first step in this Challenge was assigning variables for the different type of password characteristics: uppercase, lowercase, numbers, and symbols. These were created using a string.

Next, I had to create the function that tells the application how many characters the user can choose. I did this with function generatePassword() and inside of that function I created a prompt asking the user: "How long do you want your password?." Because one of the acceptance criteria is to be between 8-128 characters, I needed to create an alert letting the user know that, in case they chose a password of only 5 characters. I did this with  alert("Must be at least 8 characters long, no more than 128 characters").

The next important code I had to create was how to make the application choose random characters based on what the user selects. This was the trickiest part of the assignment. So I first assigned variables that ask the user "Do you want to use symbols?" and one that asks for lowercase letters, uppercase letters, and numbers. Next, I used a for loop. In the for loop I assigned the password length and created an if statement for each characteristic. In this if statement, I used the Math.floor and Math.random funtions and multiplied them by the specific variable .length, which is what chooses the random variable.
the password = password + variable[poisitonNumber ] is what lets the funtions choose a specific position in the string of the password character variables.

On line 46, the if statement tells the application that if the user selects no for each characteristic, the application will alert the user, and display: "You must have one type of variable."

Finally, in the funtion writePassword, the password.Text.textContent = password references where in the password generator the password will be displayed. \

## Credits

https://www.w3schools.com/jsref/met_win_prompt.asp

https://www.w3schools.com/jsref/jsref_floor.asp

https://www.w3schools.com/js/js_random.asp

