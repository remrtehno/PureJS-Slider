  window.onload = function() {

  	var images = [
  	"src/img/aurora1.jpg",
  	"src/img/aurora.jpg",
  	"src/img/aurora4.jpg",
  	];

	var x = document.getElementById("sl_item");
 	var y = document.getElementById("prev");
 	var z = document.getElementById("next");
 	var t = document.getElementById("thumbs");
	var thumb = t.getElementsByTagName("img");
 	var num = 0;
  var k = -1;


 	y.addEventListener('click', function(){
 		if (x.className == ''){
 			x.className += 'enter-left-bounce';
 			setTimeout(function(){ x.classList.remove("enter-left-bounce"); }, 400);
 		}
 		else {
 			x.classList.remove("enter-left-bounce");
 			x.className += 'enter-left-bounce';
 		};
 		// image change
 		 if (num != 0) {
 		 	num--;
 		 }
 		 else {
 		 	num = 2
 		 };
 		 x.src = images[num];
 		 
  	});
 	z.addEventListener('click', function(){
 		if (x.className == ''){
 			x.className += 'enter-right-bounce';
 			setTimeout(function(){ x.classList.remove("enter-right-bounce"); }, 400);
 		}
 		else {
 			x.classList.remove("enter-right-bounce");
 			x.className += 'enter-right-bounce';
 		};
 		// image change
 	 	if (num != images.length-1) {
 	 		num++;	
 	 	}
 	 	else {
 	 		num = 0
 	 	};
   
 	 	x.src = images[num];

    //style border
 	 		thumb[num].style.border = "5px solid #f5a647";
      var d = num
      if (num==0) {
       d = num+images.length-1;
      } else {
       d = num-1;
      }
      thumb[d].style.border = "none";
 	 });
		 
 		for (i=0; i<images.length; i++) {
 		
 			thumb[i].id = "mypsin"+i;
 			var thumb_num = document.getElementById("mypsin"+i);
 			var nn = thumb[i].id
 			console.log(i)
 			thumb_num.addEventListener('click', function(){
 				//alert("this function was clicked"+i);
        
 				console.log(k);
 			});
 			
 			//console.log(thumb_num.id);
 		};
  	 	


   // th1.addEventListener('click', function(){
   //  x.src = images[1];
  ///  });
  //  th2.addEventListener('click', function(){
  //   x.src = images[2];
 //   });
};
