import { TestScheduler } from 'jest';
import { isValidInput } from './isValidInput.js';

describe('incorrect options', () => {
    test('there are no input in both parameters', () => {
        expect(isValidInput()).toEqual(false);
    })

    test('there are no input for second parameter', () => {
        expect(isValidInput('body')).toEqual(false);
    })
})

describe('checking the format of the second parameter (composition)', () => {
    test('must have data parameter (object key)', () => {
        expect(isValidInput('body', { data:true})).toEqual(false);
        expect(isValidInput('body', { data: null })).toEqual(false);
        expect(isValidInput('body', { data: {} })).toEqual(false);
        expect(isValidInput('body', { data: true })).toEqual(false);
        expect(isValidInput('body', { data: 53256 })).toEqual(false);
        expect(isValidInput('body', { data: 'abcde' })).toEqual(false);
        expect(isValidInput('body', { data: [] })).toEqual(true);
    })
})