/**
 * freebitco.in autoclicker v1.0
 * https://github.com/gabigutu/freebitco-in-autoclicker
 * 
 * Date: 2017:07:21
 * @author	Berilac <office@berilac.com>
 */
var myInterval;
var dateToTime = function(date) {
	var time = ('0'  + date.getHours()).slice(-2) + ":"  
                + ('0'  + date.getMinutes()).slice(-2) + ":" 
                + ('0'  + date.getSeconds()).slice(-2);
    return time;
}
var bfbiaTimeNow = function() {
	var currentdate = new Date(); 
	return dateToTime(currentdate);
}
var bfbiaSetTimeNow = function() {
	document.getElementById("bfbia_timenow").innerHTML = bfbiaTimeNow();
}
var bfbiaGetTimer = function() {
	return document.getElementById("bfbia_timer").value;
}
var bfbiaNextRun = function() {
	var d = new Date(); 
	var d1 = new Date(d.getTime() + bfbiaGetTimer() * 1000);
	return dateToTime(d1);
}
bfbiaEnable = function() {
	document.getElementById("bfbia_enabled").style.display = 'inline';
	document.getElementById("bfbia_disabled").style.display = 'none';
	document.getElementById("bfbia_nextrun").innerHTML = bfbiaNextRun();
	myInterval = setInterval(function(){
		bfbiaClickButton();
		document.getElementById("bfbia_nextrun").innerHTML = bfbiaNextRun();
	}, bfbiaGetTimer() * 1000);
}
var bfbiaDisable = function() {
	document.getElementById("bfbia_enabled").style.display = 'none';
	document.getElementById("bfbia_disabled").style.display = 'inline';	
	clearInterval(myInterval);
	document.getElementById("bfbia_nextrun").innerHTML = "";
}
var bfbiaClickButton = function() {
	var button = document.getElementById("free_play_form_button");
	button.click();
	document.getElementById("bfbia_lastclick").innerHTML = bfbiaTimeNow();
}

var addToBody = document.createElement('div');
addToBody.setAttribute('id', "berilac_freebitco_in_autoclicker");
var content = '<div id="bfbia_left"><span class="bfbia_title">Berilac <span class="bfbia_logo"><span class="bfbia_free">free</span><span class="bfbia_bitcoin">bitco.in</span></span><br /> autoclicker</span></div>' +
	'<div id="bfbia_center">' +
	'<button id="bfbia_button_click">Click now</button>' + 		
	'Timer: <input type="number" id="bfbia_timer" value="3605" /> seconds<br />' + 	
	'<span id="bfbia_enabled" style="display: none;">' +
	'	<button onclick="bfbiaDisable();">Disable autoclicker</button>' +
	'	<span style="color: green;">Autoclicker enabled</span>' +	
	'</span>' + 
	'<span id="bfbia_disabled">' +
	'	<button id="bfbia_button_enable">Enable autoclicker</button>' + 
	'	<span style="color: red;">Autoclicker disabled</span>' + 	
	'</span>' +
	'</div>' + 
	'<div id="bfbia_right">' +
	'Current local time: <span id="bfbia_timenow"></span><br />' + 
	'Last click: <span id="bfbia_lastclick"></span><br />' +
	'Next autoclick at: <span id="bfbia_nextrun"></span><br />' + 
	'</div>';
addToBody.innerHTML = content;
document.body.prepend(addToBody);
document.getElementById('bfbia_button_click').onclick = function() { bfbiaClickButton(); }
document.getElementById('bfbia_button_enable').onclick = function() { bfbiaEnable(); }

bfbiaSetTimeNow();
setInterval(function() {
	bfbiaSetTimeNow();
}, 1000);

