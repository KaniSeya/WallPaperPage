// JavaScript Document

var i=1;
var Time=setInterval("rchange()",5000);
function rchange()
{
	clearInterval(Time);
	var Tag=document.getElementById("frame");
	i++;
	if(i==7)i=1;
	Tag.src="images/"+i+".jpg";
	press(i);
	Time=setInterval("rchange()",5000);
}



function lchange()
{
	clearInterval(Time);
	var Tag=document.getElementById("frame");
	i--;
	if(i==0)i=6;
	Tag.src="images/"+i+".jpg";
	press(i);
	Time=setInterval("rchange()",5000);
}


function press(i)
{
	for(var c=1;c<=6;c++)
	{
		if(c==i)
		{
			var bTag=document.getElementById("btn"+i);
	        bTag.style.backgroundColor="rgba(255,255,255,0.3)";
	        bTag.style.borderColor="rgba(255,255,255,0.3)";
		}
		else
		{
			var bTag=document.getElementById("btn"+c);
	        bTag.style.backgroundColor="rgba(0,0,0,0.3)";
	        bTag.style.borderColor="rgba(0,0,0,0.3)";
		}
	}
}

function b(c)
{
	clearInterval(Time);
	press(c);
	document.getElementById("frame").src="images/"+c+".jpg";
	i=c;
	Time=setInterval("rchange()",5000);
}