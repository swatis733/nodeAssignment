//import the required modules
var express = require('express');
var router = express.Router();
var stuController = require('../controller/stcontroller');


router.route('/v1/User/putallusers')
    .post(stuController.postuser)
  
router.route('/v1/User/getallusers')   
    .get(stuController.getuser);

router.route('/v1/Student/putallstudents')
    .post(stuController.poststu)

router.route('/v1/Student/getallstudents')    
    .get(stuController.getstu);

router.route('/v1/University/putalluniversities')
    .post(stuController.postuniv)

router.route('/v1/University/getalluniversities')    
    .get(stuController.getuniv);

router.route('/v1/Student/:stream')
    .get(stuController.searchSt);

router.route('/v1/University/:university_id')
    .get(stuController.getuniversity);

    router.route('/v1/getinfo/:name')
    .get(stuController.getAllInfo);

//export the router
module.exports = router;
