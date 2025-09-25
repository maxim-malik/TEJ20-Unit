/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Sep 2025
 * This program shows temperature of microbit 
*/
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, () => {
    basic.clearScreen()
    //comment
    let temp = input.temperature()
    basic.showNumber(temp)
})