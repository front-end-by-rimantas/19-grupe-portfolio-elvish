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
    test('given text type input is invalid for icon', () => {
        expect(isValidService({ icon: 53258 })).toEqual(false);
        expect(isValidService({ icon: true })).toEqual(false);
        expect(isValidService({ icon: false })).toEqual(false);
        expect(isValidService({ icon: [] })).toEqual(false);
        expect(isValidService({ icon: '' })).toEqual(false);
        expect(isValidService({ icon: null })).toEqual(false);
        expect(isValidService({ icon: undefined })).toEqual(false);
        
    })
    test('given text type input is normal length', () => {
        expect(isValidService({ icon: undefined })).toEqual(false);
        expect(isValidService({ icon: null })).toEqual(false);
        expect(isValidService({ icon: '' })).toEqual(false);
        expect(isValidService({ icon: 'a' })).toEqual(false);
        expect(isValidService({ icon: 'asde' })).toEqual(false);
        expect(isValidService({ icon: 'qwertyuioplkjhgfdsazasdeasdffghjklmnbvcxzqwertyuiop' })).toEqual(false);  
    })
    test('given text type input for title is invalid', () => {
        expect(isValidService({ title: [] })).toEqual(false);
        expect(isValidService({ title: {} })).toEqual(false);
        expect(isValidService({ title: true })).toEqual(false);
        expect(isValidService({ title: null })).toEqual(false);
        expect(isValidService({ title: false })).toEqual(false);
        expect(isValidService({ title: undefined })).toEqual(false);
        expect(isValidService({ title: 553555 })).toEqual(false);
    })
    test('given text type input for description is invalid', () => {
        expect(isValidService({ title: [] })).toEqual(false);
        expect(isValidService({ title: {} })).toEqual(false);
        expect(isValidService({ title: true })).toEqual(false);
        expect(isValidService({ title: false })).toEqual(false);
        expect(isValidService({ title: 52266 })).toEqual(false);
        expect(isValidService({ title: null })).toEqual(false);
        expect(isValidService({ title: undefined })).toEqual(false);
    })
})
