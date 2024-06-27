
const { isColorName, isHexadecimalValid } = require('./validation');
const colorNameList = require('color-name-list');


describe('isColorName', () => {
    it ('should match color keyword', () => {

        const example = 'red';
        
        const result = isColorName(example); 
        expect(result).toEqual(true)

    })

})


describe('isHexadecimalValid', () => {
    it ('should start with # and contain 0123456789ABCDEFabcdef', () =>{

const example = 'ghkjty';
const result = isHexadecimalValid(example);
expect(result).toEqual(false)
    })
})