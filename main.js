let s = 0;
function count(){
    let d = document.getElementById("cow");
    s = s + 1;
    d.textContent = s;
}
function reset(){
    s = 0;
}
