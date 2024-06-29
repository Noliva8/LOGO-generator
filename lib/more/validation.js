const colorNameList = require('color-name-list');

// Function to validate color names

function isColorName(color) {
    return colorNameList.some(colorItem => colorItem.name.toLowerCase() === color.toLowerCase());
}

function isHexadecimalValid(hexColor) {
    const hexDigits = '0123456789ABCDEFabcdef';


    if (hexColor.charAt(0) !== '#') {
        return false; // Missing # prefix
    }


    hexColor = hexColor.slice(1);

   
    if (![3, 4, 6, 8].includes(hexColor.length)) {
        return false; // Invalid length for hexadecimal color code
    }

   
    for (let i = 0; i < hexColor.length; i++) {
        if (!hexDigits.includes(hexColor[i])) {
            return false; // Invalid character found
        }
    }


    return true;
}




module.exports = {
    isColorName,
    isHexadecimalValid
};