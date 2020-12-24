var rindex,table = document.getElementById('table')
console.log(rindex)
console.log(table)

function checkemptyinput(){
    var isempty=false
    var fname=document.getElementById('fname').value
    var lname=document.getElementById('lname').value
    var age=document.getElementById('age').value
    
    if (fname===''){
        alert('first name cannot be empty')
        isempty=true
    }
    else if(lname===''){
        alert('last name cannot be empty')
        isempty=true
    }
    else if(age===''){
        alert('the age cannot be empty')
        isempty=true
    }
    return isempty
    
}

function addhtmltablerow(){
    if(!checkemptyinput()){
        var newrow=table.insertRow(table.length)
        cell1=newrow.insertCell(0)
        cell2=newrow.insertCell(1)
        cell3=newrow.insertCell(2)
        fname=document.getElementById('fname').value
        lname=document.getElementById('lname').value
        age=document.getElementById('age').value

    cell1.innerHTML=fname
    cell2.innerHTML=lname
    cell3.innerHTML=age
    console.log(table.rows[0])
    selectedrowinput()
    }
    
}

function selectedrowinput(){
    for(var i=0; i<table.rows.length; i++){
        table.rows[i].onclick=function(){
            rindex=this.rowIndex
            console.log(rindex)
            document.getElementById('fname').value=this.cells[0].innerHTML
            document.getElementById('lname').value=this.cells[1].innerHTML
            document.getElementById('age').value=this.cells[2].innerHTML
            
        }
    }
}
function edithtmltableselectedrows(){
    var fname=document.getElementById('fname').value
    var lname=document.getElementById('lname').value
    var age=document.getElementById('age').value
    if(!checkemptyinput()){
        table.rows[rindex].cells[0].innerHTML=fname
        table.rows[rindex].cells[1].innerHTML=lname
        table.rows[rindex].cells[2].innerHTML=age
    }
    

}

function removeselectedrow(){
    table.deleteRow(rindex)
    document.getElementById('fname').value=''
    document.getElementById('lname').value=''
    document.getElementById('age').value=''
    
}


