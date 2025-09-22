/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Max
 * Created on: Sep 2025
 * This program shows temperature of microbit 
*/

input.onButtonPressed(Button.A, () => {
    let temp = input.temperature()
    basic.showNumber(temp)
})