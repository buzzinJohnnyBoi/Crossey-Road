let circle = document.querySelector('.circle');
let car = document.querySelector('.car');
let car2 = document.querySelector('.car2');
let car3 = document.querySelector('.car3');
let car4 = document.querySelector('.car4');
let car5 = document.querySelector('.car5');
let car6 = document.querySelector('.car6');
let car7 = document.querySelector('.car7');
let car8 = document.querySelector('.car8');
let car9 = document.querySelector('.car9');
let car10 = document.querySelector('.car10');
let semi = document.querySelector('.semitruck');
let trailer = document.querySelector('.trialer');
let semi2 = document.querySelector('.semitruck2');
let trailer2 = document.querySelector('.trialer2');
let train = document.querySelector('.train');
let train2 = document.querySelector('.train2');
let train3 = document.querySelector('.train3');
let train4 = document.querySelector('.train4');
let moveBy = 52;
let move = 52;
let move2 = 26;
let move3 = 13;
var john = 0;
var john2 = 0;
var john3 = 0;
var john4 = 0;
var john5 = 0;
var john6 = 0;
var johntrain = 0;
var johnfasttrain = 0;
var i = 0;
var j = 0;
var k = 0;
var l = 0;
var d = 0;
var t = 0;
var b = 0;
var JOHNJOHN;
var gram = true;
var oops = true;
var daniel = 0;
var david = 0;
var james = 0;
var james2 = 0;
var james3 = 0;
var True = true;
var portalblue = true;
var John_Campbell = 1;
var time = 0;
var bool = true;



 
window.addEventListener('load', () => {
    circle.style.position = 'absolute';
circle.style.top = + 0+"px"; circle.style.left = + 988+"px";
    car.style.position = 'absolute';
    circle.style.width =  "52px"; 
    car.style.left = 0;
    car.style.top = 160;
        car2.style.position = 'absolute';
    car2.style.left = 0;
    car2.style.top = 60;
    car3.style.position = 'absolute';
    car3.style.left = 0;
    car3.style.top = 60;
        car4.style.position = 'absolute';
    car4.style.left = 0;
    car4.style.top = 60;
        car5.style.position = 'absolute';
    car5.style.left = 0;
    car5.style.top = 60;
    car6.style.position = 'absolute';
    car6.style.left = 0;
    car6.style.top = 60;
    car7.style.position = 'absolute';
    car7.style.left = 0;
    car7.style.top = 60;
    car8.style.position = 'absolute';
    car8.style.left = 0;
    car8.style.top = 60;
    car9.style.position = 'absolute';
    car9.style.left = 0;
    car9.style.top = 60;
    car10.style.position = 'absolute';
    car10.style.left = 0;
    car10.style.top = 60;
    semi.style.position = 'absolute';
    semi.style.left = 0;
    semi.style.top = 60;
    semi2.style.position = 'absolute';
    semi2.style.left = 0;
    semi2.style.top = 60;
    trailer.style.position = 'absolute';
    trailer.style.left = + 50+"px";
    trailer.style.top = 60;
    trailer2.style.position = 'absolute';
    trailer2.style.left = + 50+"px";
    trailer2.style.top = 1;
   train.style.left = -988+"px";
    train.style.top = 60;
    train.style.position = 'absolute';
    train2.style.left = -988+"px";
    train2.style.top = 60;
    train2.style.position = 'absolute';
        train3.style.left = -988+"px";
    train3.style.top = 60;
    train3.style.position = 'absolute';
    train4.style.left = -988+"px";
    train4.style.top = 60;
    train4.style.position = 'absolute';
});
 
 
window.addEventListener('keydown', (e) => {
	if (oops === true) {
    switch (e.key) {
    	
        case 'ArrowLeft':
            circle.style.left = parseInt(circle.style.left) - moveBy + 'px'; 
          if (circle.style.top == + 1612+"px" && parseInt(circle.style.left) < 1944 && circle.style.left > + 155+"px") {
          	circle.style.left = parseInt(circle.style.left) + moveBy + 'px';}  
          	if (circle.style.top == + 1664+"px" && parseInt(circle.style.left) > 1000) {circle.style.top = parseInt(circle.style.left) + moveBy + 'px';} 
             break;
        case 'ArrowRight':
            circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
         if (circle.style.top == + 1612+"px" && parseInt(circle.style.left) < 1944 && circle.style.left > + 155+"px") {
         	circle.style.left = parseInt(circle.style.left) - moveBy + 'px';}  
         	if (circle.style.top == + 1664+"px" && parseInt(circle.style.left) > 1000) {circle.style.top = parseInt(circle.style.left) - moveBy + 'px';} 
         	if (circle.style.top == + 1664+"px" && parseInt(circle.style.left) < 1944 && circle.style.left > + 155+"px") {
         	circle.style.left = parseInt(circle.style.left) - moveBy + 'px';}  
         	if (circle.style.top == + 1664+"px" && parseInt(circle.style.left) > 1000) {circle.style.top = parseInt(circle.style.left) - moveBy + 'px';} 
            break;
        case 'ArrowUp':
            circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
         	if (circle.style.top == + 1664+"px" && parseInt(circle.style.left) < 1944 && circle.style.left > + 155+"px") {
         		circle.style.top = parseInt(circle.style.top) + moveBy + 'px';}  
         		if (circle.style.top == + 1664+"px" && parseInt(circle.style.left) > 1000) {circle.style.top = parseInt(circle.style.top) + moveBy + 'px';} 
            break;
        case 'ArrowDown':
            circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
     if (circle.style.top == + 1612+"px" && parseInt(circle.style.left) < 1052 && circle.style.left > + 155+"px") {
     	circle.style.top = parseInt(circle.style.top) - moveBy + 'px';}  
     if (circle.style.top == + 1612+"px" && parseInt(circle.style.left) > 1000) {circle.style.top = parseInt(circle.style.top) - moveBy + 'px';} 
            break;

            	    }
                                 if (circle.style.top == + 1924+"px" || circle.style.top == + 1976+"px") {
             if (circle.style.left == + 1040+"px" || circle.style.left == + 1092+"px") {
                circle.style.zIndex = "2";
                win();
                } 
            }
            	}

            	if (circle.style.top == +728+"px" || circle.style.top == + 832+"px" || circle.style.top == + 1768+"px") {
            		if (gram === true) {
            			gram = false;
            		trainruns();
            	}
            	}   

                            	if (circle.style.top < +0+"px") {
            		circle.style.top = parseInt(circle.style.top) + moveBy + 'px';
            	}   
            	            	if (circle.style.left < +0+"px") {
            		circle.style.left = parseInt(circle.style.left) + moveBy + 'px';
            	}  
            	           	            	if (circle.style.left == +1924+"px") {
            		circle.style.left = parseInt(circle.style.left) - moveBy + 'px';
            	} 
                                            if (circle.style.top == +2132+"px") {
                    circle.style.top = parseInt(circle.style.top) - moveBy + 'px';
                } 
});
if (i == 0) {
	toTheLeft();
}
if (j == 0) {
	setTimeout(function(){toTheRight(); }, 200);
}

