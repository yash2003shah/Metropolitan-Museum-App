(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[675],{2995:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/favourites",function(){return t(2895)}])},5073:function(e,r,t){"use strict";t.d(r,{Z:function(){return d}});var n=t(5893),s=t(8100),a=t(2918),i=t(5005),l=t(8182),c=t(1664),o=t.n(c);function d(e){let{objectID:r}=e,{data:t,error:c}=(0,s.ZP)("https://collectionapi.metmuseum.org/public/collection/v1/objects/".concat(r));return c?(0,n.jsx)(a.default,{statusCode:404}):t?0==t.length?null:(0,n.jsxs)(l.Z,{children:[(0,n.jsx)(l.Z.Img,{variant:"top",src:t.primaryImageSmall?t.primaryImageSmall:"https://via.placeholder.com/375x375.png?text=%5b+Not+Available+%5d"}),(0,n.jsxs)(l.Z.Body,{children:[(0,n.jsx)(l.Z.Title,{children:t.title?t.title:"N/A"}),(0,n.jsxs)(l.Z.Text,{children:[(0,n.jsx)("strong",{children:"Date: "}),t.objectDate?t.objectDate:"N/A",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Classification: "}),t.classification?t.classification:"N/A",(0,n.jsx)("br",{}),(0,n.jsx)("strong",{children:"Medium: "}),t.medium?t.medium:"N/A",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(o(),{href:"/artwork/".concat(r),passHref:!0,children:(0,n.jsx)(i.Z,{variant:"outline-primary",children:r})})]})]})]}):void 0}},2895:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return d}});var n=t(5893);t(2918);var s=t(4051),a=t(1555),i=t(8182),l=t(5073),c=t(3665),o=t(3360);function d(){let[e,r]=(0,c.KO)(o.p);return e?e?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.Z,{className:"gy-4",children:e.length>0?e.map(e=>(0,n.jsx)(a.Z,{lg:3,children:(0,n.jsx)(l.Z,{objectID:e})},e)):(0,n.jsx)(i.Z,{children:(0,n.jsx)(i.Z.Body,{children:(0,n.jsxs)(i.Z.Text,{children:[(0,n.jsx)("strong",{children:"Nothing Here"}),(0,n.jsx)("br",{}),"Try adding for something else."]})})})}),!e&&null]}):void 0:null}t(7294)},2918:function(e,r,t){e.exports=t(67)},8182:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(4184),s=t.n(n),a=t(7294),i=t(6792),l=t(6611),c=t(9602),o=t(5893);let d=a.forwardRef(({bsPrefix:e,className:r,variant:t,as:n="img",...a},l)=>{let c=(0,i.vE)(e,"card-img");return(0,o.jsx)(n,{ref:l,className:s()(t?`${c}-${t}`:c,r),...a})});d.displayName="CardImg";var u=t(9059);let f=a.forwardRef(({bsPrefix:e,className:r,as:t="div",...n},l)=>{let c=(0,i.vE)(e,"card-header"),d=(0,a.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,o.jsx)(u.Z.Provider,{value:d,children:(0,o.jsx)(t,{ref:l,...n,className:s()(r,c)})})});f.displayName="CardHeader";let m=(0,c.Z)("h5"),x=(0,c.Z)("h6"),h=(0,l.Z)("card-body"),j=(0,l.Z)("card-title",{Component:m}),p=(0,l.Z)("card-subtitle",{Component:x}),v=(0,l.Z)("card-link",{Component:"a"}),Z=(0,l.Z)("card-text",{Component:"p"}),g=(0,l.Z)("card-footer"),b=(0,l.Z)("card-img-overlay"),N=a.forwardRef(({bsPrefix:e,className:r,bg:t,text:n,border:a,body:l,children:c,as:d="div",...u},f)=>{let m=(0,i.vE)(e,"card");return(0,o.jsx)(d,{ref:f,...u,className:s()(r,m,t&&`bg-${t}`,n&&`text-${n}`,a&&`border-${a}`),children:l?(0,o.jsx)(h,{children:c}):c})});N.displayName="Card",N.defaultProps={body:!1};var y=Object.assign(N,{Img:d,Title:j,Subtitle:p,Body:h,Link:v,Text:Z,Header:f,Footer:g,ImgOverlay:b})},4051:function(e,r,t){"use strict";var n=t(4184),s=t.n(n),a=t(7294),i=t(6792),l=t(5893);let c=a.forwardRef(({bsPrefix:e,className:r,as:t="div",...n},a)=>{let c=(0,i.vE)(e,"row"),o=(0,i.pi)(),d=(0,i.zG)(),u=`${c}-cols`,f=[];return o.forEach(e=>{let r;let t=n[e];delete n[e],null!=t&&"object"==typeof t?{cols:r}=t:r=t;let s=e!==d?`-${e}`:"";null!=r&&f.push(`${u}${s}-${r}`)}),(0,l.jsx)(t,{ref:a,...n,className:s()(r,c,...f)})});c.displayName="Row",r.Z=c}},function(e){e.O(0,[774,888,179],function(){return e(e.s=2995)}),_N_E=e.O()}]);