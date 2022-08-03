# password-gen

![password gen](assets/Screen%20Shot%202022-08-02%20at%209.11.16%20PM.png)

## For this week's Challenge, I had to modify starter code to create an application that allows the user to generate a random password based on the characteristics they choose. My motivation was to create clean, concise code that would present the user with choices that work when chosen. For example, when the user chooses only to use symbols, the password generator will listen to the request and only generate a password of symbols. I built this project to provide the user an easier way to create a unique password, because passwords are very important and used everywhere in this day and age. It solves the problem of trying to create a password that meets specific criteria. I learned a lot about functions in this Challenge and how to use Confirm, Math.floor, and Math.random.


## Installation

The first step in this Challenge was assigning variables for the different type of password characteristics: uppercase, lowercase, numbers, and symbols. These were created using a string.

Next, I had to create the function that tells the application how many characters the user can choose. I did this with function generatePassword() and inside of that function I created a prompt asking the user: "How long do you want your password?." Because one of the acceptance criteria is to be between 8-128 characters, I needed to create an alert letting the user know that, in case they chose a password of only 5 characters. I did this with  alert("Must be at least 8 characters long, no more than 128 characters").
