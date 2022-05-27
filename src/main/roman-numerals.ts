export class RomanCalculator {
    convert(number: number) {
        const I = 'I';
        const V = 'V';
        const X = 'X';

        const getLastDigit = (digit: number) => {
            if(number < 4) {
                return I.repeat(number)
            } else if(number === 4) {
                return I + V
            } else if(number === 5) {
                return V
            } else if(number < 9) {
                return V + I.repeat(number - 5)
            } else if(number === 9) {
                return I + X
            }
        }

        if(number < 10) {
            return getLastDigit(number)
        } else if(number === 10) {
            return X
        }



        let firstPosition = number % 10
        console.log(`it is: ${firstPosition}`)
        let romanNumeral = ''

        return romanNumeral
    }
}
