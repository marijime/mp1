function addition(){

    //Enter a Number
    let first=document.getElementById("first-number").value;
    first=Number(first);

    let second=document.getElementById("second-number").value;
    second=Number(second);

    let sum= first + second;

    document.getElementById("alt-output").innerHTML = `<h3>${sum}</h3>`;


}

function subtraction(){
    //Enter a Number
    let first=document.getElementById("first-number").value;
    first=Number(first);

    let second=document.getElementById("second-number").value;
    second=Number(second);

    let sub= first-second;

    document.getElementById("alt-output").innerHTML = `<h3>${sub}</h3>`;

}

function multiplication(){
    //Enter a Number
    let first=document.getElementById("first-number").value;
    first=Number(first);

    let second=document.getElementById("second-number").value;
    second=Number(second);

    let product= first*second;

    document.getElementById("alt-output").innerHTML = `<h3>${product}</h3>`;

}

function division(){
    //Enter a Number
    let first=document.getElementById("first-number").value;
    first=Number(first);

    let second=document.getElementById("second-number").value;
    second=Number(second);

    let num =first/second;
    document.getElementById("alt-output").innerHTML = `<h3>${num}</h3>`;

}


function myPow(){
    //Enter a Number
    let first=document.getElementById("first-number").value;
    first=Number(first);

    let second=document.getElementById("second-number").value;
    second=Number(second);

    let startNumber=1;

    for(let i=1;i<=second;i++){
        startNumber = first * startNumber;
    }
    document.getElementById("alt-output").innerHTML = `<h3>${startNumber}</h3>`;

}
function clearval(){
    document.getElementById("first-number").value="";

    document.getElementById("second-number").value="";

    document.getElementById("alt-output").innerHTML = `<h3>${""}</h3>`;



}