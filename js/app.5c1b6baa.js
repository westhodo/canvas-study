(function(e){function t(t){for(var i,r,l=t[0],a=t[1],h=t[2],d=0,u=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&u.push(n[r][0]),n[r]=0;for(i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i]);c&&c(t);while(u.length)u.shift()();return o.push.apply(o,h||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],i=!0,l=1;l<s.length;l++){var a=s[l];0!==n[a]&&(i=!1)}i&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var i={},n={app:0},o=[];function r(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=i,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(s,i,function(t){return e[t]}.bind(null,i));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],a=l.push.bind(l);l.push=t,l=l.slice();for(var h=0;h<l.length;h++)t(l[h]);var c=a;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"0e28":function(e,t,s){"use strict";s("8f8a")},"2e89":function(e,t,s){e.exports=s.p+"img/4.3216a200.svg"},"3d87":function(e,t,s){e.exports=s.p+"img/5.72122cb8.svg"},"4eac":function(e,t,s){e.exports=s.p+"img/2.59de20e6.svg"},"56d7":function(e,t,s){"use strict";s.r(t);var i=s("7a23");const n={id:"App"};function o(e,t,s,o,r,l){const a=Object(i["g"])("game");return Object(i["f"])(),Object(i["b"])("div",n,[Object(i["d"])(a)])}function r(e,t,s,n,o,r){return Object(i["f"])(),Object(i["b"])("div",{class:Object(i["e"])(["gameContainer",{pc:!r.isMobile}])},[Object(i["c"])("canvas",{ref:"ctx",onMouseover:t[0]||(t[0]=e=>o.isMouseEvt=!0),onMouseup:t[1]||(t[1]=e=>o.isClickEvt=!1),onMousedown:t[2]||(t[2]=e=>o.isClickEvt=o.isMouseEvt),onMouseout:t[3]||(t[3]=e=>o.isMouseEvt=!1),onMousemove:t[4]||(t[4]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e)),onClick:t[5]||(t[5]=(...e)=>r.clickEvtHandler&&r.clickEvtHandler(...e)),onTouchmove:t[6]||(t[6]=(...e)=>r.mouseEvtHandler&&r.mouseEvtHandler(...e)),onTouchend:t[7]||(t[7]=e=>o.isClickEvt=!1),onTouchstart:t[8]||(t[8]=e=>o.isClickEvt=!0),onResize:t[9]||(t[9]=(...e)=>r.resize&&r.resize(...e))},null,544),Object(i["c"])("p",null,"mobile : "+Object(i["h"])(r.isMobile),1),Object(i["c"])("p",null,"x : "+Object(i["h"])(o.getMouseXpos),1),Object(i["c"])("p",null,"click : "+Object(i["h"])(o.isClickEvt),1),Object(i["c"])("p",null,"touch : "+Object(i["h"])(o.isMouseEvt),1)],2)}var l=s("b8bf"),a=s("d561"),h=s.n(a),c=s("4eac"),d=s.n(c),u=s("f464"),p=s.n(u),g=s("2e89"),m=s.n(g),b=s("3d87"),v=s.n(b),f=s("82f2"),w=s.n(f),y=s("d52d"),B=s.n(y),O=s("896a"),x=s.n(O),E=s("c2d9"),M=s.n(E),j=s("7feb"),C=s.n(j),z=s("a53e"),k=s.n(z),S={name:"game",components:{},computed:{isMobile(){return window.innerHeight/window.innerWidth>=1.49}},mounted(){this.engine=this.Engine.create(),this.world=this.engine.world,this.render=this.Render.create({element:this.$el,engine:this.engine,canvas:this.$refs.ctx,options:this.renderOptions});const e=this.renderOptions.width,t=this.renderOptions.height,s=2,i=2,n=this.Bodies.rectangle(e/2,t,e,50,this.customRender("transparent")),o=this.Bodies.rectangle(i,t/2,s,e+t,this.customRender("transparent")),r=this.Bodies.rectangle(e-i,t/2,s,e+t,this.customRender("transparent"));this.World.add(this.engine.world,[n,o,r]),this.Engine.run(this.engine),this.Render.run(this.render),window.addEventListener("resize",this.resize),this.beforeUpdate(),this.init(),this.resize(),this.Events.on(this.engine,"collisionActive",this.crushBallEvtHandler),this.Events.on(this.engine,"collisionStart",this.crushBallEvtHandler),this.Render.lookAt(this.render,{min:{x:0,y:0},max:{x:this.renderOptions.width,y:this.renderOptions.height}})},unmounted(){window.removeEventListener("resize",this.resize)},methods:{init(){this.gameOver=!1,this.ball=null,this.engine.timing.timeScale=1,this.score=0;while(this.engine.world.bodies.length>4)this.engine.world.bodies.pop();this.createBall(1)},mousePos(e,t){const s=e.getBoundingClientRect();return{x:t.clientX-s.left,y:t.clientY-s.top}},createBall(e){this.ball=this.newBall(this.render.options.width/2,50,e),this.ball.collisionFilter={group:-1,category:2,mask:0},this.World.add(this.engine.world,this.ball)},newBall(e,t,s){const i=this.Bodies.circle(e,t,10*s,{render:{sprite:{texture:this.iconArray[s-1],xScale:s/12.75,yScale:s/12.75}}});return i.size=s,i.createdAt=Date.now(),i.restitution=.3,i.friction=.1,i},customRender(e){return{isStatic:!0,render:{fillStyle:e}}},beforeUpdate(){this.Events.on(this.engine,"beforeUpdate",()=>{if(this.gameOver)return;if(this.ball){const e=this.engine.world.gravity;this.Body.applyForce(this.ball,this.ball.position,{x:-e.x*e.scale*this.ball.mass,y:-e.y*e.scale*this.ball.mass}),this.isClickEvt&&this.getMouseXpos&&(this.ball.position.x=this.getMouseXpos),this.ball.position.y=50}const e=l["Composite"].allBodies(this.engine.world);for(let t=4;t<e.length;t++)this.body=e[t],this.body.position.y<100?this.body!==this.ball&&Math.abs(this.body.velocity.x)<.2&&Math.abs(this.body.velocity.y):this.body.position.y<150&&this.body!==this.ball&&Math.abs(this.body.velocity.x)<.5&&Math.abs(this.body.velocity.y)})},resize(){this.isMobile&&(this.$refs.ctx.style.zoom=window.innerWidth/this.renderOptions.width)},mouseEvtHandler(e){if(this.gameOver)return;const t=this.render.canvas.getBoundingClientRect();this.getMouseXpos=e.clientX-t.left},clickEvtHandler(){!this.gameOver&&this.isMouseEvt&&this.ball&&(this.ball.createdAt=0,this.ball.collisionFilter={group:0,category:1,mask:-1},this.Body.setVelocity(this.ball,{x:0,y:100/this.fps*5.5}),this.ball=null,this.updateSize=Math.ceil(3*Math.random()),setTimeout(()=>this.createBall(this.updateSize),500))},crushBallEvtHandler(e){this.gameOver||e.pairs.forEach(e=>{if(this.sumBalls=[e.bodyA,e.bodyB],this.sumBalls[0].size&&this.sumBalls[1].size&&this.sumBalls[0].size===this.sumBalls[1].size){const e=this.Composite.allBodies(this.engine.world);if(e.includes(this.sumBalls[0])&&e.includes(this.sumBalls[1])){if((Date.now()-this.sumBalls[0].createdAt<100||Date.now()-this.sumBalls[1].createdAt<100)&&0!==this.sumBalls[0].createdAt&&0!==this.sumBalls[1].createdAt)return;this.World.remove(this.engine.world,this.sumBalls[0]),this.World.remove(this.engine.world,this.sumBalls[1]),this.World.add(this.engine.world,this.newBall((this.sumBalls[0].position.x+this.sumBalls[1].position.x)/2,(this.sumBalls[0].position.y+this.sumBalls[1].position.y)/2,11===this.sumBalls[0].size?11:this.sumBalls[0].size+1))}}})}},data(){return{ball:null,world:void 0,runner:void 0,render:void 0,engine:void 0,mouseConstraint:void 0,touch:!1,bodies:void 0,gameOver:!1,getMouseXpos:null,isClickEvt:!1,isMouseEvt:!1,fps:100,updateSize:1,iconArray:[h.a,d.a,p.a,m.a,v.a,w.a,B.a,x.a,M.a,C.a,k.a],isOverLine:!1,Engine:l["Engine"],Render:l["Render"],Runner:l["Runner"],Common:l["Common"],MouseConstraint:l["MouseConstraint"],Mouse:l["Mouse"],World:l["World"],Vertices:l["Vertices"],Svg:l["Svg"],Bodies:l["Bodies"],Body:l["Body"],Composites:l["Composites"],Composite:l["Composite"],Events:l["Events"],renderOptions:{width:400,height:600,pixelRatio:"auto",wireframes:!1,showDebug:!1,showBroadphase:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showShadows:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}}}},A=(s("0e28"),s("6b0d")),R=s.n(A);const H=R()(S,[["render",r]]);var P=H,W={name:"App",components:{game:P}};const X=R()(W,[["render",o]]);var T=X;Object(i["a"])(T).mount("#app")},"7feb":function(e,t,s){e.exports=s.p+"img/10.64919fdf.svg"},"82f2":function(e,t,s){e.exports=s.p+"img/6.4123c6b8.svg"},"896a":function(e,t,s){e.exports=s.p+"img/8.ebf4db23.svg"},"8f8a":function(e,t,s){},a53e:function(e,t,s){e.exports=s.p+"img/11.352f1c3a.svg"},c2d9:function(e,t,s){e.exports=s.p+"img/9.6273a60b.svg"},d52d:function(e,t,s){e.exports=s.p+"img/7.49e7b182.svg"},d561:function(e,t,s){e.exports=s.p+"img/1.389ef704.svg"},f464:function(e,t,s){e.exports=s.p+"img/3.2947dca0.svg"}});
//# sourceMappingURL=app.5c1b6baa.js.map