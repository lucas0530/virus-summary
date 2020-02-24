const getData = require('./modules/getKorona');
const cors = require('cors'); 
const express = require('express');
const app = express();app.use(cors());

app.set("view engine", "ejs");
app.use(express.static(__dirname + '/'));

app.get("/data", async function(req, res){
    
    res.write(JSON.stringify(Object.assign({}, await getData())));
    res.end();
    
});

app.listen(8080, function(){
    console.log("실행중..."); 
});