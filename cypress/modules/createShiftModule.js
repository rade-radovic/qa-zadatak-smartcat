import generalFunctions from '../modules/generalFunctionsModule'
import createShiftData from '../fixtures/testData/cretaeShiftData.json'

module.exports = {

    createShifts(shiftIds, userIds) {
        return cy.request(`http://localhost:9090/shifts?ids=${shiftIds}&user_ids=${userIds}`)
    },

    checkNumberOfShifts(shiftIds, userIds, expectedNumberOfShifts) {
        this.createShifts(shiftIds, userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            expect(response.body).to.have.lengthOf(expectedNumberOfShifts)
        })
    },

    getFirstShift(){
        this.createShifts(createShiftData.shiftsAndUsersIds[4].shiftIds, createShiftData.shiftsAndUsersIds[4].userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            let firstShift = response.body[0]
            console.log("Loged First Shift:")
            console.log(firstShift)
        })
    },

    checkGeneralParameters(shiftIds, userIds) {
        this.createShifts(shiftIds, userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            response.body.forEach(shift => {
                createShiftData.generalParameters.forEach(keyValuePair => {
                    generalFunctions.expectToEq(keyValuePair.key, keyValuePair.value, shift)
                })
            })
        })
    },
}