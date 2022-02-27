import generalFunctions from '../modules/generalFunctionsModule'

module.exports = {

    logTrueFalseOrdinaryHours(ordinaryHoursArray) {
        let counts = generalFunctions.returnNumberIfItemsInAnArray(ordinaryHoursArray)
        console.log(`Ordinary hours: true(${counts.true}), false(${counts.false})`)
    },

    toIsGreterThanFrom(responseJSon) {
        responseJSon.body.forEach(shift => {
            shift.award_interpretation.forEach(award => {
                expect(award.to).to.be.greaterThan(award.from)
            })
        })
    }
}