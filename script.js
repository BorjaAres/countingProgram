let numUser = prompt('Enter a number');

if (numUser < 0) {
    // If the user enters a negative number, print an error message
    console.log('ERROR: Please enter a positive number');
} else if (numUser == 0) {
    // If the user enters 0, print an error message
    console.log('ERROR: Please enter a number greater than 0');
} else if (isNaN(numUser)) {
    // If the user enters a non-number, print an error message
    console.log('ERROR: Please enter a number');
}
// Define the count function
function count() {
    // Loop from 0 to the user-entered number and print each number
    for (let i = 0; i <= numUser; i++) {
        console.log(i);
    }
}
// Call the count function
count();

