const first = document.getElementById("1");
const rgif = document.getElementById("rotatephone1");
var width = screen.width;
var height = screen.height;
while (true){
    if (width > height){
        rgif.style.display = "flex";
    }else{
        rgif.style.display = "none";
    }
}
