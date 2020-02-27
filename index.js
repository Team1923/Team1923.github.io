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
    res.sendFile(path + "events.html");
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
router.get("/archive",function(req, res){
  res.sendFile(path + "archive.html");
});

router.get("/media",function(req, res){
  res.sendFile(path + "sponsors.html");
});

router.get("/sponsors",function(req, res){
  res.sendFile(path + "sponsors.html");
});
router.get("/events",function(req, res){
  res.sendFile(path + "events.html");
});

app.use(express.static(__dirname + '/public'));

app.use("*",function(req, res){
    res.send("Error 404: Not Found!");
});

    
  app.listen(3000,function(){
    console.log("Server running at Port 3000");
});