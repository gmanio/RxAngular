webpackJsonp([3],{"4nIq":function(e,t,n){var i;!function(){"use strict";function l(e){return void 0===this||Object.getPrototypeOf(this)!==l.prototype?new l(e):(N=this,N.version="3.3.6",N.tools=new E,N.isSupported()?(N.tools.extend(N.defaults,e||{}),N.defaults.container=o(N.defaults),N.store={elements:{},containers:[]},N.sequences={},N.history=[],N.uid=0,N.initialized=!1):"undefined"!=typeof console&&console,N)}function o(e){if(e&&e.container){if("string"==typeof e.container)return window.document.documentElement.querySelector(e.container);if(N.tools.isNode(e.container))return e.container}return N.defaults.container}function r(e,t){return"string"==typeof e?Array.prototype.slice.call(t.querySelectorAll(e)):N.tools.isNode(e)?[e]:N.tools.isNodeList(e)?Array.prototype.slice.call(e):[]}function s(){return++N.uid}function u(e,t,n){t.container&&(t.container=n),e.config=e.config?N.tools.extendClone(e.config,t):N.tools.extendClone(N.defaults,t),e.config.axis="top"===e.config.origin||"bottom"===e.config.origin?"Y":"X"}function a(e){var t=window.getComputedStyle(e.domEl);e.styles||(e.styles={transition:{},transform:{},computed:{}},e.styles.inline=e.domEl.getAttribute("style")||"",e.styles.inline+="; visibility: visible; ",e.styles.computed.opacity=t.opacity,e.styles.computed.transition=t.transition&&"all 0s ease 0s"!==t.transition?t.transition+", ":""),e.styles.transition.instant=c(e,0),e.styles.transition.delayed=c(e,e.config.delay),e.styles.transform.initial=" -webkit-transform:",e.styles.transform.target=" -webkit-transform:",p(e),e.styles.transform.initial+="transform:",e.styles.transform.target+="transform:",p(e)}function c(e,t){var n=e.config;return"-webkit-transition: "+e.styles.computed.transition+"-webkit-transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; transition: "+e.styles.computed.transition+"transform "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s, opacity "+n.duration/1e3+"s "+n.easing+" "+t/1e3+"s; "}function p(e){var t,n=e.config,i=e.styles.transform;t="top"===n.origin||"left"===n.origin?/^-/.test(n.distance)?n.distance.substr(1):"-"+n.distance:n.distance,parseInt(n.distance)&&(i.initial+=" translate"+n.axis+"("+t+")",i.target+=" translate"+n.axis+"(0)"),n.scale&&(i.initial+=" scale("+n.scale+")",i.target+=" scale(1)"),n.rotate.x&&(i.initial+=" rotateX("+n.rotate.x+"deg)",i.target+=" rotateX(0)"),n.rotate.y&&(i.initial+=" rotateY("+n.rotate.y+"deg)",i.target+=" rotateY(0)"),n.rotate.z&&(i.initial+=" rotateZ("+n.rotate.z+"deg)",i.target+=" rotateZ(0)"),i.initial+="; opacity: "+n.opacity+";",i.target+="; opacity: "+e.styles.computed.opacity+";"}function d(e){var t=e.config.container;t&&-1===N.store.containers.indexOf(t)&&N.store.containers.push(e.config.container),N.store.elements[e.id]=e}function f(e,t,n){N.history.push({target:e,config:t,interval:n})}function m(){if(N.isSupported()){b();for(var e=0;e<N.store.containers.length;e++)N.store.containers[e].addEventListener("scroll",g),N.store.containers[e].addEventListener("resize",g);N.initialized||(window.addEventListener("scroll",g),window.addEventListener("resize",g),N.initialized=!0)}return N}function g(){j(b)}function v(){var e,t,n,i;N.tools.forOwn(N.sequences,function(l){i=N.sequences[l],e=!1;for(var o=0;o<i.elemIds.length;o++)n=i.elemIds[o],t=N.store.elements[n],O(t)&&!e&&(e=!0);i.active=e})}function b(){var e,t;v(),N.tools.forOwn(N.store.elements,function(n){t=N.store.elements[n],e=h(t),_(t)?(t.config.beforeReveal(t.domEl),e?t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.delayed):t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.target+t.styles.transition.instant),w("reveal",t,e),t.revealing=!0,t.seen=!0,t.sequence&&y(t,e)):q(t)&&(t.config.beforeReset(t.domEl),t.domEl.setAttribute("style",t.styles.inline+t.styles.transform.initial+t.styles.transition.instant),w("reset",t),t.revealing=!1)})}function y(e,t){var n=0,i=0,l=N.sequences[e.sequence.id];l.blocked=!0,t&&"onload"===e.config.useDelay&&(i=e.config.delay),e.sequence.timer&&(n=Math.abs(e.sequence.timer.started-new Date),window.clearTimeout(e.sequence.timer)),e.sequence.timer={started:new Date},e.sequence.timer.clock=window.setTimeout(function(){l.blocked=!1,e.sequence.timer=null,g()},Math.abs(l.interval)+i-n)}function w(e,t,n){var i=0,l=0,o="after";switch(e){case"reveal":l=t.config.duration,n&&(l+=t.config.delay),o+="Reveal";break;case"reset":l=t.config.duration,o+="Reset"}t.timer&&(i=Math.abs(t.timer.started-new Date),window.clearTimeout(t.timer.clock)),t.timer={started:new Date},t.timer.clock=window.setTimeout(function(){t.config[o](t.domEl),t.timer=null},l-i)}function _(e){if(e.sequence){var t=N.sequences[e.sequence.id];return t.active&&!t.blocked&&!e.revealing&&!e.disabled}return O(e)&&!e.revealing&&!e.disabled}function h(e){var t=e.config.useDelay;return"always"===t||"onload"===t&&!N.initialized||"once"===t&&!e.seen}function q(e){return e.sequence?!N.sequences[e.sequence.id].active&&e.config.reset&&e.revealing&&!e.disabled:!O(e)&&e.config.reset&&e.revealing&&!e.disabled}function x(e){return{width:e.clientWidth,height:e.clientHeight}}function k(e){if(e&&e!==window.document.documentElement){var t=X(e);return{x:e.scrollLeft+t.left,y:e.scrollTop+t.top}}return{x:window.pageXOffset,y:window.pageYOffset}}function X(e){var t=0,n=0,i=e.offsetHeight,l=e.offsetWidth;do{isNaN(e.offsetTop)||(t+=e.offsetTop),isNaN(e.offsetLeft)||(n+=e.offsetLeft),e=e.offsetParent}while(e);return{top:t,left:n,height:i,width:l}}function O(e){var t=X(e.domEl),n=x(e.config.container),i=k(e.config.container),l=e.config.viewFactor,o=t.height,r=t.width,s=t.top,u=t.left,a=s+o,c=u+r;return function(){var t=s+o*l,p=u+r*l,d=a-o*l,f=c-r*l,m=i.y+e.config.viewOffset.top,g=i.x+e.config.viewOffset.left,v=i.y-e.config.viewOffset.bottom+n.height,b=i.x-e.config.viewOffset.right+n.width;return t<v&&d>m&&p<b&&f>g}()||function(){return"fixed"===window.getComputedStyle(e.domEl).position}()}function E(){}var N,j;l.prototype.defaults={origin:"bottom",distance:"20px",duration:500,delay:0,rotate:{x:0,y:0,z:0},opacity:0,scale:.9,easing:"cubic-bezier(0.6, 0.2, 0.1, 1)",container:window.document.documentElement,mobile:!0,reset:!1,useDelay:"always",viewFactor:.2,viewOffset:{top:0,right:0,bottom:0,left:0},beforeReveal:function(e){},beforeReset:function(e){},afterReveal:function(e){},afterReset:function(e){}},l.prototype.isSupported=function(){var e=document.documentElement.style;return"WebkitTransition"in e&&"WebkitTransform"in e||"transition"in e&&"transform"in e},l.prototype.reveal=function(e,t,n,i){var l,c,p,g,v,b;if(void 0!==t&&"number"==typeof t?(n=t,t={}):void 0!==t&&null!==t||(t={}),l=o(t),c=r(e,l),!c.length)return N;n&&"number"==typeof n&&(b=s(),v=N.sequences[b]={id:b,interval:n,elemIds:[],active:!1});for(var y=0;y<c.length;y++)g=c[y].getAttribute("data-sr-id"),g?p=N.store.elements[g]:(p={id:s(),domEl:c[y],seen:!1,revealing:!1},p.domEl.setAttribute("data-sr-id",p.id)),v&&(p.sequence={id:v.id,index:v.elemIds.length},v.elemIds.push(p.id)),u(p,t,l),a(p),d(p),N.tools.isMobile()&&!p.config.mobile||!N.isSupported()?(p.domEl.setAttribute("style",p.styles.inline),p.disabled=!0):p.revealing||p.domEl.setAttribute("style",p.styles.inline+p.styles.transform.initial);return!i&&N.isSupported()&&(f(e,t,n),N.initTimeout&&window.clearTimeout(N.initTimeout),N.initTimeout=window.setTimeout(m,0)),N},l.prototype.sync=function(){if(N.history.length&&N.isSupported()){for(var e=0;e<N.history.length;e++){var t=N.history[e];N.reveal(t.target,t.config,t.interval,!0)}m()}return N},E.prototype.isObject=function(e){return null!==e&&"object"==typeof e&&e.constructor===Object},E.prototype.isNode=function(e){return"object"==typeof window.Node?e instanceof window.Node:e&&"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName},E.prototype.isNodeList=function(e){var t=Object.prototype.toString.call(e),n=/^\[object (HTMLCollection|NodeList|Object)\]$/;return"object"==typeof window.NodeList?e instanceof window.NodeList:e&&"object"==typeof e&&n.test(t)&&"number"==typeof e.length&&(0===e.length||this.isNode(e[0]))},E.prototype.forOwn=function(e,t){if(!this.isObject(e))throw new TypeError('Expected "object", but received "'+typeof e+'".');for(var n in e)e.hasOwnProperty(n)&&t(n)},E.prototype.extend=function(e,t){return this.forOwn(t,function(n){this.isObject(t[n])?(e[n]&&this.isObject(e[n])||(e[n]={}),this.extend(e[n],t[n])):e[n]=t[n]}.bind(this)),e},E.prototype.extendClone=function(e,t){return this.extend(this.extend({},e),t)},E.prototype.isMobile=function(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},j=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},void 0!==(i=function(){return l}.call(t,n,t,e))&&(e.exports=i)}()},regY:function(e,t,n){"use strict";function i(e){return r._20(0,[(e()(),r._2(0,null,null,1,"section",[],null,null,null,null,null)),(e()(),r._18(null,["\n  ","\n"]))],null,function(e,t){e(t,1,0,t.context.$implicit.title)})}function l(e){return r._20(0,[(e()(),r._2(0,null,null,1,"app-list",[],null,null,null,a.b,a.a)),r._1(114688,null,0,c.a,[],null,null),(e()(),r._18(null,["\n"])),(e()(),r._2(0,null,null,7,"div",[],null,null,null,null,null)),(e()(),r._18(null,["\n  "])),(e()(),r._2(0,null,null,1,"button",[],null,[[null,"click"]],function(e,t,n){var i=!0,l=e.component;return"click"===t&&(i=!1!==l.fetchNews()&&i),i},null,null)),(e()(),r._18(null,["News"])),(e()(),r._18(null,["\n  "])),(e()(),r._2(0,null,null,1,"button",[],null,[[null,"click"]],function(e,t,n){var i=!0,l=e.component;return"click"===t&&(i=!1!==l.fetchJobs()&&i),i},null,null)),(e()(),r._18(null,["Jobs"])),(e()(),r._18(null,["\n"])),(e()(),r._18(null,["\n"])),(e()(),r._2(0,null,null,35,"div",[["class","head_faq"]],null,null,null,null,null)),(e()(),r._18(null,["\n  "])),(e()(),r._2(0,null,null,32,"div",[["class","inner_head"]],null,null,null,null,null)),(e()(),r._18(null,["\n    "])),(e()(),r._2(0,null,null,1,"strong",[["class","tit_faq"]],null,null,null,null,null)),(e()(),r._18(null,["\ubb34\uc5c7\uc744 \ub3c4\uc640\ub4dc\ub9b4\uae4c\uc694?"])),(e()(),r._18(null,["\n    "])),(e()(),r._2(0,null,null,26,"div",[["class","search_faq type1"]],null,null,null,null,null)),(e()(),r._18(null,["\n      "])),(e()(),r._2(0,null,null,23,"form",[["autocomplete","off"],["id","searchFaqForm"],["role","search"]],null,null,null,null,null)),(e()(),r._18(null,["\n        "])),(e()(),r._2(0,null,null,20,"fieldset",[],null,null,null,null,null)),(e()(),r._18(null,["\n          "])),(e()(),r._2(0,null,null,1,"legend",[["class","screen_out"]],null,null,null,null,null)),(e()(),r._18(null,["\uc790\uc8fc\ubb3b\ub294 \uc9c8\ubb38 \uac80\uc0c9\ud3fc"])),(e()(),r._18(null,["\n          "])),(e()(),r._2(0,null,null,6,"div",[["class","box_search"]],null,null,null,null,null)),(e()(),r._18(null,["\n            "])),(e()(),r._2(0,null,null,1,"span",[["class","txt_place"],["style",""]],null,null,null,null,null)),(e()(),r._18(null,["\uad81\uae08\ud558\uc2e0 \uc810\uc774 \uc788\ub2e4\uba74  \uac80\uc0c9 \ub610\ub294 \ub3c4\uc6c0\ub9d0 \uce74\ud14c\uace0\ub9ac\ub97c \uc120\ud0dd\ud558\uc138\uc694."])),(e()(),r._18(null,["\n            "])),(e()(),r._2(0,null,null,0,"input",[["class","inp_search"],["id","searchBoard"],["name","searchBoard"],["title","\uc790\uc8fc\ubb3b\ub294 \uc9c8\ubb38 \uac80\uc0c9"],["type","text"],["value",""]],null,null,null,null,null)),(e()(),r._18(null,["\n          "])),(e()(),r._18(null,["\n          "])),(e()(),r._2(0,null,null,2,"button",[["class","btn_search"],["type","submit"]],null,null,null,null,null)),(e()(),r._2(0,null,null,1,"span",[["class","img_kabang ico_search"]],null,null,null,null,null)),(e()(),r._18(null,["\uac80\uc0c9"])),(e()(),r._18(null,["\n          "])),(e()(),r._2(0,null,null,2,"button",[["class","btn_delete"],["style","display:none;"],["type","button"]],null,null,null,null,null)),(e()(),r._2(0,null,null,1,"span",[["class","img_kabang ico_delete"]],null,null,null,null,null)),(e()(),r._18(null,["\uac80\uc0c9\uc5b4 \uc0ad\uc81c"])),(e()(),r._18(null,["\n        "])),(e()(),r._18(null,["\n      "])),(e()(),r._18(null,["\n    "])),(e()(),r._18(null,["\n  "])),(e()(),r._18(null,["\n"])),(e()(),r._18(null,["\n"])),(e()(),r._2(0,null,null,13,"div",[],null,null,null,null,null)),(e()(),r._18(null,["\n  "])),(e()(),r._2(0,null,null,10,"div",[["class","content"],["role","content"]],null,null,null,null,null)),(e()(),r._18(null,["\n    "])),(e()(),r._2(0,null,null,1,"article",[["class","article"]],null,null,null,null,null)),(e()(),r._18(null,['\n      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim\n      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in\n      culpa qui officia deserunt mollit anim id est laborum."\n    '])),(e()(),r._18(null,["\n    "])),(e()(),r._2(0,null,null,1,"article",[["class","article"]],null,null,null,null,null)),(e()(),r._18(null,['\n      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae\n      ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit\n      aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam\n      est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et\n      dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam,\n      nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae\n      consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"\n    '])),(e()(),r._18(null,["\n    "])),(e()(),r._2(0,null,null,1,"article",[["class","article"]],null,null,null,null,null)),(e()(),r._18(null,['\n      "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores\n      et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id\n      est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est\n      eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor\n      repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae\n      sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias\n      consequatur aut perferendis doloribus asperiores repellat."\n    '])),(e()(),r._18(null,["\n  "])),(e()(),r._18(null,["\n"])),(e()(),r._18(null,["\n\n"])),(e()(),r._2(0,null,null,1,"p",[],null,[[null,"click"]],function(e,t,n){var i=!0,l=e.component;return"click"===t&&(i=!1!==l.goHome()&&i),i},null,null)),(e()(),r._18(null,["\n  go Editor!\n"])),(e()(),r._18(null,["\n"])),(e()(),r.X(16777216,null,null,2,null,i)),r._1(802816,null,0,g.i,[r.L,r.I,r.q],{ngForOf:[0,"ngForOf"]},null),r._16(131072,g.b,[r.h]),(e()(),r._18(null,["\n"]))],function(e,t){var n=t.component;e(t,1,0),e(t,68,0,r._19(t,68,0,r._14(t,69).transform(n.responseData)))},null)}function o(e){return r._20(0,[(e()(),r._2(0,null,null,1,"app-news",[],null,null,null,l,b)),r._1(4308992,null,0,m,[d.k,f.a],null,null)],function(e,t){e(t,1,0)},null)}Object.defineProperty(t,"__esModule",{value:!0});var r=n("/oeL"),s=function(){function e(){}return e}(),u=["[_nghost-%COMP%]{background:#f4a460}.article[_ngcontent-%COMP%]{padding:10px 0 20px}.search_faq[_ngcontent-%COMP%]{-webkit-transform-origin:50% 0;transform-origin:50% 0;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:perspective(1000px) rotateX(-90deg);transform:perspective(1000px) rotateX(-90deg);-webkit-animation:show-faq-input1 3s forwards;animation:show-faq-input1 3s forwards}@-webkit-keyframes show-faq-input1{0%{-webkit-transform:perspective(1000px) rotateX(-90deg);transform:perspective(1000px) rotateX(-90deg)}40%{-webkit-transform:perspective(1000px) rotateX(45deg);transform:perspective(1000px) rotateX(45deg)}60%{-webkit-transform:perspective(1000px) rotateX(-20deg);transform:perspective(1000px) rotateX(-20deg)}70%{-webkit-transform:perspective(1000px) rotateX(15deg);transform:perspective(1000px) rotateX(15deg)}75%{-webkit-transform:perspective(1000px) rotateX(-8deg);transform:perspective(1000px) rotateX(-8deg)}85%{-webkit-transform:perspective(1000px) rotateX(8deg);transform:perspective(1000px) rotateX(8deg)}95%{-webkit-transform:perspective(1000px) rotateX(-4deg);transform:perspective(1000px) rotateX(-4deg)}97%{-webkit-transform:perspective(1000px) rotateX(3deg);transform:perspective(1000px) rotateX(3deg)}99%{-webkit-transform:perspective(1000px) rotateX(-1deg);transform:perspective(1000px) rotateX(-1deg)}to{-webkit-transform:perspective(1000px) rotateX(0);transform:perspective(1000px) rotateX(0)}}@keyframes show-faq-input1{0%{-webkit-transform:perspective(1000px) rotateX(-90deg);transform:perspective(1000px) rotateX(-90deg)}40%{-webkit-transform:perspective(1000px) rotateX(45deg);transform:perspective(1000px) rotateX(45deg)}60%{-webkit-transform:perspective(1000px) rotateX(-20deg);transform:perspective(1000px) rotateX(-20deg)}70%{-webkit-transform:perspective(1000px) rotateX(15deg);transform:perspective(1000px) rotateX(15deg)}75%{-webkit-transform:perspective(1000px) rotateX(-8deg);transform:perspective(1000px) rotateX(-8deg)}85%{-webkit-transform:perspective(1000px) rotateX(8deg);transform:perspective(1000px) rotateX(8deg)}95%{-webkit-transform:perspective(1000px) rotateX(-4deg);transform:perspective(1000px) rotateX(-4deg)}97%{-webkit-transform:perspective(1000px) rotateX(3deg);transform:perspective(1000px) rotateX(3deg)}99%{-webkit-transform:perspective(1000px) rotateX(-1deg);transform:perspective(1000px) rotateX(-1deg)}to{-webkit-transform:perspective(1000px) rotateX(0);transform:perspective(1000px) rotateX(0)}}"],a=n("oQW5"),c=n("c9uO"),p=n("4nIq"),d=n("BkNc"),f=n("u32x"),m=function(){function e(e,t){this.router=e,this.apiService=t,this.sr=p({reset:!0,duration:2e3,scale:1,beforeReveal:function(e){console.log("before")},afterReveal:function(e){console.log("after")}})}return e.prototype.ngOnInit=function(){console.log(this.sr)},e.prototype.ngAfterViewInit=function(){this.sr.reveal(".article",{origin:"bottom",opacity:0})},e.prototype.goHome=function(){this.router.navigate(["editor"])},e.prototype.fetchNews=function(){this.responseData=this.apiService.fetchNEWS()},e.prototype.fetchJobs=function(){this.responseData=this.apiService.fetchJOBS()},e.ctorParameters=function(){return[{type:d.k},{type:f.a}]},e}(),g=n("qbdv"),v=[u],b=r._0({encapsulation:0,styles:v,data:{}}),y=r.Y("app-news",m,o,{},{},[]),w=n("XKz0"),_=n("Cor3");n.d(t,"NewsModuleNgFactory",function(){return h});var h=r.Z(s,[],function(e){return r._11([r._12(512,r.j,r.V,[[8,[y]],[3,r.j],r.v]),r._12(4608,g.k,g.j,[r.s]),r._12(4608,f.a,f.a,[w.c]),r._12(512,g.c,g.c,[]),r._12(512,_.a,_.a,[]),r._12(512,d.l,d.l,[[2,d.q],[2,d.k]]),r._12(512,s,s,[]),r._12(1024,d.i,function(){return[[{path:"",children:[{path:"",component:m}]}]]},[])])})}});
//# sourceMappingURL=3.74d178a9ac996a3501be.chunk.js.map