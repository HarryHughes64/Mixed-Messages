function randomNumberGenerator(num) { //Generates random number - taking in 'num' is an argument
    return Math.floor(Math.random() * num);
}

console.log(randomNumberGenerator(10)); //test that Random Number Generator works

const wisdomMessages = {
    futureDate: ['Tommorrow', 'This week', 'Next week', 'This month', 'Next month', 'This year', 'Next year'],
    connector: 'You will',
    yourFuture: ['become very rich', 'find a new love', 'discover a great friend', 'have unfathomable luck', 'be impressed by what you have become', 'learn a new skill', 'filter out great friends from the bad', 'have a fresh start', 'find the beauty in everything']
}

console.log(wisdomMessages.futureDate[2]); // Test that all of the arrays work as intended.
