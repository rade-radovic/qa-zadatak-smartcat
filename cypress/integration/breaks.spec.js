import breaks from '../modules/breaksModule'
import createShiftData from '../fixtures/testData/cretaeShiftData.json'

describe('breaks', () => {

    it('Find and log total break time', () => {
        breaks.logTotalBreakTime() 
    })

    it('Assert that break finish time is later than the start time', () => {
        createShiftData.shiftsAndUsersIds.forEach(shift => {
            breaks.shiftFinishTimeIsLaterThanStart(shift.shiftIds, shift.userIds)
        })
    })

    it('Find and log average break length', () => {
        breaks.logAverageBreakLength()
    })

    it('Log number of paid and unpaid breaks', () => {
        breaks.logNumberOfPaidAndUnpaidBreaks()
    })

    it('Assert that break length parameter value is equal to the difference between break start and finish', () => {
        createShiftData.shiftsAndUsersIds.forEach(shift => {
            breaks.isBreakLengthCorrect(shift.shiftIds, shift.userIds)
        })
    }) 

})