// JavaScript Document



function distinctChange()
{
	var cityTag=document.getElementById("city").value;
	switch(cityTag)
	{
		case "zh":document.getElementById("distinct").innerHTML="<option>香洲区</option><option>唐家湾</option>"
		break;
		
		case "sz":document.getElementById("distinct").innerHTML="<option>龙岗区</option><option>南山区</option>"
		break;
		
		case "gz":document.getElementById("distinct").innerHTML="<option>天河区</option><option>白云区</option>"
		break;
	}
	
}

function dreset()
{
setTimeout("distinctChange()",10);
}

setTimeout("distinctChange()",10);