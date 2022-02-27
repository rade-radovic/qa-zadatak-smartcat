import createShift from '../modules/createShiftModule'
import generalFunctions from '../modules/generalFunctionsModule'
import createShiftData from '../fixtures/testData/cretaeShiftData.json'
import allowance from '../modules/allowanceModule'

describe('Allowance', () => {

    let allowanceValueArray = []
    let allowanceCostArray = []
    before('Get Allowance Values and Costs', () => {
        createShift.createShifts(createShiftData.shiftsAndUsersIds[4].shiftIds, createShiftData.shiftsAndUsersIds[4].userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            allowanceValueArray = allowance.getAllowanceParametersArray(response, "value")
            allowanceCostArray = allowance.getAllowanceParametersArray(response, "cost")
        })
    })

    it('Assert that all allowance values are between 0 and 1', () => {
        allowanceValueArray.forEach(value => {
            generalFunctions.isBetweenZeroAndOne(value)
        })
    })

    it('Assert that all allowance costs are between 0 and 1', () => {
        allowanceCostArray.forEach(value => {
            generalFunctions.isBetweenZeroAndOne(value)
        })
    })

    it('Compare Value to cost', () => {
        generalFunctions.compareAndLogTotalOfTwoArrays(allowanceValueArray, allowanceCostArray, "Allowance Values", "Allowance Costs")
    })

    it('Log average allowance value', () => {
        generalFunctions.logAverageFromArray(allowanceValueArray, "Allowance Values")
    })

    it('Log average cost value', () => {
        generalFunctions.logAverageFromArray(allowanceCostArray, "Allowance Costs")
    })

})