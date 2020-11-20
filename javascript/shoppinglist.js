


form.addEventListener('submit',fun);
var y=1;
function fun(x){
    var name=document.getElementById('name').value;
    var product=document.getElementById('product').value;
    var quantity=document.getElementById('quantity').value;
    var description=document.getElementById('description').value;
    var price_unit=document.getElementById('price_per_unit').value;
    var total=document.getElementById('Total_price').value;
    var form=document.getElementById('form');
    var table=document.getElementById('my_table');

    var row=table.insertRow(y);
    var cell0=row.insertCell(0);
    var cell1=row.insertCell(1);
    var cell2=row.insertCell(2);
    var cell3=row.insertCell(3);
    var cell4=row.insertCell(4);
    var cell5=row.insertCell(5);
    var cell6=row.insertCell(6);

    x.preventDefault()
    cell0.innerHTML='SN/ '+y
    cell1.innerHTML=name;
    cell2.innerHTML=product;
    cell3.innerHTML=quantity;
    cell4.innerHTML=description;
    cell5.innerHTML=price_unit;
    cell6.innerHTML=quantity*price_unit;
    y+=1

}

