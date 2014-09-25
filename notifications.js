var docc=document;
var Noty = {
	pos:0,
	show: function(text,desc,icon,secondicon,theme,action){
		var mdiv=docc.createElement('div');
		var ndstl="";
		var num=1;
		(theme!=undefined)?((theme!="d")?theme="NotyW":theme="NotyW NotyB"):theme="NotyW";
		mdiv.className=theme;
		action!=undefined?mdiv.onclick=action : false;
		icon!="favicon"? false:icon="/favicon.ico";
		secondicon!="favicon"? false:secondicon="/favicon.ico";
		mdiv.innerHTML+='<div style="position:relative">'
		icon!=undefined? mdiv.innerHTML+= '<img src="'+icon+'">': false;
		secondicon!=undefined? mdiv.innerHTML+='<img class="NoRightI" src="'+secondicon+'">':false;
		secondicon!=undefined? ndstl='style="margin-right:40px;"': false;
		mdiv.innerHTML+=text;
		desc!=undefined? mdiv.innerHTML+='<div class="NoDesc"'+ndstl+'>'+desc+'</div>':false;
		mdiv.innerHTML+='</div>';
		//mdiv.id="q"+parseInt(Math.random()*1000);
		var rdiv=docc.body.appendChild(mdiv);
   while(rdiv.childNodes[num].nodeName!="DIV"){num++;}
   setTimeout(function(){
     if(rdiv.childNodes[num].offsetHeight>17){
     	rdiv.childNodes[num].innerHTML='<marquee>'+rdiv.childNodes[num].innerHTML+'</marquee>';
     }
   },60);
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