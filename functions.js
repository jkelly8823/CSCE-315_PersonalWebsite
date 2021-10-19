function visChange(){
    var lever = document.getElementById("styleSwap");

    if(lever.checked == true){
        document.body.className = "back2";
    } else {
        document.body.className = "back1";
    }
    console.log(lever.checked)
    localStorage.setItem("check", lever.checked);
}


window.onload = function(){
    if(localStorage.getItem("check") == "true"){
        document.getElementById("styleSwap").checked = true;
    }
    visChange();

}