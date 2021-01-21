var i = 0;
var gid = document.getElementById("welcome");
function start(){
    welcome.style.display ="none";

}
function myFunction() {
    i++;
    switch (i) {
        case 1:
            document.getElementById("hello").innerHTML=i;
            break;
        case 2:
            document.getElementById("hello").innerHTML = i;
            break;
        case 3:
            document.getElementById("hello").innerHTML = i;
            break;
        case 4:
            document.getElementById("hello").innerHTML = i;
            break;
        case 5:
            document.getElementById("hello").innerHTML = i;
            break;

        default:
            document.getElementById("hello").innerHTML = i;

    }
}