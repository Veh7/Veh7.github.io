"use strict";(self.webpackChunkmyBlog_aurora=self.webpackChunkmyBlog_aurora||[]).push([[4674],{4674:(a,e,t)=>{let n,o,l,h,r,i,c,s,d,u,p,f;function m(){o.clearRect(0,0,l,h);for(let a in r)r[a].draw();requestAnimationFrame(m)}function b(){let a=this;function e(){a.pos.x=Math.random()*l,a.pos.y=h+100*Math.random(),a.alpha=.1+Math.random()*c,a.alpha_change=2e-4+Math.random()*s,a.scale=.2+Math.random()*d,a.scale_change=Math.random()*u,a.speed=.1+Math.random()*p}a.pos={},e(),this.draw=function(){a.alpha<=0&&e(),a.pos.y-=a.speed,a.alpha-=a.alpha_change,a.scale+=a.scale_change,o.beginPath(),o.arc(a.pos.x,a.pos.y,10*a.scale,0,2*Math.PI,!1),o.fillStyle="rgba("+f+","+a.alpha+")",o.fill()}}function g(a,e,t,g,w,y,M){i=a,c=e,s=t,d=g,u=w,p=y,f=M,function(){n=document.getElementById("aurora-bubble-canvas"),function(){l=window.innerWidth,h=window.innerHeight;let a=document.getElementById("aurora-bubble-box");l=a.offsetWidth,h=a.offsetHeight,n.width=l,n.height=h}(),o=n.getContext("2d"),r=[];let a=l*i;for(let e=0;e<a;e++){let a=new b;r.push(a)}m()}()}t.r(e),t.d(e,{bubble:()=>g})}}]);