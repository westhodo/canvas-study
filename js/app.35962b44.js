(function(e){function t(t){for(var s,r,l=t[0],a=t[1],h=t[2],c=0,u=[];c<l.length;c++)r=l[c],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(s in a)Object.prototype.hasOwnProperty.call(a,s)&&(e[s]=a[s]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,h||[]),i()}function i(){for(var e,t=0;t<o.length;t++){for(var i=o[t],s=!0,l=1;l<i.length;l++){var a=i[l];0!==n[a]&&(s=!1)}s&&(o.splice(t--,1),e=r(r.s=i[0]))}return e}var s={},n={app:0},o=[];function r(t){if(s[t])return s[t].exports;var i=s[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=s,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(i,s,function(t){return e[t]}.bind(null,s));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/canvas-study/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var d=a;o.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},1048:function(e,t,i){},"2e89":function(e,t,i){e.exports=i.p+"img/4.3216a200.svg"},"3d87":function(e,t,i){e.exports=i.p+"img/5.72122cb8.svg"},"4eac":function(e,t,i){e.exports=i.p+"img/2.59de20e6.svg"},"56d7":function(e,t,i){"use strict";i.r(t);var s=i("7a23");function n(e,t,i,n,o,r){const l=Object(s["i"])("game");return Object(s["h"])(),Object(s["b"])(l)}function o(e,t,i,n,o,r){return Object(s["h"])(),Object(s["d"])("div",{class:Object(s["f"])(["container",{pc:!o.isMobile}])},[o.gameOver?(Object(s["h"])(),Object(s["d"])("div",{key:0,class:"overlay",style:Object(s["g"])(`width:${this.renderOptions.width}px; height: ${this.renderOptions.height}px`)},[Object(s["e"])("button",{onClick:t[0]||(t[0]=(...e)=>r.init&&r.init(...e))},"RE-START")],4)):Object(s["c"])("",!0),Object(s["e"])("canvas",{ref:"ctx",onMouseover:t[1]||(t[1]=e=>o.isMouseEvt=!0),onMouseup:t[2]||(t[2]=e=>o.isClickEvt=!1),onMousedown:t[3]||(t[3]=e=>o.isClickEvt=o.isMouseEvt),onMouseout:t[4]||(t[4]=e=>o.isMouseEvt=!1),onMousemove:t[5]||(t[5]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e)),onClick:t[6]||(t[6]=(...e)=>r.clickEvtHandler&&r.clickEvtHandler(...e)),onTouchend:t[7]||(t[7]=e=>o.isClickEvt=!1),onTouchstart:t[8]||(t[8]=e=>o.isClickEvt=!0),onTouchmove:t[9]||(t[9]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e))},null,544)],2)}var r=i("b8bf"),l=i("d561"),a=i.n(l),h=i("4eac"),d=i.n(h),c=i("f464"),u=i.n(c),p=i("2e89"),g=i.n(p),m=i("3d87"),v=i.n(m),f=i("82f2"),b=i.n(f),w=i("d52d"),y=i.n(w),B=i("896a"),x=i.n(B),O=i("c2d9"),E=i.n(O),M=i("7feb"),C=i.n(M),j=i("a53e"),S=i.n(j),k={name:"game",components:{},computed:{},mounted(){this.init(),window.addEventListener("resize",this.resize)},unmounted(){window.removeEventListener("resize",this.resize)},methods:{init(){this.engine=this.Engine.create(),this.world=this.engine.world,this.render=this.Render.create({element:this.$el,engine:this.engine,canvas:this.$refs.ctx,options:this.renderOptions});const e=this.renderOptions.width,t=this.renderOptions.height,i=2,s=2,n=this.Bodies.rectangle(e/2,t,e,50,this.customRender("transparent")),o=this.Bodies.rectangle(s,t/2,i,e+t,this.customRender("transparent")),r=this.Bodies.rectangle(e-s,t/2,i,e+t,this.customRender("transparent"));this.World.add(this.engine.world,[n,o,r]),this.Runner.run(this.engine),this.Render.run(this.render),this.beforeUpdate(),this.start(),this.resize(),this.Events.on(this.engine,"collisionActive",this.crushBallEvtHandler),this.Events.on(this.engine,"collisionStart",this.crushBallEvtHandler),this.Events.on(this.render,"afterRender",this.afterRender),this.Render.lookAt(this.render,{min:{x:0,y:0},max:{x:this.renderOptions.width,y:this.renderOptions.height}})},start(){this.gameOver=!1,this.ball=null,this.engine.timing.timeScale=1,this.score=0;while(this.engine.world.bodies.length>4)this.engine.world.bodies.pop();this.createBall(1)},createBall(e){this.ball=this.newBall(this.render.options.width/2,50,e),this.ball.collisionFilter={group:-1,category:2,mask:0},this.World.add(this.engine.world,this.ball)},newBall(e,t,i){const s=this.Bodies.circle(e,t,10*i,{render:{sprite:{texture:this.iconArray[i-1],xScale:i/12.75,yScale:i/12.75}}});return s.size=i,s.createdAt=Date.now(),s.restitution=.3,s.friction=.1,s},customRender(e){return{isStatic:!0,render:{fillStyle:e}}},beforeUpdate(){this.Events.on(this.engine,"beforeUpdate",()=>{if(this.gameOver)return;if(this.ball){const e=this.engine.world.gravity;this.Body.applyForce(this.ball,this.ball.position,{x:-e.x*e.scale*this.ball.mass,y:-e.y*e.scale*this.ball.mass}),this.isClickEvt&&this.getMouseXpos&&(this.ball.position.x=this.getMouseXpos),this.ball.position.y=50}const e=r["Composite"].allBodies(this.engine.world);for(let t=4;t<e.length;t++)this.body=e[t],this.body.position.y<100&&this.body!==this.ball&&Math.abs(this.body.velocity.x)<.2&&Math.abs(this.body.velocity.y)<.2&&this.gameEnd()})},afterRender(){const e=this.$refs.ctx.getContext("2d");this.gameOver?(e.fillStyle="#ffffff55",e.rect(0,0,480,720),e.fill()):(e.strokeStyle="#f55",e.beginPath(),e.moveTo(0,100),e.lineTo(480,100),e.stroke())},gameEnd(){this.gameOver=!0,this.engine.timing.timeScale=0},resize(){this.isMobile=window.innerHeight/window.innerWidth>=1.49,this.isMobile?this.$refs.ctx.style.zoom=window.innerWidth/this.renderOptions.width:this.$refs.ctx.style.zoom=1},mouseEvtHandler(e){var t;if(this.gameOver)return;const i=this.$refs.ctx.getBoundingClientRect();this.getMouseXpos=((null===e||void 0===e?void 0:e.clientX)||(null===e||void 0===e||null===(t=e.touches[0])||void 0===t?void 0:t.clientX))-i.left},clickEvtHandler(){this.gameOver||this.ball&&(this.ball.createdAt=0,this.ball.collisionFilter={group:0,category:1,mask:-1},this.Body.setVelocity(this.ball,{x:0,y:100/this.fps*5.5}),this.ball=null,this.updateSize=Math.ceil(3*Math.random()),setTimeout(()=>this.createBall(this.updateSize),500))},crushBallEvtHandler(e){this.gameOver||e.pairs.forEach(e=>{if(this.sumBalls=[e.bodyA,e.bodyB],this.sumBalls[0].size&&this.sumBalls[1].size&&this.sumBalls[0].size===this.sumBalls[1].size){const e=this.Composite.allBodies(this.engine.world);if(e.includes(this.sumBalls[0])&&e.includes(this.sumBalls[1])){if((Date.now()-this.sumBalls[0].createdAt<100||Date.now()-this.sumBalls[1].createdAt<100)&&0!==this.sumBalls[0].createdAt&&0!==this.sumBalls[1].createdAt)return;this.World.remove(this.engine.world,this.sumBalls[0]),this.World.remove(this.engine.world,this.sumBalls[1]),this.World.add(this.engine.world,this.newBall((this.sumBalls[0].position.x+this.sumBalls[1].position.x)/2,(this.sumBalls[0].position.y+this.sumBalls[1].position.y)/2,11===this.sumBalls[0].size?11:this.sumBalls[0].size+1))}}})}},data(){return{ball:null,world:void 0,runner:void 0,render:void 0,engine:void 0,mouseConstraint:void 0,touch:!1,bodies:void 0,gameOver:!1,getMouseXpos:null,isClickEvt:!1,isMouseEvt:!1,fps:100,updateSize:1,iconArray:[a.a,d.a,u.a,g.a,v.a,b.a,y.a,x.a,E.a,C.a,S.a],isMobile:!1,Engine:r["Engine"],Render:r["Render"],Runner:r["Runner"],Common:r["Common"],MouseConstraint:r["MouseConstraint"],Mouse:r["Mouse"],World:r["World"],Vertices:r["Vertices"],Svg:r["Svg"],Bodies:r["Bodies"],Body:r["Body"],Composites:r["Composites"],Composite:r["Composite"],Events:r["Events"],renderOptions:{width:400,height:600,pixelRatio:"auto",wireframes:!1,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}}}},R=(i("ba2b"),i("6b0d")),z=i.n(R);const A=z()(k,[["render",o]]);var H=A,P={name:"App",components:{game:H}};const T=z()(P,[["render",n]]);var W=T;Object(s["a"])(W).mount("#app")},"7feb":function(e,t,i){e.exports=i.p+"img/10.64919fdf.svg"},"82f2":function(e,t,i){e.exports=i.p+"img/6.4123c6b8.svg"},"896a":function(e,t,i){e.exports=i.p+"img/8.ebf4db23.svg"},a53e:function(e,t,i){e.exports=i.p+"img/11.352f1c3a.svg"},ba2b:function(e,t,i){"use strict";i("1048")},c2d9:function(e,t,i){e.exports=i.p+"img/9.6273a60b.svg"},d52d:function(e,t,i){e.exports=i.p+"img/7.49e7b182.svg"},d561:function(e,t,i){e.exports=i.p+"img/1.389ef704.svg"},f464:function(e,t,i){e.exports=i.p+"img/3.2947dca0.svg"}});
//# sourceMappingURL=app.35962b44.js.map