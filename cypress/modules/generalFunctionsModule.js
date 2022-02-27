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
    },

    isBetweenZeroAndOne(item) {
        expect(item).to.be.within(0,1)
    },

    compareAndLogTotalOfTwoArrays(array1, array2, title1, title2) {
        let totalArray1 = this.sumAllElementsInArray(array1)
        let totalArray2 = this.sumAllElementsInArray(array2)
        if(totalArray1 > totalArray2) {
            this.consoleLogCompareTwoSums(totalArray1, totalArray2, title1, title2)
        } else if(totalArray2 > totalArray1) {
            this.consoleLogCompareTwoSums(totalArray2, totalArray1, title2, title1)
        } else {
            console.log(`The totals of ${title1} and ${title2} are the same (${totalArray1})`)
        }
    },

    sumAllElementsInArray(array) {
        return array.reduce((a, b) => a + b, 0)
    },

    consoleLogCompareTwoSums(sum1, sum2, title1, title2) {
        console.log(`The total of ${title1} is ${sum1} and it is greater than the total of ${title2} which is ${sum2}`)
    },

    logAverageFromArray(array, title) {
        let totalArray1 = this.sumAllElementsInArray(array)
        let average = totalArray1 / array.length
        console.log(`The average of ${title} is ${average}`)
    }
}