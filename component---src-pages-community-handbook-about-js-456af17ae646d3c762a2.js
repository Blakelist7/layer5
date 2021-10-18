(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[7963],{52455:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var o=t(67294),i=t(11521),a=t(25444),r=t(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.secondaryColor})),l=t(61424),c=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1];return o.createElement(r,null,o.createElement("div",{className:"go-back"},o.createElement(a.Link,{to:"/community/handbook"},o.createElement(i.PSe,null),o.createElement("h4",null,"Table of Content")),o.createElement("div",{className:"toc-toggle-btn"},n?o.createElement(l.QAE,{className:"toc-menu-icon",onClick:function(){t(!n)}}):o.createElement(l.Ejh,{className:"toc-menu-icon",onClick:function(){t(!n)}}))),o.createElement("div",{className:"toc-list"},o.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/about",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"About")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/community",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Community")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/contributor-ladder",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Contributor Ladder")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/contribution",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Contribution")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/repository-overview",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Repository Overview")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/projects",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Projects")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/mentorship-programs",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Mentorship Programs")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/learn-layer5",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Learn Layer5")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/connect-with-us",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Connect with us")),o.createElement("li",null,o.createElement(a.Link,{to:"/community/handbook/code-of-conduct",className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},"Code of Conduct")))))}},43740:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return f}});var o=t(67294),i=t(70456),a=t(20092),r=t(36179),l=t(57067),c=t(21101),s=t(25444),m=t(21852),u=t(52455),h=t(61814),d=function(){var e=(0,o.useState)(!1),n=e[0],t=e[1];return o.createElement(c.U,null,o.createElement("div",{className:"page-header-section"},o.createElement("h1",null,"About")),o.createElement(u.Z,null),o.createElement("div",{className:"page-section"},o.createElement(l.W2,null,o.createElement("div",{className:"content"},o.createElement("h2",null,"About Layer5"),o.createElement("p",null,"Layer5 is a community and open-source-centered service mesh company, representing the largest collection of service meshes and their maintainers in the world. Layer5 is the creator and maintainer of ",o.createElement(s.Link,{to:"../blog/announcements/a-standard-interface-for-service-meshes"},"service mesh standards")," and also the maker of ",o.createElement("a",{href:"https://meshery.io"},"Meshery"),",  the ",o.createElement(s.Link,{to:"/service-mesh-management/meshery"},"Service Mesh Management Plane"),".",o.createElement("br",null),"Layer5 is not just a company, we are also:"),o.createElement("h4",null,"Community First"),o.createElement("p",null,"Layer5 represents the community.  We build projects to provide learning environments, deployment, and operational best practices, performance benchmarks, create documentation, share networking opportunities, and more. Our shared commitment to the open-source spirit pushes Layer5 projects forward. New members are always welcome."),o.createElement("h4",null,"Open Source First"),o.createElement("p",null,"All Layer5 projects are open-source. Anyone can download, use, work on, and share it with others. It's built on principles like collaboration, globalism, and innovation. Layer5 projects are distributed under the terms of ",o.createElement("a",{href:"https://www.apache.org/licenses/LICENSE-2.0"},"Apache v2"),"."),o.createElement("h2",null,"Goals"),o.createElement("ul",null,o.createElement("li",null,o.createElement("span",null,"To build a large collection of service meshes.")),o.createElement("li",null,o.createElement("span",null,"To build products that are accessible and easy to use.")),o.createElement("li",null,o.createElement("span",null,"To build a welcoming community for open-source contributions."))),o.createElement("h2",null,"Newcomer’s Path"),o.createElement("p",null,"Thank you for your interest in contributing to Layer5 open source initiatives!"),o.createElement(l.X2,{className:"newcomers-journey"},o.createElement(l.JX,{className:"heading",sm:12,lg:6,onMouseOver:function(){return t(!0)},onMouseOut:function(){return t(!1)}},o.createElement("h2",null,"Contributor's Journey"),o.createElement("div",{className:"heading-start"},o.createElement("h5",null,"Start Here"),o.createElement("img",{className:"heading-start__arrow",src:h.Z}))),o.createElement(l.JX,{sm:12,lg:6},o.createElement(m.Z,{handleMouseHover:n}))),o.createElement("p",null,"In combination with the Layer5 Community Guide and Contributing Guide, the following set of instructions are to encourage and support first-time (or near first-time) open-source contributors."),o.createElement("h3",null,"How to contribute?"),o.createElement("p",null,"The following steps outline the process by which you can openly engage, learn, and participate in the broad set of open source projects at Layer5."),o.createElement("ol",null,o.createElement("li",null,o.createElement("span",null,"Browse the list of"," ",o.createElement("a",{href:"https://github.com/layer5io"},"Layer5")," org issues bearing the"," ",o.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22good+first+issue%22+no%3Aassignee"},"“good first issue”"),","," ",o.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22first+timers+only%22+no%3Aassignee"},"“first-timers-only”")," ","or the"," ",o.createElement("a",{href:"https://github.com/search?q=is%3Aopen+is%3Aissue+archived%3Afalse+org%3Alayer5io+label%3A%22help+wanted%22+no%3A%22assignee%22"},"“help wanted”")," ","label.")),o.createElement("li",null,o.createElement("span",null,"Alternatively, find an area of interest by checking out the Layer5 Repository Overview section of this handbook.")),o.createElement("li",null,o.createElement("span",null,"After identifying the issue you wish to work on, check if it has been assigned by taking a look at the assignee section on the issue, otherwise signal your interest by commenting on the issue so that it can be assigned to you."))),o.createElement("h3",null,"Working on your issue"),o.createElement("p",null,"Once an issue has been assigned to you, it’s time to get started!"),o.createElement("ol",null,o.createElement("li",null,o.createElement("span",null,"Be sure to"," ",o.createElement("a",{href:"https://github.com/layer5io/meshery/blob/master/CONTRIBUTING.md#signing-off-on-commits-developer-certificate-of-origin"},"sign off on your commits"))),o.createElement("li",null,o.createElement("span",null,"Contributions of all sizes are welcome.")),o.createElement("li",null,o.createElement("span",null,"If you need some additional help, please join the Layer5 Slack workspace and find your way to the #newcomers channel. Feel free to ask questions."))),o.createElement("h3",null,"While your issue is under review"),o.createElement("ol",null,o.createElement("li",null,o.createElement("span",null,"Please double-check that you have signed off on all of your git commits.")),o.createElement("li",null,o.createElement("span",null,"Be patient. There are a large number of contributors and only a small number of maintainers/reviewers. All contributors are equally important to us, and we'll be sure to get to you as soon as possible. In the meanwhile, you are welcome to join our Slack workspace and take a look at all our projects."," ")))))))},g=t(45027),p=t(34967),b=t(97956),y=t(38155),f=function(){return o.createElement(i.f6,{theme:y.Z},o.createElement(a.Z,null,o.createElement(b.Z,null),o.createElement(r.Z,{title:"Community Handbook",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),o.createElement(g.Z,null),o.createElement(d,null),o.createElement(p.Z,null)))}},21101:function(e,n,t){"use strict";t.d(n,{U:function(){return o}});var o=t(70456).ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n    .highlight{\n      font-weight: 600;\n    }\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n    ul > li {\n        color: ",";\n      }\n    ol > li {\n        color: ",";\n      }\n    ul > li > span {\n        color: ",";\n      }\n    ol > li > span {\n      color: ",";\n    }\n    }\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n    .page-section{\n      margin-top: -33rem;\n      margin-left: 20rem;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n    table {\n    border-collapse: collapse;\n    width: 98%;\n    margin: 1rem 0 2rem 0;\n    .github-icon{\n      height: 1.7rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n    .site-icon{\n      height: 1.6rem;\n      width:auto;\n      display: block;\n      margin-left: auto;\n      margin-right: auto;\n    }\n        }\n\n  td, th {\n    border: 0.05rem solid ",";\n    text-align: left;\n    padding: 0.5rem;\n        }\n      .linkscol{\n        text-align: center;\n        width:8%;\n      }\n  tbody:nth-child(even) {\n    background-color: ",';\n        }\n\n  .codes{\n    width:75%\n    margin-top:-2rem;\n  }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",";\n    }\n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n    }\n    }\n\n    @media only screen and (max-width: 475px){\n        .page-header-section h1{\n            padding: 0 1rem;\n            line-height: 3rem;\n            padding-top: 4rem;\n        }\n        .page-section{\n          margin-top: -2rem;\n          margin-left: 0rem;\n        }\n        table{\n          margin-left: -1.5rem;\n        }\n        .frontendTable{\n          margin-left: -2.8rem;\n        }\n    }\n  .channels-list {\n    padding-left: 40px;\n  }\n  .channels-img {\n    width: 30px;\n    height: 30px;\n  }\n  .channels-para {\n    display: flex;\n    align-items: flex-end;\n  }\n  .newcomers-journey{\n    text-align: center;\n    display: flex;\n    align-items: center;\n    margin: 2.5rem 5rem 3rem 0rem;\n    \n    h2{\n      margin-bottom: 2rem;\n    }\n}\n  .heading{\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    h2{\n      margin-top: -5.5rem;\n    }\n  }\n  .heading-start{\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    align-self: flex-end;\n    margin-right: 2rem;\n    margin-top: -2rem;\n    h5{\n    font-size: 1.125rem;\n    font-weight: 400;\n    margin-right: 1rem;\n    }\n    img{\n    height: 3rem;\n    width: 4rem;\n    transition: .5s;\n    }\n    img:hover{\n    padding-left: 1rem;\n    transition: .5s;\n    }\n  }\n"],(function(e){return e.theme.menuColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.black}),(function(e){return e.theme.black}),(function(e){return e.theme.tertiaryColor}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.secondaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.secondaryLightColor}))},61814:function(e,n){"use strict";n.Z="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iQ2FwYV8xIiB3aWR0aD0iNDkzLjM1NiIgaGVpZ2h0PSI0OTMuMzU2IiB4PSIwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0OTMuMzU2IDQ5My4zNTYiIHk9IjAiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDQ5My4zNTYgNDkzLjM1NiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+PGc+PHBhdGggZmlsbD0iIzAwZDNhOSIgZD0iTTQ5MC40OTgsMjM5LjI3OGwtMTA5LjYzMi05OS45MjljLTMuMDQ2LTIuNDc0LTYuMzc2LTIuOTUtOS45OTMtMS40MjdjLTMuNjEzLDEuNTI1LTUuNDI3LDQuMjgzLTUuNDI3LDguMjgydjYzLjk1NEg5LjEzNiBjLTIuNjY2LDAtNC44NTYsMC44NTUtNi41NjcsMi41NjhDMC44NTksMjE0LjQzOCwwLDIxNi42MjgsMCwyMTkuMjkydjU0LjgxNmMwLDIuNjYzLDAuODU1LDQuODUzLDIuNTY4LDYuNTYzIGMxLjcxNSwxLjcxMiwzLjkwNSwyLjU2Nyw2LjU2NywyLjU2N2gzNTYuMzEzdjYzLjk1M2MwLDMuODEyLDEuODE3LDYuNTcsNS40MjgsOC4yNzhjMy42MiwxLjUyOSw2Ljk1LDAuOTUxLDkuOTk2LTEuNzA4IGwxMDkuNjMyLTEwMS4wNzdjMS45MDMtMS45MDIsMi44NTItNC4xODIsMi44NTItNi44NDlDNDkzLjM1NiwyNDMuMzY3LDQ5Mi40MDEsMjQxLjE4MSw0OTAuNDk4LDIzOS4yNzh6Ii8+PC9nPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-pages-community-handbook-about-js-456af17ae646d3c762a2.js.map