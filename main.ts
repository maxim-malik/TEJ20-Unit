/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Sep 2025
 * This program shows temperature of microbit 
*/
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// When button A is pressed the microbit temperature is shown
input.onButtonPressed(Button.A, () => {
    let temp = input.temperature()
    basic.showNumber(temp)
})