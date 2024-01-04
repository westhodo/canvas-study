(function(e){function t(t){for(var s,r,l=t[0],a=t[1],h=t[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&u.push(o[r][0]),o[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);c&&c(t);while(u.length)u.shift()();return n.push.apply(n,h||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],s=!0,l=1;l<i.length;l++){var a=i[l];0!==o[a]&&(s=!1)}s&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},o={app:0},n=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/canvas-study/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var c=a;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"2e89":function(e,t,i){e.exports=i.p+"img/4.3216a200.svg"},"3d87":function(e,t,i){e.exports=i.p+"img/5.72122cb8.svg"},"438d":function(e,t,i){},"4eac":function(e,t,i){e.exports=i.p+"img/2.59de20e6.svg"},"56d7":function(e,t,i){"use strict";i.r(t);var s=i("7a23");function o(e,t,i,o,n,r){const l=Object(s["k"])("game");return Object(s["i"])(),Object(s["c"])(l)}var n=i("ba5a"),r=i.n(n),l=i("5904"),a=i.n(l);const h={class:"box"},c={key:0},d=Object(s["f"])("img",{src:r.a,alt:""},null,-1),u=[d],p={key:0,src:a.a,alt:""};function m(e,t,i,o,n,r){return Object(s["i"])(),Object(s["e"])("div",{class:Object(s["g"])(["container",{pc:!n.isMobile}])},[n.gameOver||n.complete?(Object(s["i"])(),Object(s["e"])("div",{key:0,class:Object(s["g"])(["overlay",{success:n.complete}]),style:Object(s["h"])(`width:${this.renderOptions.width}px; height: ${this.renderOptions.height}px; zoom: ${n.isMobile?n.zoom:1};`)},[Object(s["f"])("div",h,[Object(s["f"])("div",{class:Object(s["g"])(["line",{start:n.gameOver||n.complete}])},[Object(s["f"])("p",null,Object(s["l"])(n.complete?"성공":"실패"),1),n.complete?(Object(s["i"])(),Object(s["e"])("ul",c,[(Object(s["i"])(),Object(s["e"])(s["a"],null,Object(s["j"])(5,e=>Object(s["f"])("li",{key:e},u)),64))])):Object(s["d"])("",!0)],2),n.complete?(Object(s["i"])(),Object(s["e"])("img",p)):Object(s["d"])("",!0),Object(s["f"])("button",{onClick:t[0]||(t[0]=(...e)=>r.init&&r.init(...e))},"RETRY")])],6)):Object(s["d"])("",!0),Object(s["f"])("canvas",{ref:"ctx",onMouseover:t[1]||(t[1]=e=>n.isMouseEvt=!0),onMouseup:t[2]||(t[2]=e=>n.isClickEvt=!1),onMousedown:t[3]||(t[3]=e=>n.isClickEvt=n.isMouseEvt),onMouseout:t[4]||(t[4]=e=>n.isMouseEvt=!1),onMousemove:t[5]||(t[5]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e)),onClick:t[6]||(t[6]=(...e)=>r.clickEvtHandler&&r.clickEvtHandler(...e)),onTouchend:t[7]||(t[7]=(...e)=>r.clickEvtHandler&&r.clickEvtHandler(...e)),onTouchstart:t[8]||(t[8]=Object(s["m"])((...e)=>r.touchEvtHandler&&r.touchEvtHandler(...e),["stop","prevent"])),onTouchmove:t[9]||(t[9]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e))},null,544)],2)}var b=i("b8bf"),v=i("d561"),g=i.n(v),f=i("4eac"),y=i.n(f),w=i("f464"),O=i.n(w),x=i("2e89"),B=i.n(x),j=i("3d87"),E=i.n(j),M=i("82f2"),z=i.n(M),k=i("d52d"),C=i.n(k),S=i("896a"),R=i.n(S),H=i("c2d9"),A=i.n(H),X=i("7feb"),$=i.n(X),P=i("a53e"),W=i.n(P),T={name:"game",components:{},computed:{},mounted(){this.init(),window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},methods:{init(){this.engine=this.Engine.create(),this.world=this.engine.world,this.render=this.Render.create({element:this.$el,engine:this.engine,canvas:this.$refs.ctx,options:this.renderOptions});const e=this.renderOptions.width,t=this.renderOptions.height,i=5,s=2,o=this.Bodies.rectangle(e/2,t,e,50,this.customRender("transparent")),n=this.Bodies.rectangle(s,t/2,i,e+t,this.customRender("transparent")),r=this.Bodies.rectangle(e-s,t/2,i,e+t,this.customRender("transparent"));this.World.add(this.engine.world,[o,n,r]),this.Runner.run(this.engine),this.Render.run(this.render),this.Events.on(this.engine,"beforeUpdate",this.beforeUpdate),this.start(),this.resize(),this.Events.on(this.engine,"collisionActive",this.crushBallEvtHandler),this.Events.on(this.engine,"collisionStart",this.crushBallEvtHandler),this.Events.on(this.render,"afterRender",this.afterRender),this.Render.lookAt(this.render,{min:{x:0,y:0},max:{x:this.renderOptions.width,y:this.renderOptions.height}})},start(){this.gameOver=!1,this.complete=!1,this.ball=null,this.engine.timing.timeScale=1,this.score=0;while(this.engine.world.bodies.length>4)this.engine.world.bodies.pop();this.createBall(1)},createBall(e){this.ball=this.newBall(this.render.options.width/2,50,e),this.ball.collisionFilter={group:-1,category:2,mask:0},this.World.add(this.engine.world,this.ball)},newBall(e,t,i){const s=this.Bodies.circle(e,t,10*i,{render:{sprite:{texture:this.iconArray[i-1],xScale:i/12.75,yScale:i/12.75}}});return s.size=i,s.createdAt=Date.now(),s.restitution=.3,s.friction=.1,s},customRender(e){return{isStatic:!0,render:{fillStyle:e}}},beforeUpdate(){if(this.gameOver)return;if(this.ball){const e=this.engine.world.gravity;if(this.Body.applyForce(this.ball,this.ball.position,{x:-e.x*e.scale*this.ball.mass,y:-e.y*e.scale*this.ball.mass}),this.isClickEvt&&this.getMouseXpos){this.ball.position.x=this.getMouseXpos;const e={1:15,2:25,3:35}[this.ball.size],t=this.isMobile?window.innerWidth+20:this.render.canvas.width-5;this.getMouseXpos>t?this.ball.position.x=t-e:this.getMouseXpos<e&&(this.ball.position.x=e)}this.ball.position.y=50}const e=b["Composite"].allBodies(this.engine.world);for(let t=4;t<e.length;t++)this.body=e[t],this.body.position.y<100&&this.body!==this.ball&&Math.abs(this.body.velocity.x)<.2&&Math.abs(this.body.velocity.y)<.2&&this.gameEnd(),this.body.position.y<150&&this.body!==this.ball&&Math.abs(this.body.velocity.x)<.2&&Math.abs(this.body.velocity.y)<.2&&(this.isOverLine=!0)},afterRender(){const e=this.$refs.ctx.getContext("2d");!this.gameOver&&this.isOverLine&&(e.strokeStyle="#f55",e.beginPath(),e.moveTo(0,100),e.lineTo(480,100),e.stroke())},gameEnd(){this.gameOver=!0,this.engine.timing.timeScale=0},resize(){this.isMobile=window.innerHeight/window.innerWidth>=1.49,this.zoom=window.innerWidth/this.renderOptions.width,this.isMobile?this.$refs.ctx.style.zoom=this.zoom:this.$refs.ctx.style.zoom=1},touchEvtHandler(e){this.isClickEvt=!0,this.getMouseXpos=e.touches[0].clientX/this.$refs.ctx.style.zoom},mouseEvtHandler(e){var t;if(this.gameOver)return;const i=this.$refs.ctx.getBoundingClientRect();this.isMobile?this.getMouseXpos=((null===e||void 0===e?void 0:e.clientX)||(null===e||void 0===e||null===(t=e.touches[0])||void 0===t?void 0:t.clientX))/this.$refs.ctx.style.zoom-i.left:this.getMouseXpos=(null===e||void 0===e?void 0:e.clientX)-i.left},clickEvtHandler(){this.gameOver||this.ball&&(this.ball.createdAt=0,this.ball.collisionFilter={group:0,category:1,mask:-1},this.Body.setVelocity(this.ball,{x:0,y:100/this.fps*5.5}),this.ball=null,this.updateSize=Math.ceil(3*Math.random()),setTimeout(()=>this.createBall(this.updateSize),500))},crushBallEvtHandler(e){this.gameOver||e.pairs.forEach(e=>{if(this.sumBalls=[e.bodyA,e.bodyB],this.sumBalls[0].size&&this.sumBalls[1].size&&this.sumBalls[0].size===this.sumBalls[1].size){const e=this.Composite.allBodies(this.engine.world);if(e.includes(this.sumBalls[0])&&e.includes(this.sumBalls[1])){if((Date.now()-this.sumBalls[0].createdAt<100||Date.now()-this.sumBalls[1].createdAt<100)&&0!==this.sumBalls[0].createdAt&&0!==this.sumBalls[1].createdAt)return;this.World.remove(this.engine.world,this.sumBalls[0]),this.World.remove(this.engine.world,this.sumBalls[1]),this.World.add(this.engine.world,this.newBall((this.sumBalls[0].position.x+this.sumBalls[1].position.x)/2,(this.sumBalls[0].position.y+this.sumBalls[1].position.y)/2,11===this.sumBalls[0].size?11:this.sumBalls[0].size+1)),10===this.sumBalls[0].size&&(this.complete=!0)}}})}},data(){return{ball:null,world:void 0,runner:void 0,render:void 0,engine:void 0,mouseConstraint:void 0,touch:!1,bodies:void 0,gameOver:!1,complete:!1,getMouseXpos:null,isOverLine:!1,isClickEvt:!1,isMouseEvt:!1,fps:100,updateSize:1,iconArray:[g.a,y.a,O.a,B.a,E.a,z.a,C.a,R.a,A.a,$.a,W.a],isMobile:!1,zoom:null,Engine:b["Engine"],Render:b["Render"],Runner:b["Runner"],Common:b["Common"],MouseConstraint:b["MouseConstraint"],Mouse:b["Mouse"],World:b["World"],Vertices:b["Vertices"],Svg:b["Svg"],Bodies:b["Bodies"],Body:b["Body"],Composites:b["Composites"],Composite:b["Composite"],Events:b["Events"],renderOptions:{width:400,height:600,pixelRatio:"auto",wireframes:!1,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}}}},_=(i("7b5d"),i("6b0d")),L=i.n(_);const V=L()(T,[["render",m]]);var D=V,F={name:"App",components:{game:D}};const I=L()(F,[["render",o]]);var U=I;Object(s["b"])(U).mount("#app")},5904:function(e,t,i){e.exports=i.p+"img/flag.462d95e9.png"},"7b5d":function(e,t,i){"use strict";i("438d")},"7feb":function(e,t,i){e.exports=i.p+"img/10.64919fdf.svg"},"82f2":function(e,t,i){e.exports=i.p+"img/6.4123c6b8.svg"},"896a":function(e,t,i){e.exports=i.p+"img/8.ebf4db23.svg"},a53e:function(e,t,i){e.exports=i.p+"img/11.03643408.svg"},ba5a:function(e,t,i){e.exports=i.p+"img/star.d5768891.png"},c2d9:function(e,t,i){e.exports=i.p+"img/9.6273a60b.svg"},d52d:function(e,t,i){e.exports=i.p+"img/7.49e7b182.svg"},d561:function(e,t,i){e.exports=i.p+"img/1.389ef704.svg"},f464:function(e,t,i){e.exports=i.p+"img/3.2947dca0.svg"}});
//# sourceMappingURL=app.bd63cde2.js.map