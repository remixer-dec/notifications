
var Noty = {
	pos:0,
	show: function(text,desc,icon,secondicon,theme,alive){
		var mdiv=document.createElement('div');
		(theme!=undefined)?((theme!="d")?theme="NotyW":theme="NotyW NotyB"):theme="NotyW";
		mdiv.className=theme;
		icon!="favicon"? false:icon="/favicon.ico";
		secondicon!="favicon"? false:secondicon="/favicon.ico";
		mdiv.innerHTML+='<div style="position:relative">'
		
		icon!=undefined? mdiv.innerHTML+= '<img src="'+icon+'">': false;
   secondicon!=undefined? mdiv.innerHTML+='<img class="NoRightI" src="'+secondicon+'">':false;
   mdiv.innerHTML+=text;
   desc!=undefined? mdiv.innerHTML+='<div class="NoDesc">'+desc+'</div>':false;
   mdiv.innerHTML+='</div>';
   mdiv.id="q"+parseInt(Math.random()*1000);
   /*mdiv.style.top="-40px";*/
   //alert(4+this.pos+"px")
   var rdiv=document.body.appendChild(mdiv);
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
   setTimeout(function(){rdiv.remove()},7010);

	}
}