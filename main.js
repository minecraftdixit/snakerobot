var TxtType=function(t,e,n){this.toRotate=e,this.el=t,this.loopNum=0,this.period=parseInt(n,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var t=this.loopNum%this.toRotate.length,e=this.toRotate[t];this.isDeleting?this.txt=e.substring(0,this.txt.length-1):this.txt=e.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var n=this,i=200-100*Math.random();this.isDeleting&&(i/=2),this.isDeleting||this.txt!==e?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,i=500):(i=this.period,this.isDeleting=!0),setTimeout(function(){n.tick()},i)},window.onload=function(){for(var t=document.getElementsByClassName("typewrite"),e=0;e<t.length;e++){var n=t[e].getAttribute("data-type"),i=t[e].getAttribute("data-period");n&&new TxtType(t[e],JSON.parse(n),i)}var o=document.createElement("style");o.type="text/css",o.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #f11414}",document.body.appendChild(o)};const countEl=document.getElementById("count");function updateVisitCount(){fetch("https://api.countapi.xyz/update/snakerobot.netlify.app/19b024a8-225e-4516-b747-729628671c7c/?amount=1").then(t=>t.json()).then(t=>{countEl.innerHTML=t.value})}function copyFunction(){const t=document.getElementById("myInput").textContent,e=document.createElement("textarea");e.textContent=t,document.body.append(e),e.select(),document.execCommand("copy"),alert("text is copied")}updateVisitCount(),document.getElementById("button").addEventListener("click",copyFunction);