if (k == 0) {
	setTimeout(function(){ toTheRRight();}, 300);
}

if (l == 0) {
	setTimeout(function(){ toTheLeft2();}, 1000);
	setTimeout(function(){ toTheLeft3();}, 500);
 setTimeout(function(){ train2runs();}, 500);
}


function toTheLeft() {
switch(portalblue) {
    case true: portalblue = false; document.querySelector(".portal").style.backgroundImage = "url('blueportal.png')"; break;
    case false: portalblue = true; document.querySelector(".portal").style.backgroundImage = "url('red.png')"; break;
}


for (i = 0; i < 2000; i++) {	
setTimeout(function(){
    if (car.style.left != + 1924+"px") {car.style.left = parseInt(car.style.left) + move + 'px'; }
	car9.style.left = parseInt(car9.style.left) - move + 'px'; 
	semi2.style.left = parseInt(semi2.style.left) - move2 + 'px'; 
	trailer2.style.left = parseInt(trailer2.style.left) - move2 + 'px'; 
	david = parseInt(semi2.style.left) + 104 + 'px';
	                if (circle.style.top == + 104+"px" && parseInt(car.style.left) == parseInt(circle.style.left)){end();}
	            	if (circle.style.top == + 1300+"px" && parseInt(car9.style.left) == parseInt(circle.style.left)){end();}
	            	if (circle.style.top == + 1352+"px" && parseInt(semi2.style.left) == parseInt(circle.style.left)){end();}
	 			    if (circle.style.top == + 1352+"px" && parseInt(david) == parseInt(circle.style.left)){end();}
	 			    if (car9.style.left == + -52+"px") {car9.style.left = + 1976+"px";}
                     if (car.style.left == + 1924+"px") { car.style.left =  + -2080+"px";}
	            	}, john);
john = john + 20;
}
	setTimeout(function(){car.style.left =  + -52+"px"; 
		car9.style.left = + 1976+"px";semi2.style.left = + 1976+"px"; trailer2.style.left = + 2026+"px"; i = 0; toTheLeft();}, 1550);
}


