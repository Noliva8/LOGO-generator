const colorNameList = require('color-name-list');

// Function to validate color names
function isColorName(color) {
    return colorNameList.some(colorItem => colorItem.name.toLowerCase() === color.toLowerCase());
}

// Function to validate hexadecimal color codes
const hexDigits = '0123456789ABCDEFabcdef';

function isHexadecimalValid(hexColor) {
    // Check if the color starts with a hash (#)
    if (hexColor.charAt(0) !== '#') {
        return false; // Missing # prefix
    }

    // Remove the hash character
    hexColor = hexColor.slice(1);

    // Check if the length is either 3 or 6
    if (hexColor.length !== 3 && hexColor.length !== 6) {
        return false; // Invalid length for hexadecimal color code
    }

    // Check if all characters are valid hexadecimal digits
    for (let i = 0; i < hexColor.length; i++) {
        if (!hexDigits.includes(hexColor[i])) {
            return false; // Invalid character found
        }
    }

    // If all checks pass, return true
    return true;
}




module.exports = {
    isColorName,
    isHexadecimalValid
};