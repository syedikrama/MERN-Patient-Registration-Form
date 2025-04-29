let express = require('express');
require('dotenv').config();
let db = require('./database')
let route = require('./Route/patient_reg_route')
let cors = require('cors')

let port_no = process.env.PORT

let patient_app = express();
patient_app.use(cors());
patient_app.use(express.json());
patient_app.use("/patient/", route)


db().then(()=>{
    patient_app.listen(port_no,()=>{
        console.log(`server is running on port http://localhost:${port_no}`);
})
}).catch((e)=>{

console.log(e)

})