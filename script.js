

function p(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) + parseInt(data2);
    document.getElementById("result").innerHTML = "Result:"+result;

}
function m(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) - parseInt(data2);
    document.getElementById("result").innerHTML = "Result:"+result;

}
function x(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) * parseInt(data2);
    document.getElementById("result").innerHTML = "Result:"+result;

}
function y(){
    var data2 = document.getElementById("data2").value;
    var data1 = document.getElementById("data1").value;
    var result = parseInt(data1) / parseInt(data2);
    document.getElementById("result").innerHTML = "Result:"+result;

}