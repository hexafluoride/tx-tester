(this["webpackJsonpkda-react"]=this["webpackJsonpkda-react"]||[]).push([[0],{220:function(e,t,a){e.exports=a(391)},225:function(e,t,a){},226:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},227:function(e,t,a){},346:function(e,t){},391:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(41),i=a.n(l),c=(a(225),a(226),a(227),a(34)),o=a(93),s=a(23),m=a.n(s),u=a(57),p=a(16),d=a(408),h=a(409),y=a(401),g=a(393),f=a(208),E=a(410),b=a(406),v=a(407),w=a(44),k=a(405),x=a(402),S=a(403),O=a(404),C=function(e){return r.a.createElement(E.a,{as:"h1",style:{color:"black",fontSize:15,margin:5}},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all"}},"code: |-")),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  "+e.pactCode)),""!==e.ksName?r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all"}},"data:")),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  "+e.ksName+":")),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"    keys: ["+e.envKeys+"]")),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},'    pred: "'+e.pred+'"'))):r.a.createElement("div",null),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all"}},"publicMeta:")),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},'  chainId: "'+e.chainId+'"')),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  sender: "+e.acct)),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  gasLimit: "+e.gasLimit)),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  gasPrice: "+e.gasPrice)),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  ttl: "+e.ttl)),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all"}},'networkId: "'+e.ver+'"')),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all"}},"signers:")),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"  - public: "+e.pubKey)),e.caps.length>0?r.a.createElement("div",null,r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"    caps:")),e.caps.map((function(e,t){var a=e.replace("(","").replace(")","").split(" ");return r.a.createElement("div",{key:t},r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"      - name: "+a.shift())),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all",whiteSpace:"pre"}},"        args: ["+a.map((function(e){return isNaN(e)?e:e.includes(".")?parseFloat(e):JSON.stringify({int:e})}))+"]")))}))):r.a.createElement("div",null),r.a.createElement("div",{style:{textAlign:"left"}},r.a.createElement("code",{style:{wordBreak:"break-all"}},"type: exec")))},T=function(e){var t=[{menuItem:"JSON",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(h.a,{warning:""===e.chainId||""===e.pactCode,positive:""!==e.chainId||""!==e.pactCode,style:{marginTop:5,marginBottom:5,fontWeight:"bold"}},r.a.createElement(h.a.Header,{style:{marginBottom:10}},""===e.chainId||""===e.pactCode?"JSON Request Object (incomplete)":"JSON Request Object"),r.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15}},e.cmd),r.a.createElement(h.a.Header,{style:{marginBottom:10,marginTop:10}},"API Host"),r.a.createElement("code",{style:{wordBreak:"break-all"}},e.host==="https://".concat(e.server,"/chainweb/0.0/").concat(e.ver,"/chain//pact")?"<Select Chain Id>":"not a chainweb node"===e.ver?"<Select a valid Chainweb node>":e.host+"/api/v1/local")))))}},{menuItem:"curl cmd",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement("div",null,r.a.createElement(h.a,{warning:""===e.chainId||""===e.pactCode,positive:""!==e.chainId||""!==e.pactCode,style:{marginTop:5,marginBottom:5}},r.a.createElement(h.a.Header,{style:{marginBottom:10}},""===e.chainId||""===e.pactCode?"Curl Command (incomplete)":"Curl Command"),r.a.createElement("div",{style:{marginBottom:5}}),r.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginBottom:20,fontWeight:"bold"}},'curl -sk -H "Content-Type: application/json" -d \''.concat(e.cmd,"' -X POST ").concat(e.host==="https://".concat(e.server,"/chainweb/0.0/").concat(e.ver,"/chain//pact")?"<Select Chain Id>":"not a chainweb node"===e.ver?"<Select a valid Chainweb node>":e.host+"/api/v1/local")))))}},{menuItem:"yaml",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement("div",null,r.a.createElement(h.a,{warning:""===e.chainId||""===e.pactCode,positive:""!==e.chainId||""!==e.pactCode,style:{marginTop:5,marginBottom:5}},r.a.createElement(h.a.Header,{style:{marginBottom:10}},""===e.chainId||""===e.pactCode?"YAML Request Format (incomplete)":"YAML Request Format"),r.a.createElement(C,{pactCode:e.pactCode,caps:e.caps,server:e.server,ver:e.ver,acct:e.acct,pubKey:e.pubKey,privKey:e.privKey,chainId:e.chainId,creationTime:e.creationTime,ttl:e.ttl,gasPrice:e.gasPrice,gasLimit:e.gasLimit,envKeys:e.envKeys,pred:e.pred,ksName:e.ksName}),r.a.createElement(h.a.Header,{style:{marginBottom:10,marginTop:10}},"API Host"),r.a.createElement("div",{style:{margin:20,marginBottom:0}},r.a.createElement("code",{style:{wordBreak:"break-all"}},e.host==="https://".concat(e.server,"/chainweb/0.0/").concat(e.ver,"/chain//pact")?"<Select Chain Id>":"not a chainweb node"===e.ver?"<Select a valid Chainweb node>":e.host+"/api/v1/local")))))}}];return r.a.createElement("div",null,r.a.createElement(d.a,{panes:t}))},j=a(58),B=a.n(j),P=localStorage.getItem("nodes"),I=function(){var e=Object(n.useState)(["(coin.GAS)"]),t=Object(p.a)(e,2),a=t[0],l=t[1],i=Object(n.useState)(""),s=Object(p.a)(i,2),C=(s[0],s[1],Object(n.useState)("sig")),j=Object(p.a)(C,2),I=j[0],N=j[1],A=Object(n.useState)(""),F=Object(p.a)(A,2),H=F[0],K=F[1],L=Object(n.useState)(""),J=Object(p.a)(L,2),W=J[0],D=J[1],R=Object(n.useState)("api.testnet.chainweb.com"),G=Object(p.a)(R,2),q=G[0],z=G[1],X=Object(n.useState)("mainnet01"),M=Object(p.a)(X,2),Y=M[0],U=M[1],V=Object(n.useState)(""),$=Object(p.a)(V,2),Q=$[0],Z=$[1],_=Object(n.useState)(""),ee=Object(p.a)(_,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(""),re=Object(p.a)(ne,2),le=re[0],ie=re[1],ce=Object(n.useState)(""),oe=Object(p.a)(ce,2),se=oe[0],me=oe[1],ue=Object(n.useState)(""),pe=Object(p.a)(ue,2),de=pe[0],he=pe[1],ye=Object(n.useState)(Math.round((new Date).getTime()/1e3)-15),ge=Object(p.a)(ye,2),fe=ge[0],Ee=ge[1],be=Object(n.useState)(28800),ve=Object(p.a)(be,2),we=ve[0],ke=ve[1],xe=Object(n.useState)(1e-5),Se=Object(p.a)(xe,2),Oe=Se[0],Ce=Se[1],Te=Object(n.useState)(1500),je=Object(p.a)(Te,2),Be=je[0],Pe=je[1],Ie=Object(n.useState)(""),Ne=Object(p.a)(Ie,2),Ae=Ne[0],Fe=Ne[1],He=Object(n.useState)([]),Ke=Object(p.a)(He,2),Le=Ke[0],Je=Ke[1],We=Object(n.useState)(""),De=Object(p.a)(We,2),Re=De[0],Ge=De[1],qe=Object(n.useState)(""),ze=Object(p.a)(qe,2),Xe=ze[0],Me=ze[1],Ye=Object(n.useState)(""),Ue=Object(p.a)(Ye,2),Ve=Ue[0],$e=Ue[1],Qe=Object(n.useState)(""),Ze=Object(p.a)(Qe,2),_e=Ze[0],et=Ze[1],tt=Object(n.useState)(""),at=Object(p.a)(tt,2),nt=at[0],rt=at[1],lt=Object(n.useState)(!1),it=Object(p.a)(lt,2),ct=it[0],ot=it[1],st=Object(n.useState)(!1),mt=Object(p.a)(st,2),ut=mt[0],pt=mt[1],dt=Object(n.useState)(""),ht=Object(p.a)(dt,2),yt=ht[0],gt=ht[1],ft=Object(n.useState)(""),Et=Object(p.a)(ft,2),bt=Et[0],vt=Et[1],wt=Object(n.useState)(!1),kt=Object(p.a)(wt,2),xt=kt[0],St=kt[1],Ot=Object(n.useState)(!1),Ct=Object(p.a)(Ot,2),Tt=Ct[0],jt=Ct[1],Bt=Object(n.useState)(!1),Pt=Object(p.a)(Bt,2),It=Pt[0],Nt=Pt[1],At=Object(n.useState)(""),Ft=Object(p.a)(At,2),Ht=Ft[0],Kt=Ft[1],Lt=Object(n.useState)(!1),Jt=Object(p.a)(Lt,2),Wt=Jt[0],Dt=Jt[1],Rt=Object(n.useState)(!1),Gt=Object(p.a)(Rt,2),qt=Gt[0],zt=Gt[1],Xt=Object(n.useState)(null===P?[{key:"0",value:"api.testnet.chainweb.com",text:"api.testnet.chainweb.com"},{key:"1",value:"api.chainweb.com",text:"api.chainweb.com"}]:[{key:"0",value:"api.testnet.chainweb.com",text:"api.testnet.chainweb.com"},{key:"1",value:"api.chainweb.com",text:"api.chainweb.com"}].concat(JSON.parse(P))),Mt=Object(p.a)(Xt,2),Yt=Mt[0],Ut=Mt[1];Object(n.useEffect)((function(){gt(_t())}),[te,a,I,H,Y,Q,le,se,de,we,Oe,Be,Le,Re,xt]);var Vt=function(e){return{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify(e)}},$t="https://".concat(q,"/chainweb/0.0/").concat(Y,"/chain/").concat(de,"/pact"),Qt=function(e){var t=[];return e.map((function(e,a){var n=(e=e.replace("(","").replace(")","")).split(" ");t.push({name:n.shift(),args:n.map((function(e){return isNaN(e)?e.replace('"',"").replace('"',""):e.includes(".")?parseFloat(e):{int:e}}))})})),t},Zt=function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,localStorage.getItem("nodes");case 2:null===(a=e.sent)?localStorage.setItem("nodes",JSON.stringify([t])):0===JSON.parse(a).filter((function(e){return e.value===t.value})).length&&localStorage.setItem("nodes",JSON.stringify(JSON.parse(a).concat([t])));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),_t=function(){try{var e=B.a.api.prepareExecCmd([{publicKey:le,secretKey:se,clist:Qt(a)}],fe.toString(),te.replace("\n",""),""!==Xe?Object(o.a)({},Xe,{pred:Re,keys:Le}):{},B.a.lang.mkMeta(Q,de,Oe,Be,fe,we),Y);return"sig"===I&&e.sigs[0]&&(e.sigs[0].sig=H),JSON.stringify(e)}catch(t){return t.message}return"Enter a valid keypair to preview JSON request (or click generate)"},ea=function(e){return!!/^[0-9a-fA-F]+$/.test(e)},ta=function(e){return 64===e.length&&!!ea(e)},aa=function(e){return"("!==e[0]||")"!==e[e.length-1]},na=function(){var e=Object(u.a)(m.a.mark((function e(t){var a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return z(t),e.prev=1,e.next=4,fetch("https://".concat(t,"/info"));case 4:return a=e.sent,e.next=7,a.json();case 7:n=e.sent,U(n.nodeVersion),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(1),U("not a chainweb node");case 14:case"end":return e.stop()}}),e,null,[[1,11]])})));return function(t){return e.apply(this,arguments)}}();function ra(e){try{var t=document.getElementById("to-pub-file").files[0];(".kda"!==t.name.substr(t.name.length-4)||t.name.includes(e?"private":"public"))&&alert("file must be a .kda ".concat(e?"public":"private"," key file"));var a=new FileReader;a.onload=function(t){var a=t.target.result;if(e)ie(a.replace("public: ",""));else{var n=a.split("\n");ie(n[0].replace("public: ","")),me(n[1].replace("secret: ",""))}},a.readAsText(t,"UTF-8")}catch(n){console.log(n),alert("file must be a .kda ".concat(e?"public":"private"," key file"))}}var la=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,vt(""),St(!1),jt(!1),Nt(!1),Kt(""),ot(!0),$e(""),zt(!1),""!==Xe?Object(o.a)({},Xe,{pred:Re,keys:Le}):{},t=JSON.parse(yt),e.next=13,fetch("".concat($t,"/api/v1/local"),Vt(t));case 13:return a=e.sent,e.next=16,a.json();case 16:n=e.sent,console.log(n),ot(!1),"failure"===n.result.status?($e("TX preview failed:"),et(n.result.error.message),rt("")):($e("TX preview suceeded:"),console.log(n.gas),et("Result: "+JSON.stringify(n.result.data)),rt(n.gas*parseFloat(Oe)),Dt(!0)),e.next=27;break;case 22:e.prev=22,e.t0=e.catch(0),ot(!1),$e("CHECK YOUR INPUTS"),""===te?(et("Enter some Pact code"),rt("")):""===de?(et("Set Chain ID"),rt("")):"Unexpected token V in JSON at position 0"===e.t0.message?(et("Make sure you signed after you filled in the rest of the transaction details"),rt("")):(et(e.t0.message),rt(""));case 27:case"end":return e.stop()}}),e,null,[[0,22]])})));return function(){return e.apply(this,arguments)}}(),ia=function(){var e=Object(u.a)(m.a.mark((function e(){var t,a,n,r,l;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Dt(!1),e.prev=1,St(!1),pt(!0),zt(!0),""!==Xe?Object(o.a)({},Xe,{pred:Re,keys:Le}):{},t=JSON.parse(yt),a={cmds:[t]},e.next=10,fetch("".concat($t,"/api/v1/send"),Vt(a));case 10:return n=e.sent,console.log(n),e.next=14,n.text();case 14:r=e.sent,console.log(r),"Validation"===r.substring(0,10)?(pt(!1),vt(r),St(!0)):(l=JSON.parse(r),vt(l.requestKeys[0]),pt(!1),Nt(!0),ca(l.requestKeys[0])),e.next=26;break;case 19:e.prev=19,e.t0=e.catch(1),console.log(e.t0),console.log(e.t0.msg),pt(!1),vt("Your requested transaction's inputs failed to validate. If your preview is succeeding and you are seeing this message it is because SEND TRANSACTIONS MUST BE SIGNED"),St(!0);case 26:case"end":return e.stop()}}),e,null,[[1,19]])})));return function(){return e.apply(this,arguments)}}(),ca=function(){var e=Object(u.a)(m.a.mark((function e(t){var a;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,B.a.fetch.listen({listen:t},$t);case 3:a=e.sent,Nt(!1),"failure"===a.result.status?jt(!0):jt(!1),Kt(a),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),oa=(""!==Ht?[{menuItem:"Result Summary",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement(h.a,{style:{marginTop:5,marginBottom:15},info:!0,error:Tt},r.a.createElement(h.a.Header,null,JSON.stringify(Ht.result.status.replace('"',""))),r.a.createElement("div",null,r.a.createElement("p",{style:{wordBreak:"break-all"}},"Result: "+JSON.stringify(Ht.result.data))),r.a.createElement("div",null,r.a.createElement("p",{style:{wordBreak:"break-all"}},"Block Height: "+JSON.stringify(Ht.metaData.blockHeight))),r.a.createElement("div",null,r.a.createElement("p",{style:{wordBreak:"break-all"}},"Block Hash: "+JSON.stringify(Ht.metaData.blockHash)))))}},{menuItem:"JSON Response",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement(h.a,{style:{marginTop:5,marginBottom:15},info:!0,error:Tt},r.a.createElement(h.a.Header,{style:{marginTop:5,marginBottom:15}},JSON.stringify(Ht.result.status)),r.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginBottom:5}},JSON.stringify(Ht,null,"\t"))))}}]:[]).concat([{menuItem:"Request Key",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement(h.a,{style:{marginTop:5,marginBottom:25},info:!0,error:xt},r.a.createElement(h.a.Header,null,xt?"Send Failure":"Request Key"),r.a.createElement("p",null,bt),It?r.a.createElement("div",null,r.a.createElement("p",null,"Please wait your transaction is being mined...."),r.a.createElement(y.a,{active:!0,inline:!0})):r.a.createElement("div",null)))}},{menuItem:"Poll curl cmd",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement(h.a,{style:{marginTop:5,marginBottom:25},info:!0,error:xt},r.a.createElement(h.a.Header,{style:{marginBottom:10}},xt?"Send Failure":"Poll Curl Command"),xt?"TX must make it to the mempool to see Poll Curl Command":r.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginTop:15,marginBottom:20}},'curl -sk -H "Content-Type: application/json" -d \'{"requestKeys": ["'.concat(bt,"\"]}' -X POST ").concat($t==="https://".concat(q,"/chainweb/0.0/").concat(Y,"/chain//pact")?"Select Chain Id":"not a chainweb node"===Y?"Select a valid Chainweb node":$t+"/api/v1/poll")),It?r.a.createElement("div",null,r.a.createElement("p",null,"Please wait your transaction is being mined...."),r.a.createElement(y.a,{active:!0,inline:!0})):r.a.createElement("div",null)))}},{menuItem:"Listen curl cmd",render:function(){return r.a.createElement(d.a.Pane,null,r.a.createElement(h.a,{style:{marginTop:5,marginBottom:25},info:!0,error:xt},r.a.createElement(h.a.Header,{style:{marginBottom:10}},xt?"Send Failure":"Listen Curl Command"),xt?"TX must make it to the mempool to see Listen Curl Command":r.a.createElement("code",{style:{wordBreak:"break-all",color:"black",fontSize:15,marginTop:15,marginBottom:20}},'curl -sk -H "Content-Type: application/json" -d \'{"listen": "'.concat(bt,"\"}' -X POST ").concat($t==="https://".concat(q,"/chainweb/0.0/").concat(Y,"/chain//pact")?"Select Chain Id":"not a chainweb node"===Y?"Select a valid Chainweb node":$t+"/api/v1/listen")),It?r.a.createElement("div",null,r.a.createElement("p",null,"Please wait your transaction is being mined...."),r.a.createElement(y.a,{active:!0,inline:!0})):r.a.createElement("div",null)))}}]);return r.a.createElement(f.a,{columns:2,padded:!0,scrollable:!0,verticalAlign:"top"},r.a.createElement(f.a.Column,{textAlign:"center",style:{overflow:"auto"}},r.a.createElement("div",{style:{overflow:"auto",height:"100vh"}},r.a.createElement("img",{src:"https://explorer.chainweb.com/static/1lv9xhxyhlqc262kffl55w08ms1cvxsnrv49zhvm0b799dsi0v0i-kadena-k-logo.png",style:{height:70,marginTop:50}}),r.a.createElement(E.a,{as:"h6",style:{color:"black",fontWeight:"bold",fontSize:40,marginTop:20}},"Command Preview"),r.a.createElement(T,{pactCode:te,caps:a,server:q,ver:Y,acct:Q,pubKey:le,privKey:se,chainId:de,creationTime:fe,ttl:we,gasPrice:Oe,gasLimit:Be,envKeys:Le,pred:Re,ksName:Xe,cmd:yt,host:$t}),r.a.createElement(g.a,{style:{backgroundColor:"#B54FA3",color:"white",marginBottom:10,marginTop:20,width:340},loading:ct,onClick:function(){return la()},disabled:""===de||""===te},"Preview Transaction"),""===Ve?r.a.createElement("div",null," "):r.a.createElement("div",{style:{margin:10,marginRight:20,marginBottom:10}},r.a.createElement(h.a,{style:{marginTop:5,marginBottom:15},info:!0,error:"TX preview suceeded:"!==Ve},r.a.createElement(h.a.Header,null,Ve),r.a.createElement("div",null,r.a.createElement("p",{style:{wordBreak:"break-all"}},_e)),r.a.createElement("div",null,r.a.createElement("p",{style:{wordBreak:"break-all"}},""===nt?"":"Gas Cost: "+nt)))),"TX preview suceeded:"===Ve?r.a.createElement("div",null,r.a.createElement(g.a,{style:{backgroundColor:"#B54FA3",color:"white",marginBottom:20,marginTop:20,width:340},loading:ut,onClick:function(){return ia()},disabled:It||!Wt||""===Q},Wt?ta(le)?"Send Transaction":"Send Unsigned TX":"Please Preview Again"),qt?r.a.createElement(d.a,{panes:oa,style:{marginBottom:350}}):r.a.createElement("div",null)):r.a.createElement("div",null))),r.a.createElement(f.a.Column,{style:{overflow:"auto",backgroundColor:"\t#99468A"}},r.a.createElement("div",{style:{overflow:"auto",height:"100vh"}},r.a.createElement(b.a,null,r.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Pact"),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Pact Code",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Pact Code? "),r.a.createElement(v.a.Content,null,"Pact is Kadena's smart contract programming language. Type arbitrary pact expressions in the inpout box below. For more help look at our docs: ",r.a.createElement("a",null,"https://pact-language.readthedocs.io/en/stable/")))),r.a.createElement(k.a,{style:{width:"440px",height:"200px",wordBreak:"break-all"},placeholder:'                                                                                                        ;;coin contract examples:                                                                                  (coin.details "nick-cage")                                                                                                                                  (coin.transfer "from" "to" 12.4)                                                                              (coin.transfer-create "from" "to" (read-keyset "to-ks") 4.2)                                                                            (coin.create-account "my-new-acct" (read-keyset "my-new-ks"))                           ;;arbitrary contract calls:                                                                                  (free.my-contract-name.foo "param-one" "param-two")                           (user.my-contract-name.bar [list, of, stuff] 1.0)                               ',value:te,onChange:function(e){return ae(e.target.value)}}))),r.a.createElement(b.a,{onKeyPress:function(e){"Enter"===e.key&&e.preventDefault()}},r.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Signing"),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Sender Account",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is the Sender Account? "),r.a.createElement(v.a.Content,null,"Sender Account represents the account name you use to identify yourself in chainweb. You'll be asked to sign with associated key/keys when you make transactions. Account names need to be unique and are assosciated to keypairs that can sign its transactions. The simplest way would be to use your public key as your account name"))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"user",iconPosition:"left",placeholder:"Account Name",value:Q,onChange:function(e){return Z(e.target.value)}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement(b.a.Field,null,r.a.createElement(x.a,{label:r.a.createElement("label",{style:{color:"white"}},"Key Pair",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},r.a.createElement(v.a.Header,null,"What is a Keypair?"),r.a.createElement(v.a.Content,null,'A keypair is composed of a public key and a private key. If you don\'t have a keypair, generate one in the Kadena wallet, or click \'Generate\' for tx\'s that don\'t require a particular account to sign it. For example, to do a (coin.transfer "from" "to" 1.0) you must sign with the keys assosciated with the transfering account, but to do an account info call such as (coin.details "nick-cage"), you can sign with a dummy key pair as there are no capabilities assosciated with this transaction'))),name:"radioGroup",value:"kp",checked:"kp"===I,onChange:function(){return N("kp")}}),r.a.createElement(b.a.Field,null,r.a.createElement(x.a,{label:r.a.createElement("label",{style:{color:"white"}},"Signature",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},r.a.createElement(v.a.Header,null,"What is a Signature?"),r.a.createElement(v.a.Content,null,"This is a safe way to sign your transaction offline without pasting your private key on the web. Once you fill in all the parameters for your desired trasaction you will be provided a hash that you can copy and sign offline with the Chainweaver wallet or pact cli. You must sign with the corresponding private key of the public key provided."))),name:"radioGroup",value:"sig",checked:"sig"===I,onChange:function(){return N("sig")}}))),r.a.createElement(S.a,{placeholder:"Public Key",icon:"key",iconPosition:"left",style:{width:"440px"},value:le,onChange:function(e){return ie(e.target.value)}}),"kp"===I?r.a.createElement("div",null,r.a.createElement(S.a,{placeholder:"Private Key",icon:"lock",iconPosition:"left",style:{marginTop:5,width:"440px"},value:se,onChange:function(e){return me(e.target.value)}}),r.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},r.a.createElement("input",{style:{marginTop:5,width:"270px",flex:1},id:"to-pub-file",type:"file",onChange:function(e){return ra(!1)}}),r.a.createElement(h.a,{color:"purple",style:{marginTop:5,marginRight:0,marginLeft:5,width:270,flex:1,bottom:0,right:0},onClick:function(){return function(){var e=B.a.crypto.genKeyPair();Z("fake-account"),ie(e.publicKey),me(e.secretKey)}()}},r.a.createElement(h.a.Header,{style:{textAlign:"center"}},"Generate")))):r.a.createElement("div",null,r.a.createElement("input",{style:{marginTop:5,width:"440px"},id:"to-pub-file",type:"file",onChange:function(e){return ra(!0)}}),r.a.createElement(h.a,{color:"purple",style:{marginTop:5,marginBottom:5,width:"440px",textAlign:"center"}},r.a.createElement(h.a.Header,null,"Hash to Sign",r.a.createElement(g.a,{circular:!0,icon:"copy",basic:!0,disabled:""===de||""===te||""===le,style:{marginLeft:5,marginTop:0},onClick:function(e){try{navigator.clipboard.writeText(JSON.parse(yt).hash)}catch(e){console.log("can't copy without https")}}})),r.a.createElement("p",{style:{wordBreak:"break-all"}},""===de||""===te||""===le?"please fill in all parameters first":ta(le)?JSON.parse(yt).hash:"enter a valid public key")),r.a.createElement(S.a,{placeholder:"TX Signature",icon:"pencil alternate",iconPosition:"left",style:{width:"440px"},value:H,onChange:function(e){return K(e.target.value)}}))),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Capabilities",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},r.a.createElement(v.a.Header,null,"What is a Capability?"),r.a.createElement(v.a.Content,null,"In Pact, a capability is a way to scope what the signing keypairs are allowed to perform in code. The defauly capability is GAS, as all transactions need to have a keypair signing for the gas fee. Another standard capability is the TRANSFER capability that requires a user to specify a from-account, to-account, and amount. This means that you are allowing the scoped signature to only perform the transfer amount specified. Example: ",r.a.createElement("b",null,'(coin.TRANSFER "from-account" "to-account" 10.0)')))),a.map((function(e,t){return r.a.createElement(S.a,{placeholder:"",key:t,icon:"code",iconPosition:"left",style:{width:"440px",marginTop:0===t?0:5},value:e,action:r.a.createElement(g.a,{icon:"minus",onClick:function(){a.splice(t,1),l(Object(c.a)(a))}})})})),r.a.createElement(S.a,{placeholder:'(coin.TRANSFER "from" "to" 1.0)',icon:"code",iconPosition:"left",style:{width:"440px",marginTop:5,color:aa(W)&&""!==W?"red":"black"},value:W,onKeyDown:function(e){13!==e.keyCode&&9!==e.keyCode||(console.log(W),aa(W)||(console.log("here"),l([].concat(Object(c.a)(a),[W])),D("")))},onChange:function(e){return D(e.target.value)},action:r.a.createElement(g.a,{icon:"add",onClick:function(){l([].concat(Object(c.a)(a),[W])),D("")},disabled:aa(W)})})),r.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Network"),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Chain ID",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Chain ID? "),r.a.createElement(v.a.Content,null,"Chain ID is the specific chain within chainweb you are targeting with your transaction. For more info look at: ",r.a.createElement("a",null,"https://www.youtube.com/watch?v=hYvXxFbsN6I")," "))),r.a.createElement(O.a,{style:{width:"440px"},placeholder:"Chain ID",options:[{key:"0",value:"0",text:"0"},{key:"1",value:"1",text:"1"},{key:"2",value:"2",text:"2"},{key:"3",value:"3",text:"3"},{key:"4",value:"4",text:"4"},{key:"5",value:"5",text:"5"},{key:"6",value:"6",text:"6"},{key:"7",value:"7",text:"7"},{key:"8",value:"8",text:"8"},{key:"9",value:"9",text:"9"},{key:"10",value:"10",text:"10"},{key:"11",value:"11",text:"11"},{key:"12",value:"12",text:"12"},{key:"13",value:"13",text:"13"},{key:"14",value:"14",text:"14"},{key:"15",value:"15",text:"15"},{key:"16",value:"16",text:"16"},{key:"17",value:"17",text:"17"},{key:"18",value:"18",text:"18"},{key:"19",value:"19",text:"19"}],onChange:function(e,t){var a=t.value;return he(a)}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Server",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Server? "),r.a.createElement(v.a.Content,null,"Server is the Chainweb node you would like to execute the transaction on "))),r.a.createElement(O.a,{style:{width:"440px"},placeholder:"Server",search:!0,onClose:function(e,t){var a=t.value,n={key:Math.random().toString(),text:a,value:a};Ut([].concat(Object(c.a)(Yt),[n])),Zt(n)},options:Yt,value:q,allowAdditions:!0,onAddItem:function(e,t){var a=t.value,n={key:a,text:a,value:a};Ut([].concat(Object(c.a)(Yt),[n])),Zt(n)},onSearchChange:function(e,t){t.value;na(e.target.value)},onChange:function(e,t){var a=t.value;na(a)}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Version",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Version? "),r.a.createElement(v.a.Content,null,"This defines what version of Chainweb you are targeting. Mainnet is mainnet01, Testnet is testnet04"))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"sync",iconPosition:"left",placeholder:"Version",value:Y,disabled:!0})),r.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Meta Data"),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Chain ID",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Chain ID? "),r.a.createElement(v.a.Content,null,"Chain ID is the specific chain within chainweb you are targeting with your transaction. For more info look at: ",r.a.createElement("a",null,"https://www.youtube.com/watch?v=hYvXxFbsN6I")," "))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"paper plane",iconPosition:"left",placeholder:"Chain ID",disabled:!0,value:de})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Sender",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Sender? "),r.a.createElement(v.a.Content,null,"In the absence of a gas capability, the account specified as sender will be defaulted to the account name that signed the transaction"))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"user",iconPosition:"left",placeholder:"Sender",disabled:!0,value:Q})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Creation Time",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Creation Time? "),r.a.createElement(v.a.Content,null,"This specifies that time that your transaction was created. The default is to use current time (in seconds)"))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"calendar",iconPosition:"left",placeholder:"Creation Time",value:fe,onChange:function(e){return Ee(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"TTL",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is TTL? "),r.a.createElement(v.a.Content,null,"Time to Live for a transaction. Your transaction will stay in the mempool for the specified interval between creation time and time to live (in seconds)"))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"clock",iconPosition:"left",placeholder:"Time To Live",value:we,onChange:function(e){return ke(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Gas Price",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Gas price? "),r.a.createElement(v.a.Content,null,"Gas Price is the amount you are willing to pay for each unit of computation on chain. Note that transactions are ordered by miners based on this price, so if you want your transaction to be included in the next block be generous!! Default is 1e-6"))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"dollar sign",iconPosition:"left",placeholder:"Gas Price",value:Oe,onChange:function(e){console.log(e.target.value),0===parseFloat(e.target.value)?Ce(e.target.value):Ce(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Gas Limit",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is Gas Limit? "),r.a.createElement(v.a.Content,null,"Gas Limit is the maximum number of computational units you are willing to use. If a transactions takes less gas than specified, you will only be charged how much it effectively takes. Fee for a transaction will be (Gas Price * Gas Limit)"))),r.a.createElement(b.a.Input,{style:{width:"440px"},icon:"tint",iconPosition:"left",placeholder:"Gas Limit",value:Be,onChange:function(e){return Pe(isNaN(parseFloat(e.target.value))?"":parseFloat(e.target.value))}})),r.a.createElement(E.a,{as:"h6",style:{color:"white",fontWeight:"bold",fontSize:30,marginTop:30,textAlign:"center"}},"Env Data (Advanced)"),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Keyset Name",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is a Keyset Name? "),r.a.createElement(v.a.Content,null,'It is a way to refer to the following keyset predicate and public key. For example, the transfer-create functions expects the user to pass in a new keyset to assosciate to and guard the account that is about to be created. The syntax is as follows: (coin.transfer-create "from" "to" (read-keyset "THIS-NAME-JUST-DEFINED") 10.0). Here were are telling Pact how to find the newly defined keyset to assosciate to the account to be created. To better understand this advanced section, go to ',r.a.createElement("a",null,"pact.kadena.io")," create a new keyset name under the data section, assosciate a keypair to it, then go to the results tab"))),r.a.createElement(S.a,{placeholder:"Keyset Name",icon:"copy",iconPosition:"left",style:{width:"440px"},value:Xe,onChange:function(e){return Me(e.target.value)}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Keyset Predicate",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center"},r.a.createElement(v.a.Header,null,"What is a Keyset Predicate? "),r.a.createElement(v.a.Content,null,'Keyset Predicates allow you to chose which type of signing rules a particular account needs to enforce. "keys-all" will require all the keys assosciated to an account to validate a signature. "keys-any will require only one of the keys assosciated to an account to validate a signature. Note that for single sig accounts both predicates are the same in practice'))),r.a.createElement(O.a,{style:{width:"440px"},placeholder:"Predicate",options:[{key:"0",value:"keys-all",text:"keys-all"},{key:"1",value:"keys-any",text:"keys-any"}],onChange:function(e,t){var a=t.value;return Ge(a)}})),r.a.createElement(b.a.Field,{style:{width:"440px",margin:"0 auto",marginTop:"10px"}},r.a.createElement("label",{style:{color:"white"}},"Public Key",r.a.createElement(v.a,{trigger:r.a.createElement(w.a,{name:"help circle",style:{marginLeft:"2px"}}),position:"top center",style:{width:"440px"}},r.a.createElement(v.a.Header,null,"What is this Public Key?"),r.a.createElement(v.a.Content,null,"This is the public key that you are assosicating to the given account. You can assosciate more than one key for each account to allow for multi-sig"))),Le.map((function(e,t){return r.a.createElement(S.a,{placeholder:"",key:t,icon:"key",iconPosition:"left",style:{width:"440px",marginTop:0===t?0:5},value:e,action:r.a.createElement(g.a,{icon:"minus",onClick:function(){Le.splice(t,1),Je(Object(c.a)(Le))}})})})),r.a.createElement(S.a,{placeholder:"Public Key",icon:"key",iconPosition:"left",style:{width:"440px",marginTop:5,marginBottom:100},value:Ae,onChange:function(e){return Fe(e.target.value)},onKeyDown:function(e){13!==e.keyCode&&9!==e.keyCode||ea(Ae)&&ta(Ae)&&(Je([].concat(Object(c.a)(Le),[Ae])),Fe(""))},action:r.a.createElement(g.a,{icon:"add",onClick:function(){Je([].concat(Object(c.a)(Le),[Ae])),Fe("")},disabled:!(ea(Ae)&&ta(Ae))})}))))))};var N=function(){return r.a.createElement("div",null,r.a.createElement(I,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(390);i.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[220,1,2]]]);
//# sourceMappingURL=main.0107cdf3.chunk.js.map