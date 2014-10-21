// JavaScript Document

window.onload = function(){
	var oDiv = document.getElementById('chPic');//得到包图片的DIV
	var aA = oDiv.getElementsByTagName('a');//得到所有a标签
	var srcPic = ['images/ad-01.jpg','images/ad-02.jpg','images/ad-03.jpg','images/ad-04.jpg'];//保存图片路径
	var oImg = document.getElementById('bigPic');//得到img
	var num = 0;//当前显示图片编号
	var leftNum = 0;//上一张
	init();
	setInterval(change,2000);
	
	var len = srcPic.length;
	for(var i=0;i<len;i++){
		aA[i].index = i;
		aA[i].onclick = function(){
			leftNum = num;
			num = this.index;
			init();
		}
	}
	
	function init(){
		aA[leftNum].className = '';
		oImg.src = srcPic[num];
		aA[num].className = 'active';
	};
	
	function change(){
		leftNum = num;
		num++;
		if(num>=len){
			num=0;
		}
		init();
	};
};