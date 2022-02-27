

module.exports = {

    getAllowanceAndAwardParametersArray(response, key1, key2) {
        let parametersArray = []
        response.body.forEach(shift => {
            shift[key1].forEach(allowance => {
                parametersArray.push(allowance[key2])
            })
        })
        return parametersArray
    }

}