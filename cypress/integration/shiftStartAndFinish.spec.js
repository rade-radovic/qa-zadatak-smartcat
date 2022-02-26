import createShiftData from '../fixtures/testData/cretaeShiftData.json'
import shiftStartAndFInish from '../modules/shiftStartAndFinishModule'

describe('Shift Start and Finish', () => {
    
    it('Assert that all shifts start and finish at the same time', () => {
        createShiftData.shiftsAndUsersIds.forEach(shift => {
            shiftStartAndFInish.shiftStartAndFinishedSameTime(shift.shiftIds, shift.userIds)
        })
    })

    it('Find and log total shifts length', () => {
        shiftStartAndFInish.logTotalShiftLength()
    })

})