# Counting Program

This program allows the user to enter a number and counts from 0 up to that number. It utilizes JavaScript and provides error handling for invalid input.

## Instructions

1. When prompted, enter a positive number.
2. The program will count from 0 up to the entered number and display each number in the console.

## Error Handling

The program includes error handling for the following scenarios:

- If the user enters a negative number, an error message will be displayed: "ERROR: Please enter a positive number."
- If the user enters 0, an error message will be displayed: "ERROR: Please enter a number greater than 0."
- If the user enters a non-number (e.g., letters, symbols), an error message will be displayed: "ERROR: Please enter a number."

Make sure to provide valid input to ensure the program runs as intended.

## Code Explanation

The program consists of the following components:

1. **User Input**: The user is prompted to enter a number using the `prompt` function. The entered value is stored in the `numUser` variable.
2. **Error Handling**: The program checks if the entered value is negative, 0, or a non-number using conditional statements (`if` and `else if`). Corresponding error messages are displayed using the `console.log` function.
3. **Count Function**: The `count` function is defined to perform the counting operation. It uses a `for` loop to iterate from 0 up to the entered number (`numUser`). Each number is displayed in the console using `console.log`.
4. **Counting Operation**: The `count` function is called to initiate the counting process.

Feel free to explore and modify the code as needed to suit your requirements. Enjoy counting!

## Deploy

https://countingprogram.netlify.app/
