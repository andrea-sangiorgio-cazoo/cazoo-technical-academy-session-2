import {RomanCalculator} from "../main/roman-numerals";

describe('Roman Numberal calculator', () => {
    it.each([
        { input: 1, expected: 'I'},
        { input: 2, expected: 'II'},
        { input: 3, expected: 'III'},
        { input: 4, expected: 'IV'},
        { input: 5, expected: 'V'},
        { input: 6, expected: 'VI'},
        { input: 7, expected: 'VII'},
        { input: 8, expected: 'VIII'},
        { input: 9, expected: 'IX'},
        { input: 10, expected: 'X'},
        { input: 11, expected: 'XI'},
    ])
    ("should return the roman numeral representation of the given input number", ({ input, expected }) => {
        let romanCalculator : RomanCalculator = new RomanCalculator();
        expect(romanCalculator.convert(input)).toBe(expected);
    })
})
