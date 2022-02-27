import createShift from '../modules/createShiftModule'
import generalFunctions from '../modules/generalFunctionsModule'
import createShiftData from '../fixtures/testData/cretaeShiftData.json'
import allowance from '../modules/allowanceModule'
import awards from '../modules/awardInterpretationModule'

describe('Award Interpretation', () => {

    let awardUnitsArray = []
    let awardCostArray = []
    let ordinaryHoursArray = []
    let responseJson
    before('Get Award Units and Costs', () => {
        createShift.createShifts(createShiftData.shiftsAndUsersIds[4].shiftIds, createShiftData.shiftsAndUsersIds[4].userIds).then((response) => {
            generalFunctions.checkStatus(response, 200)
            awardUnitsArray = allowance.getAllowanceAndAwardParametersArray(response, "award_interpretation", "units")
            awardCostArray = allowance.getAllowanceAndAwardParametersArray(response, "award_interpretation", "cost")
            ordinaryHoursArray = allowance.getAllowanceAndAwardParametersArray(response, "award_interpretation", "ordinary_hours")
            responseJson = response
        })
    })

    it('Assert that all Award units are between 0 and 1', () => {
        awardUnitsArray.forEach(value => {
            generalFunctions.isBetweenZeroAndOne(value)
        })
    })

    it('Assert that all Award costs are between 0 and 1', () => {
        awardCostArray.forEach(value => {
            generalFunctions.isBetweenZeroAndOne(value)
        })
    })

    it('Compare units to cost', () => {
        generalFunctions.compareAndLogTotalOfTwoArrays(awardUnitsArray, awardCostArray, "Award Units", "Award Costs")
    })

    it('Log average Award unit', () => {
        generalFunctions.logAverageFromArray(awardUnitsArray, "Award Unites")
    })

    it('Log average Award value', () => {
        generalFunctions.logAverageFromArray(awardCostArray, "Award Costs")
    })

    it('Log how many ordinary hours are true and how many are false', () => {
        awards.logTrueFalseOrdinaryHours(ordinaryHoursArray)
    })

    it('Assert that parameter to is greater that parameter from', () => {
        awards.toIsGreterThanFrom(responseJson)
    })
})