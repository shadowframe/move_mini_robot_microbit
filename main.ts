function licht_aus () {
    Pixel_Array.clear()
    Pixel_Array.show()
}
input.onButtonPressed(Button.A, function () {
    Pixel_Array.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    Pixel_Array.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Pixel_Array.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    Pixel_Array.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
    pins.servoWritePin(AnalogPin.P1, 0)
    pins.servoWritePin(AnalogPin.P2, 180)
})
function boot () {
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showIcon(IconNames.Square)
    basic.pause(100)
    basic.showIcon(IconNames.SmallSquare)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
}
function licht_an () {
    Pixel_Array.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    Pixel_Array.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Pixel_Array.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    Pixel_Array.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
}
input.onButtonPressed(Button.AB, function () {
    pins.servoWritePin(AnalogPin.P1, 90)
    pins.servoWritePin(AnalogPin.P2, 90)
})
input.onButtonPressed(Button.B, function () {
    pins.servoWritePin(AnalogPin.P1, 180)
    pins.servoWritePin(AnalogPin.P2, 0)
})
function blinken () {
    Pixel_Array.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
    Pixel_Array.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
    Pixel_Array.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
    Pixel_Array.setPixelColor(3, neopixel.colors(NeoPixelColors.Blue))
    Pixel_Array.setPixelColor(4, neopixel.colors(NeoPixelColors.Purple))
}
let Pixel_Array: neopixel.Strip = null
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
boot()
blinken()
basic.forever(function () {
    basic.pause(100)
    Pixel_Array.rotate(1)
    Pixel_Array.show()
})
