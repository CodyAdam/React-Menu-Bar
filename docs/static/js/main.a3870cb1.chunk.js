(this["webpackJsonpmenu-bar"]=this["webpackJsonpmenu-bar"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(1),i=n(2),s=n(4),l=n(3),o=n(0),u=n.n(o),c=n(7),r=n.n(c),h=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{id:"Decoration"},u.a.createElement("div",{className:"red",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"blue",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"purple",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"green",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"yellow",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"green",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"orange",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"red",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"blue",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"purple",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"green",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"red",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"blue",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"purple",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"green",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"yellow",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"green",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"orange",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"red",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"blue",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"purple",style:{width:450*Math.random()+200+"px",height:"180px"}}),u.a.createElement("div",{className:"green",style:{width:450*Math.random()+200+"px",height:"180px"}}))}}]),n}(u.a.Component),p=n(5),m=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this,t="subMenuButt normal";return this.props.available||(t="subMenuButt notAv"),u.a.createElement("div",{className:t,onMouseDown:function(){e.props.available&&(e.props.function(),e.props.exit())},onMouseMove:function(){null!==e.props.selected&&Date.now()-e.props.lastOpen>150&&e.props.available&&(e.props.select(null),e.props.updateTimer())}},u.a.createElement("span",{className:"name"},this.props.name),u.a.createElement("span",{className:"shortcut"},this.props.shortcut))}}]),n}(u.a.Component),d=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).onOpen=i.onOpen.bind(Object(p.a)(i)),i.state={posX:null,posY:null,width:null,height:null},i.container=u.a.createRef(),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.container.current;this.setState({posX:e.offsetLeft,posY:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight})}},{key:"onOpen",value:function(){this.props.select(this.props.index)}},{key:"render",value:function(){var e=this,t="subMenuButt adv",n=null;return this.props.selected===this.props.index&&(t="subMenuButt open",n=u.a.createElement(f,{subMenu:this.props.subMenu,exit:this.props.exit,anchorPoint:{x:this.state.width,y:this.state.posY}})),u.a.createElement("div",{className:t,onClick:this.onOpen,onMouseMove:function(){null!==e.props.selected&&Date.now()-e.props.lastOpen>150&&(e.onOpen(),e.props.updateTimer())},ref:this.container},u.a.createElement("span",{className:"name"},this.props.name),u.a.createElement("span",{className:"arrow"},">"),n)}}]),n}(u.a.Component),f=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).select=i.select.bind(Object(p.a)(i)),i.updateTimer=i.updateTimer.bind(Object(p.a)(i)),i.state={selected:null},i.lastOpen=Date.now(),i}return Object(i.a)(n,[{key:"select",value:function(e){this.setState({selected:e})}},{key:"updateTimer",value:function(){this.lastOpen=Date.now()}},{key:"render",value:function(){var e=this,t=this.props.subMenu.map((function(t,n){return t.subMenu?u.a.createElement(d,{key:n,index:n,name:t.name,subMenu:t.subMenu,selected:e.state.selected,select:e.select,exit:e.props.exit,lastOpen:e.lastOpen,updateTimer:e.updateTimer}):u.a.createElement(m,{key:n,name:t.name,available:t.available,shortcut:t.shortcut,function:t.function,select:e.select,exit:e.props.exit,lastOpen:e.lastOpen,updateTimer:e.updateTimer})})),n={left:this.props.anchorPoint.x+"px",top:this.props.anchorPoint.y+"px"};return u.a.createElement("div",{className:"subMenu",style:n},t)}}]),n}(u.a.Component),b=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).onOpen=i.onOpen.bind(Object(p.a)(i)),i.state={posX:null,posY:null,width:null,height:null},i.container=u.a.createRef(),i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this.container.current;this.setState({posX:e.offsetLeft,posY:e.offsetTop,width:e.offsetWidth,height:e.offsetHeight})}},{key:"onOpen",value:function(){this.props.select(this.props.index),console.log("onOpen")}},{key:"render",value:function(){var e=this,t="menuButt",n=null;return this.props.selected===this.props.index&&(t="menuButtOpen",n=u.a.createElement(f,{subMenu:this.props.subMenu,exit:this.props.exit,anchorPoint:{x:this.state.posX,y:this.state.height}})),u.a.createElement("div",{className:t,onClick:function(t){e.onOpen()},onMouseMove:function(){null!==e.props.selected&&e.onOpen()},ref:this.container},u.a.createElement("span",{className:"MName"},this.props.name),n)}}]),n}(u.a.Component),v=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).select=i.select.bind(Object(p.a)(i)),i.exit=i.exit.bind(Object(p.a)(i)),i.state={selected:null},i}return Object(i.a)(n,[{key:"select",value:function(e){this.setState({selected:e})}},{key:"exit",value:function(){this.select(null),console.log("Exit!")}},{key:"render",value:function(){var e=this,t=this.props.menu.map((function(t,n){return u.a.createElement(b,{key:n,index:n,name:t.name,subMenu:t.subMenu,selected:e.state.selected,select:e.select,exit:e.exit})})),n=null;return null!==this.state.selected&&(n=u.a.createElement("div",{className:"menuBG",onClick:this.exit})),u.a.createElement("div",{id:"MenuBar"},t,n)}}]),n}(u.a.Component),y=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(e){var i;return Object(a.a)(this,n),(i=t.call(this,e)).state={title:"This is a window name example",menu:[{name:"File",subMenu:[{name:"New",available:!0,function:e.functions.utilityFunction1,shortcut:""},{name:"Save",available:!0,function:e.functions.utilityFunction1,shortcut:"Ctrl + S"},{name:"Exit",available:!1,function:e.functions.utilityFunction1,shortcut:"Alt + F4"}]},{name:"Edit",subMenu:[{name:"Undo",available:!1,function:e.functions.utilityFunction1,shortcut:"Ctrl + Z"},{name:"Redo",available:!1,function:e.functions.utilityFunction1,shortcut:"Ctrl + Shift + Z"},{name:"Cut",available:!1,function:e.functions.utilityFunction1,shortcut:"Ctrl + X"},{name:"Copy",available:!0,function:e.functions.utilityFunction1,shortcut:"Ctrl + C"},{name:"Paste",available:!0,function:e.functions.utilityFunction1,shortcut:"Ctrl + V"}]},{name:"Display",subMenu:[{name:"Zoom",subMenu:[{name:"+ Zoom",available:!0,function:e.functions.utilityFunction1,shortcut:"Ctrl + +"},{name:"- Zoom",available:!0,function:e.functions.utilityFunction1,shortcut:"Ctrl + -"},{name:"Explode!",subMenu:[{name:"Are you sure?",subMenu:[{name:"Yes!!",available:!0,function:function(){alert("\u0ca0_\u0ca0")},shortcut:""},{name:"No",available:!1,function:e.functions.utilityFunction1,shortcut:""},{name:"Mhhh ?",available:!0,function:e.functions.utilityFunction1,shortcut:""}]}]},{name:"Reset Zoom",available:!1,function:e.functions.utilityFunction1,shortcut:"Ctrl + 0"}]},{name:"Fullscreen",available:!0,function:e.functions.utilityFunction1,shortcut:"F11"}]},{name:"Help",subMenu:[{name:"Why should i help you?",subMenu:[{name:"Because i asked! Now act little webpage!",available:!0,function:e.functions.utilityFunction2,shortcut:""},{name:"Do as you wish to, I don't care anyway.",available:!0,function:function(){window.location.href="https://youtu.be/dQw4w9WgXcQ?t=85"},shortcut:""}]}]},{name:"Theme",subMenu:[{name:"Dark",available:!0,function:e.functions.utilityFunction3,shortcut:""},{name:"Light",available:!0,function:e.functions.utilityFunction4,shortcut:""}]}]},i}return Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{id:"TitleBar"},u.a.createElement(v,{menu:this.state.menu}),u.a.createElement("div",{id:"Title"},u.a.createElement("span",null,this.state.title)),u.a.createElement("div",{id:"Icons"}))}}]),n}(u.a.Component),x=(n(13),function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){return Object(a.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return u.a.createElement("div",{id:"App"},u.a.createElement(O,null))}}]),n}(u.a.Component)),O=function(e){Object(s.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).state={functions:{utilityFunction1:e.utilityFunction1,utilityFunction2:e.utilityFunction2,utilityFunction3:e.utilityFunction3,utilityFunction4:e.utilityFunction4}},e}return Object(i.a)(n,[{key:"utilityFunction1",value:function(){alert("The button does nothing.")}},{key:"utilityFunction2",value:function(){alert("(\u256f\xb0\u25a1\xb0)\u256f\ufe35 \u253b\u2501\u253b")}},{key:"utilityFunction3",value:function(){document.getElementById("Decoration").style.opacity=.5,document.body.style.backgroundColor="rgb(80, 80, 82)"}},{key:"utilityFunction4",value:function(){document.getElementById("Decoration").style.opacity=1,document.body.style.backgroundColor="#d4d4e4"}},{key:"render",value:function(){return u.a.createElement("div",{id:"MainWindow"},u.a.createElement(y,{functions:this.state.functions}),u.a.createElement(h,null))}}]),n}(u.a.Component);r.a.render(u.a.createElement(u.a.StrictMode,null,u.a.createElement(x,null)),document.getElementById("root"))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.a3870cb1.chunk.js.map