(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){"use strict";n.r(t);var r,a=n(0),o=n(26),s=n.n(o),c=n(8),i=n(9),l=n(13),d=n(11),u=n(10),h=n(18),g=n(5),j=n(6),m=n.n(j),b=n(22),p=n(93),f=n(95),v=n(94),O=n(19),y=n(14),x=n.n(y),w=n(1),S=O.a.div(r||(r=Object(b.a)(["\n  .navbar { background-color: #222; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  #c {\n      margin-left: 5%;\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: #9FFFCB;\n    &:hover { color: white; }\n  }\n  #form-center {\n    position: absolute !important;\n    left: 25%;\n    top: 15px;\n    right: 25%;\n  }\n"])));window.innerWidth;function k(e){if(13===e.keyCode){var t=document.getElementById("search").value;window.location="".concat(location.protocol,"/#/search/").concat(t)}}setTimeout((function(){document.getElementById("basic-navbar-nav").style.marginLeft="5%",document.getElementById("navbr").style.backgroundColor="gray",document.getElementById("navbr").style.textAlign="center",x()(".co").css({whiteSpace:"norap",overflowY:"hidden",marginLeft:"-6%"}),x()(".coC").css({display:"inline-block",width:"50px",height:"100%"}),x()("#6").css({display:"inline-block",width:"63px",height:"100%"}),x()("#7").css({display:"inline-block",height:"100%"})}),400);var C,I,L,B,T,E,z,U,N,P,A=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(w.jsx)(S,{children:Object(w.jsxs)(p.a,{id:"navbr",expand:"exlg",children:[Object(w.jsx)(p.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(w.jsx)("div",{id:"form-center",children:Object(w.jsx)(f.a,{type:"text",placeholder:"Search",className:"",id:"search",onKeyDown:k})}),Object(w.jsxs)(p.a.Collapse,{id:"basic-navbar-nav",children:[Object(w.jsx)("hr",{}),Object(w.jsx)(v.a,{id:"nav",className:"ml-auto",children:Object(w.jsx)(v.a.Item,{children:Object(w.jsxs)("div",{className:"co",children:[Object(w.jsx)(v.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"1",href:"/#",children:"Home"}),Object(w.jsx)(v.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"2",href:"/#/signup",children:"Signup"}),Object(w.jsx)(v.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"4",href:"/#/login",children:"Login"}),Object(w.jsx)(v.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"5",href:"/#/logout",children:"Logout"}),Object(w.jsx)(v.a.Link,{style:{fontSize:"1rem"},className:"coC",id:"6",href:"/#/main",children:"Games"}),Object(w.jsx)(v.a.Link,{style:{fontSize:"1rem"},id:"7",href:"/#/build",children:"Build"})]})})})]})]})})}}]),n}(a.Component),F=n(92),H=O.a.div(C||(C=Object(b.a)(["\n    .form-center {\n        position: absolute !important;\n        left: 25%;\n        right: 25%;\n    }\n"]))),M=function(e){document.getElementById("errContanier").innerHTML=String(e)},_=function(e,t,n){m.a.get("https://server234.glitch.me/api/users").then((function(r){for(var a=0;a<r.data.length;a++)if(r.data[a].username===e)return void M("username exists");n.logedIn(n.getUsername())?M("Your already logged in!"):(console.log(e),m.a.post("https://server234.glitch.me/api/users",{username:e,password:t,sS:!1,fS:!0}).then((function(n){m.a.post("https://server234.glitch.me/api/sessions",{username:e,password:t}).then((function(n){console.log("Success!"),console.log(n),M("Your signed in"),console.log(I),I.dispatch({type:"Login",username:e,password:t,cookies:0}),localStorage.setItem("username",e),localStorage.setItem("password",t),window.location="".concat(location.protocol,"/#/main")})).catch((function(e){console.error(e)}))})).catch((function(e){console.error("Theres an err with checking if you are already logged in: ".concat(e))})))})).catch((function(e){console.error(e)}))},D=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={username:"stranger",password:"unknown"},L=Object(l.a)(r),I=r.props.store,r}return Object(i.a)(n,[{key:"onKeyDown",value:function(e){13===e.keyCode&&_(document.getElementById("username").value,document.getElementById("password").value,L)}},{key:"logedIn",value:function(e){return void 0!==e}},{key:"getUsername",value:function(){if(void 0!==I.getState()){if("Stranger"===I.getState().username)return;return I.getState().username}return localStorage.getItem("username")}},{key:"getPassword",value:function(){if(void 0!==I.getState()){if("Stranger"===I.getState().username)return;return I.getState().username}localStorage.getItem("password")}},{key:"handleClick",value:function(e){_(document.getElementById("username").value,document.getElementById("password").value,L)}},{key:"render",value:function(){return Object(w.jsx)(H,{children:Object(w.jsx)("div",{children:Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h1",{children:"Signup:"}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"form-center",children:[Object(w.jsx)(f.a,{type:"text",placeholder:"username",className:"username",id:"username"}),Object(w.jsx)(f.a,{type:"password",placeholder:"password",className:"password",id:"password",onKeyDown:this.onKeyDown}),Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"lg",onClick:this.handleClick,onTouchStart:this.handleClick,block:!0,type:"sumbit",children:"Signup"}),Object(w.jsx)("p",{id:"errContanier"})]})]})})})}}]),n}(a.Component),G=O.a.div(B||(B=Object(b.a)(["\n    .form-center {\n        position: absolute !important;\n        left: 25%;\n        right: 25%;\n    }\n"]))),Y=function(e){document.getElementById("errContanier").innerHTML=String(e)},K=function(e,t,n){m.a.get("https://server234.glitch.me/api/users").then((function(n){m.a.get("https://server234.glitch.me/api/sessions").then((function(n){var r=0;for(console.log(n.data);r<n.data.length;){if(n.data[r].username===e&&n.data[r].password===t)return void Y("Your already logged in!");r++}m.a.post("https://server234.glitch.me/api/sessions",{username:e,password:t}).then((function(n){console.log("Success!"),Y("Your logged in"),console.log(T),T.dispatch({type:"Login",username:e,password:t}),localStorage.setItem("username",e),localStorage.setItem("password",t),window.location="".concat(location.protocol,"/#/main")})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)}))})).catch((function(e){console.error(e)}))},R=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={username:"stranger",password:"unknown"},T=r.props.store,Object(l.a)(r),r}return Object(i.a)(n,[{key:"onKeyDown",value:function(e){13===e.keyCode&&K(document.getElementById("username").value,document.getElementById("password").value)}},{key:"handleClick",value:function(e){K(document.getElementById("username").value,document.getElementById("password").value)}},{key:"logedIn",value:function(e){return void 0!==e}},{key:"getUsername",value:function(){if(void 0!==T.getState()){if("Stranger"===T.getState().username)return;return T.getState().username}if(document.cookie.length>0){var e=parseDocumentCookie(),t=e.username;e.password;return t}}},{key:"getPassword",value:function(){if(void 0!==T.getState()){if("Stranger"===T.getState().username)return;return T.getState().username}if(document.cookie.length>0){var e=parseDocumentCookie();e.username;return e.password}}},{key:"render",value:function(){return Object(w.jsx)(G,{children:Object(w.jsx)("div",{children:Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h1",{children:"Login:"}),Object(w.jsx)("hr",{}),Object(w.jsxs)("div",{className:"form-center",children:[Object(w.jsx)(f.a,{type:"text",placeholder:"username",className:"username",id:"username"}),Object(w.jsx)(f.a,{type:"password",placeholder:"password",className:"password",id:"password",onKeyDown:this.onKeyDown}),Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"lg",onClick:this.handleClick,onTouchStart:this.handleClick,block:!0,type:"sumbit",children:"Login"}),Object(w.jsx)("p",{id:"errContanier"})]})]})})})}}]),n}(a.Component),J=O.a.div(E||(E=Object(b.a)(["\n .modal {\n                display: none; /* Hidden by default */\n                position: fixed; /* Stay in place */\n                z-index: 1; /* Sit on top */\n                padding-top: 10rem; /* Location of the box */\n                left: 0;\n                top: 0;\n                width: 100%; /* Full width */\n                height: 100%; /* Full height */\n                overflow: auto; /* Enable scroll if needed */\n                background-color: rgb(0,0,0); /* Fallback color */\n                background-color: rgba(0,0,0,0.4); /* Black w/ opacity */\n              }\n\n              /* Modal Content */\n              .modal-content {\n                background-color: #fefefe;\n                margin: auto;\n                padding: 4rem;\n                border: 0.1rem solid #888;\n                width: 80%;\n                height: 40%;\n                text-align: center;\n              }\n\n              /* The Close Button */\n              .close {\n                color: #aaaaaa;\n                float: right;\n                font-size: 2.8rem;\n                font-weight: bold;\n              }\n\n              .close:hover,\n              .close:focus {\n                color: #000;\n                text-decoration: none;\n                cursor: pointer;\n              }\n              #content {\n                color: darkred;\n              }\n"]))),W=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),r=t.call(this,e),z=Object(l.a)(r),U=r.props.store,r}return Object(i.a)(n,[{key:"handleText",value:function(e){x()("#content").text(String(e))}},{key:"getUsername",value:function(){if(void 0!==U.getState()){if("Stranger"===U.getState().username)return;return U.getState().username}return localStorage.getItem("username")}},{key:"getPassword",value:function(){if(void 0!==U.getState()){if("Stranger"===U.getState().username)return;return U.getState().username}localStorage.getItem("password")}},{key:"parseDocumentCookie",value:function(){var e={};return document.cookie.split(";").map((function(e){return e.trim().split("=").map(decodeURIComponent)})).reduce((function(t,n){try{t[n[0]]=JSON.parse(n[1])}catch(r){t[n[0]]=n[1]}return e=t,t}),{}),e}},{key:"logOut",value:function(){void 0!==z.getUsername()&&m.a.delete("https://server234.glitch.me/api/sessions",{username:z.getUsername(),password:z.getPassword()}).then((function(e){U.dispatch({type:"Logout"}),z.handleText("Logged out successfully")})).catch((function(e){z.handleText("There has been an error"),console.error(e)}))}},{key:"f",value:function(e){var t=document.getElementById("myModal");window.onclick=function(e){e.target==t&&(t.style.display="none")},window.ontouchstart=function(e){e.target==t&&(t.style.display="none")},document.getElementById("myModal").style.display="block"}},{key:"render",value:function(){return Object(w.jsx)(J,{children:Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Logout"}),Object(w.jsx)("hr",{}),Object(w.jsx)(F.a,{bsStyle:"success",id:"delete",bsSize:"large",onClick:this.f,onTouchStart:this.f,href:"",target:"_blank",children:"Logout"}),Object(w.jsx)("div",{id:"prompt",children:Object(w.jsx)("div",{id:"myModal",className:"modal",children:Object(w.jsxs)("div",{className:"modal-content",children:[Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"small",href:"",onClick:this.logOut,onTouchStart:this.logOut,target:"_blank",id:"sure",className:"send",children:"are you sure you want to logout?"}),Object(w.jsx)("p",{id:"content"})]})})})]})})}}]),n}(a.Component);n.p;window.addGames=function(){document.getElementById("loadGames").remove(),m.a.get("https://server234.glitch.me/api/games").then((function(e){for(var t=0;t<e.data.length;t++)document.getElementById("games").innerHTML+='\n            <a href="/games/'.concat(e.data[t].id,'"><h4 style="border-style: solid;  display: inline-block;  width: -moz-fit-content; width: fit-content; border-color: black;">').concat(e.data[t].title,"</h4></a>\n            ")})).catch((function(e){console.error(e)}))};var q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),r=t.call(this,e),N=Object(l.a)(r),P=r.props.store,r}return Object(i.a)(n,[{key:"logedIn",value:function(e){return void 0!==e}},{key:"getUsername",value:function(){if(void 0!==P.getState()){if("Stranger"===P.getState().username)return;return P.getState().username}return localStorage.getItem("username")}},{key:"getPassword",value:function(){if(void 0!==P.getState()){if("Stranger"===P.getState().username)return;return P.getState().username}return localStorage.getItem("password")}},{key:"start",value:function(){}},{key:"handleClick",value:function(e){N.start(),document.getElementById("spd").remove()}},{key:"render",value:function(){return this.logedIn(this.getUsername())?(window.username=this.getUsername(),window.password=this.getPassword(),Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Games"}),Object(w.jsx)("hr",{}),Object(w.jsx)("a",{href:"javascript:window.addGames()",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"small",href:"",id:"loadGames",target:"_blank",children:"Load Games"})}),Object(w.jsx)("div",{style:{textAlign:"center"},id:"games"})]})):Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Your not logged in!"}),Object(w.jsx)("hr",{}),Object(w.jsx)("a",{href:"/#/login",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Login"})})]})}}]),n}(a.Component),Q=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){return Object(c.a)(this,n),t.call(this,e)}return Object(i.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Home"}),Object(w.jsx)("hr",{}),Object(w.jsx)("h4",{children:"Welcome to my app"}),Object(w.jsx)("p",{style:{fontSize:"1rem"},children:"Hello"}),Object(w.jsx)("a",{href:"/#/signup",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Signup"})}),"        ",Object(w.jsx)("a",{href:"/#/login",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Login"})})]})}}]),n}(a.Component);function V(e){for(var t=e,n=0;n<e.length;)"%"===t[n]&&"2"===t[n+1]&&"0"===t[n+2]&&(t=t.slice(0,n)+" "+t.slice(n+3,t.length)),n++;return t}window.onload=function(){window.getResults()},window.getResults=function(){var e=Z.getUsername(),t=Z.getPassword();m.a.post("https://server234.glitch.me/api/getRes",{username:e,password:t,search:te}).then((function(e){for(var t=0;t<e.data.length;t++)document.getElementById("reslts").innerHTML+='\n            <a href="/games/'.concat(e.data[t].id,'"><h4 style="border-style: solid;  display: inline-block;  width: -moz-fit-content; width: fit-content; border-color: black;">').concat(e.data[t].title,"</h4></a>\n            ");e.data.length<=0&&(document.getElementById("reslts").innerHTML+="<h1>No Results</h1>")})).catch((function(e){console.error(e)}))};var X,Z,$,ee,te=V(document.URL.slice(location.protocol.length+30,location.length)),ne=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),(r=t.call(this,e)).state={search:te},X=r.props.store,Z=Object(l.a)(r),setInterval((function(){te=V(document.URL.slice(location.protocol.length+30,location.length)),r.state.search!==te&&(r.setState((function(e){return{search:te}})),location.reload())}),100),r}return Object(i.a)(n,[{key:"getUsername",value:function(){if(void 0!==X.getState()){if("Stranger"===X.getState().username)return;return X.getState().username}return localStorage.getItem("username")}},{key:"getPassword",value:function(){if(void 0!==X.getState()){if("Stranger"===X.getState().username)return;return X.getState().username}return localStorage.getItem("password")}},{key:"logedIn",value:function(e){return void 0!==e}},{key:"render",value:function(){return this.logedIn(this.getUsername())?(window.username=this.getUsername(),window.password=this.getPassword(),Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Search"}),Object(w.jsx)("hr",{}),Object(w.jsx)("div",{id:"reslts"})]})):Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Your not logged in!"}),Object(w.jsx)("hr",{}),Object(w.jsx)("a",{href:"/#/login",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Login"})})]})}}]),n}(a.Component);window.run=function(){var e=x()("#getTitle").val(),t=x()("#Code").val(),n=$.getUsername(),r=$.getPassword();m.a.post("https://server234.glitch.me/api/code",{username:n,password:r,title:e,code:t}).then((function(e){window.location=e.data})).catch((function(e){console.error(e)}))},window.edit=function(){var e=prompt("Tell me the last numbers of your link"),t=x()("#getTitle").val(),n=x()("#Code").val(),r=$.getUsername(),a=$.getPassword();m.a.post("https://server234.glitch.me/api/code",{username:r,password:a,title:t,code:n,editing:!0,id2:Number(e)}).then((function(e){window.location=e.data})).catch((function(e){console.error(e)}))},window.getCode=function(){var e,t,n=prompt("Tell me the last numbers of your link"),r=(x()("#getTitle").val(),x()("#Code").val(),$.getUsername()),a=$.getPassword();m.a.post("https://server234.glitch.me/api/getCode",{username:r,password:a,id2:Number(n)}).then((function(n){e=n.data.code,t=n.data.title,document.getElementById("Code").innerHTML=e,document.getElementById("getTitle").value=t})).catch((function(e){console.error(e)}))},window.getCode=function(){var e,t,n=prompt("Tell me the last numbers of your link"),r=(x()("#getTitle").val(),x()("#Code").val(),$.getUsername()),a=$.getPassword();m.a.post("https://server234.glitch.me/api/getCode",{username:r,password:a,id2:Number(n)}).then((function(n){e=n.data.code,t=n.data.title,document.getElementById("Code").innerHTML=e,document.getElementById("getTitle").value=t})).catch((function(e){console.error(e)}))};var re=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),r=t.call(this,e),$=Object(l.a)(r),ee=r.props.store,r}return Object(i.a)(n,[{key:"logedIn",value:function(e){return void 0!==e}},{key:"getUsername",value:function(){if(void 0!==ee.getState()){if("Stranger"===ee.getState().username)return;return ee.getState().username}return localStorage.getItem("username")}},{key:"getPassword",value:function(){if(void 0!==ee.getState()){if("Stranger"===ee.getState().username)return;return ee.getState().username}return localStorage.getItem("password")}},{key:"start",value:function(){}},{key:"handleClick",value:function(e){$.start(),document.getElementById("spd").remove()}},{key:"render",value:function(){return this.logedIn(this.getUsername())?(window.username=this.getUsername(),window.password=this.getPassword(),Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Build"}),Object(w.jsx)("hr",{}),Object(w.jsx)("h4",{children:"Title"}),Object(w.jsx)("input",{type:"text",id:"getTitle"}),Object(w.jsx)("h4",{children:"Copy and paste your HTML here"}),Object(w.jsx)("br",{}),Object(w.jsx)("a",{href:"javascript:window.getCode()",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"small",href:"",id:"editFile",target:"_blank",children:"Get Code"})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("textarea",{name:"text",id:"Code",cols:"70",rows:"20"}),Object(w.jsx)("br",{}),Object(w.jsx)("a",{href:"javascript:window.run()",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"small",href:"",id:"SumbitFile",target:"_blank",children:"Sumbit"})}),Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),Object(w.jsx)("a",{href:"javascript:window.edit()",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"small",href:"",id:"editFile",target:"_blank",children:"Edit"})}),Object(w.jsx)("div",{id:"errPlace"})]})):Object(w.jsxs)("div",{style:{textAlign:"center"},children:[Object(w.jsx)("h2",{children:"Your not logged in!"}),Object(w.jsx)("hr",{}),Object(w.jsx)("a",{href:"/#/login",children:Object(w.jsx)(F.a,{bsStyle:"success",bsSize:"large",href:"",target:"_blank",children:"Login"})})]})}}]),n}(a.Component),ae=function(e){Object(d.a)(n,e);var t=Object(u.a)(n);function n(e){var r;return Object(c.a)(this,n),r=t.call(this,e),Object(l.a)(r),r.props.store,r}return Object(i.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(h.a,{children:[" ",Object(w.jsxs)("div",{children:[Object(w.jsx)(A,{}),Object(w.jsx)(g.a,{path:"/signup",children:Object(w.jsx)(D,{store:this.props.store})}),Object(w.jsx)(g.a,{path:"/main",children:Object(w.jsx)(q,{store:this.props.store})}),Object(w.jsx)(g.a,{path:"/login",children:Object(w.jsx)(R,{store:this.props.store})}),Object(w.jsx)(g.a,{path:"/logout",children:Object(w.jsx)(W,{store:this.props.store})}),Object(w.jsx)(g.a,{path:"/search",children:Object(w.jsx)(ne,{store:this.props.store})}),Object(w.jsx)(g.a,{path:"/build",children:Object(w.jsx)(re,{store:this.props.store})}),Object(w.jsx)(g.a,{exact:!0,path:"/",children:Object(w.jsx)(Q,{})})]})," "]})}}]),n}(a.Component),oe=n(54),se=(n(87),n(88),n(89),Object(oe.a)((function(){var e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"Login":return{username:e.username,password:e.password,cookies:e.cookies};case"Logout":return{username:void 0,password:void 0,cookies:0}}})));s.a.render(Object(w.jsx)(ae,{store:se}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.6838d22d.chunk.js.map