function toTheRight() {
    if(John_Campbell == 1) {
	car2.style.left = + 1976+"px";
	car6.style.left = + 1976+"px";
	car7.style.left = + 1976+"px";
for (var j = 0; j < 2000; j++) {
	setTimeout(function(){car2.style.left = parseInt(car2.style.left) - move + 'px'; 
car6.style.left = parseInt(car6.style.left) - move2 + 'px'; 
car7.style.left = parseInt(car7.style.left) - move + 'px'; 
	                if (circle.style.top == +156+"px" && parseInt(car2.style.left) == parseInt(circle.style.left)){end();}
	            if (circle.style.top == +1248+"px" && parseInt(car7.style.left) == parseInt(circle.style.left)){end();}
	            if (circle.style.top == +1196+"px" && parseInt(car6.style.left) == parseInt(circle.style.left)){end();}}, john2); 
	john2 = john2 + 38;}
setTimeout(function(){car2.style.left = + 1976+"px"; 	car6.style.left = + 1976+"px";	car7.style.left = + 1976+"px";j = 0; toTheRight();}, 3000);

}
}

function toTheRRight() {
    if(John_Campbell == 1) {
for (var k = 0; k < 2000; k++) {
	setTimeout(function(){car3.style.left = parseInt(car3.style.left) - move + 'px'; 
		car10.style.left = parseInt(car10.style.left) - move + 'px'; 
	                if (circle.style.top == +156+"px" && parseInt(car3.style.left) == parseInt(circle.style.left)){end();}
	            if (circle.style.top == + 1300+"px" && parseInt(car10.style.left) == parseInt(circle.style.left)){end();}}, john3); 
	john3 = john3 + 20;}
setTimeout(function(){car3.style.left = + 1976+"px"; k = 0; car10.style.left = + 1976+"px"; toTheRRight();}, 1150);

}
}

