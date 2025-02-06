// Name: Cody Snow
// Date: Jan. 23rd
// Course: Fullstack Javascript

// Function to generate a password with optional special characters
function generatePassword(length, includeSpecialChars) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const specialChars = "!@#$%^&*()_+[]{}|;:,.<>?/~";
    const availableChars = includeSpecialChars ? charset + specialChars : charset;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * availableChars.length);
        password += availableChars[randomIndex];
    }

    return password;
}

// Function to process the command-line arguments
function processArgs() {
    const args = process.argv.slice(2);  // Get command-line arguments

    // Display help message when --help flag is present
    if (args.includes('--help')) {
        console.log(`
    Usage: node passwordGenerator.js [--length <number>] [--specialChars]
      
      --length <number>    Allows user to specify length (default is 8).
      --specialChars       Allows user to include special characters in the password.
      --help               Display this help message for user.
    `);
        process.exit(0);
    }

    let length = 8;  // Default length
    let includeSpecialChars = false;  // Default to no special characters

    // Parse arguments
    args.forEach((arg, index) => {
        if (arg === '--length' && args[index + 1]) {
            length = parseInt(args[index + 1]);
        }
        if (arg === '--specialChars') {
            includeSpecialChars = true;
        }
    });

    // Gives a valid length between
    if (isNaN(length) || length < 6 || length > 20) {
        console.error('Invalid length. Please enter a number between 6 and 20.');
        process.exit(1);
    }

    // Generate and display the password
    const password = generatePassword(length, includeSpecialChars);
    console.log(`Generated Password: ${password}`);
}


processArgs();

// Wanted to put this here, i tried pushing to github and got this error message, but was unsure how to fix it

// codyscomputer@Codys-Air password-generator % git push -u origin main
// To https://github.com/Cody3232/password-generator.git
// ! [rejected]        main -> main (fetch first)
// error: failed to push some refs to 'https://github.com/Cody3232/password-generator.git'
// hint: Updates were rejected because the remote contains work that you do
// hint: not have locally. This is usually caused by another repository pushing
// hint: to the same ref. You may want to first integrate the remote changes
// hint: (e.g., 'git pull ...') before pushing again.
// hint: See the 'Note about fast-forwards' in 'git push --help' for details.
// codyscomputer@Codys-Air password-generator % 