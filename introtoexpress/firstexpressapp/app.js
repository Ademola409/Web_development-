var express=require('express')
var app=express()


app.get('/',function(req,res){
    res.send('hi there, welcome to my assignment')
})

app.get('/speak/:animal',function(req,res){
    x=req.params.animal.toLowerCase()
    if(x=='pig'){
        res.send('the pig says oink')
    }
    else if(x=='cow'){
        res.send('the cow says moo')
    }

    else if(x=='dog'){
        res.send('the dog says woof woof')
    }
})

app.get('/repeat/:message/:times',function(req,res){
    var message=req.params.message
    var times=Number(req.params.times)
    var result=''
    for(i=0; i<times; i++){
        result+=message+' '
    }
    res.send(result)
})

app.get('*',function(req,res){
    res.send('"sorry, page not found...what are you doing with your life"')
})

app.listen(3000,function(){
    console.log('hi, i am working')
})

