"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[648],{8648:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(9434),a=t(2791),i=t(208),o=t(9439),s=t(6916),c=function(e){return e.contacts.items},d=function(e){return e.filter.value},u=function(e){return e.contacts.isLoading},l=function(e){return e.contacts.error},h=(0,s.P1)([c,d],(function(e,n){return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))})),x=t(5984),m=t(5218),f=t(1614),g=t(4554),p=t(1889),j=t(1787),Z=t(3227),v=t(3329),w=function(){var e=(0,r.I0)(),n=(0,r.v9)(c),t=(0,r.v9)(u),s=(0,a.useState)(""),d=(0,o.Z)(s,2),l=d[0],h=d[1],w=(0,a.useState)(""),b=(0,o.Z)(w,2),y=b[0],C=b[1],P=(0,x.x0)(),k=(0,x.x0)(),I=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":h(r);break;case"number":C(r)}},T=function(){h(""),C("")};return(0,v.jsx)(f.Z,{component:"main",maxWidth:"xs",children:(0,v.jsx)(g.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,v.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),n.some((function(e){return e.name.toLowerCase()===l.trim().toLowerCase()})))return m.ZP.error("".concat(l," is already in contacts."));if(n.some((function(e){return e.number===y.trim()})))return m.ZP.error("".concat(y," is already in contacts."));var r={name:l,number:y};e((0,i.uK)(r)).unwrap().then((function(){m.ZP.success("Contact added!"),T()})).catch((function(){return m.ZP.error("Something went wrong...Try reloading the page")}))},children:[(0,v.jsxs)(p.ZP,{container:!0,spacing:4,children:[(0,v.jsx)(p.ZP,{item:!0,xs:12,children:(0,v.jsx)(j.Z,{type:"text",name:"name",required:!0,fullWidth:!0,id:P,value:l,onChange:I,label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})}),(0,v.jsx)(p.ZP,{item:!0,xs:12,children:(0,v.jsx)(j.Z,{type:"tel",name:"number",required:!0,fullWidth:!0,id:k,value:y,onChange:I,label:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})})]}),(0,v.jsx)(Z.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:t,children:"Add contact"})]})})})},b=t(4852),y=t(653),C=t(3044),P=t(6259),k=t(3400),I=t(9332),T=t(7247),_=function(e){var n=e.contact,t=n.id,a=n.name,o=n.number,s=(0,r.I0)();return(0,v.jsxs)(b.ZP,{sx:{backgroundColor:"rgba(152, 174, 194, 0.16)",borderRadius:"4px",boxShadow:4},children:[(0,v.jsx)(y.Z,{children:(0,v.jsx)(C.Z,{sx:{color:"#1976d2",backgroundColor:"transparent"},children:(0,v.jsx)(I.Z,{sx:{width:"30px",height:"30px"}})})}),(0,v.jsx)(P.Z,{primary:a,secondary:o}),(0,v.jsx)(k.Z,{edge:"end","aria-label":"delete",sx:{"&:hover":{color:"#1976d2"},"&:focus":{color:"#1976d2"}},onClick:function(){s((0,i.GK)(t)).unwrap().then((function(){m.ZP.success("Contact deleted!")})).catch((function(){return m.ZP.error("Something went wrong...Try reloading the page")}))},children:(0,v.jsx)(T.Z,{})})]})},L=t(493),S=function(){var e=(0,r.v9)(h);return(0,v.jsx)(g.Z,{sx:{flexGrow:1,maxWidth:"700px",m:"0 auto"},children:(0,v.jsx)(L.Z,{sx:{display:"flex",flexDirection:"column",gap:"10px",p:"0"},children:e.map((function(e){return(0,v.jsx)(_,{contact:e},e.id)}))})})},W=t(6895),A=function(){var e=(0,r.I0)(),n=(0,r.v9)(d);return(0,v.jsx)(f.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:"20px",mb:"20px"},children:(0,v.jsx)(j.Z,{fullWidth:!0,type:"text",label:"Find contacts by name",value:n,variant:"outlined",size:"normal",sx:{maxWidth:"700px"},onChange:function(n){e((0,W.T)(n.currentTarget.value.trim()))}})})},z=t(4270),D=t(7047);function F(){var e=(0,r.I0)(),n=(0,r.v9)(c),t=(0,r.v9)(u),o=(0,r.v9)(l);return(0,a.useEffect)((function(){e((0,i.yF)())}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(z.q,{children:(0,v.jsx)("title",{children:"Your contacts"})}),t?(0,v.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column",gap:4,alignItems:"center",marginTop:"60px"},children:[(0,v.jsx)(D.Z,{variant:"rounded",width:400,height:60}),(0,v.jsx)(D.Z,{variant:"rounded",width:400,height:60}),(0,v.jsx)(D.Z,{variant:"rounded",width:400,height:40}),(0,v.jsx)(D.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)(D.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)(D.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)(D.Z,{variant:"rounded",width:700,height:60})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{}),(0,v.jsx)(A,{}),o&&(0,v.jsx)("div",{style:{margin:"10px auto"},children:"Something went wrong... Try reloading the page"}),n.length>0?(0,v.jsx)(S,{}):(0,v.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[(0,v.jsx)(D.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)(D.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)(D.Z,{variant:"rounded",width:700,height:60})]}),";"]})]})}}}]);
//# sourceMappingURL=648.5ae46d04.chunk.js.map