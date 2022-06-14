function Change(){
    var Amount = document.getElementById("Amount").value;
    var form = document.getElementById("form").value;
    var to = document.getElementById("to").value;
    var Result;
    if (form == "VND" && to == "USD"){
        Result = "Result " + (Amount / 23000) + " USD";
    }
    else if (form == "USD" && to == "VND"){
        Result = "Result " + (Amount * 23000) + " VND";
    }
    else if (form == "USD" && to == "USD"){
        Result = "Result " + Amount + " USD" 
    }
    else if (form == "VND" && to == "VND"){
        Result = "Result " + Amount + " VND"
    }
    document.getElementById("Result").innerHTML = Result;
}