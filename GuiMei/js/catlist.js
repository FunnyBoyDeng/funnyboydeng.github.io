// JavaScript Document

window.onload = function(){
	var aCk = document.getElementById('all');
	
	var Ck = document.getElementsByName('fir');
	
	aCk.onclick = function(){
		for(var i = 0; i<Ck.length;i++){
			Ck[i].checked = aCk.checked;
		}
	};
};