(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{Sac3:function(t,e,n){"use strict";n.r(e),n.d(e,"TraysComponent",(function(){return G}));var o=n("HbGN"),a=n("cxan"),r=n("9fIP"),i=n("MMYH"),c=n("K/z8"),l=n("sRHE"),s=n("pWxA"),u=n("8K1b"),p=n("zjfJ"),b=n("ERkP"),d=n.n(b),O=n("Epy/"),f=n("kXI/"),g=n("DUZ3"),m=n("W5x5"),h=n("tjAd"),j=n("NxtI"),C=n("i7vd"),k=n("49Ar"),y=n("yM/X"),R=n("x2Xg"),v=n.n(R),w=n("Wu1s"),E=n("6K0N"),D=n("pddF"),M=n("p8sV"),N=n("ZJYN"),T=n("HrwQ");function A(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,o)}return n}function I(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?A(Object(n),!0).forEach((function(e){Object(p.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var x={TOGGLE:"toggle",RANDOM:"random"};function P(t){return{name:t,triggerLocation:O.rb.QUERY_BOX}}var B=O.w.SOURCE_SANS_PRO_15,S=280;function L(t,e){return Object(O.Yb)(e.formatMessage({id:t}),B)}var X=d.a.createElement,_={mainColorName:v.a.mainColor,activeName:v.a.active,disableName:v.a.disable},G=function(t){function e(t){var n,o;return Object(r.a)(this,e),o=Object(c.a)(this,Object(l.a)(e).call(this,t)),Object(p.a)(Object(s.a)(o),"getBreakPoints",(function(){var t=o.props.language;if(!e.breakpoints[t]){var n=o.initBreakpoint();return e.breakpoints[t]=n,n}return e.breakpoints[t]})),Object(p.a)(Object(s.a)(o),"legacySetTray",(function(t){o.props.toggleSetTray({name:t})})),Object(p.a)(Object(s.a)(o),"initBreakpoint",(function(){return function(t){var e=t.intl,n=t.urlInfo,o=I({},{icon:E.a,id:h.f.keyboard,component:N.a,onClick:x.TOGGLE,walTrackingData:P(O.qb.EXTENDED_KEYBOARD)},{color:v.a.buttonsClassicColor,textId:"EXTENDED_KEYBOARD"}),a=Object.assign({},o,{textId:""}),r=I({},{icon:M.a,textId:"UPLOAD",id:h.f.upload,component:N.a,onClick:x.TOGGLE,walTrackingData:P(O.qb.UPLOAD)},{color:v.a.buttonsClassicColor}),i=Object.assign({},r,{textId:""}),c=I({icon:w.a,textId:"EXAMPLES",walTrackingData:P(O.qb.EXAMPLES),id:h.f.examples},O.m.getAttr(T.a.EXAMPLES_TRAY_BTN),{component:O.a,href:"".concat(n.base,"/examples/")}),l=I({},c,{color:v.a.linksClassicColor}),s=I({icon:D.a,textId:"RANDOM",walTrackingData:P(O.qb.RANDOM),id:h.f.random},O.m.getAttr(T.a.RANDOM_TRAY_BTN),{component:O.f,onClick:x.RANDOM}),u=I({},s,{color:v.a.linksClassicColor}),p=Object.assign({},u,{textId:""}),b=L("EXTENDED_KEYBOARD",e),d=L("UPLOAD",e),f=L("EXAMPLES",e),g=L("RANDOM",e);return[{width:f+g+S,left:[a,i],right:[l,p]},{width:d+f+g+S+-10,left:[a,i],right:[l,u]},{width:b+d+f+g+S,left:[a,r],right:[l,u]},{left:[o,r],right:[l,u]}]}({intl:o.props.intl,urlInfo:o.props.urlInfo})})),Object(p.a)(Object(s.a)(o),"getResponsiveItems",(function(){var t=o.props.width;return o.getBreakPoints().find((function(e){return!e.width||e.width>=t}))||{left:[],right:[]}})),Object(p.a)(Object(s.a)(o),"handleCloseClick",(function(){var t=o.props.toggleSetTray;t&&t(h.c.none)})),Object(p.a)(Object(s.a)(o),"randomQuery",(function(){var t=Object(O.Jb)({value:y.a.getRandomQuery(o.props.urlInfo,o.props.language)});o.props.redirect(t),window.scrollTo(0,0)})),Object(p.a)(Object(s.a)(o),"getOnClickMethod",(function(t){if(t&&o.buttonMethods[t])return o.buttonMethods[t]})),Object(p.a)(Object(s.a)(o),"tray",(function(t){var e;return(e={},Object(p.a)(e,h.f.keyboard,X(k.a,{handleCloseClick:o.handleCloseClick,buttonsRef:o.buttonsRef,rightButtonsRef:o.rightButtonsRef,inputRef:o.props.inputRef,wrapperBorder:h.h.grey,showClose:o.props.inputMode===h.e.classic},X(O.U,null,X(j.a,{width:o.props.width,inputMode:o.props.inputMode,colorTheme:o.props.colorTheme})))),Object(p.a)(e,h.f.upload,X(k.a,{handleCloseClick:o.handleCloseClick,buttonsRef:o.buttonsRef,rightButtonsRef:o.rightButtonsRef,inputRef:o.props.inputRef,wrapperBorder:h.h.grey,showClose:!0},X(C.a,Object(a.a)({},o.props,{handleCloseClick:o.handleCloseClick})))),Object(p.a)(e,h.f.examples,null),Object(p.a)(e,h.f.random,null),Object(p.a)(e,h.f.none,null),e)[t]})),o.buttonMethods=(n={},Object(p.a)(n,x.TOGGLE,o.legacySetTray),Object(p.a)(n,x.RANDOM,o.randomQuery),n),o}return Object(u.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){y.a.init(this.props.urlInfo,this.props.language)}},{key:"render",value:function(){var t=this,e=this.props,n=e.openedTray,r=e.inputMode,i=this.getResponsiveItems(),c=X(g.a,{mainColor:v.a.mainColor,className:v.a.chevron}),l=X(m.a,{mainColor:v.a.mainColor,className:v.a.chevron});return X(b.Fragment,null,X("div",{className:v.a.buttonContainer},X("ul",{className:v.a.trayList,ref:function(e){t.buttonsRef=e}},i.left.map((function(e){var i=e.component,s=e.icon,u=e.textId,p=e.id,b=e.color,d=e.onClick,O=Object(o.a)(e,["component","icon","textId","id","color","onClick"]);return X("li",{key:p||u,className:v.a.trayItem},X(i,Object(a.a)({},O,{icon:s,text:u?X(f.b,{id:u}):"",styleType:v.a.buttonsStyleClassic,color:b,active:n.name===p,id:p,onClick:t.getOnClickMethod(d),innerSvg:n.name===p?l:c,inputMode:r},_)))}))),X("ul",{className:v.a.rightList,ref:function(e){t.rightButtonsRef=e}},i.right.map((function(e){var r=e.component,i=e.icon,c=e.textId,l=e.id,s=e.color,u=e.onClick,p=Object(o.a)(e,["component","icon","textId","id","color","onClick"]);return X("li",{key:l||c,className:v.a.trayItem},X(r,Object(a.a)({},p,{icon:i,text:c?X(f.b,{id:c}):"",styleType:v.a.buttonsStyleClassic,color:s,active:n.name===l,id:l,onClick:t.getOnClickMethod(u)},_)))})))),this.tray(n.name))}}]),e}(b.PureComponent);Object(p.a)(G,"breakpoints",{});e.default=Object(f.f)(G)}}]);