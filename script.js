

function add(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) + parseInt(data2);
    document.getElementById("result").innerHTML = result;

}
function sub(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) - parseInt(data2);
    document.getElementById("result").innerHTML = result;

}
function mul(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) * parseInt(data2);
    document.getElementById("result").innerHTML = result;

}
function div(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) / parseInt(data2);
    document.getElementById("result").innerHTML = result;

}
function ac(){
    document.getElementById("data2").value = "";
    document.getElementById("data1").value = "";
    document.getElementById("data2").style.visibility = "visible";
    document.getElementById("result").innerHTML = "";
}
function per(){
    var data1 = document.getElementById("data1").value;
    document.getElementById("data2").style.visibility = "hidden";
    var result = parseInt(data1) / 100;
    document.getElementById("result").innerHTML = result;
    
    
}
function x2(){
    var data1 = document.getElementById("data1").value;
    document.getElementById("data2").style.visibility = "hidden";
    var result = parseInt(data1) * parseInt(data1);
    document.getElementById("result").innerHTML = result;
    
    
}
function x3(){
    var data1 = document.getElementById("data1").value;
    document.getElementById("data2").style.visibility = "hidden";
    var result = parseInt(data1) * parseInt(data1) * parseInt(data1);
    document.getElementById("result").innerHTML = result;
    
    
}