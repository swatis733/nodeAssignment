var User = require('../models/user');
var Student = require('../models/student');
var University = require('../models/university');
var Promise = require("bluebird");


exports.postuser = function (req, res) {    //PostUser function post data to User schema
    var user = new User({
        user_name: req.body.user_name,
        father_name: req.body.father_name,
        phone_no: req.body.phone_no,
        email_id: req.body.email_id,
        user_id: req.body.user_id,
        created_at: new Date()
    });
   
    user.save(function (err, response) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({
                success: true,
                body: response
            })
        }
    })
}

exports.poststu = function (req, res) {     //PostStu function post data to Student schema
    var stu = new Student({
        st_name: req.body.st_name,
        stream: req.body.stream,
        year: req.body.year,
        st_id: req.body.st_id,
        university_id: req.body.university_id 
    });

    stu.save(function (err, response) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({
                success: true,
                body: response
            })
        }
    })
}

exports.postuniv = function (req, res) {    //Postuniversity function post data to University schema
    var uni = new University({
        university_name: req.body.university_name,
        city: req.body.city,
        state: req.body.state,
        university_id: req.body.university_id
    });

    uni.save(function (err, response) {
        if (err) {
            res.json(err);
        }
        else {
            res.json({
                success: true,
                body: response
            })
        }
    })
}

exports.getuser = function (req, res) {
    User.find({}, function (err, saher) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json(saher);
    })
}

exports.getstu = function (req, res) {
   Student.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.getuniv = function (req, res) {
    University.find({}, function (err, response) {
        if (err) {
            return res.json(req, res, err);
        }

        res.json(response);
    })
}

exports.searchSt= function(req,res){
    var stream = req.params.stream;
     Student.find({stream: stream}).exec()
    .then(function(student){
        var result=[];
        //result.push(student);
        
    student.map(item=> {
         User.findOne({user_id:item.st_id}).exec()
        .then(function(user)
    {
     result.push(user.user_name);
     console.log("Result" +result);   
    })
    }); console.log(result);
    return result;    
    }).then(function(result){
        res.json(result);
    }).then(undefined,function(err){
        res.send(err);
    }) 
}


  exports.getuniversity = function(req,res){    
      var unireg=req.params.university_id;
      University.findOne({university_id:unireg}).exec()
      .then(function(university){
          var result=[];
          result.push(university);
       return Student.find({university_id:university.university_id}).exec()
       .then(function(student){
           var name=student.map(item=> {return item.st_name;});
           result.push(name);
           return result;
       })
      })
      .then(function(result){    
            res.json(result);  
  })      
  .then(undefined, function(err){      
          res.send(err);
      }
    )
}


exports.getAllInfo = function (req, res) { 
     var username = req.params.name; 
     User.findOne({user_name: username}).exec()   
    .then(function(user){       
     var result = [];     
    return Student.findOne({ st_id: user.user_id}).exec()      
     .then(function(student){        
     return [user, student];    
        });     
     })     
      .then(function(result){   
     var student = result[1];      
   return University.find({university_id: student.university_id}).exec() 
     .then(function(university) {         
    result.push(university);           
     return result;   
       })   
    })     
     .then(function(result){     
              res.json(result);  
    })      
    .then(undefined, function(err){      
            res.send(err); 
                   })  }


