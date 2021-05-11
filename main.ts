let Fuktigheten = 0
OLED.init(128, 64)
tinkercademy.LED(DigitalPin.P13, OnOff.Off)
tinkercademy.LED(DigitalPin.P14, OnOff.Off)
tinkercademy.LED(DigitalPin.P15, OnOff.Off)
basic.forever(function () {
    Fuktigheten = tinkercademy.MoistureSensor(AnalogPin.P1)
    OLED.writeNumNewLine(Fuktigheten)
    if (Fuktigheten > 70) {
        tinkercademy.LED(DigitalPin.P13, OnOff.Off)
        tinkercademy.LED(DigitalPin.P14, OnOff.On)
        tinkercademy.LED(DigitalPin.P15, OnOff.Off)
        basic.showIcon(IconNames.Happy)
        pins.digitalWritePin(DigitalPin.P4, 0)
        basic.pause(1000)
    } else if (Fuktigheten > 50) {
        tinkercademy.LED(DigitalPin.P13, OnOff.On)
        tinkercademy.LED(DigitalPin.P14, OnOff.Off)
        tinkercademy.LED(DigitalPin.P15, OnOff.Off)
        basic.showIcon(IconNames.Asleep)
        pins.digitalWritePin(DigitalPin.P4, 0)
        basic.pause(1000)
    } else if (Fuktigheten < 50) {
        tinkercademy.LED(DigitalPin.P13, OnOff.Off)
        tinkercademy.LED(DigitalPin.P14, OnOff.Off)
        tinkercademy.LED(DigitalPin.P15, OnOff.On)
        basic.showIcon(IconNames.Sad)
        music.startMelody(music.builtInMelody(Melodies.Dadadadum), MelodyOptions.Once)
        pins.digitalWritePin(DigitalPin.P4, 1)
        basic.pause(2000)
    }
})
