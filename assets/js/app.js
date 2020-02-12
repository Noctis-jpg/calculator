window.onload = function (){
	var elements = document.getElementsByTagName("li");
	var display = document.querySelectorAll(' p')[0];
	var give =   document.getElementsByClassName('give')[0];

	for(var i=0;i<elements.length;i+=1){
		  if(elements[i].innerHTML === '='){
			    elements[i].addEventListener("click", calculate(i));
		  }else{
			   elements[i].addEventListener("click", addtocurrentvalue(i));
		  }
	}




	function addtocurrentvalue (i){
		return function(){
			if (elements[i].innerHTML === "÷") {
               display.innerHTML  +=  "/ " ;
      }else if(elements[i].innerHTML === "x"){
			      display.innerHTML += "*";
		   } else{
			   display.innerHTML  += elements[i].innerHTML;
		   }
	  };
   }



   give.onclick = function () {
    display.innerHTML = '';
  };

 function calculate(i) {
    return function () {
        display.innerHTML = eval(display.innerHTML);
    };
  }
};

document.onkeydown = function(evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        alert('Esc key pressed.');
    }
};
