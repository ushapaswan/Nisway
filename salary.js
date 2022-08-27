var{
    con

}=require("./database")




// get all records

var all_data = (req,res)=>{
    var sql = "select * from salary_data";
    con.query(sql,function(err,result){
        if(err)throw err;
        res.status(200).json(result);
    })
}

// get a single record

var single_data =(req,res)=>{

    con.query("SELECT * FROM salary_data WHERE id = ?",[req.params.id],function(err,result){
        if(err)throw err;
        res.send(result);
    
    })

}

// sort by fields

var sort = (req1,res)=>{
    con.query("SELECT * FROM salary_data ORDER BY employee_age",function(err,result){
        if(err)throw err;
        res.send(result)

    })
}

module.exports={
    all_data,
    single_data,
    sort
}
