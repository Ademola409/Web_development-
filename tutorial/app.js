var express=require('express')
var app=express() 
var bodyparser=require('body-parser')
app.use(bodyparser.urlencoded({extended:true}))



listoffriends=['tola','bola','racheal','wale']

app.get('/',function(req,res){
    res.send('welcome to the home page')
})

app.get('/friends',function(req,res){
    res.render('friends.ejs', {friends:listoffriends})
})


app.post('/addfriends',function(req,res){
    var postedfriends=req.body.addedfriends
    listoffriends.push(postedfriends)
    res.redirect('/friends')

})




app.listen(5000,function(req,res){
    console.log('i am working')
})
