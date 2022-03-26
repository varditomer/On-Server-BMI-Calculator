const express = require('express');
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/index.html")
});

app.post("/", function(req, res){

  var num1 = Number(req.body.num1);
  var num2 = Number(req.body.num2);

  var result = num1 + num2;

  res.send("The result of the calculation is " + result);

});

app.get("/bmicalculator", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html")
});

app.post("/bmicalculator", function(req, res){

  var weight = parseFloat(req.body.weight);
  var height = parseFloat(req.body.height);

  var bmi = ((weight) / (height * height)) * 10000;

  bmi = bmi.toFixed(2);

  res.send("Your BMI is " + bmi + "<P>BMI Weight Status: <br>18.5 or below: Underweight<br>18.5 – 24.9 : Normal Weight<br>25.0 – 29.9 Overweight<br>30.0 and Above: Obese</P>");

});

app.listen(port, function(){
  console.log("Tomer's app listening on port 3000")
});
