function isNumeric(num) {
    return !isNaN(num)
}


function click1() {
    let f1 = document.getElementsByName("field1");
    let f2 = document.getElementsByName("field2");
    let r = document.getElementById("result");
    if (isNumeric(f1[0].value) && isNumeric(f2[0].value) && f1[0].value!=null && f2[0].value!=null && f1[0].value>0 && f2[0].value>0) {
        r.value = Number(f1[0].value) * Number(f2[0].value);
    }
    else{
        r.value = "Something went wrong"
    }
    return false;
}
