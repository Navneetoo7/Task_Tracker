(this["webpackJsonphello-react"]=this["webpackJsonphello-react"]||[]).push([[0],{15:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(8),a=n.n(o),s=(n(15),n(10)),l=n(6),i=n(2),d=n(9),u=n(0),j=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(u.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(u.jsxs)("h3",{children:[t.text," ",Object(u.jsx)(d.a,{sytle:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]}),Object(u.jsx)("p",{children:t.day})]})},b=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(u.jsx)(u.Fragment,{children:t.map((function(e){return Object(u.jsx)(j,{task:e,onDelete:n,onToggle:c},e.id)}))})},h=n(5),O=n.n(h),m=function(e){var t=e.color,n=e.text,c=e.onClick;return Object(u.jsx)("button",{onClick:c,style:{backgroundColor:t},className:"btn",children:n})};m.defaultProps={color:"steelblue"},m.prototype={color:O.a.string,text:O.a.string,onClick:O.a.func};var x=m,f=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(u.jsxs)("header",{className:"header",children:[Object(u.jsx)("h2",{style:k,children:t}),Object(u.jsx)(x,{color:c?"red":"green",text:c?"Close":"Add",onClick:n})]})};f.defaultProps={title:"Task Tracker"};var k={color:"white",backgroundColor:"black"},p=f,g=function(e){var t=e.onAdd,n=Object(c.useState)(""),r=Object(i.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(""),l=Object(i.a)(s,2),d=l[0],j=l[1],b=Object(c.useState)(!1),h=Object(i.a)(b,2),O=h[0],m=h[1];return Object(u.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t({text:o,day:d,reminder:O}),a(""),j(""),m(!1)):alert("Please add a task")},children:[Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("lable",{children:"Task"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control",children:[Object(u.jsx)("lable",{children:"Day & Time"}),Object(u.jsx)("input",{type:"text",placeholder:"Add Day & Time",value:d,onChange:function(e){return j(e.target.value)}})]}),Object(u.jsxs)("div",{className:"form-control form-control-check",children:[Object(u.jsx)("lable",{children:"Set Reminder"}),Object(u.jsx)("input",{type:"checkbox",checked:O,value:O,onChange:function(e){return m(e.currentTarget.checked)}})]}),Object(u.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})},v=function(e){e.onAdd;var t=Object(c.useState)(!1),n=Object(i.a)(t,2),r=n[0],o=n[1],a=Object(c.useState)([{id:1,text:"Doctor Appointment",day:"Feb 15 at 9pm",reminder:!0},{id:2,text:"school HomeWork",day:"Feb 16 at 7pm",reminder:!1},{id:3,text:"buy car",day:"Feb 16 at 7pm",reminder:!0}]),d=Object(i.a)(a,2),j=d[0],h=d[1];return Object(u.jsxs)("div",{className:"container",children:[Object(u.jsx)(p,{onAdd:function(){return o(!r)},showAdd:r}),r&&Object(u.jsx)(g,{onAdd:function(e){var t=Math.floor(1e4*Math.random())+1,n=Object(l.a)({id:t},e);h([].concat(Object(s.a)(j),[n]))}}),j.length>0?Object(u.jsx)(b,{tasks:j,onDelete:function(e){h(j.filter((function(t){return t.id!==e})))},onToggle:function(e){h(j.map((function(t){return t.id===e?Object(l.a)(Object(l.a)({},t),{},{reminder:!t.reminder}):t})))}}):"no tasks"]})},y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(v,{})}),document.getElementById("root")),y()}},[[19,1,2]]]);
//# sourceMappingURL=main.38dd6670.chunk.js.map