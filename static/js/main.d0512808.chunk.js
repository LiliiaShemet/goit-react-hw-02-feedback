(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],[,,function(t,e,a){t.exports={statistic__list:"Statistic_statistic__list__1IhEm",statistic__item:"Statistic_statistic__item__1Ygkt"}},,,,,,function(t,e,a){t.exports={section:"Section_section__3ROV7",title:"Section_title__3VdVT"}},,,function(t,e,a){t.exports={btn:"FeedbackOptions_btn__3Pnse"}},function(t,e,a){t.exports={message:"Notification_message__1GEi6"}},function(t,e,a){t.exports={container:"Container_container__1CwRh"}},,,,,function(t,e,a){},,function(t,e,a){"use strict";a.r(e);var n=a(1),c=a.n(n),i=a(9),s=a.n(i),o=(a(18),a(10)),r=a(3),l=a(4),b=a(6),u=a(5),d=a(11),j=a.n(d),_=a(0),h=function(t){var e=t.options,a=t.onLeaveFeedback;return e.map((function(t){return Object(_.jsx)("button",{className:j.a.btn,type:"button","data-feedback":t,onClick:function(){return a(t)},children:t},t)}))},f=a(2),O=a.n(f),m=function(t){var e=t.good,a=t.neutral,n=t.bad,c=t.total,i=t.positivePercentage;return Object(_.jsxs)("ul",{className:O.a.statistic__list,children:[Object(_.jsxs)("li",{className:O.a.statistic__item,children:["good:",e]}),Object(_.jsxs)("li",{className:O.a.statistic__item,children:["neutral:",a]}),Object(_.jsxs)("li",{className:O.a.statistic__item,children:["bad:",n]}),Object(_.jsxs)("li",{className:O.a.statistic__item,children:["total:",c]}),Object(_.jsxs)("li",{className:O.a.statistic__item,children:["Positive feedback:",i,"%"]})]})},p=a(8),v=a.n(p),x=function(t){var e=t.title,a=t.children;return Object(_.jsxs)("section",{className:v.a.section,children:[e&&Object(_.jsx)("h2",{className:v.a.title,children:e}),a]})},k=a(12),g=a.n(k),N=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){return Object(r.a)(this,a),e.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(_.jsx)("p",{className:g.a.message,children:this.props.message})}}]),a}(n.Component),F=N,P=a(13),y=a.n(P);var S=function(t){var e=t.children;return Object(_.jsx)("div",{className:y.a.container,children:e})},w=function(t){Object(b.a)(a,t);var e=Object(u.a)(a);function a(){var t;Object(r.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(t=e.call.apply(e,[this].concat(c))).state={good:0,neutral:0,bad:0},t.onLeaveFeedback=function(e){t.setState((function(t){return Object(o.a)({},e,t[e]+1)}))},t.countTotalFeedback=function(){var e=t.state;return e.good+e.neutral+e.bad},t.countPositiveFeedbackPercentage=function(){var e=t.state.good,a=t.countTotalFeedback();return a?Math.round(e/a*100):0},t}return Object(l.a)(a,[{key:"render",value:function(){var t=this.state,e=t.good,a=t.neutral,n=t.bad,c=this.countTotalFeedback(),i=this.countPositiveFeedbackPercentage(),s=this.onLeaveFeedback,o=Object.keys(this.state);return Object(_.jsxs)(S,{className:"App",children:[Object(_.jsx)(x,{title:"Please leave feedback",children:Object(_.jsx)(h,{options:o,onLeaveFeedback:s})}),Object(_.jsx)(x,{title:"Statistics",children:c>0?Object(_.jsx)(m,{good:e,neutral:a,bad:n,total:c,positivePercentage:i}):Object(_.jsx)(F,{message:"No feedback given"})})]})}}]),a}(n.Component),C=w;s.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(C,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.d0512808.chunk.js.map