window.onload = function(){
	let sImg = document.querySelector('.sImg'),
	    bImg = document.querySelector('.bImg'),
 	    t1 = document.querySelector('.t1'),
 	    t2 = document.querySelector('.t2'),
 	    mask = document.querySelector('.mask'),
 	    zhao = document.querySelector('.zhao'),
 	    mw = mask.offsetWidth, mh = mask.offsetHeight,
 	    zw = zhao.offsetWidth, zh = zhao.offsetHeight,
 	    bili = zw / mw; 
 	    // bili = bImg.offsetWidth * sImg.offsetWidth / mw;

 	zhao.addEventListener('mousemove',function(e){
 		let ox = e.offsetX - mw / 2,
 		    oy = e.offsetY - mh / 2;
 		
 		if(ox >= zw-mw){
 			ox = zw-mw;
 		}
 		if(ox <= 0){
 			ox = 0; 
 		}
 		if(oy >= zh-mh){
 			oy = zh-mh;
 		}
 		if(oy <= 0){
 			oy = 0;
 		}
 		mask.style.top = oy + 'px';
 		mask.style.left = ox + 'px';

 		t2.style.width = zw*zw/mw +'px';
 		t2.style.height = zh*zh/mh +'px';
 		
 		t2.style.left = -ox*bili+'px';
 		t2.style.top = -oy*bili+'px';

 		// t2.style.left = -ox*t1.offsetWidth/mw +'px';
 		// t2.style.top = -oy*t1.offsetHeight/mh +'px';


    })
/*
mask   bImg  300    225    (300-75)/2
zhao   t2    1200   900    4*(300-75)/2
*/


 	// t1.onmousemove = function(e){
 	// 	let xx = e.offsetX;
 	// 	let yy = e.offsetY;
 	// 	t2.style.left = -xx * bili + 'px';
 	// 	t2.style.top = -yy * bili + 'px';
 	// }

 	// t1.addEventListener('mousemove',function(e){
 	// 	let xx = e.offsetX;
 	// 	let yy = e.offsetY;
 	// 	t2.style.left = -xx * bili + 'px';
 	// 	t2.style.top = -yy * bili + 'px';
 	// })
}
