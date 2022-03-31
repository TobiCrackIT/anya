import { generateRandomNumber } from '../rn_generator.js';
import { expect } from 'chai';

describe('Random number generator tests', async () => {

    it('generateRandomNumber returns random x:=> 9>=x<=20', async () => {
        const randomNumber = generateRandomNumber(9, 20);

        expect(randomNumber).greaterThanOrEqual(9);
        expect(randomNumber).lessThanOrEqual(20);
    })

    it('final random number is x:=> 1>=x<=100', async () => {
        var baseRandomNumber = generateRandomNumber(9, 20);

        var decimalPart = baseRandomNumber % 1;

        var finalRandomNumber = Math.floor(decimalPart * 100) + 1;
        expect(finalRandomNumber).greaterThanOrEqual(1);
        expect(finalRandomNumber).lessThanOrEqual(100);
    })

})


