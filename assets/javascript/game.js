// create array of bands
var bands = ["radiohead", "muse", "the verve", "primal scream", "catherine wheel", "swervedriver", "pixies", "the killers"];
// incorrect guesses
var incorrectGuesses = 6;
// randomly select band
var bandChoice = [bands[Math.floor(Math.random() * bands.length)]];
// display guessed letters
var correctGuess = [];
// empty array for band
var displayBand = [];
// display # of characters for bandname
function buildAnswer() {
    for (var i = 0; i < bandChoice.length; i++);
    if (bandChoice[i] === ' '){
        displayBand.push(" ");
    }else{
        displayBand.push("_")
    };
}