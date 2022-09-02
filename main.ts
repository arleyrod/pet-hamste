input.onButtonPressed(Button.AB, function () {
    health += 2
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    sleep += 4
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # #
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # . # . .
        . # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # . # . .
        . # # # .
        # . # . .
        `)
    basic.showLeds(`
        . . # . .
        # . # . .
        . # # # .
        # . # . .
        . . # . .
        `)
})
let sleep = 0
let health = 10
health = 10
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # #
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . # .
        . # # # #
        . . . # .
        . . # . #
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # #
        . . . # .
        . . # . #
        `)
    basic.showLeds(`
        . . . . .
        . . # . .
        # # # # #
        . . # . .
        . # . # .
        `)
    if (health == 0) {
        basic.showLeds(`
            . . . . .
            . . # . .
            # . # . .
            . # # # .
            # . # . .
            `)
        basic.pause(2000)
        basic.showString("gameover")
    }
})
basic.forever(function () {
    health += -1
    health += -1
    basic.pause(2000)
})
