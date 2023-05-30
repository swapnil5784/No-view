var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {
  try{
    const {message} = req.body
    res.json({
      type:"error",
      data:message,
      status:500
    })
  }
  catch(error){
    console.log(error);
    res.json({
      type:"error",
      datat:"",
      status:500
    })
  }
});

module.exports = router;
