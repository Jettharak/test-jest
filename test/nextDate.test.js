/**
 * test.js
 * Jest Test Suite for nextDate.js
 * Guarantees 100% Statement Coverage (C1) and 100% Branch Coverage (C2)
 */

const nextDate = require('../src/nextDate');

describe('nextDate Function - 100% Statement & Branch Coverage Test Suite', () => {

    // ==========================================
    // Group 1: Non-Integer Validation (Line 3)
    // ==========================================
    describe('1. Non-Integer Input Validation', () => {
        test('TC1.1: Non-integer day should return "Value is not an integer"', () => {
            expect(nextDate('abc', 5, 2000)).toBe('Value is not an integer');
        });

        test('TC1.2: Non-integer month should return "Value is not an integer"', () => {
            expect(nextDate(15, 'xyz', 2000)).toBe('Value is not an integer');
        });

        test('TC1.3: Non-integer year should return "Value is not an integer"', () => {
            expect(nextDate(15, 5, '2000.5')).toBe('Value is not an integer');
        });
    });

    // ==========================================
    // Group 2: Out of Range Validation (Lines 6, 9, 12)
    // ==========================================
    describe('2. Input Out of Range Validation', () => {
        test('TC2.1: day < 1 (day = 0) should return "day is out of range"', () => {
            expect(nextDate(0, 5, 2000)).toBe('day is out of range');
        });

        test('TC2.2: day > 31 (day = 32) should return "day is out of range"', () => {
            expect(nextDate(32, 5, 2000)).toBe('day is out of range');
        });

        test('TC3.1: month < 1 (month = 0) should return "month is out of range"', () => {
            expect(nextDate(15, 0, 2000)).toBe('month is out of range');
        });

        test('TC3.2: month > 12 (month = 13) should return "month is out of range"', () => {
            expect(nextDate(15, 13, 2000)).toBe('month is out of range');
        });

        test('TC4.1: year < 1812 (year = 1811) should return "year is out of range"', () => {
            expect(nextDate(15, 5, 1811)).toBe('year is out of range');
        });

        test('TC4.2: year > 2012 (year = 2013) should return "year is out of range"', () => {
            expect(nextDate(15, 5, 2013)).toBe('year is out of range');
        });
    });

    // ==========================================
    // Group 3: 31-Day Months (Jan, Mar, May, Jul, Aug, Oct)
    // ==========================================
    describe('3. 31-Day Months Logic (month = 1, 3, 5, 7, 8, 10)', () => {
        test('TC5: Middle day (day < 31, e.g. 15 May 2000) -> increment day', () => {
            expect(nextDate(15, 5, 2000)).toBe('nextDate is 16,5,2000');
        });

        test('TC6: End day (day == 31, e.g. 31 May 2000) -> reset day to 1, month++', () => {
            expect(nextDate(31, 5, 2000)).toBe('nextDate is 1,6,2000');
        });
    });

    // ==========================================
    // Group 4: 30-Day Months (Apr, Jun, Sep, Nov)
    // ==========================================
    describe('4. 30-Day Months Logic (month = 4, 6, 9, 11)', () => {
        test('TC7: Middle day (day < 30, e.g. 15 Apr 2000) -> increment day', () => {
            expect(nextDate(15, 4, 2000)).toBe('nextDate is 16,4,2000');
        });

        test('TC8: End day (day == 30, e.g. 30 Apr 2000) -> reset day to 1, month++', () => {
            expect(nextDate(30, 4, 2000)).toBe('nextDate is 1,5,2000');
        });
    });

    // ==========================================
    // Group 5: December Logic (month = 12)
    // ==========================================
    describe('5. December Logic (month = 12)', () => {
        test('TC9: Middle day (day < 31, e.g. 15 Dec 2000) -> increment day', () => {
            expect(nextDate(15, 12, 2000)).toBe('nextDate is 16,12,2000');
        });

        test('TC10: End of year boundary (31 Dec 2012) -> return "year 2012 is over"', () => {
            expect(nextDate(31, 12, 2012)).toBe('year 2012 is over');
        });

        test('TC11: End of year normal (31 Dec 2011) -> reset to 1 Jan next year', () => {
            expect(nextDate(31, 12, 2011)).toBe('nextDate is 1,1,2012');
        });
    });

    // ==========================================
    // Group 6: February & Leap Year Logic (month = 2)
    // ==========================================
    describe('6. February & Leap Year Logic (month = 2)', () => {
        test('TC12: Day < 28 (15 Feb 2000) -> increment day', () => {
            expect(nextDate(15, 2, 2000)).toBe('nextDate is 16,2,2000');
        });

        test('TC13.1: Day = 28 in Leap Century Year (28 Feb 2000) -> 29 Feb', () => {
            expect(nextDate(28, 2, 2000)).toBe('nextDate is 29,2,2000');
        });

        test('TC13.2: Day = 28 in Regular Leap Year (28 Feb 2004) -> 29 Feb', () => {
            expect(nextDate(28, 2, 2004)).toBe('nextDate is 29,2,2004');
        });

        test('TC14.1: Day = 28 in Common Year (28 Feb 2001) -> 1 Mar', () => {
            expect(nextDate(28, 2, 2001)).toBe('nextDate is 1,3,2001');
        });

        test('TC14.2: Day = 28 in Century Non-Leap Year (28 Feb 1900) -> 1 Mar', () => {
            expect(nextDate(28, 2, 1900)).toBe('nextDate is 1,3,1900');
        });

        test('TC15: Day = 29 in Leap Year (29 Feb 2000) -> 1 Mar', () => {
            expect(nextDate(29, 2, 2000)).toBe('nextDate is 1,3,2000');
        });

        test('TC16: Day = 29 in Common Year (29 Feb 2001) -> "invalid input date"', () => {
            expect(nextDate(29, 2, 2001)).toBe('invalid input date');
        });

        test('TC17: Day = 30 in February (30 Feb 2000) -> "invalid input date"', () => {
            expect(nextDate(30, 2, 2000)).toBe('invalid input date');
        });
    });

});
