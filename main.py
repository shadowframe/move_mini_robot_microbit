def licht_aus():
    Pixel_Array.clear()
    Pixel_Array.show()

def on_button_pressed_a():
    pins.servo_write_pin(AnalogPin.P1, 180)
    pins.servo_write_pin(AnalogPin.P2, 180)
input.on_button_pressed(Button.A, on_button_pressed_a)

def boot():
    basic.show_icon(IconNames.SMALL_SQUARE)
    basic.pause(100)
    basic.show_icon(IconNames.SQUARE)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_SQUARE)
    basic.pause(100)
    basic.show_icon(IconNames.SQUARE)
    basic.pause(100)
    basic.show_icon(IconNames.SMALL_SQUARE)
    basic.pause(100)
    basic.show_icon(IconNames.HEART)
def licht_an():
    Pixel_Array.set_pixel_color(0, neopixel.colors(NeoPixelColors.RED))
    Pixel_Array.set_pixel_color(1, neopixel.colors(NeoPixelColors.YELLOW))
    Pixel_Array.set_pixel_color(2, neopixel.colors(NeoPixelColors.GREEN))
    Pixel_Array.set_pixel_color(3, neopixel.colors(NeoPixelColors.BLUE))
    Pixel_Array.set_pixel_color(4, neopixel.colors(NeoPixelColors.PURPLE))

def on_button_pressed_ab():
    pins.servo_write_pin(AnalogPin.P1, 90)
    pins.servo_write_pin(AnalogPin.P2, 90)
input.on_button_pressed(Button.AB, on_button_pressed_ab)

def on_button_pressed_b():
    pins.servo_write_pin(AnalogPin.P1, 0)
    pins.servo_write_pin(AnalogPin.P2, 0)
input.on_button_pressed(Button.B, on_button_pressed_b)

Pixel_Array: neopixel.Strip = None
Pixel_Array = neopixel.create(DigitalPin.P0, 5, NeoPixelMode.RGB)
boot()

def on_forever():
    basic.pause(100)
    Pixel_Array.rotate(1)
    Pixel_Array.show()
basic.forever(on_forever)
