input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        pause2 = pause2 - 50
        game.addScore(1)
        music._playDefaultBackground(music.builtInPlayableMelody(Melodies.PowerUp), music.PlaybackMode.InBackground)
        if (pause2 == 50) {
            basic.pause(200)
            game.pause()
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.JumpUp), music.PlaybackMode.InBackground)
            music._playDefaultBackground(music.builtInPlayableMelody(Melodies.BaDing), music.PlaybackMode.UntilDone)
            game.gameOver()
        }
    } else {
        music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.InBackground)
        game.gameOver()
    }
})
let pause2 = 0
let sprite: game.LedSprite = null
sprite = game.createSprite(0, 2)
pause2 = 500
basic.forever(function () {
    basic.pause(pause2)
    sprite.move(1)
    basic.pause(pause2)
    sprite.ifOnEdgeBounce()
})
