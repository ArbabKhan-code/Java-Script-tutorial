//document.write("<h1>Hello world!</h1>");
/*var num = 11;
if(num>0 && num%2==0)
{
    document.write('number is eben and positive');
}
else {
    document.write("not aligible");
}*/
//-----------------------------------------------------------------------//
/*var day =10;
switch(day){
    case 1:
        document.write("Monday");
        break;
    case 2:
        document.write("Tuesday");
        break;
    case 3:
        document.write("wednesday");
        break;
    case 4:
        document.write("Thrusday");
    case 5:
        document.write("Friday");
        break;
    case 6:
        document.write("Saturday");
        break;
    case 7:
        document.write("Sunday");
        break;

default: document.write("wrong input")
}*/

//----------------------------------------------------------------------------------//


/*
for(var a = 1; a<11; a++)
{
    table = 5*a
    document.write(table);       
}*/
//------------------------------------------------------------------//
/*
var a = 1;
while(a<10){
    document.write( a)
    a=a+2
}*/
//------------------------------------------------------------------//

/*
function subctractnumber(a,b){
    result = a-b;
    document.write("The result is: " +result);
}

subctractnumber(15,8);*/
//------------------------------------------------------------------//
/*
var cars =["BMW","Audi","Aston Martin"];
for(var i=0;i<cars.length;i++)
{
    document.write('<h1>'+cars[i]+'</h1>');
}
var arr1;
arr1 = new Array("Sou", "River rafting","Electric cycling");
for(var i=0;i<arr1.length;i++)
{
    document.write('<h1>'+arr1[i]+'</h1>');
}*/
//------------------------------------------------------------------//
//Oblects in js
/*
var car = {

    car_brand : "BMW",
    car_model : "M Series",
    car_price : 40000,

    BmwAutoPilot : function(){
        document.write("This car has Auto pilot");
    }
}*/
//-------------------------------------------------------//
/*
function button(){
    //alert("Aur kesa hai bee!!");
    document.getElementById("heading").innerHTML="Haan bhai maza ma!!";
}*/
//-------------------------------------------------------//
//Take input from text box and print that input in alert box.
/*function fn(){
    var str = document.getElementById("text1").value;
    alert(str);
}*/
//-------------------------------------------------------//
//Take input from text box and check weather the username and password are same or not.
/*function fn(){
    var str1 = document.getElementById("text1").value;
    var str2 = document.getElementById("text2").value;

    if(str1 === str2){
        alert("Password and Username can not be same.");
    }
    else{
        alert("The password and username are succesfully changed.");
    }
}*/
//-------------------------------------------------------//
//Taking input from radio button.
/*function fn(){
    var str1 = document.getElementById("r1");
    var str2 = document.getElementById("r2");
    if(str1.checked == true){
    alert(r1.value);        
    }else if(str2.checked ==true){
        alert(r2.value);
    }
}*/
//-------------------------------------------------------//
//Select option from drop down list and print that in alert
/*function fn(){
    var str = document.getElementById("selection");
    alert(str.options[str.selectedIndex].value);
}*/
//-------------------------------------------------------//
//Manipluating html with getelement by tag name
/*function fn(){
    var manipulate = document.getElementsByTagName("p");
    manipulate[0].style.fontSize = 25;
    manipulate[1].style.color = "Blue";
    manipulate[2].style.fontStyle= "italic";
    manipulate[3].style.fontSize = 25;
}*/
//-------------------------------------------------------//
