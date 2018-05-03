function heightbox(id){
	height = document.getElementById(id).style.maxHeight;

	if(height=='0px'){
		document.getElementById(id).style.maxHeight='100vh';
	}else{
		document.getElementById(id).style.maxHeight='0px';
	}
}

// scroll header
if(document.querySelector('.bottom-header')) {
	let menu = parseInt(document.querySelector('.bottom-header').offsetTop);

	let scrollTop = document.body.scrollTop;
	window.addEventListener('scroll', function() {
		scroll = window.pageYOffset || document.documentElement.scrollTop;
		height = scroll > menu ? document.querySelector('.bottom-header').classList.add('fixed') : document.querySelector('.bottom-header').classList.remove('fixed');
	});
	setTimeout(function() {document.querySelector('.header .emp').style.height=document.querySelector('.bottom-header').offsetHeight+'px'},600);
}
// scroll slider
if(document.querySelector('.left-side')) {
	if(document.querySelector('.bottom-header')) {
		let sideTop = parseInt(document.querySelector('.left-side').offsetTop) - parseInt(window.getComputedStyle(document.querySelector('.bottom-header'), null).height) - 100;
		let sideBot = parseInt(document.querySelector('.header').offsetTop) + parseInt(window.getComputedStyle(document.querySelector('main'), null).height);

		let scrollTop = document.body.scrollTop;
		window.addEventListener('scroll', function() {
			scroll = window.pageYOffset || document.documentElement.scrollTop;
			side = scroll > sideTop ? document.querySelector('.left-side').classList.add('fixed') : document.querySelector('.left-side').classList.remove('fixed');
			rath = sideBot - scroll + 'px';
			endSide = scroll > sideBot ? document.querySelector('.left-side').style.transform='translateY('+ rath +')' : document.querySelector('.left-side').style.transform='translateY(0)';
		});
	} else {
		let sideTop = parseInt(document.querySelector('.left-side').offsetTop);
		let sideBot = parseInt(document.querySelector('.header').offsetHeight) + parseInt(window.getComputedStyle(document.querySelector('main'), null).height) - 308;

		let scrollTop = document.body.scrollTop;
		window.addEventListener('scroll', function() {
			scroll = window.pageYOffset || document.documentElement.scrollTop;
			side = scroll > sideTop ? document.querySelector('.left-side').classList.add('fixed') : document.querySelector('.left-side').classList.remove('fixed');

			if (document.body.clientWidth>=922){
				let sideBot = parseInt(document.querySelector('.header').offsetHeight) + parseInt(window.getComputedStyle(document.querySelector('main'), null).height) - 308;
				rath = sideBot - scroll + 'px';
				endSide = scroll > sideBot ? document.querySelector('.left-side').style.transform='translateY('+ rath +')' : document.querySelector('.left-side').style.transform='translateY(0) !important';
			}
		});
	}
	
	let sideHeight = parseInt(window.getComputedStyle(document.querySelector('.left-side'), null).height);
}
// проявление элементов при загрузке
window.onload = setTimeout(function () {
	document.querySelector('.upper-header').style.opacity='1';
},200);
window.onload = setTimeout(function () {
	document.querySelector('.middle-header').style.opacity='1';
	document.querySelector('.middle-header').style.marginTop='0';
},400);
// проявление на О нас
if(document.querySelector('.about-body')) {

	window.onload = setTimeout(function () {
		document.querySelector('.bottom-header').style.opacity='1';
		document.querySelector('.bottom-header').style.marginTop='0';

	},600);
}
// animation

