!function(t){var e={};function i(a){if(e[a])return e[a].exports;var n=e[a]={i:a,l:!1,exports:{}};return t[a].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=e,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e){document.addEventListener("DOMContentLoaded",function(t){function e(){this.x=Math.floor(10*Math.random()),this.y=Math.floor(10*Math.random())}document.addEventListener("keydown",function(t){i.turnMadcat(t)});var i=new function(){this.board=document.querySelectorAll("#board div"),this.madcat=new function(){this.x=0,this.y=0,this.direction="right"},this.ball=new e,this.score=0,this.index=function(t,e){return t+10*e},this.isOver=!1,this.showMadcat=function(){this.board[this.index(this.madcat.x,this.madcat.y)].classList.add("madcat")},this.showBall=function(){this.board[this.index(this.ball.x,this.ball.y)].classList.add("ball")},this.startGame=function(){var t=this;this.showMadcat(),this.showBall(),this.idSetInterval=setInterval(function(){t.moveMadcat()},250)},this.moveMadcat=function(){this.hideVisibleMadcat(),"right"===this.madcat.direction?this.madcat.x=this.madcat.x+1:"left"===this.madcat.direction?this.madcat.x=this.madcat.x-1:"up"===this.madcat.direction?this.madcat.y=this.madcat.y-1:"down"===this.madcat.direction&&(this.madcat.y=this.madcat.y+1),this.checkBallCollision(),this.gameOver(),this.isOver?(document.querySelector("div").classList.add("invisible"),document.querySelector("#board").innerHTML="<h1>GAME OVER!</h1><h3>your score: </h3><h2></h2>",document.querySelector("#board > h2").innerHTML=this.score+" points"):this.showMadcat()},this.hideVisibleMadcat=function(){document.querySelector(".madcat").classList.remove("madcat")},this.turnMadcat=function(t){switch(t.which){case 37:this.madcat.direction="left";break;case 38:this.madcat.direction="up";break;case 39:this.madcat.direction="right";break;case 40:this.madcat.direction="down"}},this.checkBallCollision=function(){this.madcat.x===this.ball.x&&this.madcat.y===this.ball.y&&(document.querySelector(".ball").classList.remove("ball"),this.ball=new e,this.showBall(),this.score+=1,document.querySelector("#score div strong").innerHTML=this.score)},this.gameOver=(()=>{(this.madcat.x<0||this.madcat.y<0||this.madcat.x>9||this.madcat.y>9)&&(clearInterval(this.idSetInterval),this.isOver=!0)})};i.startGame()})}]);