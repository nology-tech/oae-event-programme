(this["webpackJsonpoae-event-programme"]=this["webpackJsonpoae-event-programme"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,c){},function(e,t,c){},function(e,t,c){},,function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){},function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),n=c(8),i=c.n(n),r=(c(13),c(2)),o=(c(14),c(15),c(0)),d=function(e){var t=e.imageSrc,c=e.description,s=e.alt;return Object(o.jsxs)("div",{className:"photo",children:[Object(o.jsx)("img",{src:t,alt:s,className:"photo__image"}),Object(o.jsx)("span",{className:"photo__description",children:c})]})},l=(c(17),function(e){var t=e.quote,c=e.author;return Object(o.jsxs)("div",{className:"orchestra-quote",children:[Object(o.jsx)("q",{className:"orchestra-quote__content",children:t}),Object(o.jsxs)("p",{className:"orchestra-quote__author",children:["-",c]})]})}),j=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"About page"}),Object(o.jsx)(d,{imageSrc:"https://place-puppy.com/300x300",alt:"puppy",description:"A picture of a man's best friend"}),Object(o.jsx)(l,{quote:"COMPLIANCE IS NOT HEALTHY. WHAT I WANT IS A DIALOGUE.",author:"Vladmir Jurowski"})]})},u=(c(18),c(19),c(5)),h=function(){return Object(o.jsx)(u.b,{to:"/event-schedule",className:"view-schedule-button",children:"View Schedule"})},m=(c(20),function(e){var t=e.text;return Object(o.jsx)("p",{"data-testid":"paragraph",className:"paragraph",children:t})}),A=(c(21),function(e){var t=e.time,c=e.date,s=e.venue,a=e.location;return Object(o.jsxs)("div",{className:"event-header-details",children:[Object(o.jsxs)("p",{className:"event-header-details__time-date",children:[t,t&&c&&Object(o.jsx)("span",{className:"event-header-details__divider",children:"|"}),c]}),Object(o.jsxs)("p",{className:"event-header-details__venue-location",children:[Object(o.jsx)("span",{className:"event-header-details__venue",children:s}),a&&Object(o.jsx)("span",{className:"event-header-details__comma",children:","})," ",a]})]})}),b=(c(22),function(e){var t=e.embedId;return t?Object(o.jsx)("iframe",{className:"youtube-embed",src:"https://www.youtube.com/embed/".concat(t),frameBorder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,title:"Embedded youtube"}):(console.error("No embedId provided for YoutubeEmbed component"),null)}),p=(c(23),function(e){var t=e.content,c=e.isVideo;return t?Object(o.jsx)("div",{className:"header-image-video-container",children:c?Object(o.jsx)(b,{embedId:t}):Object(o.jsx)("img",{src:t,className:"header-image",alt:"Event image"})}):(console.error("No props provided to header image/video container."),null)}),O=c.p+"static/media/image33.dbb48491.png",x=(c(24),function(e){var t=e.title,c=e.subtitle;return Object(o.jsxs)("div",{className:"header-home",children:[Object(o.jsx)("h1",{className:"header-home__title",children:t}),Object(o.jsx)("span",{className:"header-home__subtitle",children:c})]})}),v=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)(x,{title:"BACH, THE UNIVERSE & EVERYTHING",subtitle:"Can You Hear The Shape of The Drum? "}),Object(o.jsx)(A,{time:"11.30am",date:"Sun 21 Nov 2021",venue:"South Bank",location:"London"}),Object(o.jsx)(p,{content:O,isVideo:!1}),Object(o.jsx)(m,{text:"this is some paragraph"}),Object(o.jsx)(h,{})]})},g=c(4),N=(c(25),"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACHSURBVHgBndLLDYAgDAbglkkYg6OO4mSMwpUx2ARbw4Eoj782MSptPwIphxA8M8da65VzLvQjesPph6wd8k6aIGM0LDUjOlXlp8jjrWiHaU9RiyeJc3f8WQ/vCiyY5hgtRGvYsjuy4QecNT7FwJUMwRHalpfYEhygRMAELMEXSsg4QaEoOvA3BCWQDkDmlZgAAAAASUVORK5CYII="),f=function(e){var t=e.header,c=e.subHeader,a=e.description,n=Object(s.useState)(!1),i=Object(g.a)(n,2),r=i[0],d=i[1],l=Object(s.useState)(N),j=Object(g.a)(l,2),u=j[0],h=j[1];Object(s.useEffect)((function(){void 0===a&&h("")}),[a]);return Object(o.jsxs)("div",{className:"schedule-item",children:[Object(o.jsxs)("div",{className:"schedule-item__top",children:[Object(o.jsxs)("span",{className:"schedule-item__headers",children:[Object(o.jsx)("h3",{className:"schedule-item__header",children:t}),Object(o.jsx)("p",{className:"schedule-item__subheader",children:c})]}),Object(o.jsx)("span",{className:"schedule-item__button-container",children:Object(o.jsx)("img",{role:"button",className:"schedule-item__button",src:u,alt:"",onClick:function(){d(!r),h(r?N:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACLSURBVHgBpdLBDYUgDAbg8roGYYZ34cLJEVzBSXQUV3AEbxxdwcAcICY28SS/+CekJG2/U4mAOOfG8yGzjGA556l8O2MMhRDWZvCGSaooI1ipQymLUqqvoYxg3vs5xrhprfcayggmPQRlFENRfoMhKL/Faii3YE/oL6WkWjDJuXOdFYlF1to/fYwYByUdqeraGQd1AAAAAElFTkSuQmCC")}})})]}),r&&Object(o.jsxs)("div",{className:"schedule-item__content",children:[Object(o.jsx)("h3",{className:"schedule-item__content-header",children:a}),Object(o.jsx)("p",{className:"schedule-item__content-subheader",children:a}),Object(o.jsx)("p",{className:"schedule-item__content-description",children:a})]}),Object(o.jsx)("hr",{className:"schedule-item__hr"})]})},_=(c(26),function(){return Object(o.jsxs)("div",{className:"schedule",children:[Object(o.jsx)(f,{header:"Welcome"}),Object(o.jsx)(f,{header:"header",subHeader:"subheader",description:"lorem ipsum"}),Object(o.jsx)(f,{header:"header",subHeader:"subheader",description:"lorem ipsum"})]})}),E=function(){return Object(o.jsxs)(r.c,{children:[Object(o.jsx)(r.a,{index:!0,element:Object(o.jsx)(v,{})}),Object(o.jsx)(r.a,{path:"/our-story",element:Object(o.jsx)(j,{})}),Object(o.jsx)(r.a,{path:"/event-schedule",element:Object(o.jsx)(_,{})}),Object(o.jsx)(r.a,{path:"/*",element:Object(o.jsx)(v,{})})]})},S=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,28)).then((function(t){var c=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,i=t.getTTFB;c(e),s(e),a(e),n(e),i(e)}))};i.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(u.a,{basename:"/oae-event-programme",children:Object(o.jsx)(E,{})})}),document.getElementById("root")),S()}],[[27,1,2]]]);
//# sourceMappingURL=main.cf3afbbe.chunk.js.map