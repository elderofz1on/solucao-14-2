basic.forever(function () {
    led.plotBarGraph(
    pins.analogReadPin(AnalogPin.P1),
    1024
    )
    basic.pause(100)
})
