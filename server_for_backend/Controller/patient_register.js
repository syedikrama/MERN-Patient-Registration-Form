let patient = require('../Collection/Patient_model')
let reg_function = {
    register: async function(req,res){
        try {
            let patient_data = new patient(req.body)
            let save_patient_data = await patient_data.save()
            res.status(200).json({msg : 'Data save successfully'})
        } catch (error) {
            console.log(error.message)
            res.status(501).json({msg: error.message})
        }
    }
}

module.exports = reg_function;