function toTheLeft2() {
    if(John_Campbell == 1) {
	semi.style.left = + 1976+"px";
		trailer.style.left =  + 2026+"px";
for (l = 0; l < 2000; l++) {
	setTimeout(function(){car4.style.left = parseInt(car4.style.left) + move2 + 'px'; 
		semi.style.left = parseInt(semi.style.left) - move2 + 'px'; 
		trailer.style.left = parseInt(trailer.style.left) - move2 + 'px'; 
		daniel = parseInt(semi.style.left) + 104 + 'px';
	                if (circle.style.top == + 312+"px" && parseInt(car4.style.left) == parseInt(circle.style.left)){end();}
	                if (circle.style.top == + 1196+"px" && parseInt(semi.style.left) == parseInt(circle.style.left)){end();}
	 			    if (circle.style.top == + 1196+"px" && parseInt(daniel) == parseInt(circle.style.left)){end();}
	               }, john4);
john4 = john4 + 38;
}


	setTimeout(function(){car4.style.left =  + -52+"px";  	semi.style.left = + 1976+"px";
		trailer.style.left =  + 2026+"px";  l = 0; toTheLeft2();}, 3000);
}
}

function toTheLeft3() {
    if(John_Campbell == 1) {
		car8.style.left = + 1976+"px";
for (d = 0; d < 2000; d++) {
	setTimeout(function(){car5.style.left = parseInt(car5.style.left) + move + 'px'; 
		car8.style.left = parseInt(car8.style.left) - move + 'px'; 
	               if (circle.style.top == + 364+"px" && parseInt(car5.style.left) == parseInt(circle.style.left)){end();}
	               if (circle.style.top == + 1248+"px" && parseInt(car8.style.left) == parseInt(circle.style.left)){end();}}, john5);
john5 = john5 + 40;
}


	setTimeout(function(){car5.style.left =  + -52+"px"; d = 0;  car8.style.left = + 1976+"px"; toTheLeft3();}, 1500);
}
}

function trainruns() {
    if(John_Campbell == 1) {
johntrain = 0;
for (t = 0; t < 56; t++) {
	setTimeout(function(){train.style.left = parseInt(train.style.left) + move + 'px'; 
						  train3.style.left = parseInt(train3.style.left) + move + 'px';
                          train4.style.left = parseInt(train4.style.left) + move + 'px';
						  james = parseInt(train.style.left) + 520 + 'px';
	  if (circle.style.top == + 728+"px" && parseInt(train.style.left) == parseInt(circle.style.left)){end();} 
	  if (circle.style.top == + 728+"px" && parseInt(james) == parseInt(circle.style.left)){end();} 
	  if (circle.style.top == + 832+"px" && parseInt(train3.style.left) == parseInt(circle.style.left)){end();} 
	  if (circle.style.top == + 832+"px" && parseInt(james) == parseInt(circle.style.left)){end();} 
      if (circle.style.top == + 832+"px" && parseInt(train3.style.left) == parseInt(circle.style.left)){end();} 
      if (circle.style.top == + 1768+"px" && parseInt(train4.style.left) == parseInt(circle.style.left)){end();}   
      if (circle.style.top == + 1768+"px" && parseInt(james) == parseInt(circle.style.left)){end();}  
	  if (train.style.left == + 1924+"px") {gram = true; train.style.left =  + -988+"px"; 
train3.style.left =  + -988+"px";  train4.style.left =  + -988+"px";t = 0;}}, johntrain);
johntrain = johntrain + 20;
}

}
}
function train2runs() {
    if(John_Campbell == 1) {
			train2.style.left =  + -988+"px";
for (t = 0; t < 60; t++) {
	setTimeout(function(){
		train2.style.left = parseInt(train2.style.left) + move + 'px';
						  james2 = parseInt(train2.style.left) + 728 + 'px';
	  if (circle.style.top == + 780+"px" && parseInt(train2.style.left) == parseInt(circle.style.left)){end();} 
	  if (circle.style.top == + 780+"px" && parseInt(james2) == parseInt(circle.style.left)){end();} 
	  if (train2.style.left == + 1924+"px") {train2.style.left =  + -988+"px"; setTimeout(function(){ t = 0; train2runs();}, 100);}}, johnfasttrain);
johnfasttrain = johnfasttrain + 25;
}

}
}

setInterval(timer, 1000);
function timer() {
    if (bool) {
        time++;
        console.log(time);
    }
}











