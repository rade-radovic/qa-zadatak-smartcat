

module.exports = {

    getAllowanceParametersArray(response, key) {
        let allowanceParametersArray = []
        response.body.forEach(shift => {
            shift.allowance.forEach(allowance => {
                allowanceParametersArray.push(allowance[key])
            })
        })
        return allowanceParametersArray
    }

}