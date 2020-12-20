import { TestScheduler } from 'jest';
import { isValidService } from './isValidService.js';

describe ('Bad script', () => {
    test('catch emty data', () => {
        expect(isValidService()).toEqual(false);
    })
    test('catch inproper types', () => {
        expect(isValidService(456)).toEqual(false);
        expect(isValidService('ffdss')).toEqual(false);
        expect(isValidService(true)).toEqual(false);
        expect(isValidService(false)).toEqual(false);
        expect(isValidService([])).toEqual(false);
        expect(isValidService(null)).toEqual(false);

    })
    test('duotas teksto tipo nuotrauka', () => {
        expect(isValidService({ icon: 53258 })).toEqual(false);
        expect(isValidService({ icon: true })).toEqual(false);
        expect(isValidService({ icon: false })).toEqual(false);
        expect(isValidService({ icon: [] })).toEqual(false);
        expect(isValidService({ icon: {} })).toEqual(false);
    })
})
