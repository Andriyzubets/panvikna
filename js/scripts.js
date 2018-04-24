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
		var
		scroll = window.pageYOffset || document.documentElement.scrollTop;
		height = scroll > menu ? document.querySelector('.bottom-header').classList.add('fixed') : document.querySelector('.bottom-header').classList.remove('fixed');
	});
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