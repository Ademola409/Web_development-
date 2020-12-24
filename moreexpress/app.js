var express=require('express')
var app=express()


app.use(express.static('public'))

app.set('view engine', 'ejs')   

app.get('/', function(req,res){
    res.send('welcome home')
})

app.get("/fallinlovewith/:thing",function(req,res){
    var thing=req.params.thing
    res.render('love',{thingvar:thing})
})

app.listen(5000,function(){
    console.log('i am working!!!')
})



