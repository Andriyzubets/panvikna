function heightbox(id){
	height = document.getElementById(id).style.maxHeight;

	if(height=='0px'){
		document.getElementById(id).style.maxHeight='100vh';
	}else{
		document.getElementById(id).style.maxHeight='0px';
	}
}

// scroll
if(document.querySelector('.bottom-header')) {
	let menu = parseInt(document.querySelector('.bottom-header').offsetTop);

	let scrollTop = document.body.scrollTop;
	window.addEventListener('scroll', function() {
		scroll = window.pageYOffset || document.documentElement.scrollTop;
		height = scroll > menu ? document.querySelector('.bottom-header').classList.add('fixed') : document.querySelector('.bottom-header').classList.remove('fixed');
	});
	document.querySelector('.header .emp').style.height=window.getComputedStyle(document.querySelector('.bottom-header'), null).height;
}
if(document.querySelector('.left-side')) {
	let sideTop = parseInt(document.querySelector('.left-side').offsetTop) - parseInt(window.getComputedStyle(document.querySelector('.bottom-header'), null).height) - 100;
	let sideHeight = parseInt(window.getComputedStyle(document.querySelector('.left-side'), null).height);
	
	let scrollTop = document.body.scrollTop;
	window.addEventListener('scroll', function() {
		scroll = window.pageYOffset || document.documentElement.scrollTop;
		side = scroll > sideTop ? document.querySelector('.left-side').classList.add('fixed') : document.querySelector('.left-side').classList.remove('fixed');
	});
}
// animation
if(document.querySelector('.body-main-page')) {
	// проявление элементов при загрузке
	window.onload = setTimeout(function () {
		document.querySelector('.upper-header').style.opacity='1';

	},200);
	window.onload = setTimeout(function () {
		document.querySelector('.middle-header').style.opacity='1';
		document.querySelector('.middle-header').style.marginTop='0';
	},400);
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
// index - gallery
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
function sandwichL(id){
	right = document.getElementById(id).style.right;
	if(right=='35px'){
		document.getElementById(id).style.right='380px';
	}else{
		document.getElementById(id).style.right='35px';
	}
}
// sidebar 
function sidebar(id){
	right = document.getElementById(id).style.right;

	if(right=='-350px'){
		document.getElementById(id).style.right='0';
	}else{
		document.getElementById(id).style.right='-350px';
	}
}

document.querySelector('.smart-menu a').onclick=function(){
	document.querySelector('.smart-menu').style.right='-350px';
}
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
// prod more slider
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
			}
		}
		// применение фильтра
		ct = controls[0].getAttribute('data-filter');
		for(i=0;i<items.length;i++) {
			items[i].style.opacity='1';
			items[i].style.visibility='visible';
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
			}
		}
		// применение фильтра
		ct = controls[1].getAttribute('data-filter');
		for(i=0;i<items.length;i++) {
			if(items[i].classList.contains(ct)) {
				items[i].style.opacity='1';
				items[i].style.visibility='visible';
				items[i].classList.add('i');
			}
			else {
				items[i].style.visibility='hidden';
				items[i].style.opacity='0';
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
			}
		}
		// применение фильтра
		ct = controls[2].getAttribute('data-filter');
		for(i=0;i<items.length;i++) {
			if(items[i].classList.contains(ct)) {
				items[i].style.opacity='1';
				items[i].style.visibility='visible';
				items[i].classList.add('i');
			}
			else {
				items[i].style.opacity='0';
				items[i].style.visibility='hidden';
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
			}
		}
		// применение фильтра
		ct = controls[3].getAttribute('data-filter');
		console.log(ct)
		for(i=0;i<items.length;i++) {
			if(items[i].classList.contains(ct)) {
				items[i].style.opacity='1';
				items[i].style.visibility='visible';
				items[i].classList.add('i');
			}
			else {
				items[i].style.opacity='0';
				items[i].style.visibility='hidden';
				
			}
		}
		// добавление классов грид
		fl = document.querySelector('.portfolio-gallery .items').getElementsByClassName('i');
		setTimeout(function() {for(i=0;i<fl.length;i++) {
			fl[i].classList.add('i'+i);
		}},500);
	}
}

if (document.querySelector('.catalog-page .numbers')) {
	let nums = document.querySelectorAll('.numbers li');
	// активные кнопки
	nums[0].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[0].classList.add('active');
		for(i=0;i<nums.length;i++) {
			if(i>k+4 && i<9) {
				nums[i].style.display='none';
				nums[k+4].innerHTML='...';
			}
		}
	}
	nums[1].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[1].classList.add('active');
		
	}
	nums[2].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[2].classList.add('active');
		for(i=0;i<nums.length;i++) {
			nums[4].innerHTML='5';
			nums[5].style.display='block';
			nums[5].innerHTML='...';

			if(i>5 && i<9) {
				nums[i].style.display='none';
				// nums[5].innerHTML='...';
			}
		}
	}
	nums[3].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[3].classList.add('active');
		for(i=0;i<nums.length;i++) {
			nums[5].innerHTML='6';
			nums[6].style.display='block';
			nums[1].style.display='block';
			nums[1].innerHTML='2';


			nums[6].innerHTML='...';

			if(i>5 && i<9) {
				nums[i].style.display='none';
			}
		}
	}
	nums[4].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[4].classList.add('active');
		for(i=0;i<nums.length;i++) {
			nums[6].innerHTML='7';
			nums[7].style.display='block';
			nums[2].style.display='block';

			nums[7].innerHTML='...';
			nums[1].innerHTML='...';

			if(i>6 && i<9) {
				nums[i].style.display='none';
			}
		}
	}
	nums[5].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[5].classList.add('active');
		for(i=0;i<nums.length;i++) {
			nums[7].innerHTML='8';
			nums[8].style.display='block';
			nums[8].innerHTML='...';
			nums[1].innerHTML='...';

			if(i>7 && i<9) {
				nums[i].style.display='none';
				nums[2].style.display='none';
			}
		}
	}
	nums[6].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[6].classList.add('active');
		for(i=0;i<nums.length;i++) {
			nums[8].innerHTML='9';
			nums[9].style.display='block';
			// nums[9].innerHTML='...';
			// nums[1].innerHTML='...';

			if(i>8 && i<9) {
				nums[i].style.display='none';
				nums[2].style.display='none';
				nums[3].style.display='none';
			}
		}
	}
	nums[7].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[7].classList.add('active');
	}
	nums[8].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[8].classList.add('active');
	}
	nums[9].onclick = function() {
		for(i=0;i<nums.length;i++) {
			nums[i].classList.remove('active');
		}
		nums[9].classList.add('active');
	}
	// цифры
	for(k=0;k<nums.length;k++) {
		if(nums[k].classList.contains('active')) {
			for(i=0;i<nums.length;i++) {
				if(i>k+4 && i<9) {
					nums[i].style.display='none';
					nums[k+4].innerHTML='...';
				}
			}
		}
	}
}