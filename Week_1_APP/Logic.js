var Total_savings=200;
function getMoney(){
    var  Withdrawal= document.getElementById("A1").value;
    Withdrawal=Withdrawal*1;
    if(Withdrawal>Total_savings){
    document.write("Insufficient funds");  
    }else{
        Total_savings=Total_savings-Withdrawal;
        document.write("Balance :"+Total_savings);    
    }
    
}

function putMoney(){
    var Credits=document.getElementById("A2").value;
    Credits=Credits*1;
    Total_savings = Total_savings+Credits;
    document.write("Balance :"+Total_savings);   
}

function createDev(){
    var Name=document.getElementById("A3").value;
    var emailP=document.getElementById("A4").value;
    var Cash=document.getElementById("A5").value;
    var emailPattern=/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z]{2,4})+$/;
    var namePattern=/^[a-zA-Z_]{5,20}$/;
    var amount=/^[0-9]+$/;

    if(emailP==""){
        alert("Emali Is empty");
    }else if(!emailPattern.test(emailP)){
        alert("Wrong email");
    }else{
        alert("ddone");
    }

    if(Name==""){
        alert("Empty field");
    }else if(!namePattern.test(Name)){
        alert("Invalid Name");
    }else{
        alert("valid Name");
    }

    if(!amount.test(Cash)){
        alert("Invalid number");
    }else{
        alert("valid Cash");
    }
    Total_savings=Cash;
    if(Total_savings<2000){
        document.write("Unable to make account");
    }else{
        document.write("Done");
        document.write("<br/>");
        document.write("Account Details : HBFC<br/>");
        document.write("Email  :"+emailP+"<br/>");
        document.write("Name  :"+Name);
    }
} 