function oneDigit(digit) {
    if (digit == 1) {
        return 'one'
    }
    if (digit == 2) {
        return 'two'
    }
    if (digit == 3) {
        return 'three'
    }
    if (digit == 4) {
        return 'four'
    }
    if (digit == 5) {
        return 'five'
    }
    if (digit == 6) {
        return 'six'
    }
    if (digit == 7) {
        return 'seven'
    }
    if (digit == 8) {
        return 'eight'
    }
    if (digit == 9) {
        return 'nine'
    }
}

function fromTenToNineteen(number) {
    if (number == 10) {
        return 'ten'
    }
    if (number == 11) {
        return 'eleven';
    }
    if (number == 12) {
        return 'twelve';
    }
    if (number == 13) {
        return 'thirteen';
    }
    if (number == 14) {
        return 'fourteen';
    }
    if (number == 15) {
        return 'fifteen';
    }
    if (number == 16) {
        return 'sixteen';
    }
    if (number == 17) {
        return 'seventeen';
    }
    if (number == 18) {
        return 'eighteen';
    }
    if (number == 19) {
        return 'nineteen';
    }
}

function secondDigit(digit) {
    if (digit == 2) {
        return 'twenty'
    }
    if (digit == 3) {
        return 'thirty'
    }
    if (digit == 4) {
        return 'forty'
    }
    if (digit == 5) {
        return 'fifty'
    }
    if (digit == 6) {
        return 'sixty'
    }
    if (digit == 7) {
        return 'seventy'
    }
    if (digit == 8) {
        return 'eighty'
    }
    if (digit == 9) {
        return 'ninety'
    }
}

function hundred(digit) {
    if (digit == 1) {
        return 'one hundred'
    }
    if (digit == 2) {
        return 'two hundred'
    }
    if (digit == 3) {
        return 'three hundred'
    }
    if (digit == 4) {
        return 'four hundred'
    }
    if (digit == 5) {
        return 'five hundred'
    }
    if (digit == 6) {
        return 'six hundred'
    }
    if (digit == 7) {
        return 'seven hundred'
    }
    if (digit == 8) {
        return 'eight hundred'
    }
    if (digit == 9) {
        return 'nine hundred'
    }
}


module.exports = function toReadable (number) {
    let numberStr = number.toString()

    if (numberStr.length == 1) {         // 0 - 9
        if (number === 0) {                      // 0
            return 'zero'           
            }
        return oneDigit(number)                  // 1 - 9
    } 
    

    else if (numberStr.length == 2) {                       // 10 - 99
        if (number >= 10 && number <= 19) {                     // 10 - 19
            return fromTenToNineteen(number)
        } else {                                                // 20, 30, ...
            if (number == 20 || number == 30 || number == 40 || number == 50 || number == 60 || number == 70 || number == 80 || number == 90) {
                return secondDigit(Number(numberStr.slice(0, 1)))
            } else {                                            // 21 - 99
            return `${secondDigit(Number(numberStr.slice(0, 1)))} ${oneDigit(Number(numberStr.slice(-1)))}`
            }
        }
    } 
    
    
    else if (numberStr.length = 3) {                        // 100 - 999
        if (Number(numberStr.slice(1) === '00')) {              // 100, 200, ...
            return hundred((Number(numberStr.slice(0, 1))));
        }   else if (Number(numberStr.slice(1, 2)) == 0 && Number(numberStr.slice(-1)) >= 1 && Number(numberStr.slice(-1)) <= 9) {            // 101 - 109, ...
            return `${hundred((Number(numberStr.slice(0, 1))))} ${oneDigit(Number(numberStr.slice(-1)))}`
        } else if ((Number(numberStr.slice(1)) >= 10 && (Number(numberStr.slice(1) <= 19)))) {                                              // 110 -119, ...
            return `${hundred((Number(numberStr.slice(0, 1))))} ${fromTenToNineteen(Number(numberStr.slice(1)))}`
        }else if (numberStr.slice(-1) === '0') {                                                                                        // 120, 130, 140, ...
            return `${hundred(Number(numberStr.slice(0, 1)))} ${secondDigit(Number(numberStr.slice(1, 2)))}`
        } else {                                                                                                                    //121 - 199, ...
            return `${hundred(Number(numberStr.slice(0, 1)))} ${secondDigit(Number(numberStr.slice(1, 2)))} ${oneDigit(Number(numberStr.slice(-1)))}`
        }
    }
}
