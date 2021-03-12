let DiceRollValue = 0
input.onGesture(Gesture.Shake, function () {
    DiceRollValue = randint(1, 6)
    basic.showNumber(DiceRollValue)
    if (DiceRollValue == 5) {
        music.playMelody("E B C5 A B G A F ", 120)
    } else {
        music.playMelody("F F F D - - - - ", 120)
    }
})
