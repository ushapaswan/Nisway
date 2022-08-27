let mysql = require("mysql");
let con = mysql.createConnection({
  "host":"localhost",
  "user":"root",
  "database":"salary_db",
  "password":"Usha@267"
})

const data = require("./salary_data.json");

for (i of data){
  const Timestamp=i.Timestamp
  const employee_age=i.employee_age
  const current_working_industry=i.current_working_industry
  const job_title = i.job_title
  const annual_salary= i.annual_salary
  const currency = i.currency
  const location = i.location
  const work_experience =i.work_experience
  const job_title_addtional_context =i.job_title_addtional_context
  const other_currency = i.other_currency

  const values = [[Timestamp, employee_age,current_working_industry,job_title,annual_salary,currency,location,work_experience,job_title_addtional_context,other_currency]]
  // const sql = "insert into salary_data (timestamp, employee_age,current_working_industry,job_title,annual_salary,currency,location,work_experience,job_title_addtional_context,other_currency) VALUES ?"
  
  // con.query(sql,[values],function(err){
  //   if(err) throw err;
  //   console.log("data inserted");
  // })
}

module.exports={con}