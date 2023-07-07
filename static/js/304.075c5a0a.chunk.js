"use strict";(self.webpackChunkorganizer_react=self.webpackChunkorganizer_react||[]).push([[304],{9304:function(n,e,r){r.r(e),r.d(e,{default:function(){return me}});var t,o,i,a,c,d=r(9439),l=r(2791),s=r(9434),u=r(2286),h=r(3634),x=r(781),f=r(5218),m=r(3433),g=r(168),p=r(8789),v=p.ZP.ul(t||(t=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  overflow-y: auto;\n  padding-right: 20px;\n"]))),Z=p.ZP.li(o||(o=(0,g.Z)(["\n  width: 100%;\n  display: flex;\n"]))),b=(p.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n"]))),p.ZP.p(a||(a=(0,g.Z)([""]))),p.ZP.a(c||(c=(0,g.Z)(["\n  flex-grow: 1;\n  color: black;\n  font-size: 1.3rem;\n  text-decoration: none;\n  padding: 10px 20px;\n  border-radius: ",";\n\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: #4285f4;\n    font-weight: 500;\n  }\n"])),(function(n){return n.theme.borderRadius.large}),(function(n){return n.theme.colors.highlightedText}))),w=r(1816),j=r(3329);function y(){var n=(0,s.I0)(),e=(0,s.v9)(u.hF),r=(0,m.Z)(e).sort((function(n,e){return n.name.localeCompare(e.name)})),t=function(e){e.preventDefault(),n((0,w.f)(e.target.id))};return(0,j.jsx)(v,{children:r.map((function(n){var e=n.id,r=n.name;n.phone;return(0,j.jsx)(Z,{children:(0,j.jsx)(b,{href:"",onClick:t,id:e,children:r})},e)}))})}var P,k,z,C,E,A,T=r(1273),S=r(7478),I=r(645),N=r(8397),L=(0,p.ZP)(N.Z)(P||(P=(0,g.Z)(["\n  background-color: white;\n"]))),W=(p.ZP.form(k||(k=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 30px;\n\n  font-size: 1.3rem;\n"]))),p.ZP.div(z||(z=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 15px;\n"]))),p.ZP.label(C||(C=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),(0,p.ZP)(I.E5)(E||(E=(0,g.Z)(["\n  font-size: inherit;\n  line-height: 1.4;\n  border-radius: ",";\n"])),S.r.borderRadius.large),(0,p.ZP)(L)(A||(A=(0,g.Z)(["\n  width: 100%;\n  font-size: 1.3rem;\n"]))));function q(){var n=(0,s.v9)(u.Af).items,e=(0,s.v9)(u.AD),r=(0,s.I0)();(0,l.useEffect)((function(){var e=document.querySelector("#searchBox");e&&(0===n.length&&e.setAttribute("disabled",""),n.length>0&&e.removeAttribute("disabled"))}),[n.length]);return(0,j.jsx)(W,{type:"text",value:e,onChange:function(n){var e=n.target.value.toLowerCase().trim();r((0,T.a)(e))},placeholder:0===n.length?"Phonebook is empty":1===n.length?"Not enough contacts to search in":"Search ".concat(n.length," contacts"),id:"searchBox"})}var R,V,D=r(4164),M=p.ZP.div(R||(R=(0,g.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n  cursor: cell;\n"]))),B=p.ZP.div(V||(V=(0,g.Z)(["\n  cursor: auto;\n\n  width: 90%;\n  max-width: 480px;\n  /* background-color: #fff; */\n  padding: 60px;\n  padding-top: 40px;\n  align-self: flex-start;\n  margin-top: 20vh;\n\n  border-radius: ",";\n\n  --background-fallback: rgb(245, 245, 245);\n  --gradient-start-color: rgba(240, 248, 255, 1);\n  --gradient-end-color: rgba(245, 245, 245, 1);\n\n  background: var(--background-fallback);\n  background: linear-gradient(\n    0deg,\n    var(--gradient-start-color) 55%,\n    var(--gradient-end-color) 100%\n  );\n"])),(function(n){return n.theme.borderRadius.regular})),F=document.querySelector("#modal-root");function H(n){var e=n.onClose,r=n.children;(0,l.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}));return(0,D.createPortal)((0,j.jsx)(M,{onClick:function(n){n.target===n.currentTarget&&e()},children:(0,j.jsx)(B,{children:r})}),F)}var K,O,_,G,Y,J,Q,U,X,$,nn,en,rn,tn,on,an=r(1087),cn=p.ZP.a(K||(K=(0,g.Z)(["\n  text-decoration: none;\n  color: ",";\n  font-size: 1.3rem;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n"])),S.r.colors.secondaryText,S.r.colors.accent),dn=((0,p.ZP)(an.OL)(O||(O=(0,g.Z)(["\n  color: black;\n  font-size: 1.1rem;\n  text-decoration: none;\n  padding: 8px 20px;\n  font-weight: 500;\n\n  border-radius: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n  }\n\n  &.active {\n    color: ",";\n    background-color: ",";\n\n    /* color: ","; */\n\n    &:hover,\n    &:focus {\n      background-color: ",";\n    }\n  }\n"])),(function(n){return n.theme.borderRadius.regular}),(function(n){return n.theme.colors.highlightedText}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.highlightedText}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accent}),(function(n){return n.theme.colors.accentDark})),r(9126)),ln=p.ZP.div(_||(_=(0,g.Z)(["\n  border-radius: ",";\n\n  padding: 20px 30px;\n  flex-grow: 1;\n  max-width: 400px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (max-width: 768px) {\n    flex-direction: row;\n  }\n\n  @media screen and (min-width: calc(768px + 1px)) {\n  }\n"])),(function(n){return n.theme.borderRadius.regular})),sn=p.ZP.div(G||(G=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (max-width: 768px) {\n    justify-content: space-between;\n  }\n"]))),un=p.ZP.div(Y||(Y=(0,g.Z)(["\n  border-radius: ",";\n  overflow: hidden;\n  width: 200px;\n\n  box-shadow: ",";\n"])),(function(n){return n.theme.borderRadius.regular}),(function(n){return n.theme.boxShadow})),hn=p.ZP.img(J||(J=(0,g.Z)(["\n  object-position: center;\n  object-fit: cover;\n"]))),xn=p.ZP.div(Q||(Q=(0,g.Z)(["\n  font-size: 1.5rem;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),fn=p.ZP.p(U||(U=(0,g.Z)(["\n  font-size: 2rem;\n  font-weight: 600;\n"]))),mn=(0,p.ZP)(cn)(X||(X=(0,g.Z)([""]))),gn=(0,p.ZP)(cn)($||($=(0,g.Z)([""]))),pn=p.ZP.div(nn||(nn=(0,g.Z)(["\n  display: flex;\n  gap: 20px;\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column;\n    justify-content: end;\n  }\n"]))),vn=((0,p.ZP)(I.Yd)(en||(en=(0,g.Z)([""]))),(0,p.ZP)(I.Yd)(rn||(rn=(0,g.Z)(["\n  &:hover,\n  &:focus {\n    color: whitesmoke;\n    background-color: ",";\n    font-weight: 500;\n  }\n"])),(function(n){return n.theme.colors.warning})),(0,p.ZP)(dn._y7)(tn||(tn=(0,g.Z)(["\n  --size: 60%;\n  /* height: var(--size); */\n  width: var(--size);\n"])))),Zn=((0,p.ZP)(I.HL)(on||(on=(0,g.Z)(["\n  --size: 40px;\n\n  color: ",";\n\n  &:hover,\n  &:focus {\n    color: ",";\n    background-color: ",";\n    font-weight: 500;\n\n    & > "," {\n      transform: scale(1.1);\n    }\n  }\n"])),(function(n){return n.theme.colors.secondaryText}),(function(n){return n.theme.colors.highlightedText}),(function(n){return n.theme.colors.warning}),vn),r(6151)),bn=r(4708),wn=r(4554),jn=r(890),yn=r(1614),Pn=r(7107),kn=r(4507),zn=(0,Pn.Z)();function Cn(n){var e=n.formType,r=n.editValues,t=void 0===r?null:r,o=n.toggleModal,i=(0,s.I0)(),a=(0,s.v9)(u.Af).items,c=function(n,e){var r,t,o,i;"add"===n&&(r="",t="",o="Add contact");"edit"===n&&(r=e.name,t=e.number,o="Save changes");return{initNameValue:r,initNumberValue:t,buttonText:o,operation:i}}(e,t),x=c.initNameValue,m=c.initNumberValue,g=c.buttonText,p=(0,l.useState)(x),v=(0,d.Z)(p,2),Z=v[0],b=v[1],w=(0,l.useState)(m),y=(0,d.Z)(w,2),P=y[0],k=y[1],z=function(n){var e=n.currentTarget,r=e.name,t=e.value;switch(r){case"name":b(t);break;case"number":k(t);break;default:return}};return(0,j.jsx)(kn.Z,{theme:zn,children:(0,j.jsxs)(yn.Z,{component:"main",maxWidth:"xs",children:[(0,j.jsx)(bn.ZP,{}),(0,j.jsxs)(wn.Z,{sx:{marginTop:"2vh",display:"flex",flexDirection:"column",alignItems:"center"},children:[(0,j.jsx)(jn.Z,{component:"h2",variant:"h4",children:En(e)}),(0,j.jsxs)(wn.Z,{component:"form",onSubmit:function(n){n.preventDefault();var r=function(n,e,r){var t,o,i;"add"===n&&(i=h.uK,t=r,o="Contact '".concat(r.name,"' was added"));if("edit"===n){var a=e.id;i=h.mP,t={id:a,editedContact:r},o="Changes have been saved"}return{operation:i,operationArgs:t,toastMessage:o}}(e,t,{name:Z,number:P}),c=r.operation,d=r.operationArgs,l=r.toastMessage;"add"===e&&An(a,Z)?f.ZP.error("".concat(Z," is already a contact")):(i(c(d)).unwrap().then((function(n){if(n.error)throw new Error(n.payload);return f.ZP.success(l)})).catch((function(n){return f.ZP.error(n.message)})),o())},noValidate:!0,sx:{mt:1},children:[(0,j.jsx)(L,{margin:"normal",required:!0,fullWidth:!0,id:"name",label:"Name",type:"text",name:"name",onChange:z,value:Z}),(0,j.jsx)(L,{margin:"normal",required:!0,fullWidth:!0,name:"number",label:"Telephone",type:"tel",id:"number",autoComplete:"tel",onChange:z,value:P}),(0,j.jsx)(Zn.Z,{type:"submit",fullWidth:!0,variant:"contained",sx:{mt:3,mb:2},disabled:!Z||!P,children:g})]})]})]})})}function En(n){var e="";return"add"===n&&(e="Add a New Contact"),"edit"===n&&(e="Edit Contact"),e}var An=function(n,e){return n.find((function(n){return n.name.toLowerCase()===e.toLowerCase()}))},Tn=r(7247),Sn=r(1286);function In(){var n=(0,l.useState)(!1),e=(0,d.Z)(n,2),r=e[0],t=e[1],o=function(){return t(!r)},i=(0,s.I0)(),a=(0,s.v9)(u.Af),c=a.items,m=a.currentId,g=c.find((function(n){return n.id===m})),p=g.name,v=g.number,Z=x.We.internet.exampleEmail(),b=x.We.image.avatar(),w={name:p,number:v,id:m};return(0,j.jsxs)(ln,{children:[(0,j.jsxs)(sn,{children:[(0,j.jsx)(un,{children:(0,j.jsx)(hn,{src:b,alt:p,width:640})}),(0,j.jsxs)(xn,{children:[(0,j.jsx)(fn,{children:p}),(0,j.jsx)(mn,{href:"tel:+".concat(v),children:v}),(0,j.jsx)(gn,{href:"mailto:".concat(Z),children:Z})]})]}),(0,j.jsxs)(pn,{children:[(0,j.jsx)(Zn.Z,{variant:"outlined",startIcon:(0,j.jsx)(Sn.Z,{}),size:"large",onClick:o,children:"Edit"}),(0,j.jsx)(Zn.Z,{variant:"outlined",color:"error",startIcon:(0,j.jsx)(Tn.Z,{}),size:"large",onClick:function(){return n=m,void i((0,h.GK)(n)).then((function(n){if(n.error)throw new Error(n.payload);return f.Am.success("Contact has been deleted")})).catch((function(n){return f.Am.error(n.message)}));var n},children:"Delete"})]}),r&&(0,j.jsx)(H,{onClose:o,children:(0,j.jsx)(Cn,{formType:"edit",editValues:w,toggleModal:o})})]})}var Nn,Ln,Wn,qn,Rn,Vn=r(458),Dn=r(1213),Mn=p.ZP.div(Nn||(Nn=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  align-items: center;\n  color: silver;\n\n  @media screen and (min-width: calc(768px + 1px)) {\n    margin-top: 20vh;\n  }\n"]))),Bn=p.ZP.div(Ln||(Ln=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Fn=(0,p.ZP)(Vn.ttH)(Wn||(Wn=(0,g.Z)(["\n  --size: 5rem;\n  height: var(--size);\n  width: var(--size);\n"]))),Hn=(0,p.ZP)(Dn.toq)(qn||(qn=(0,g.Z)(["\n  --size: 5rem;\n  height: var(--size);\n  width: var(--size);\n"]))),Kn=p.ZP.p(Rn||(Rn=(0,g.Z)(["\n  font-size: 1.5rem;\n  text-align: center;\n"])));function On(n){var e=n.isError,r=void 0!==e&&e,t=n.isEmpty,o=r?["Something went wrong","Try refreshing the page or check back later"]:[t?"Phonebook is empty":"Select a contact to view details"];return(0,j.jsxs)(Mn,{children:[r?(0,j.jsx)(Hn,{}):(0,j.jsx)(Fn,{}),(0,j.jsx)(Bn,{children:o.map((function(n,e){return(0,j.jsx)(Kn,{children:n},e)}))})]})}var _n,Gn,Yn,Jn,Qn,Un,Xn,$n,ne,ee=r(8617),re=document.querySelector(".header").getBoundingClientRect().height,te="".concat(re,"px"),oe=p.ZP.div(_n||(_n=(0,g.Z)(["\n  display: flex;\n  height: calc(100vh - ",");\n\n  @media screen and (max-width: 768px) {\n    flex-direction: column-reverse;\n  }\n"])),te),ie=p.ZP.div(Gn||(Gn=(0,g.Z)(["\n  padding: 25px;\n\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  @media screen and (max-width: 768px) {\n    height: 55%;\n  }\n\n  @media screen and (min-width: calc(768px + 1px)) {\n    max-width: 450px;\n    padding-top: 50px;\n    flex-grow: 1;\n    gap: 30px;\n  }\n\n  --background-fallback: rgb(245, 245, 245);\n  --gradient-start-color: rgba(240, 248, 255, 1);\n  --gradient-end-color: rgba(245, 245, 245, 1);\n\n  background: var(--background-fallback);\n  background: linear-gradient(\n    0deg,\n    var(--gradient-start-color) 55%,\n    var(--gradient-end-color) 100%\n  );\n"]))),ae=p.ZP.div(Yn||(Yn=(0,g.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 25px;\n\n  @media screen and (max-width: 768px) {\n    justify-content: center;\n    height: 45%;\n  }\n\n  @media screen and (min-width: calc(768px + 1px)) {\n    padding-top: 50px;\n    flex-grow: 1;\n  }\n"]))),ce=p.ZP.div(Jn||(Jn=(0,g.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),de=(0,p.ZP)(I.Or)(Qn||(Qn=(0,g.Z)(["\n  --size: 40px;\n"]))),le=(0,p.ZP)(I.Or)(Un||(Un=(0,g.Z)(["\n  --size: 40px;\n"]))),se=(0,p.ZP)(ee.b9W)(Xn||(Xn=(0,g.Z)(["\n  --size: 50%;\n  height: var(--size);\n  width: var(--size);\n"]))),ue=(0,p.ZP)(ee.ilJ)($n||($n=(0,g.Z)(["\n  --size: 50%;\n  height: var(--size);\n  width: var(--size);\n"]))),he=p.ZP.div(ne||(ne=(0,g.Z)(["\n  display: flex;\n  gap: 15px;\n\n  align-items: center;\n"])));function xe(){var n=(0,s.v9)(u.Af),e=n.items,r=n.isLoading,t=n.error,o=n.currentId,i=(0,l.useState)(!1),a=(0,d.Z)(i,2),c=a[0],m=a[1],g=function(){return m(!c)},p=(0,s.I0)();(0,l.useEffect)((function(){p((0,h.yF)()).unwrap().catch((function(){return f.Am.error("Error loading contacts. Please refresh the page")}))}),[p]);return(0,j.jsxs)(oe,{children:[(0,j.jsxs)(ie,{children:[(0,j.jsxs)(he,{children:[(0,j.jsx)("div",{style:{flexGrow:1},children:(0,j.jsx)(q,{})}),(0,j.jsxs)(ce,{children:[(0,j.jsx)(de,{type:"button",onClick:g,disabled:t,"aria-label":"New contact",children:(0,j.jsx)(se,{})}),(0,j.jsx)(le,{type:"button",onClick:function(){var n={name:x.We.person.fullName(),number:x.We.phone.number()};p((0,h.uK)(n)).then(f.Am.success("".concat(n.name," has been added to the phonebook"))).catch((function(n){return f.Am.error(n.message)}))},disabled:t,"aria-label":"New random contact (for testing)",children:(0,j.jsx)(ue,{})})]})]}),e.length>0&&(0,j.jsx)(y,{})]}),(0,j.jsxs)(ae,{children:[!o&&!t&&(0,j.jsx)(On,{isEmpty:0===e.length}),!r&&t&&(0,j.jsx)(On,{isError:null!==t}),o&&!t&&(0,j.jsx)(In,{})]}),c&&(0,j.jsx)(H,{onClose:g,children:(0,j.jsx)(Cn,{formType:"add",toggleModal:g})})]})}var fe=r(6907);function me(){var n=(0,s.v9)(u.Hz).isLoggedIn;return(0,j.jsxs)(j.Fragment,{children:[(0,j.jsxs)(fe.ql,{children:[(0,j.jsx)("title",{children:"Contacts"}),(0,j.jsx)("meta",{name:"description",content:"My contacts"})]}),n&&(0,j.jsx)(xe,{})]})}}}]);
//# sourceMappingURL=304.075c5a0a.chunk.js.map