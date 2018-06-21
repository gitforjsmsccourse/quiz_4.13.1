console.log('you are at ' + window.location);

//document.getElementsByTagName('div')
//document.getElementsByClassName('myClassName')
//document.getElementsById('myIdName')
//document.querySelector('anySelector')
//document.querySelectorAll('allSelector')

const buttonRequest = document.querySelector('.request');
const elClosePopup = document.querySelector('.closePopup');
const popupBlock = document.querySelector('.popup');
const menu = document.querySelector('.menu');
const openMenuButton = document.querySelector('.openMenu');
const closeMenuButton = document.querySelector('.closeMenu');


buttonRequest.addEventListener('click', function(){
	popupBlock.style.display = 'flex';
});

elClosePopup.addEventListener('click', function(){
	popupBlock.style.display = 'none';
});

openMenuButton.addEventListener('click', function(){
	menu.style.left = '0';
});

closeMenuButton.addEventListener('click', function(){
	menu.style.left = '-50vw';
})