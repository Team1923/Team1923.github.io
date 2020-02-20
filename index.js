var express = require("express");
var app = express();
var router = express.Router();
  
var path = __dirname + "/views/";
  
app.use("/",router);
  
router.get("/",function(req, res){
  res.sendFile(path + "home.html");
});

router.get("/business",function(req, res){
    res.sendFile(path + "business.html");
});

router.get("/outreach",function(req, res){
    res.sendFile(path + "outreach.html");
});

  router.get("/events",function(req, res){
    res.sendFile(path + "resources.html");
});
  
router.get("/ftc",function(req, res){
  res.sendFile(path + "ftc.html");
});
  
router.get("/fll",function(req, res){
  res.sendFile(path + "fll.html");
});

router.get("/resources",function(req, res){
  res.sendFile(path + "resources.html");
});

app.use(express.static(__dirname + '/static'));

app.use("*",function(req, res){
    res.send("Error 404: Not Found!");
});

    
  app.listen(3000,function(){
    console.log("Server running at Port 3000");
});