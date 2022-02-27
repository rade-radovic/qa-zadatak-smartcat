import generalFunctions from '../modules/generalFunctionsModule'
import createShift from '../modules/createShiftModule'
import createShiftData from '../fixtures/testData/cretaeShiftData.json'

module.exports = {

    logTotalBreakTime() {
        createShift.createShifts(createShiftData.shiftsAndUsersIds[4].shiftIds, createShiftData.shiftsAndUsersIds[4].userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            let totalTimeInSeconds = generalFunctions.getTotalTime(response.body, "break")
            console.log(`Total break time in seconds is: ${totalTimeInSeconds}`)
        })
    },

    shiftFinishTimeIsLaterThanStart(shiftIds, userIds) {
        createShift.createShifts(shiftIds, userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            response.body.forEach(shift => {
                expect(shift.breaks[0].finish).to.be.greaterThan(shift.breaks[0].start)
            })
        })
    },

    logAverageBreakLength() {
        createShift.createShifts(createShiftData.shiftsAndUsersIds[4].shiftIds, createShiftData.shiftsAndUsersIds[4].userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            let totalBreakTime = generalFunctions.getTotalTime(response.body, "break")
            let averageBreakTime = totalBreakTime / response.body.length
            console.log(`Average break time in seconds is: ${averageBreakTime}`)
        })
    },

    logNumberOfPaidAndUnpaidBreaks() {
        createShift.createShifts(createShiftData.shiftsAndUsersIds[4].shiftIds, createShiftData.shiftsAndUsersIds[4].userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            let paidBreaks = 0
            let unpaidBreaks = 0
            response.body.forEach(shift => {
                if(shift.breaks[0].paid){
                    paidBreaks++
                } else {
                unpaidBreaks++
                }
            })
            console.log(`Number of paid breaks is: ${paidBreaks}`)
            console.log(`Number of unpaid breaks is: ${unpaidBreaks}`)
        })
    },

    isBreakLengthCorrect(shiftIds, userIds) {
        createShift.createShifts(shiftIds, userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            response.body.forEach(shift => {
                expect(shift.breaks[0].length).to.eq(shift.breaks[0].finish - shift.breaks[0].start)
            })
        })
    },
}