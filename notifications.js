var docc=document;
var Noty = {
	pos:0,
	show: function(text,desc,icon,secondicon,theme,action){
		var mdiv=docc.createElement('div');
		(theme!=undefined)?((theme!="d")?theme="NotyW":theme="NotyW NotyB"):theme="NotyW";
		mdiv.className=theme;
		action!=undefined?action=' onclick="('+action+')()"': action='';
		icon!="favicon"? false:icon="/favicon.ico";
		secondicon!="favicon"? false:secondicon="/favicon.ico";
		mdiv.innerHTML+='<div style="position:relative">'
		icon!=undefined? mdiv.innerHTML+= '<img src="'+icon+'">': false;
		secondicon!=undefined? mdiv.innerHTML+='<img'+action+' class="NoRightI" src="'+secondicon+'">':false;
		mdiv.innerHTML+=text;
		desc!=undefined? mdiv.innerHTML+='<div class="NoDesc">'+desc+'</div>':false;
		mdiv.innerHTML+='</div>';
		mdiv.id="q"+parseInt(Math.random()*1000);
		var rdiv=docc.body.appendChild(mdiv);
		setTimeout(function(){rdiv.style.opacity=1},100);
		setTimeout(function(){
		rdiv.style.top=(4+Noty.pos)+"px";
		Noty.pos+=44;
		},120);
		setTimeout(function(){rdiv.style.opacity=0},5300);
		setTimeout(function(){
			rdiv.style.top="-40px";
			Noty.pos+=-44;
			},5010);
		setTimeout(function(){rdiv.parentNode.removeChild(rdiv)},7010);
		
	}
}