import createShift from '../modules/createShiftModule'
import createShiftData from '../fixtures/testData/cretaeShiftData.json'

describe ('Shifts', () => {

    it('Check general parameters value', () => {
        createShiftData.shiftsAndUsersIds.forEach(shift => {
            createShift.checkGeneralParameters(shift.shiftIds, shift.userIds)
        })
    })

    it('Crete Shifts and Check number of shifts', () => {
        createShiftData.shiftsAndUsersIds.forEach(shift => {
            createShift.checkNumberOfShifts(shift.shiftIds, shift.userIds, shift.expectedNumberOfShifts)
        })
    })

    it('Extract first shift and log it', () => {
        createShift.getFirstShift()
    })

})