(this.webpackJsonpreact_keyboard=this.webpackJsonpreact_keyboard||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n.n(a),r=n(4),c=n(5),o=n(7),i=n(6),u=n(1),p=n.n(u),l=n(0),d=function(e){Object(o.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={keyup:"Nothing was pressed yet"},e.listener=function(t){e.setState({keyup:"The last pressed key is [".concat(t.key,"]")})},e}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("keyup",this.listener)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keyup",this.listener)}},{key:"render",value:function(){var e=this.state.keyup;return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("p",{className:"App__message",children:e})})}}]),n}(p.a.Component);n(13);s.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.d3529efb.chunk.js.map