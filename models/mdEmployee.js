const mongoose = require('mongoose');

const schEmp = mongoose.Schema({
    empID: {
        type: String,
        require: true
    },
    empName: {
        type: String,
        require: true
    },
    empImg: {
        type: String,
        require: true
    },
    empAvgScr: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Employees',schEmp)