if(document.querySelector('.body-main-page')) {
	// проявление элементов при загрузке
	
	window.onload = setTimeout(function () {
		document.querySelector('.bottom-header').style.opacity='1';
		document.querySelector('.bottom-header').style.marginTop='0';
	},600);
	window.onload = setTimeout(function () {
		document.querySelector('.index-video').style.opacity='1';
		document.querySelector('.index-video').style.marginTop='63px';
	},1000);

	if (document.body.clientWidth>1025){
		let h = window.innerHeight;
		let scrollTop = document.body.scrollTop;

		let fi = document.querySelectorAll('.fade-in-up');
		let fii = document.querySelectorAll('.fade-in-in');

		window.addEventListener('scroll', function() {
			scroll = window.pageYOffset || document.documentElement.scrollTop;
			let sl = parseInt(document.querySelector('.spring-prices .left').offsetTop) - h*.8;
			let slt = parseInt(document.querySelector('.spring-prices .left').offsetTop) + h*.3;
			let skls = parseInt(document.querySelector('.skills').offsetTop) - h*.5;
			let skls1 = parseInt(document.querySelector('.skills').offsetTop) - h*.5 + 4;
			let parrbg = parseInt(document.querySelector('.parrbg').offsetTop) - h*.5;
			let pwbg = parseInt(document.querySelector('.pwbg').offsetTop) - h*.9;
			let pbbg = parseInt(document.querySelector('.pbbg').offsetTop) - h*.5;
			let galpar = parseInt(document.querySelector('.galpar').offsetTop) - h*.5;

			for(i=0;i<fi.length;i++) {
				let f =  parseInt(fi[i].offsetTop) - h*.5;
				fade = scroll > f ? fi[i].classList.remove('fade-in-pass') : fi[i].classList.add('fade-in-pass');
			}
			for(i=0;i<fii.length;i++) {
				fade =  parseInt(fii[i].getBoundingClientRect().top) < h*.5 ? fii[i].classList.remove('fade-in-pass') : fii[i].classList.add('fade-in-pass');
			}
			left = scroll > sl && scroll < slt ? document.querySelector('.spring-prices .left').style.transform='translate(0,0)' : document.querySelector('.spring-prices .left').style.transform='translate(-44vw,0)';

			num = scroll > skls && scroll < skls1 ? nums() :  false;

			pu = Math.round(100 - scroll/10)+'%';
			parrbg = scroll > parrbg ? document.querySelector('.parrbg').style.backgroundPositionY=pu : false;

			pw = Math.round(210 - scroll/10)+'%';
			pwbg = scroll > pwbg ? document.querySelector('.pwbg').style.transform='translateY('+pw+')' : false;

			pb = Math.round(310 - scroll/10)+'%';
			pbbg = scroll > pbbg ? document.querySelector('.pbbg').style.transform='translateY('+pb+')' : false;

			gr = Math.round(450 - scroll/10)+'%';
			pcbg = scroll > galpar ? document.querySelector('.galpar').style.backgroundPositionY=gr : false;
		});
		let nums = function() {
			let sk = document.querySelectorAll('.skills .number');
			let sk1 = 0;
			let sk2 = 0;
			let sk3 = 0;

			n1 = 103;
			n2 = 26;
			n3 = 18;

			si = setInterval(function () {
				sk[0].innerHTML = sk1;	
				sk1++;	
				if(sk1 == n1) {
					clearInterval(si);
				}
			}, 20);	
			si1 = setInterval(function () {
				sk[1].innerHTML = sk2;	
				sk2++;	
				if(sk2 == n2) {
					clearInterval(si1);
				}
			}, 20);	
			si2 = setInterval(function () {
				sk[2].innerHTML = sk3;	
				sk3++;	
				if(sk3 == n3) {
					clearInterval(si2);
				}
			}, 30);	
		}
	}
}
// video start
if(document.querySelector('.index-video .but')) {
	document.querySelector('.index-video .but').onclick = function() {
		document.querySelector('.index-video video').play();
		document.querySelector('.index-video .title').style.opacity='0';
		document.querySelector('.index-video .title').style.visibility='hidden';
	}
}
// index - gallery slide sides
if(document.querySelector('.index-gallery .left-but')) {
	let iw = window.getComputedStyle(document.querySelector('.index-gallery .gallery-inner .item'), null).width;
	let ig = document.querySelector('.gallery-line');
	let gi = ig.getElementsByClassName('item');
	let ww = document.querySelector('.index-gallery .item').offsetHeight;
	let q1 = '-' + ww + 'px';
	let q2 = '-' + Math.round(2* ww) + 'px';
	let q3 = '-' + Math.round(3* ww) + 'px';
	let q4 = '-' + Math.round(4* ww) + 'px';
	let q5 = '-' + Math.round(5* ww) + 'px';
	let q6 = '-' + Math.round(6* ww) + 'px';
	let q7 = '-' + Math.round(7* ww) + 'px';

	if (document.body.clientWidth>1024){
		document.querySelector('.index-gallery .left-but').onclick = function() {
			if(ig.style.left=='-100%') {

			}
			else {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left='-100%';
			}
		}
		document.querySelector('.index-gallery .right-but').onclick = function() {
			if(ig.style.left=='0') {

			}
			else {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left='0';
			}
		}
	}	
	if (document.body.clientWidth>300){
		document.querySelector('.index-gallery .left-but').onclick = function() {
			if(ig.style.left=='0px') {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q1;
			}
			else if(ig.style.left==q1) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q2;
			}
			else if(ig.style.left==q2) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q3;
			}
			else if(ig.style.left==q3) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q4;
			}
			else if(ig.style.left==q4) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q5;
			}
			else if(ig.style.left==q5) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q6;
			}
			else if(ig.style.left==q6) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q7;
			}
			else if(ig.style.left==q7) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left='0px';
			}
		}
		document.querySelector('.index-gallery .right-but').onclick = function() {
			if(ig.style.left=='0px') {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q7;
			}
			else if(ig.style.left==q7) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q6;
			}
			else if(ig.style.left==q6) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q5;
			}
			else if(ig.style.left==q5) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q4;
			}
			else if(ig.style.left==q4) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q3;
			}
			else if(ig.style.left==q3) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q2;
			}
			else if(ig.style.left==q2) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q1;
			}
			else if(ig.style.left==q1) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left='0px';
			}
		}
	}	
}
// sandwich
function sandwich(id){
	style = document.getElementById(id).className;
	if(style=='active'){
		document.getElementById(id).classList.remove('active');
	}else{
		document.getElementById(id).classList.add('active');
	}
}
if (document.body.clientWidth>661) { 
	function sandwichL(id){
		right = document.getElementById(id).style.right;
		if(right=='35px'){
			document.getElementById(id).style.right='380px';
		}else{
			document.getElementById(id).style.right='35px';
		}
	}
}
if (document.body.clientWidth<660) { 
	function sandwichL(id){
		right = document.getElementById(id).style.right;
		if(right=='35px'){
			document.getElementById(id).style.right='300px';
		}else{
			document.getElementById(id).style.right='35px';
		}
	}
}
// sidebar 
function sidebar(id){
	right = document.getElementById(id).style.right;

	if(right=='-350px'){
		document.getElementById(id).style.right='0';
		document.getElementById(id).style.transform='translate(0,0)';
	}else{
		document.getElementById(id).style.right='-350px';
		document.getElementById(id).style.transform='translate(20vw,0)';
	}
}
document.querySelector('.smart-menu a').onclick=function(){
	document.querySelector('.smart-menu').style.right='-350px';
}
// item descriptions accordion buttons
if(document.querySelector('.item-desc .table')) {
	but = document.querySelector('.item-desc ul').getElementsByTagName('li');
	// console.log(but[0])
	tables = document.querySelector('.item-desc').getElementsByClassName('table');
	// console.log(tables[0])

	but[0].onclick = function() {
		but[0].classList.add('active');
		but[1].classList.remove('active');
		but[2].classList.remove('active');
		but[3].classList.remove('active');
		tables[0].style.maxHeight='100vh';
		tables[1].style.maxHeight='0px';
		tables[2].style.maxHeight='0px';
		tables[3].style.maxHeight='0px';
	}
	but[1].onclick = function() {
		but[1].classList.add('active');
		but[0].classList.remove('active');
		but[2].classList.remove('active');
		but[3].classList.remove('active');
		tables[1].style.maxHeight='100vh';
		tables[0].style.maxHeight='0px';
		tables[2].style.maxHeight='0px';
		tables[3].style.maxHeight='0px';
	}
	but[2].onclick = function() {
		but[2].classList.add('active');
		but[1].classList.remove('active');
		but[0].classList.remove('active');
		but[3].classList.remove('active');
		tables[2].style.maxHeight='100vh';
		tables[1].style.maxHeight='0px';
		tables[0].style.maxHeight='0px';
		tables[3].style.maxHeight='0px';
	}
	but[3].onclick = function() {
		but[3].classList.add('active');
		but[1].classList.remove('active');
		but[2].classList.remove('active');
		but[0].classList.remove('active');
		tables[3].style.maxHeight='100vh';
		tables[1].style.maxHeight='0px';
		tables[2].style.maxHeight='0px';
		tables[0].style.maxHeight='0px';
	}
}
// item gallery modal
if(document.querySelector('.prod-gallery .modal-img')) {
	imgs = document.querySelectorAll('.prod-gallery .img');
	mod = document.querySelector('.prod-gallery .modal-img');
	mbg = document.querySelector('.prod-gallery .modal-bg');
	mbg.onclick = function() {
		mod.style.left='-100vw';
		mbg.style.left='-100vw';
	}
	for(i=0;i<imgs.length;i++) {
		imgs[i].removeAttribute('href');
	}
	imgs[0].onclick = function() {
		a = window.getComputedStyle(imgs[0]).background;
		mod.style.background=a;
		mod.style.left='50vw';
		mbg.style.left='0';
	}
	imgs[1].onclick = function() {
		a = window.getComputedStyle(imgs[1]).background;
		mod.style.background=a;
		mod.style.left='50vw';
		mbg.style.left='0';
	}
	imgs[2].onclick = function() {
		a = window.getComputedStyle(imgs[2]).background;
		mod.style.background=a;
		mod.style.left='50vw';
		mbg.style.left='0';
	}
	imgs[3].onclick = function() {
		a = window.getComputedStyle(imgs[3]).background;
		mod.style.background=a;
		mod.style.left='50vw';
		mbg.style.left='0';
	}
}
// prod more slider sides
if(document.querySelector('.prod-more-items')) {
	let iw = window.getComputedStyle(document.querySelector('.prod-more-items .item'), null).width;
	let ig = document.querySelector('.items-wrap');
	let gi = ig.getElementsByClassName('item');
	let ww = document.querySelector('.prod-more-items .item').offsetWidth + 30;
	let q1 = '-' + ww + 'px';
	let q2 = '-' + Math.round(2* ww) + 'px';
	let q3 = '-' + Math.round(3* ww) + 'px';
	let q4 = '-' + Math.round(4* ww) + 'px';
	let q5 = '-' + Math.round(5* ww) + 'px';
	let q6 = '-' + Math.round(6* ww) + 'px';
	let q7 = '-' + Math.round(7* ww) + 'px';

	if (document.body.clientWidth>300){
		document.querySelector('.prod-more-items .nav .right').onclick = function() {
			if(ig.style.left=='0px') {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q1;
			}
			else if(ig.style.left==q1) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q2;
			}
			else if(ig.style.left==q2) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q3;
			}
			else if(ig.style.left==q3) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q4;
			}
			else if(ig.style.left==q4) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q5;
			}
			else if(ig.style.left==q5) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q6;
			}
			else if(ig.style.left==q6) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q7;
			}
			else if(ig.style.left==q7) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left='0px';
			}
		}
		document.querySelector('.prod-more-items .nav .left').onclick = function() {
			if(ig.style.left=='0px') {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q7;
			}
			else if(ig.style.left==q7) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q6;
			}
			else if(ig.style.left==q6) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q5;
			}
			else if(ig.style.left==q5) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q4;
			}
			else if(ig.style.left==q4) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q3;
			}
			else if(ig.style.left==q3) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q2;
			}
			else if(ig.style.left==q2) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left=q1;
			}
			else if(ig.style.left==q1) {
				ig.style.transition='all .4s ease-in-out';
				ig.style.left='0px';
			}
		}
	}	
}
// динамичный фильтр
if(document.querySelector('.port-nav-filter')) {
	let controls = document.querySelector('.port-nav-filter').getElementsByTagName('a');
	let items = document.querySelectorAll('.portfolio-gallery .items a');
	let st = ['i0','i1','i2','i3','i4','i5','i6','i7','i8'];
	// default but
	controls[0].onclick = function() {
		// работа с кнопкой управления
		for(i=0;i<controls.length;i++) {
			controls[i].classList.remove('active');
		}
		controls[0].classList.add('active');
		// удаление классов грид
		for(i=0;i<items.length;i++) {
			for(k=0;k<st.length;k++) {
				items[i].classList.remove(st[k]);
				items[i].classList.remove('i');
				items[i].style.opacity='0';
			}
		}
		// применение фильтра
		ct = controls[0].getAttribute('data-filter');
		for(i=0;i<items.length;i++) {
			items[i].style.display='block';
			(function(i) {
				setTimeout(function(){
					items[i].style.opacity='1';
					items[i].style.visibility='visible';
				}, 400);
			})(i);
		}
	}
	// first but
	controls[1].onclick = function() {
		// работа с кнопкой управления
		for(i=0;i<controls.length;i++) {
			controls[i].classList.remove('active');
		}
		controls[1].classList.add('active');
		// удаление классов грид
		for(i=0;i<items.length;i++) {
			for(k=0;k<st.length;k++) {
				items[i].classList.remove(st[k]);
				items[i].classList.remove('i');
				items[i].style.display='none';
				items[i].style.opacity='0';
			}
		}
		ct = controls[1].getAttribute('data-filter');
		for(i=0;i<items.length;i++) {
			if(items[i].classList.contains(ct)) {
				(function(i) {
					setTimeout(function(){
						items[i].style.opacity='1';
						items[i].style.visibility='visible';
					}, 400);
				})(i);
				items[i].classList.add('i');
				items[i].style.display='block';
			}
			else {
				items[i].style.visibility='hidden';
				items[i].style.opacity='0';
				items[i].style.display='none';

			}
		}
		// добавление классов грид
		fl = document.querySelector('.portfolio-gallery .items').getElementsByClassName('i');
		setTimeout(function() {for(i=0;i<fl.length;i++) {
			fl[i].classList.add('i'+i);
		}},500);
	}
	controls[2].onclick = function() {
		// работа с кнопкой управления
		for(i=0;i<controls.length;i++) {
			controls[i].classList.remove('active');
		}
		controls[2].classList.add('active');
		// удаление классов грид
		for(i=0;i<items.length;i++) {
			for(k=0;k<st.length;k++) {
				items[i].classList.remove(st[k]);
				items[i].classList.remove('i');
				items[i].style.display='none';
				items[i].style.opacity='0';
			}
		}
		// применение фильтра
		ct = controls[2].getAttribute('data-filter');
		for(i=0;i<items.length;i++) {
			if(items[i].classList.contains(ct)) {
				(function(i) {
					setTimeout(function(){
						items[i].style.opacity='1';
						items[i].style.visibility='visible';
					}, 400);
				})(i);
				items[i].style.display='block';

				items[i].classList.add('i');
			}
			else {
				items[i].style.opacity='0';
				items[i].style.visibility='hidden';
				items[i].style.display='none';

			}
		}
		// добавление классов грид
		fl = document.querySelector('.portfolio-gallery .items').getElementsByClassName('i');
		setTimeout(function() {for(i=0;i<fl.length;i++) {
			fl[i].classList.add('i'+i);
		}},500);
	}
	controls[3].onclick = function() {
		// работа с кнопкой управления
		for(i=0;i<controls.length;i++) {
			controls[i].classList.remove('active');
		}
		controls[3].classList.add('active');
		// удаление классов грид
		for(i=0;i<items.length;i++) {
			for(k=0;k<st.length;k++) {
				items[i].classList.remove(st[k]);
				items[i].classList.remove('i');
				items[i].style.display='none';
				items[i].style.opacity='0';
			}
		}
		// применение фильтра
		ct = controls[3].getAttribute('data-filter');
		console.log(ct)
		for(i=0;i<items.length;i++) {
			if(items[i].classList.contains(ct)) {
				(function(i) {
					setTimeout(function(){
						items[i].style.opacity='1';
						items[i].style.visibility='visible';
					}, 400);
				})(i);
				items[i].style.display='block';
				items[i].classList.add('i');
			}
			else {
				items[i].style.opacity='0';
				items[i].style.visibility='hidden';
				items[i].style.display='none';
			}
		}
		// добавление классов грид
		fl = document.querySelector('.portfolio-gallery .items').getElementsByClassName('i');
		setTimeout(function() {for(i=0;i<fl.length;i++) {
			fl[i].classList.add('i'+i);
		}},500);
	}
}
// Ширина контента в зависимости от бокового меню
if(document.querySelector('.left-side')) {
	if (document.body.clientWidth<1500){ 
		let mainArea = document.querySelectorAll('main section');
		let leftSide = document.querySelector('.left-side');
		let w = window.innerWidth;
		let calc = w - Math.round(parseInt(window.getComputedStyle(document.querySelector('.left-side'), null).width) * 2 + 60);
		for(i=0;i<mainArea.length;i++) {
			mainArea[i].style.maxWidth=calc+'px';
		}
	}
	if (document.body.clientWidth<1500){ 
		let mainArea = document.querySelectorAll('main > div');
		let leftSide = document.querySelector('.left-side');
		let w = window.innerWidth;
		let calc = w - Math.round(parseInt(window.getComputedStyle(document.querySelector('.left-side'), null).width) * 2 + 60);
		for(i=0;i<mainArea.length;i++) {
			mainArea[i].style.maxWidth=calc+'px';
		}
	}
	if (document.querySelector('.portfolio-body')){ 
		let mainArea = document.querySelectorAll('main .wrap');
		let leftSide = document.querySelector('.left-side');
		let w = window.innerWidth;
		let calc = w - Math.round(parseInt(window.getComputedStyle(document.querySelector('.left-side'), null).width) * 2 + 60);
		for(i=0;i<mainArea.length;i++) {
			mainArea[i].style.maxWidth=calc+'px';
		}
	}
}
// pinterset галерея
if(document.querySelector('.portfolio-gallery')) {
	portItems = document.querySelectorAll('.portfolio-gallery .items a');
	minIt = 150;
	maxIt = 350;
	for(i=0;i<portItems.length;i++) {
		function randomInteger(min, max) {
			var rand = min - 0.5 + Math.random() * (max - min + 1)
			rand = Math.round(rand);
			return rand;
		}
		portItems[i].style.paddingTop=randomInteger(minIt, maxIt)+'px';
	}
}