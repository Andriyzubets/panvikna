function heightbox(id){
	height = document.getElementById(id).style.maxHeight;

	if(height=='0px'){
		document.getElementById(id).style.maxHeight='100vh';
	}else{
		document.getElementById(id).style.maxHeight='0px';
	}
}
// video start
document.querySelector('.index-video .but').onclick = function() {
	document.querySelector('.index-video video').play();
	document.querySelector('.index-video .title').style.opacity='0';
	document.querySelector('.index-video .title').style.visibility='hidden';
}
// index - gallery
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