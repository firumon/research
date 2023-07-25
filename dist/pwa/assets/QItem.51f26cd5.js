import{c as d,h as v,u as S,k as E,a as K}from"./QBtn.122cb4ce.js";import{f as a,h as r,g as k,r as q,a2 as R,x as $}from"./index.8b69689e.js";var j=d({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:l}){const n=a(()=>parseInt(e.lines,10)),i=a(()=>"q-item__label"+(e.overline===!0?" q-item__label--overline text-overline":"")+(e.caption===!0?" q-item__label--caption text-caption":"")+(e.header===!0?" q-item__label--header":"")+(n.value===1?" ellipsis":"")),u=a(()=>e.lines!==void 0&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null);return()=>r("div",{style:u.value,class:i.value},v(l.default))}});const g={dark:{type:Boolean,default:null}};function y(e,l){return a(()=>e.dark===null?l.dark.isActive:e.dark)}var N=d({name:"QList",props:{...g,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean,tag:{type:String,default:"div"}},setup(e,{slots:l}){const n=k(),i=y(e,n.proxy.$q),u=a(()=>"q-list"+(e.bordered===!0?" q-list--bordered":"")+(e.dense===!0?" q-list--dense":"")+(e.separator===!0?" q-list--separator":"")+(i.value===!0?" q-list--dark":"")+(e.padding===!0?" q-list--padding":""));return()=>r(e.tag,{class:u.value},v(l.default))}}),P=d({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:l}){const n=a(()=>`q-item__section column q-item__section--${e.avatar===!0||e.side===!0||e.thumbnail===!0?"side":"main"}`+(e.top===!0?" q-item__section--top justify-start":" justify-center")+(e.avatar===!0?" q-item__section--avatar":"")+(e.thumbnail===!0?" q-item__section--thumbnail":"")+(e.noWrap===!0?" q-item__section--nowrap":""));return()=>r("div",{class:n.value},v(l.default))}}),F=d({name:"QItem",props:{...g,...S,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:l,emit:n}){const{proxy:{$q:i}}=k(),u=y(e,i),{hasLink:m,linkAttrs:_,linkClass:h,linkTag:B,navigateOnClick:x}=E(),o=q(null),c=q(null),b=a(()=>e.clickable===!0||m.value===!0||e.tag==="label"),s=a(()=>e.disable!==!0&&b.value===!0),L=a(()=>"q-item q-item-type row no-wrap"+(e.dense===!0?" q-item--dense":"")+(u.value===!0?" q-item--dark":"")+(m.value===!0&&e.active===null?h.value:e.active===!0?` q-item--active${e.activeClass!==void 0?` ${e.activeClass}`:""}`:"")+(e.disable===!0?" disabled":"")+(s.value===!0?" q-item--clickable q-link cursor-pointer "+(e.manualFocus===!0?"q-manual-focusable":"q-focusable q-hoverable")+(e.focused===!0?" q-manual-focusable--focused":""):"")),C=a(()=>{if(e.insetLevel===void 0)return null;const t=i.lang.rtl===!0?"Right":"Left";return{["padding"+t]:16+e.insetLevel*56+"px"}});function Q(t){s.value===!0&&(c.value!==null&&(t.qKeyEvent!==!0&&document.activeElement===o.value?c.value.focus():document.activeElement===c.value&&o.value.focus()),x(t))}function w(t){if(s.value===!0&&R(t,13)===!0){$(t),t.qKeyEvent=!0;const f=new MouseEvent("click",t);f.qKeyEvent=!0,o.value.dispatchEvent(f)}n("keyup",t)}function I(){const t=K(l.default,[]);return s.value===!0&&t.unshift(r("div",{class:"q-focus-helper",tabindex:-1,ref:c})),t}return()=>{const t={ref:o,class:L.value,style:C.value,role:"listitem",onClick:Q,onKeyup:w};return s.value===!0?(t.tabindex=e.tabindex||"0",Object.assign(t,_.value)):b.value===!0&&(t["aria-disabled"]="true"),r(B.value,t,I())}}});export{P as Q,y as a,j as b,F as c,N as d,g as u};
