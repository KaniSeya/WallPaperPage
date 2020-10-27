// JavaScript Document


function show(i)
{
	document.getElementById("d"+i).style.height="40px";
	document.getElementById("d"+i).style.backgroundColor="rgba(0,0,0,0.6)";
	document.getElementById("d"+i).style.border="1px solid rgba(0,0,0,0.8)";
	document.getElementById("d"+i).style.transition="0.5s";
}

function hide(i)
{
	document.getElementById("d"+i).style.height="0px";
	document.getElementById("d"+i).style.border="1px";
	//document.getElementById("d"+i).style.overflow="hidden";
}