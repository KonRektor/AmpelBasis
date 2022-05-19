basic.setLedColor(0xff0000)
basic.showIcon(IconNames.No)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.pause(2000)
        basic.setLedColor(0x00ff00)
        basic.showIcon(IconNames.Yes)
        basic.pause(5000)
    } else {
        basic.setLedColor(0xff0000)
        basic.showIcon(IconNames.No)
    }
})
