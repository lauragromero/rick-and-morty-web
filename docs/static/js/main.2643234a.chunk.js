(this["webpackJsonpmodulo-3-evaluacion-final-lauragromero"]=this["webpackJsonpmodulo-3-evaluacion-final-lauragromero"]||[]).push([[0],{21:function(e,a){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfkAQ0XEDYSGjBkAAAB6UlEQVRIx6XVS0jUURQG8N9M5pQgUhpl5MYggqLCpE0YZQ8RoU01Mb2QINxHbVxa4iKqVZsWbgJ3LgxXGS57UARBT0ilJicVSQgm0UhbzDip859XfXd1vnPPd+/5LocbEoytYo7YZ6MF40YMGjAetDEUwG3Wrd1ng16ZUqbWHidtcd8Nk4rANc+cyJJu9dq05kLFbc7nzIX1mHcpv0Cjw3nzHeY05UpW61VesMHbJlQFp+74IFxQoNyI7qBEpaSzBcvhnKTKbPqi6SIagIgfTi0FZRn6kGHzYJ0rKnz00IJdeOuyTcb1mwVzhrTqX637VGdGatFLsx6gV68ai96Y8Txz3E2Pl8r+mrbB9DKu0Wkx64WEhBHV4IDd6R0JtdktRNINpBB1wYS5TNxih1lf09FPFdkCK3FPlSYLmfiqSdHMHZch17s3+GX7srhFo3dBoxckMOWTuB7HEReXFPcdA+rzve6YdsWi3VihForGfwuU5cw0++KbDmvBC8OlCuxF0tH0fMyXLnAXtP2bB10WA1ZX8Teo88itVdx1daW0UG1/FpMoXmDINsdWcTOGihfo01fIvJWIGg20Ld8adYbU11bvvW5PSjvTQZ12pmYiFvxtFkRCLOVBxJosy4pBWCQlkFAT7HAB/JbgD2gfkruopLfoAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIwLTAxLTEzVDIzOjE2OjU0KzAwOjAwWYu0iAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMC0wMS0xM1QyMzoxNjo1NCswMDowMCjWDDQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},22:function(e,a,t){e.exports=t.p+"static/media/Rick_and_Morty_logo.75509f2e.png"},23:function(e,a,t){e.exports=t.p+"static/media/portalrick.842f63c3.png"},27:function(e,a,t){e.exports=t(39)},32:function(e,a,t){},33:function(e,a,t){},39:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(15),l=t.n(c),i=(t(32),t(26)),s=t(16),m=t(17),o=t(24),u=t(18),d=t(9),p=t(25),h=(t(33),function(e){var a=e.image,t=e.name,n=e.specie,c=e.gender,l=e.status;return r.a.createElement(r.a.Fragment,null,r.a.createElement("img",{className:"character__img",src:a,alt:t}),r.a.createElement("div",{className:"character__container"},r.a.createElement("div",{className:"character__text-container"},r.a.createElement("h3",{className:"character__title"},t),r.a.createElement("span",{className:"character__text"},n)),r.a.createElement("div",{className:"character__icon"},r.a.createElement("span",null,"Alien"===n?r.a.createElement("i",{className:"fab fa-reddit-alien"}):"Male"===c?r.a.createElement("i",{className:"fas fa-male"}):r.a.createElement("i",{className:"fas fa-female"})),r.a.createElement("span",{className:"status__container"},"Dead"===l?r.a.createElement("i",{className:"far fa-dizzy"}):"unknown"===l?r.a.createElement("i",{className:"fas fa-question"}):r.a.createElement("i",{className:"fas fa-heartbeat"})))))}),A=t(1),f=t.n(A),E=t(7);h.propTypes={name:f.a.string,specie:f.a.string,id:f.a.number,gender:f.a.string,status:f.a.string};var g=function(e){var a=e.valueSearch.toLowerCase(),t=e.filterSpecie;console.log(e);var n=e.characteres.filter((function(e){return"human"===t?e.species.toLowerCase().includes(t):"alien"===t?e.species.toLowerCase().includes(t):e})).filter((function(e){return""===a||e.name.toLowerCase().includes(a)})).map((function(e){return r.a.createElement("li",{className:"character__list",key:e.id},r.a.createElement(E.b,{to:"/character/".concat(e.id)},r.a.createElement(h,{id:e.id,image:e.image,name:e.name,specie:e.species,gender:e.gender,status:e.status,value:a,found:e})))}));return r.a.createElement("ul",{className:"characteres__container"},0===n.length&&""!==a?r.a.createElement("div",{className:"container__notfound"},r.a.createElement("p",null,"Personaje no encontrado"),r.a.createElement("img",{src:"https://media.giphy.com/media/4pjKt6jfT6Z7W/giphy.gif",alt:"no encontrado"})):n)},v=function(e){console.log(e);var a=e.valueInput,t=a.value,n=a.specie,c=function(a){e.handleSearchInput(a.target.value,a.target.name)};return r.a.createElement("form",{className:"form__search"},r.a.createElement("input",{className:"input__search",onChange:c,type:"seach",name:"filterValue",value:t}),r.a.createElement("div",{className:"select__radio"},r.a.createElement("input",{onChange:c,className:"radio__input",id:"human",type:"radio",value:"human",name:"specie",checked:"human"===n}),r.a.createElement("label",{className:"radio__label",htmlFor:"human"},"Humano"),r.a.createElement("input",{onChange:c,className:"radio__input",id:"alien",type:"radio",value:"alien",name:"specie",checked:"alien"===n}),r.a.createElement("label",{className:"radio__label",htmlFor:"alien"},"Alien"),r.a.createElement("input",{onChange:c,className:"radio__input",id:"all",type:"radio",value:"all",name:"specie",checked:"all"===n}),r.a.createElement("label",{className:"radio__label",htmlFor:"all"},"All")))},_=t(6),N=t(21),b=t.n(N),k=function(e){var a=e.characteres.filter((function(a){return parseInt(e.characterDetail)===a.id}));return r.a.createElement("div",{className:"card__detail-container"},a.map((function(e){return r.a.createElement("div",{className:"card__container",key:e.id},r.a.createElement("img",{src:e.image,alt:e.name}),r.a.createElement("div",{className:"card__text"},r.a.createElement("div",{className:"card__title"},r.a.createElement("h2",null,e.name),r.a.createElement("div",{className:"card__status"},"Dead"===e.status?r.a.createElement("img",{src:b.a,alt:e.status}):"")),r.a.createElement("span",null,"Especie: ",e.species),r.a.createElement("span",null,"Estatus: ",e.status),r.a.createElement("span",null,"Origen: ",e.origin.name),r.a.createElement("span",null,"Episodios: ",e.episode.length)))})),r.a.createElement(E.b,{className:"btn__return",to:"/"},r.a.createElement("i",{className:"fas fa-angle-left"})," Volver"))},y=t(22),I=t.n(y),S=t(23),C=t.n(S),F=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("img",{className:"header__logo",src:I.a,alt:"Rick and Morty"}),r.a.createElement("img",{className:"header__img",src:C.a,alt:"portal"}))},D=function(e){function a(e){var t;return Object(s.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).state={characteres:[],inputform:{filterValue:"",specie:"all"},checkValue:"",isChecked:!1},t.handleSearchInput=t.handleSearchInput.bind(Object(d.a)(t)),t.renderRouterDetail=t.renderRouterDetail.bind(Object(d.a)(t)),t}return Object(p.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){this.fechDataApi()}},{key:"fechDataApi",value:function(){var e=this;fetch("https://rickandmortyapi.com/api/character/").then((function(e){return e.json()})).then((function(a){e.setState({characteres:a.results})}))}},{key:"handleSearchInput",value:function(e,a){var t=this.state.inputform;t[a]=e,this.setState((function(e){return{inputform:Object(i.a)({},e.inputform,{},t)}}))}},{key:"renderRouterDetail",value:function(e){var a=e.match.params.id;return r.a.createElement(k,{characterDetail:a,characteres:this.state.characteres})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"stars"}),r.a.createElement("div",{className:"twinkling"}),r.a.createElement(F,null),r.a.createElement(_.c,null,r.a.createElement(_.a,{path:"/",exact:!0},r.a.createElement(v,{handleSearchInput:this.handleSearchInput,valueInput:this.state.inputform}),r.a.createElement(g,{characteres:this.state.characteres,valueSearch:this.state.inputform.filterValue,filterSpecie:this.state.inputform.specie})),r.a.createElement(_.a,{path:"/character/:id",render:this.renderRouterDetail})))}}]),a}(r.a.Component);g.propTypes={characteres:f.a.arrayOf(f.a.object),valueSearch:f.a.string},v.protoTypes={handleSearchInput:f.a.func,valueInput:f.a.string,selectSpecie:f.a.string},k.protoTypes={characteres:f.a.arrayOf(f.a.object).isRequired,characterDetail:f.a.string};var j=D;l.a.render(r.a.createElement(E.a,null,r.a.createElement(j,null)),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.2643234a.chunk.js.map