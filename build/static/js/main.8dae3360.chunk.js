(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,a){},17:function(e,t,a){},19:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),s=a.n(c),o=(a(15),a(2)),l=a(3),i=a(5),u=a(4),m=a(6),h=a(1),p=(a(17),[{project:"Giannades.com",type:"Website",objectID:"0",madeUsing:"HTML,CSS,Bootstrap,three.js",url:"https://giannades.com/",desc:"Whole project with design and built. Used three.js animation library for the birds in the intro."},{project:"Sbrotherscomposite.co.uk",type:"Website",objectID:"1",madeUsing:"HTML,Bootstrap,CSS,JS",url:"http://sbrotherscomposite.com/",desc:"Whole project front end development.Not my design"},{project:"Sowl-restaurant.com.au",type:"Website",objectID:"2",madeUsing:"Wordpress",url:"https://sowl-restaurant.com.au/",desc:"Freelance project whole implementation,SEO,Google Analytics"},{project:"Fun with flags",type:" Web Application",objectID:"3",madeUsing:"React",url:"http://funwithflags.frankagathos.com/",desc:"A game-quiz to learn nation flags, built with React using REST API"},{project:"Portfolio Projects Search",type:"Web Application",objectID:"4",madeUsing:"React",url:"http://frankagathos.com/",desc:"A small app with search for better project visualization"}]),d=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(u.a)(t).call(this,e))).searchWordpress=function(){a.setState({searchTerm:"wordpress"})},a.searchReact=function(){a.setState({searchTerm:"react"})},a.searchHTML=function(){a.setState({searchTerm:"HTML"})},a.searchFreelance=function(){a.setState({searchTerm:"Freelance"})},a.searchAll=function(){a.setState({searchTerm:""})},a.state={list:p,searchTerm:""},a.onDismiss=a.onDismiss.bind(Object(h.a)(Object(h.a)(a))),a.onSearchChange=a.onSearchChange.bind(Object(h.a)(Object(h.a)(a))),a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"onDismiss",value:function(e){var t=this.state.list.filter(function(t){return t.objectID!==e});this.setState({list:t})}},{key:"onSearchChange",value:function(e){this.setState({searchTerm:e.target.value})}},{key:"render",value:function(){var e=this.state,t=e.searchTerm,a=e.list;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"app-title"}," Portfolio Projects Search ")," ",r.a.createElement(E,{value:t,onChange:this.onSearchChange}),r.a.createElement("span",null," ",r.a.createElement(b,{onClick:this.searchAll,text:"All"})," ",r.a.createElement(b,{onClick:this.searchWordpress,text:"Wordpress"})," ",r.a.createElement(b,{onClick:this.searchReact,text:"React"})," ",r.a.createElement(b,{onClick:this.searchHTML,text:"HTML"})," ",r.a.createElement(b,{onClick:this.searchFreelance,text:"Freelance"})," ")," ",r.a.createElement(f,{list:a,pattern:t,onDismiss:this.onDismiss}))}}]),t}(r.a.Component),E=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r))))._handleKeyPress=function(e){"Enter"===e.key&&e.preventDefault()},a}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props,t=e.value,a=e.onChange,n=e.children;return r.a.createElement("div",null,r.a.createElement("form",null,r.a.createElement("div",null," ",n," "),r.a.createElement("div",null,r.a.createElement("input",{type:"text",value:t,onChange:a,onKeyPress:this._handleKeyPress,placeholder:"Search projects..."})," ")," "))}}]),t}(r.a.Component),f=function(e){var t,a=e.list,n=e.pattern,c=e.onDismiss;return r.a.createElement("div",null," ",a.filter((t=n,function(e){return!t||e.type.toLowerCase().includes(t.toLowerCase())||e.project.toLowerCase().includes(t.toLowerCase())||e.madeUsing.toLowerCase().includes(t.toLowerCase())||e.url.toLowerCase().includes(t.toLowerCase())||e.desc.toLowerCase().includes(t.toLowerCase())})).map(function(e){return r.a.createElement("div",{className:"project-card",key:e.objectID},r.a.createElement("div",{className:"project-name"}," ",r.a.createElement("span",null," NAME: ")," "+e.project),r.a.createElement("div",{className:"project-name"}," ",r.a.createElement("span",null," MADE USING: ")," "+e.madeUsing+" "),r.a.createElement("div",{className:"project-name"}," ",r.a.createElement("span",null," TYPE: ")," "+e.type+" "),r.a.createElement("span",null," ",r.a.createElement(b,{text:"REMOVE FROM LIST",onClick:function(){return c(e.objectID)}}," "))," ",r.a.createElement("span",null," ",r.a.createElement("button",null," ",r.a.createElement("a",{href:e.url,target:"_blank",rel:"noopener noreferrer"}," VISIT PROJECTS PAGE "))," ")," ",r.a.createElement("div",{className:"description"},r.a.createElement("div",null,r.a.createElement("span",null,"DESCRIPTION:")," "),e.desc))})," ")},b=function(e){var t=e.onClick,a=e.className,n=void 0===a?"":a,c=(e.children,e.text),s=void 0===c?"":c;return r.a.createElement("button",{onClick:t,className:n,type:"button"}," ",s," ")},j=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(j,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,a){e.exports=a(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.8dae3360.chunk.js.map