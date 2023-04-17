var express = require('express');
var router = express.Router();

var Emp = require('../models/mdEmployee');

//Routes

router.get('/',async function(req, res) {
  const emps = await Emp.find().lean();
  res.render('home', { title: 'Express' , emps: emps });
});


router.get('/add', function (req,res){
  res.render('add',{ title: 'Add'});
})


router.post('/add',function (req,res){
  Emp.create({
    empID: req.body.empID,
    empName: req.body.empName,
    empImg: req.body.empImg,
    empAvgScr: req.body.empAvgScr
  })
  .then((emp) => console.log(emp))
  .then(() => res.redirect('/'))
  .catch(e => console.log(e));
})


router.get('/detail/:_id',async function (req,res){
  const emp = await Emp.findById(req.params._id).lean();
  res.render('detail',{ title: 'Detail', emp: emp});
})


router.get('/edit/:_id',async function (req,res){
  const emp = await Emp.findById(req.params._id).lean();
  res.render('edit',{ title: 'Edit', emp: emp});
})


router.post('/edit/:_id',async function (req,res){
  // const emp = await Emp.findById(req.params._id);
  // emp.empID = req.body.empID;
  // emp.empName = req.body.empName;
  // emp.empImg = req.body.empImg;
  // emp.empAvgScr = req.body.empAvgScr;
  // emp.save();
  //Test
  Emp.findById(req.params._id)
  .then((emp) => {
    emp.empID = req.body.empID;
    emp.empName = req.body.empName;
    emp.empImg = req.body.empImg;
    emp.empAvgScr = req.body.empAvgScr;
    emp.save();
  })
  .then(() => res.redirect('/'))
  .catch(e => console.log(e));
})

router.post('/delete/:_id',async function(req,res){
  await Emp.findByIdAndDelete(req.params._id);
  res.redirect('/');
})

module.exports = router;
