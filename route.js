var express = require("express")
var router = express.Router();
var bodyParser = require("body-parser");
var urlencodeparser =bodyParser.urlencoded({extended:false});

router.use(bodyParser.json());


var{
    all_data,
    single_data,
    sort
}=require("./salary")

router.get("/all_data",all_data)
router.get("/get/:id",single_data)
router.get("/sort",sort)



module.exports=router;