function end() {
bool = false;
      if (True === true) {
          circle.style.zIndex = 0;
        document.querySelector(".circle").innerHTML = "🥴";
oops = false;
document.querySelector("h1").style.color = "black";
document.querySelector(".end").style.display =  "block";
}
}



function playagian() {
document.querySelector("#s1").innerHTML = "G";
document.querySelector("#s2").innerHTML = "A";
document.querySelector("#s3").innerHTML = "M";
document.querySelector("#s4").innerHTML = "E";
document.querySelector("#s5").innerHTML = "";
document.querySelector("#s6").innerHTML = "O";
document.querySelector("#s7").innerHTML = "V";
document.querySelector("#s8").innerHTML = "E";
document.querySelector("#s9").innerHTML = "R";
    circle.style.zIndex = 2;
    james3 = james3 + 1;
     circle.style.top = "0px";
       circle.style.left = "988px";
    oops = true;
circle.style.width =  "52px"; 
document.querySelector(".end").style.display =  "none";
        setTimeout(function(){}, 1000);
        if (james3 == 1) {
        document.querySelector(".circle").innerHTML = "😄";
    }
        if (james3 == 2) {
        document.querySelector(".circle").innerHTML = "😁";
            }
        if (james3 == 3) {
        document.querySelector(".circle").innerHTML = "🙂";
    }
        if (james3 == 4) {
        document.querySelector(".circle").innerHTML = "😀";
    }
        if (james3 == 5) {
        document.querySelector(".circle").innerHTML = "🙃";
    }
        if (james3 == 6) {
        document.querySelector(".circle").innerHTML = "🐔";
    }
        if (james3 == 7) {
        document.querySelector(".circle").innerHTML = "🤬";
    }
        if (james3 == 8) {
        document.querySelector(".circle").innerHTML = "🧑";
        james3 = 1;
    }

}
     

     function win() {
        document.querySelector(".circle").innerHTML = "😎";
        document.querySelector("h1").style.color = "white";

oops = false;
document.querySelector("#s1").innerHTML = "Y";
document.querySelector("#s2").innerHTML = "O";
document.querySelector("#s3").innerHTML = "U";
document.querySelector("#s4").innerHTML = "";
document.querySelector("#s5").innerHTML = "";
document.querySelector("#s6").innerHTML = "W";
document.querySelector("#s7").innerHTML = "I";
document.querySelector("#s8").innerHTML = "N";
document.querySelector("#s9").innerHTML = "!";
document.querySelector(".end").style.display =  "block";
} 