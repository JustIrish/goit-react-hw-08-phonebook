"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[848],{1848:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r,a=t(9434),i=t(2791),o=t(3634),s=t(9439),d=t(6916),c=function(e){return e.contacts.items},l=function(e){return e.filter.value},u=function(e){return e.contacts.isLoading},h=function(e){return e.contacts.error},x=(0,d.P1)([c,l],(function(e,n){return e.filter((function(e){return e.name.toLocaleLowerCase().includes(n.toLocaleLowerCase())}))})),m=t(5984),p=t(5218),f=t(1614),g=t(4554),Z=t(1889),j=t(722),b=t(3227),v=t(3329),w=function(){var e=(0,a.I0)(),n=(0,a.v9)(c),t=(0,i.useState)(!1),r=(0,s.Z)(t,2),d=r[0],l=r[1],u=(0,i.useState)(""),h=(0,s.Z)(u,2),x=h[0],w=h[1],y=(0,i.useState)(""),C=(0,s.Z)(y,2),P=C[0],S=C[1],k=(0,m.x0)(),T=(0,m.x0)(),A=function(e){var n=e.currentTarget,t=n.name,r=n.value;switch(t){case"name":w(r);break;case"number":S(r)}},W=function(){w(""),S("")};return(0,v.jsx)(f.Z,{component:"main",maxWidth:"xs",children:(0,v.jsx)(g.Z,{sx:{marginTop:8,display:"flex",flexDirection:"column",alignItems:"center"},children:(0,v.jsxs)("form",{onSubmit:function(t){if(t.preventDefault(),n.some((function(e){return e.name.toLowerCase()===x.trim().toLowerCase()})))return p.ZP.error("".concat(x," is already in contacts."));if(n.some((function(e){return e.number===P.trim()})))return p.ZP.error("".concat(P," is already in contacts."));var r={name:x,number:P};l(!0),e((0,o.uK)(r)).unwrap().then((function(){p.ZP.success("Contact added!"),W(),l(!1)})).catch((function(){return p.ZP.error("Something went wrong...Try reloading the page")}))},children:[(0,v.jsxs)(Z.ZP,{container:!0,spacing:4,children:[(0,v.jsx)(Z.ZP,{item:!0,xs:12,children:(0,v.jsx)(j.Z,{type:"text",name:"name",required:!0,fullWidth:!0,id:k,value:x,onChange:A,label:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})}),(0,v.jsx)(Z.ZP,{item:!0,xs:12,children:(0,v.jsx)(j.Z,{type:"tel",name:"number",required:!0,fullWidth:!0,id:T,value:P,onChange:A,label:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})})]}),(0,v.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:d,children:"Add contact"})]})})})},y=t(5243),C=t(168),P=t(7691).ZP.div(r||(r=(0,C.Z)(["\n  display: flex;\n  justify-content: center;\n"]))),S=function(){return(0,v.jsx)(P,{children:(0,v.jsx)(y.iT,{height:14,width:14,color:"#000000",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#979191",strokeWidth:2,strokeWidthSecondary:2})})},k=t(15),T=t(5705),A={position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:{xs:"100%",sm:"400px"},bgcolor:"background.paper",borderRadius:"6px",boxShadow:24,p:6},W=function(e){var n=e.isOpen,t=e.handleClose,r=e.id,i=e.name,s=e.number,d=(0,a.I0)(),c=(0,a.v9)(u),l=(0,T.TA)({initialValues:{id:r,name:i,number:s},onSubmit:function(e,n){var r=n.resetForm;i.trim().toLowerCase()!==e.name.trim().toLowerCase()||s!==e.number?d((0,o.Tk)(e)).unwrap().then((function(){p.ZP.success("Contact edited!"),r(),t()})).catch((function(){return p.ZP.error("Something went wrong...Try reloading the page")})):p.ZP.error("The same values")}});return(0,v.jsx)(k.Z,{open:n,onClose:t,"aria-labelledby":"modal-edit-contact","aria-describedby":"modal-edit-contact",children:(0,v.jsx)(g.Z,{sx:A,children:(0,v.jsxs)("form",{autoComplete:"off",onSubmit:l.handleSubmit,children:[(0,v.jsxs)(Z.ZP,{container:!0,spacing:4,children:[(0,v.jsx)(Z.ZP,{item:!0,xs:12,children:(0,v.jsx)(j.Z,{type:"text",name:"name",required:!0,fullWidth:!0,id:"name",value:l.values.name,label:"Name",onChange:l.handleChange,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"})}),(0,v.jsx)(Z.ZP,{item:!0,xs:12,children:(0,v.jsx)(j.Z,{type:"tel",name:"number",required:!0,fullWidth:!0,id:"number",value:l.values.number,label:"Number",onChange:l.handleChange,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"})})]}),(0,v.jsx)(b.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},loading:c,children:"Edit contact"})]})})})},L=t(6535),z=t(653),I=t(3044),F=t(6259),_=t(6112),N=t(3400),q=t(9332),D=t(7247),B=t(1286),E=function(e){var n=e.contact,t=n.id,r=n.name,d=n.number,c=(0,i.useState)(!1),l=(0,s.Z)(c,2),u=l[0],h=l[1],x=(0,i.useState)(!1),m=(0,s.Z)(x,2),f=m[0],g=m[1],Z=(0,a.I0)();return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)(L.ZP,{sx:{backgroundColor:"rgba(152, 174, 194, 0.16)",borderRadius:"4px",boxShadow:4},children:[(0,v.jsx)(z.Z,{children:(0,v.jsx)(I.Z,{sx:{color:"#1976d2",backgroundColor:"transparent"},children:(0,v.jsx)(q.Z,{sx:{width:"30px",height:"30px"}})})}),(0,v.jsx)(F.Z,{primary:r,secondary:d}),(0,v.jsxs)(_.Z,{sx:{display:"flex",flexDirection:"row",gap:"16px"},children:[(0,v.jsx)(N.Z,{edge:"end","aria-label":"edit",sx:{"&:hover":{color:"#1976d2"},"&:focus":{color:"#1976d2"}},onClick:function(){return g(!0)},children:(0,v.jsx)(B.Z,{})}),(0,v.jsx)(N.Z,{edge:"end","aria-label":"delete",sx:{"&:hover":{color:"#1976d2"},"&:focus":{color:"#1976d2"}},onClick:function(){h(!0),Z((0,o.GK)(t)).unwrap().then((function(){p.ZP.success("Contact deleted!"),h(!1)})).catch((function(){return p.ZP.error("Something went wrong...Try reloading the page")}))},children:u?(0,v.jsx)(S,{}):(0,v.jsx)(D.Z,{})})]})]}),f&&(0,v.jsx)(W,{isOpen:f,handleClose:function(){return g(!1)},id:t,name:r,number:d})]})},G=t(493),J=t(890),K=function(){var e=(0,a.v9)(x);return(0,v.jsx)(g.Z,{sx:{flexGrow:1,maxWidth:"700px",m:"0 auto"},children:(0,v.jsxs)(G.Z,{sx:{display:"flex",flexDirection:"column",gap:"10px",p:"0"},children:[0===e.length&&(0,v.jsx)(J.Z,{sx:{m:"0 auto"},variant:"h6",component:"div",children:"No contacts for your request ..."}),e.map((function(e){return(0,v.jsx)(E,{contact:e},e.id)}))]})})},M=t(4808),O=function(){var e=(0,a.I0)(),n=(0,a.v9)(l);return(0,v.jsx)(f.Z,{sx:{display:"flex",alignItems:"center",justifyContent:"center",mt:"20px",mb:"20px"},children:(0,v.jsx)(j.Z,{fullWidth:!0,type:"text",label:"Find contacts by name",value:n,variant:"outlined",size:"normal",sx:{maxWidth:"700px"},onChange:function(n){e((0,M.T)(n.currentTarget.value.trim()))}})})},R=t(4270),$=t(7047);function V(){var e=(0,a.I0)(),n=(0,a.v9)(c),t=(0,a.v9)(u),r=(0,a.v9)(h);return(0,i.useEffect)((function(){e((0,o.yF)())}),[e]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(R.q,{children:(0,v.jsx)("title",{children:"Your contacts"})}),t?(0,v.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column",gap:4,alignItems:"center",marginTop:"60px"},children:[(0,v.jsx)($.Z,{variant:"rounded",width:400,height:60}),(0,v.jsx)($.Z,{variant:"rounded",width:400,height:60}),(0,v.jsx)($.Z,{variant:"rounded",width:400,height:40}),(0,v.jsx)($.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)($.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)($.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)($.Z,{variant:"rounded",width:700,height:60})]}):(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(w,{}),(0,v.jsx)(O,{}),r&&(0,v.jsx)(g.Z,{sx:{display:"flex",justifyContent:"center",mb:4},children:(0,v.jsx)(J.Z,{variant:"h6",component:"div",children:"Something went wrong...Try reloading the page"})}),n.length>0&&!r?(0,v.jsx)(K,{}):(0,v.jsxs)(g.Z,{sx:{display:"flex",flexDirection:"column",gap:4,alignItems:"center"},children:[(0,v.jsx)($.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)($.Z,{variant:"rounded",width:700,height:60}),(0,v.jsx)($.Z,{variant:"rounded",width:700,height:60})]}),";"]})]})}}}]);
//# sourceMappingURL=848.ce35b8c7.chunk.js.map