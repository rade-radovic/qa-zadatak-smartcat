module.exports = {
    
    checkStatus(response, code) {
        expect(response.status).to.eq(code)
    },

    getTotalTime(responseBody, typeOfTime){
        let totalTimeInSeconds = 0
        responseBody.forEach(shift => {
            if(typeOfTime === "shift") {
                totalTimeInSeconds += shift.finish - shift.start
            } else if(typeOfTime === "break") {
                totalTimeInSeconds += shift.breaks[0].finish - shift.breaks[0].start
            }
        })
        return totalTimeInSeconds
    },

    expectToEq(key, value, shift) {
        expect(shift[key]).to.eq(value)
    }
}