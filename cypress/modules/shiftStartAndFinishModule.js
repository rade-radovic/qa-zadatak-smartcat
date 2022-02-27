import createShift from '../modules/createShiftModule'
import generalFunctions from '../modules/generalFunctionsModule'
import createShiftData from '../fixtures/testData/cretaeShiftData.json'

module.exports = {

    shiftStartAndFinishedSameTime(shiftIds, userIds) {
        createShift.createShifts(shiftIds, userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            let start = response.body[0].start
            let finish = response.body[0].finish
            response.body.forEach(shift => {
                expect(shift.start).to.eq(start)
                expect(shift.finish).to.eq(finish)
            })
        })
    },

    logTotalShiftLength() {
        createShift.createShifts(createShiftData.shiftsAndUsersIds[4].shiftIds, createShiftData.shiftsAndUsersIds[4].userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            let shiftTotalTime = generalFunctions.getTotalTime(response.body, "shift")
            console.log(`Shift total time is: ${shiftTotalTime}`)
        })
    }
}