const router = require('express').Router();
const studentModel = require('../model/stu_model');

router.get('/students', async function (req, res) {
   const studentList = await studentModel.find();
   console.log(studentList);
   res.send(studentList);
});

router.get('/students/:id', async function (req, res) {
    const { id } = req.params;
    const student = await studentModel.findOne({st_id : id});
    if(!student) return res.send("student Not Found");
    res.send(student);
});

router.post('/students', async function (req, res) {
    const st_id = req.body.st_id;
    const Name= req.body.Name;
    const std= req.body.class;
    const roll= req.body.roll;
    const ph_no= req.body.ph_no;
    const studentExist = await studentModel.findOne({st_id : st_id});
  
    if (studentExist) return res.send('student already exist');

    var data = await studentModel.create({st_id,Name,std,roll,ph_no});
    data.save();

    res.send("student Uploaded");
});
module.exports = router;