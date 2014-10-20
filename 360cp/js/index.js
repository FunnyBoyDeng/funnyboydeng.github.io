// JavaScript Document

window.onload = function(){
	var oDivPic = document.getElementById('bigPicBox');
	
	var oImg = oDivPic.getElementsByTagName('img')[0];
	var oUl = oDivPic.getElementsByTagName('ul')[0];
	var aLi = oDivPic.getElementsByTagName('li');
	
	var picSrc = ['img/1.png','img/2.png','img/3.png','img/4.png'];
	
	//var cur = null ; //当前li
	var num = 0;
	
	
	function chPic(){
		aLi[num].className = 'normal';
		num++;
		if(num>3)
			num=0;
		oImg.src = picSrc[num];
		aLi[num].className = 'normal cur';
		//alert(1);
	}
	setInterval(chPic,1500);
	
	
	
};