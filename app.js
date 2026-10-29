import React from './vendor/react.js';
const useCallback=React.useCallback;
const useEffect=React.useEffect;
const useId=React.useId;
const useLayoutEffect=React.useLayoutEffect;
const useRef=React.useRef;
const useState=React.useState;
const logoImg="./assets/logo.png";
const heroStatueImg="./assets/hero-lady-justice.png";
const contactStatueImg="./assets/contact-lady-justice.png";
const arrowRightImg="./assets/arrow-right.png";
const cardCryptoImg="./assets/card-crypto.png";
const cardTaxImg="./assets/card-tax.png";
const cardRealEstateImg="./assets/card-real-estate.png";
const cardLegalAdvisoryImg="./assets/card-legal-advisory.png";
const chevronImg="./assets/icon-chevron.png";
const lockImg="./assets/icon-lock.png";
const globeImg="./assets/icon-globe.png";
const dollarImg="./assets/icon-dollar.png";
const targetImg="./assets/icon-target.png";
const pageTextureImg="./assets/page-texture.webp";
const NAV_LINKS=[{id:"home",label:"Home",href:"#home"},{id:"about",label:"About",href:"#about"},{id:"services",label:"Services",href:"#services"},{id:"why-us",label:"Why Us",href:"#why-us"},{id:"testimonials",label:"Testimonials",href:"#testimonials"}];const STATS=[{id:"years",value:"25+",label:"Years Experience",x:152},{id:"cases",value:"3,000+",label:"Cases Resolved",x:507},{id:"satisfaction",value:"98%",label:"Client Satisfaction",x:903},{id:"experts",value:"50+",label:"Legal Experts",x:1296.5}];const STAT_DIVIDERS=[300,721,1121];const AUDIENCES=["Private Clients","Investors","Businesses"];const PRACTICE_AREAS=[{id:"crypto",image:cardCryptoImg,ratio:647/775,title:"Crypto Scam & Fraud",text:"Investigation, asset tracing, and recovery strategies for victims of cryptocurrency fraud and online scams."},{id:"tax",image:cardTaxImg,ratio:647/775,title:"Tax Strategy & Asset Protection",text:"Advanced tax structuring, international planning, and legal wealth protection strategies designed to preserve capital and ensure compliance."},{id:"real-estate",image:cardRealEstateImg,ratio:647/775,title:"Real Estate Law & Property",text:"Legal support for acquisitions, disputes, and ownership structuring across residential and commercial real estate."},{id:"legal-advisory",image:cardLegalAdvisoryImg,ratio:647/775,title:"Legal Advisory Investment",text:"Structuring and safeguarding investments with a focus on minimizing risk and maximizing legal protection."}];const WHY_ITEMS=[{id:"discreet",icon:lockImg,title:["Discreet & Confidential"]},{id:"international",icon:globeImg,title:["International Client Base"]},{id:"strategic",icon:dollarImg,title:["Strategic, Results-Oriented","Approach"]},{id:"specialized",icon:targetImg,title:["Specialized Financial Expertise"]}];const TESTIMONIALS=[{id:"david",initial:"D",name:"DAVID CHEN",reviews:"19 reviews",when:"5 days ago",quote:["Their corporate team restructured our","business agreements flawlessly.","I wouldn't trust anyone else with our","legal affairs."],author:"David Chen",role:"CEO, TechBridge Ltd"},{id:"sarah",initial:"D",name:"SARAH MITCHELL",reviews:"11 reviews",when:"1 weeks ago",quote:["During a very difficult family situation, the","team at Fiducia provided not just legal","expertise, but genuine compassion and","support throughout."],author:"Sarah Mitchell",role:"Family Law Client"},{id:"james",initial:"D",name:"JAMES HARRINGTON",reviews:"8 reviews",when:"3 week ago",quote:["Fiducia Solicitors handled my property","dispute with exceptional professionalism.","Their strategic approach saved us both","time and money."],author:"James Harrington",role:"Property Developer"}];const DIAL_CODES=["+44","+1","+61","+65","+91","+94","+971"];const COUNTRIES=["United Kingdom","United States","United Arab Emirates","Singapore","Australia","India","Sri Lanka","Other"];function usePrefersReducedMotion(){const[reduced,setReduced]=useState(()=>typeof window!=="undefined"&&window.matchMedia("(prefers-reduced-motion: reduce)").matches);useEffect(()=>{const mq=window.matchMedia("(prefers-reduced-motion: reduce)");const onChange=e=>setReduced(e.matches);mq.addEventListener("change",onChange);return()=>mq.removeEventListener("change",onChange)},[]);return reduced}function useInView(options){const ref=useRef(null);const[inView,setInView]=useState(false);useEffect(()=>{const node=ref.current;if(!node)return undefined;if(!("IntersectionObserver"in window)){setInView(true);return undefined}const observer=new IntersectionObserver(([entry])=>{if(entry.isIntersecting){setInView(true);observer.disconnect()}},options);observer.observe(node);return()=>observer.disconnect()},[]);return[ref,inView]}function useSmoothScroll(enabled){useEffect(()=>{const root=document.documentElement;let target=window.scrollY;let current=window.scrollY;let raf=0;let running=false;const finePointer=window.matchMedia("(pointer: fine)").matches;const active=enabled&&finePointer;const maxScroll=()=>root.scrollHeight-window.innerHeight;const tick=()=>{current+=(target-current)*0.085;if(Math.abs(target-current)<0.4){current=target;running=false}window.scrollTo(0,current);raf=running?requestAnimationFrame(tick):0};const glideTo=y=>{if(!running)current=window.scrollY;target=Math.max(0,Math.min(maxScroll(),y));if(!running){running=true;raf=requestAnimationFrame(tick)}};const onWheel=e=>{if(document.documentElement.classList.contains("is-loading")){e.preventDefault();return}if(e.ctrlKey||e.defaultPrevented)return;if(Math.abs(e.deltaX)>Math.abs(e.deltaY)||e.shiftKey)return;if(e.target instanceof Element&&e.target.closest("textarea, select, [data-native-scroll]"))return;e.preventDefault();const unit=e.deltaMode===1?40:e.deltaMode===2?window.innerHeight:1;glideTo((running?target:window.scrollY)+e.deltaY*unit)};const onScroll=()=>{if(!running)target=current=window.scrollY};const onAnchorClick=e=>{if(e.defaultPrevented||e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;const link=e.target instanceof Element?e.target.closest("a[href^=\"#\"]"):null;if(!link)return;const id=decodeURIComponent(link.getAttribute("href").slice(1));const el=id?document.getElementById(id):null;if(!el)return;e.preventDefault();const y=id==="home"?0:el.getBoundingClientRect().top+window.scrollY-20;if(active)glideTo(y);else window.scrollTo({top:y,behavior:enabled?"smooth":"auto"});if(!el.hasAttribute("tabindex"))el.setAttribute("tabindex","-1");el.focus({preventScroll:true});window.history.replaceState(null,"",`#${id}`)};document.addEventListener("click",onAnchorClick);if(active){window.addEventListener("wheel",onWheel,{passive:false});window.addEventListener("scroll",onScroll,{passive:true})}return()=>{document.removeEventListener("click",onAnchorClick);window.removeEventListener("wheel",onWheel);window.removeEventListener("scroll",onScroll);cancelAnimationFrame(raf)}},[enabled])}function useScrollMinimize(threshold=140){const[minimized,setMinimized]=useState(false);useEffect(()=>{let last=window.scrollY;let raf=0;const update=()=>{raf=0;const y=window.scrollY;const delta=y-last;if(y<threshold)setMinimized(false);else if(delta>4)setMinimized(true);else if(delta<-4)setMinimized(false);if(Math.abs(delta)>4||y<threshold)last=y};const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};window.addEventListener("scroll",onScroll,{passive:true});return()=>{window.removeEventListener("scroll",onScroll);cancelAnimationFrame(raf)}},[threshold]);return[minimized,setMinimized]}const clamp=(v,min,max)=>Math.min(max,Math.max(min,v));const smooth=t=>t*t*(3-2*t);const FACE={x:0.51,y:0.125};const DIVE_ZOOM=22;const DIVE_LENGTH=1.5;const NEXT_AT=0.66;const LIGHT_LENGTH=0.9;function useOpeningScene(refs,enabled){useEffect(()=>{const heroPin=refs.heroPin.current;const hero=refs.hero.current;const visual=refs.visual.current;const statue=refs.statue.current;const introPin=refs.introPin.current;const intro=refs.intro.current;if(!heroPin||!hero||!visual||!statue||!introPin||!intro)return undefined;const words=[...intro.querySelectorAll(".intro__word:not(.intro__word--gold)")];let lit=-1;const setLit=k=>{if(k===lit)return;lit=k;words.forEach((w,i)=>w.classList.toggle("is-lit",i<k))};const vars=["--zt","--veil","--bloom","--float"];const reset=()=>{heroPin.classList.remove("is-cinematic");introPin.classList.remove("is-cinematic");hero.classList.remove("hero--diving","hero--deep","hero--black");[heroPin,introPin].forEach(el=>{el.style.height="";el.style.marginBottom=""});[hero,intro].forEach(el=>el.style.top="");visual.style.transform="";visual.style.transformOrigin="";vars.forEach(v=>hero.style.removeProperty(v));intro.style.removeProperty("--e")};if(!enabled){reset();setLit(words.length);return undefined}heroPin.classList.add("is-cinematic");introPin.classList.add("is-cinematic");let V=window.innerHeight;let W=document.documentElement.clientWidth;let m=null;let raf=0;const update=()=>{raf=0;if(!m)return;const y=window.scrollY;const z=clamp((y-m.heroStart)/m.D,0,1);const zt=clamp(z/0.3,0,1);const scale=Math.pow(DIVE_ZOOM,Math.pow(z,1.6));const pull=smooth(clamp(z/0.55,0,1));const tx=(W/2-m.faceX)*pull;const ty=(V/2-m.faceY)*pull;visual.style.transform=z>0?`translate3d(${tx.toFixed(1)}px, ${ty.toFixed(1)}px, 0) scale(${scale.toFixed(4)})`:"";hero.style.setProperty("--zt",zt.toFixed(4));hero.style.setProperty("--float",(1-smooth(clamp(z/0.18,0,1))).toFixed(4));hero.style.setProperty("--veil",smooth(clamp((z-0.76)/0.22,0,1)).toFixed(4));hero.style.setProperty("--bloom",(smooth(clamp((z-0.5)/0.3,0,1))*(1-smooth(clamp((z-0.84)/0.14,0,1)))).toFixed(4));hero.classList.toggle("hero--diving",zt>0.5);hero.classList.toggle("hero--deep",zt>=1);hero.classList.toggle("hero--black",z>=0.995);const e=clamp((y-m.introStart)/m.E,0,1);intro.style.setProperty("--e",e.toFixed(4));const l=clamp((y-m.introStart-m.E)/m.L,0,1);setLit(Math.min(words.length,Math.floor(l*(words.length+1))))};const layout=()=>{const H=hero.offsetHeight;const h=intro.offsetHeight;const D=Math.round(V*DIVE_LENGTH);const E=Math.round(D*(1-NEXT_AT));const L=Math.round(V*LIGHT_LENGTH);const heroTop=Math.min(0,V-H);const introTop=Math.round((V-h)/2);heroPin.style.height=`${H+D}px`;hero.style.top=`${heroTop}px`;heroPin.style.marginBottom=`${-heroTop+NEXT_AT*D+introTop-H-D}px`;introPin.style.height=`${h+E+L}px`;intro.style.top=`${introTop}px`;const ox=statue.offsetLeft+FACE.x*statue.offsetWidth;const oy=statue.offsetTop+FACE.y*statue.offsetHeight;visual.style.transformOrigin=`${ox.toFixed(1)}px ${oy.toFixed(1)}px`;const sy=window.scrollY;m={D,E,L,heroStart:heroPin.getBoundingClientRect().top+sy-heroTop,introStart:introPin.getBoundingClientRect().top+sy-introTop,faceX:hero.getBoundingClientRect().left+visual.offsetLeft+ox,faceY:heroTop+visual.offsetTop+oy};update()};const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};const onResize=()=>{const nV=window.innerHeight;const nW=document.documentElement.clientWidth;if(m&&nW===W&&Math.abs(nV-V)<120)return;V=nV;W=nW;layout()};const ro=new ResizeObserver(()=>layout());ro.observe(hero);ro.observe(intro);layout();window.addEventListener("scroll",onScroll,{passive:true});window.addEventListener("resize",onResize);return()=>{ro.disconnect();window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onResize);cancelAnimationFrame(raf);reset()}},[refs,enabled])}function useScrollScene(enabled){useEffect(()=>{const root=document.documentElement;const revealEls=[...document.querySelectorAll("[data-reveal]")];const scrollEls=[...document.querySelectorAll("[data-scroll]")];if(!enabled||!("IntersectionObserver"in window)){revealEls.forEach(el=>el.classList.add("is-revealed"));scrollEls.forEach(el=>{el.style.setProperty("--enter","1");el.style.setProperty("--ease","1")});root.style.setProperty("--page","0");return undefined}const io=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add("is-revealed");io.unobserve(entry.target)}}),{rootMargin:"0px 0px -10% 0px",threshold:0.05});revealEls.forEach(el=>io.observe(el));let raf=0;const update=()=>{raf=0;const vh=window.innerHeight;const max=root.scrollHeight-vh;root.style.setProperty("--page",(max>0?window.scrollY/max:0).toFixed(4));for(const el of scrollEls){const start=Number(el.dataset.scrollStart||1);const span=Number(el.dataset.scrollSpan||0.6);const top=el.getBoundingClientRect().top;const enter=Math.min(1,Math.max(0,(vh*start-top)/(vh*span)));el.style.setProperty("--enter",enter.toFixed(4));el.style.setProperty("--ease",(1-Math.pow(1-enter,3)).toFixed(4))}};const onScroll=()=>{if(!raf)raf=requestAnimationFrame(update)};update();window.addEventListener("scroll",onScroll,{passive:true});window.addEventListener("resize",onScroll);return()=>{io.disconnect();window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);cancelAnimationFrame(raf)}},[enabled])}function SectionLabel({children}){return React.createElement("p",{className:"section-label","data-reveal":""},children)}function Stars({size="lg"}){return React.createElement("span",{className:`stars stars--${size}`,role:"img","aria-label":"Rated 5 out of 5"},[0,1,2,3,4].map(i=>React.createElement("svg",{key:i,className:"stars__star",viewBox:"0 0 24 24","aria-hidden":"true",focusable:"false"},React.createElement("path",{d:"M12 2.5l2.94 6.24 6.81.82-5.02 4.66 1.31 6.73L12 17.6l-6.04 3.35 1.31-6.73L2.25 9.56l6.81-.82z"}))))}function ArrowIcon(){return React.createElement("svg",{className:"arrow-icon",viewBox:"0 0 28 16","aria-hidden":"true",focusable:"false"},React.createElement("path",{d:"M0 8h26M19.5 1.5L26 8l-6.5 6.5",fill:"none",stroke:"currentColor",strokeWidth:"1.4"}))}function Header(){const[open,setOpen]=useState(false);const[minimized,setMinimized]=useScrollMinimize(140);const collapsed=minimized&&!open;const menuId=useId();useEffect(()=>{const mq=window.matchMedia("(min-width: 1025px)");const onChange=e=>e.matches&&setOpen(false);mq.addEventListener("change",onChange);return()=>mq.removeEventListener("change",onChange)},[]);useEffect(()=>{if(!open)return undefined;const onKey=e=>e.key==="Escape"&&setOpen(false);document.addEventListener("keydown",onKey);return()=>document.removeEventListener("keydown",onKey)},[open]);return React.createElement("header",{className:`header${open?" header--open":""}${collapsed?" header--min":""}`},React.createElement("a",{className:"header__logo",href:"#home","aria-label":"Fiducia Solicitors home",tabIndex:collapsed?-1:undefined},React.createElement("img",{className:"header__logo-img",src:logoImg,alt:"",width:"99",height:"98"})),React.createElement("nav",{className:"nav crystal glow glow--soft glow--gold","aria-label":"Primary"},React.createElement("div",{className:"nav__clip"},React.createElement("ul",{className:"nav__list","aria-hidden":collapsed||undefined},NAV_LINKS.map((link,i)=>React.createElement("li",{className:"nav__item",key:link.id},React.createElement("a",{className:"nav__link",href:link.href,tabIndex:collapsed?-1:undefined,"aria-current":i===0?"page":undefined},link.label))))),React.createElement("button",{type:"button",className:"nav__expand","aria-label":"Show navigation","aria-hidden":!collapsed,tabIndex:collapsed?0:-1,onClick:()=>setMinimized(false)},React.createElement("span",{className:"nav__expand-bar"}),React.createElement("span",{className:"nav__expand-bar"}),React.createElement("span",{className:"nav__expand-bar"}))),React.createElement("button",{type:"button",className:"header__toggle crystal glow glow--soft glow--gold","aria-expanded":open,"aria-controls":menuId,"aria-label":open?"Close menu":"Open menu",onClick:()=>setOpen(v=>!v)},React.createElement("span",{className:"header__toggle-bar"}),React.createElement("span",{className:"header__toggle-bar"}),React.createElement("span",{className:"header__toggle-bar"})),React.createElement("div",{className:"mobile-menu crystal",id:menuId,"aria-hidden":!open},React.createElement("ul",{className:"mobile-menu__list"},NAV_LINKS.map((link,i)=>React.createElement("li",{key:link.id},React.createElement("a",{className:"mobile-menu__link",href:link.href,tabIndex:open?0:-1,"aria-current":i===0?"page":undefined,onClick:()=>setOpen(false)},link.label))))))}function Hero({heroRef,visualRef,statueRef}){return React.createElement("section",{className:"hero",id:"home","aria-labelledby":"hero-title",ref:heroRef},React.createElement("h1",{className:"hero__title",id:"hero-title"},React.createElement("span",{className:"hero__title-line"},"YOUR LEGAL PARTNER IN"),React.createElement("span",{className:"hero__title-line"},"EVERY SITUATION")),React.createElement("p",{className:"hero__subtitle"},React.createElement("span",{className:"hero__subtitle-line"},"Specialist Legal Solutions For Tax Strategy, Property, Investment And Digital Assets."),React.createElement("span",{className:"hero__subtitle-line"},"Guiding You Through Complexity With Confidence.")),React.createElement("a",{className:"cta glow glow--line",href:"#contact"},React.createElement("span",{className:"cta__label"},"Book a Free Consultation"),React.createElement("span",{className:"cta__icon","aria-hidden":"true"},React.createElement("img",{className:"cta__arrow",src:arrowRightImg,alt:"",width:"41",height:"41"}))),React.createElement("div",{className:"hero__visual",ref:visualRef},React.createElement("div",{className:"hero__word","aria-hidden":"true"},React.createElement("span",{className:"hero__word-text"},"LAWYER")),React.createElement("img",{ref:statueRef,className:"hero__statue statue",src:heroStatueImg,alt:"Golden Lady Justice statue holding scales and a sword",width:"429",height:"644",fetchPriority:"high"})),React.createElement("div",{className:"hero__veil","aria-hidden":"true"}))}const INTRO_LINES=[{highlight:"At Fiducia,",text:"We Deliver Considered Legal Solutions For Private Clients, Investors And Businesses. With A Focused Approach, We Help Protect Your Interests, Navigate Complexity And"},{highlight:"",text:"Move Forward Confidently."}];function Intro({introRef}){let index=0;const word=(w,gold)=>{const i=index++;return React.createElement("span",{key:i,className:`intro__word${gold?" intro__word--gold":""}`},w," ")};return React.createElement("section",{className:"intro","aria-label":"Introduction",ref:introRef},React.createElement("div",{className:"intro__inner"},INTRO_LINES.map((line,li)=>React.createElement("p",{className:"intro__text",key:li},line.highlight&&line.highlight.split(" ").map(w=>word(w,true)),line.text.split(" ").map(w=>word(w,false))))))}function OpeningScene(){const reduced=usePrefersReducedMotion();const heroPin=useRef(null);const hero=useRef(null);const visual=useRef(null);const statue=useRef(null);const introPin=useRef(null);const intro=useRef(null);const refs=useRef({heroPin,hero,visual,statue,introPin,intro}).current;useOpeningScene(refs,!reduced);return React.createElement(React.Fragment,null,React.createElement("div",{className:"hero-pin",ref:heroPin},React.createElement(Hero,{heroRef:hero,visualRef:visual,statueRef:statue})),React.createElement("div",{className:"intro-pin",ref:introPin},React.createElement(Intro,{introRef:intro})))}function CountUp({value}){const[ref,inView]=useInView({threshold:0.5});const numRef=useRef(null);const reduced=usePrefersReducedMotion();const match=value.match(/^([\d,.]+)(.*)$/);const target=match?Number(match[1].replace(/,/g,"")):0;const suffix=match?match[2]:"";const format=n=>n.toLocaleString("en-US");useEffect(()=>{if(!inView||!numRef.current)return undefined;if(reduced){numRef.current.textContent=format(target)+suffix;return undefined}const duration=2200;const start=performance.now();let raf=0;const tick=now=>{const t=Math.min(1,(now-start)/duration);const eased=t===1?1:1-Math.pow(2,-10*t);numRef.current.textContent=format(Math.round(target*eased))+suffix;if(t<1)raf=requestAnimationFrame(tick)};raf=requestAnimationFrame(tick);return()=>cancelAnimationFrame(raf)},[inView,reduced]);return React.createElement("span",{ref:ref,className:"count",role:"text","aria-label":value},React.createElement("span",{ref:numRef,"aria-hidden":"true"},`0${suffix}`))}function Stats(){return React.createElement("section",{className:"stats","aria-label":"Firm in numbers"},React.createElement("ul",{className:"stats__list"},STATS.map((stat,i)=>React.createElement("li",{className:"stats__item",key:stat.id,style:{"--x":stat.x,"--d":`${i*90}ms`},"data-reveal":""},React.createElement("span",{className:"stats__value"},React.createElement(CountUp,{value:stat.value})),React.createElement("span",{className:"stats__label"},stat.label)))),STAT_DIVIDERS.map(x=>React.createElement("span",{className:"stats__divider",key:x,style:{"--x":x},"aria-hidden":"true","data-reveal":"line"})))}function About(){return React.createElement("section",{className:"about container",id:"about","aria-labelledby":"about-title"},React.createElement(SectionLabel,null,"ABOUT THE FIRM"),React.createElement("div",{className:"about__grid"},React.createElement("h2",{className:"about__title heading-mixed",id:"about-title","data-reveal":""},React.createElement("span",{className:"t-sans"},"A Boutique Firm For")," ",React.createElement("br",null),React.createElement("span",{className:"t-display"},"High-Value")," ",React.createElement("br",null),React.createElement("span",{className:"t-sans"},"Legal Matters.")),React.createElement("div",{className:"about__body"},React.createElement("p",{className:"about__lead","data-reveal":"",style:{"--d":"80ms"}},"Complex financial matters deserve legal"," ",React.createElement("br",null),"advice that sees the bigger picture."),React.createElement("p",{className:"about__text","data-reveal":"",style:{"--d":"160ms"}},"Fiducia Solicitors is a boutique practice concentrating on legal issues"," ",React.createElement("br",null),"connected to finance, property and digital assets. We help clients make"," ",React.createElement("br",null),"informed choices in situations where the details truly matter."),React.createElement("p",{className:"about__text","data-reveal":"",style:{"--d":"240ms"}},"From protecting wealth to navigating disputes and regulation, our approach combines thoughtful strategy with straightforward, practical counsel.")),React.createElement("a",{className:"about__link",href:"#services","data-reveal":""},"Explore our expertise ↗"),React.createElement("ul",{className:"about__pills","aria-label":"Who we work with"},AUDIENCES.map((a,i)=>React.createElement("li",{className:"pill edge",key:a,"data-reveal":"",style:{"--d":`${i*90}ms`}},a)))))}const SIDE_SCALE=400/550;const STEP_1=587/550;const STEP_N=512/550;const START_INDEX=1;function PracticeCarousel(){const n=PRACTICE_AREAS.length;const pinRef=useRef(null);const stickyRef=useRef(null);const cardRefs=useRef([]);const[flipped,setFlipped]=useState(()=>PRACTICE_AREAS.map(()=>false));const layout=useCallback(c=>{cardRefs.current.forEach((el,i)=>{if(!el)return;const o=((i-c+n/2)%n+n)%n-n/2;const a=Math.abs(o);const x=Math.sign(o)*(a<=1?a*STEP_1:STEP_1+(a-1)*STEP_N);el.style.setProperty("--x",x.toFixed(4));el.style.setProperty("--s",(1-Math.min(a,1)*(1-SIDE_SCALE)).toFixed(4));el.style.setProperty("--ry",`${clamp(-o*16,-24,24).toFixed(2)}deg`);el.style.setProperty("--fade",clamp((2-a)/0.6,0,1).toFixed(3));el.style.zIndex=String(100-Math.round(a*10));el.classList.toggle("carousel__card--active",a<0.5)})},[n]);useLayoutEffect(()=>layout(START_INDEX),[layout]);useEffect(()=>{const pin=pinRef.current;const sticky=stickyRef.current;let target=START_INDEX;let current=START_INDEX;let raf=0;const read=()=>{const top=parseFloat(getComputedStyle(sticky).top)||0;const distance=Math.max(1,pin.offsetHeight-sticky.offsetHeight);const progress=clamp((top-pin.getBoundingClientRect().top)/distance,0,1);const t=progress*(n-1);const k=Math.min(n-2,Math.floor(t));const f=clamp((t-k-0.2)/0.6,0,1);target=START_INDEX+k+f*f*(3-2*f)};const tick=()=>{current+=(target-current)*0.16;if(Math.abs(target-current)<0.0005)current=target;layout(current);raf=current===target?0:requestAnimationFrame(tick)};const onScroll=()=>{read();if(!raf)raf=requestAnimationFrame(tick)};onScroll();window.addEventListener("scroll",onScroll,{passive:true});window.addEventListener("resize",onScroll);return()=>{window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);cancelAnimationFrame(raf)}},[layout,n]);const tiltRaf=useRef(0);const onPointerMove=e=>{if(e.pointerType==="touch")return;const el=e.currentTarget;const r=el.getBoundingClientRect();const px=(e.clientX-r.left)/r.width-0.5;const py=(e.clientY-r.top)/r.height-0.5;cancelAnimationFrame(tiltRaf.current);tiltRaf.current=requestAnimationFrame(()=>{el.style.setProperty("--tx",`${(-py*10).toFixed(2)}deg`);el.style.setProperty("--ty",`${(px*12).toFixed(2)}deg`);el.style.setProperty("--gx",`${((px+0.5)*100).toFixed(1)}%`);el.style.setProperty("--gy",`${((py+0.5)*100).toFixed(1)}%`)})};const onPointerLeave=e=>{cancelAnimationFrame(tiltRaf.current);e.currentTarget.style.setProperty("--tx","0deg");e.currentTarget.style.setProperty("--ty","0deg")};const onFocus=i=>e=>{if(!e.currentTarget.matches(":focus-visible"))return;const pin=pinRef.current;const sticky=stickyRef.current;const distance=pin.offsetHeight-sticky.offsetHeight;const step=((i-START_INDEX)%n+n)%n;const top=parseFloat(getComputedStyle(sticky).top)||0;const y=pin.getBoundingClientRect().top+window.scrollY-top+step/(n-1)*distance;window.scrollTo({top:y,behavior:"smooth"})};const toggle=i=>setFlipped(f=>f.map((v,j)=>j===i?!v:v));return React.createElement("div",{className:"carousel",role:"region","aria-roledescription":"carousel","aria-label":"Practice areas"},React.createElement("div",{className:"carousel__pin",ref:pinRef},React.createElement("div",{className:"carousel__track",ref:stickyRef},PRACTICE_AREAS.map((card,i)=>React.createElement("article",{key:card.id,className:"carousel__card",ref:el=>cardRefs.current[i]=el,style:{"--ratio":card.ratio},"aria-roledescription":"slide","aria-label":`${i+1} of ${n}: ${card.title}`},React.createElement("button",{type:"button",className:`carousel__tilt${flipped[i]?" carousel__tilt--flipped":""}`,"aria-pressed":flipped[i],"aria-label":`${card.title}. ${card.text} ${flipped[i]?"Showing image only; press to show details.":"Press to show image only."}`,onClick:()=>toggle(i),onFocus:onFocus(i),onPointerMove:onPointerMove,onPointerLeave:onPointerLeave},React.createElement("span",{className:"carousel__flipper"},React.createElement("span",{className:"carousel__face carousel__face--front"},React.createElement("img",{className:"carousel__image",src:card.image,alt:"",draggable:"false",loading:i===1?"eager":"lazy"}),React.createElement("span",{className:"carousel__shine","aria-hidden":"true"})),React.createElement("span",{className:"carousel__face carousel__face--back","aria-hidden":"true"},React.createElement("img",{className:"carousel__back-image",src:card.image,alt:"",draggable:"false",loading:"lazy"})))))))))}function Practice(){return React.createElement("section",{className:"practice",id:"services","aria-labelledby":"practice-title"},React.createElement("div",{className:"container"},React.createElement(SectionLabel,null,"PRACTICE AREAS"),React.createElement("div",{className:"practice__head"},React.createElement("h2",{className:"practice__title heading-mixed",id:"practice-title","data-reveal":""},React.createElement("span",{className:"t-sans"},"How "),React.createElement("span",{className:"t-display"},"We Can"),React.createElement("span",{className:"t-sans"}," Help"),React.createElement("span",{className:"t-display t-display--55"},".")),React.createElement("div",{className:"practice__aside"},React.createElement("p",{className:"practice__tag","data-reveal":""},"TAILORED LEGAL GUIDANCE"),React.createElement("p",{className:"practice__desc","data-reveal":"",style:{"--d":"100ms"}},"Specialized counsel for the legal questions shaping your assets, property, transactions and future.")))),React.createElement(PracticeCarousel,null))}function WhyCard({item,index,visible}){return React.createElement("article",{className:`why-card outline-glow${visible?" why-card--visible":""}`,style:{"--i":index}},React.createElement("span",{className:"why-card__icon","aria-hidden":"true"},React.createElement("img",{className:"why-card__icon-img",src:item.icon,alt:"",width:"50",height:"50"})),React.createElement("h3",{className:"why-card__title"},item.title.map((line,i)=>React.createElement("span",{className:"why-card__title-line",key:i},line))))}function WhyChooseUs(){const[gridRef,visible]=useInView({threshold:0.2});return React.createElement("section",{className:"why container",id:"why-us","aria-labelledby":"why-title"},React.createElement(SectionLabel,null,"WHY CHOOSE US"),React.createElement("h2",{className:"why__title heading-mixed",id:"why-title","data-reveal":""},React.createElement("span",{className:"t-display"},"Built"),React.createElement("span",{className:"t-sans t-sans--48"}," on Trust")),React.createElement("p",{className:"why__sub","data-reveal":"",style:{"--d":"100ms"}},"Specialist thinking, thoughtful service and clarity when it matters most."),React.createElement("div",{className:"why__grid",ref:gridRef},WHY_ITEMS.map((item,i)=>React.createElement(WhyCard,{key:item.id,item:item,index:i,visible:visible}))))}const MARQUEE_SETS=[0,1,2];function TestimonialPhone({t,index,clone}){return React.createElement("div",{className:"phone-slot","aria-hidden":clone||undefined,"data-clone":clone?"":undefined},React.createElement("article",{className:"phone","aria-label":`Review from ${t.author}`,style:{"--phase":index}},React.createElement("span",{className:"phone__button phone__button--action","aria-hidden":"true"}),React.createElement("span",{className:"phone__button phone__button--vol-up","aria-hidden":"true"}),React.createElement("span",{className:"phone__button phone__button--vol-down","aria-hidden":"true"}),React.createElement("span",{className:"phone__button phone__button--power","aria-hidden":"true"}),React.createElement("div",{className:"phone__screen"},React.createElement("span",{className:"phone__island","aria-hidden":"true"}),React.createElement("span",{className:"phone__watermark","aria-hidden":"true"},"Fiducia"),React.createElement("div",{className:"phone__card"},React.createElement("p",{className:"phone__eyebrow"},"Client"),React.createElement("h3",{className:"phone__heading"},"Feedback"),React.createElement("div",{className:"phone__stars"},React.createElement(Stars,{size:"lg"})),React.createElement("div",{className:"phone__reviewer"},React.createElement("span",{className:"phone__avatar","aria-hidden":"true"},t.initial),React.createElement("p",{className:"phone__name"},t.name),React.createElement("p",{className:"phone__meta"},t.reviews)),React.createElement("div",{className:"phone__rating"},React.createElement(Stars,{size:"sm"}),React.createElement("span",{className:"phone__meta phone__meta--when"},t.when)),React.createElement("blockquote",{className:"phone__quote"},React.createElement("p",null,t.quote.map((line,i)=>React.createElement("span",{className:"phone__quote-line",key:i},line))),React.createElement("footer",{className:"phone__cite"},React.createElement("strong",{className:"phone__author"},t.author),React.createElement("span",{className:"phone__role"},t.role)))))))}function Testimonials(){return React.createElement("section",{className:"testimonials",id:"testimonials","aria-labelledby":"testimonials-title"},React.createElement("div",{className:"container"},React.createElement(SectionLabel,null,"CLIENT TESTIMONIALS"),React.createElement("h2",{className:"testimonials__title heading-mixed",id:"testimonials-title","data-reveal":""},React.createElement("span",{className:"t-display"},"What "),React.createElement("span",{className:"t-sans t-sans--48"},"Our Clients Say."))),React.createElement("div",{className:"testimonials__list","data-reveal":""},React.createElement("div",{className:"testimonials__rail"},MARQUEE_SETS.map(set=>TESTIMONIALS.map((t,i)=>React.createElement(TestimonialPhone,{key:`${set}-${t.id}`,t:t,index:i,clone:set>0}))))))}function Field({id,label,className="",children}){return React.createElement("div",{className:`field glass ${className}`},React.createElement("label",{className:"visually-hidden",htmlFor:id},label),children)}const WHATSAPP_NUMBER="+447480205583";function buildInquiryMessage(data){const get=key=>String(data.get(key)??"").trim();const phone=[get("dialCode"),get("phone")].filter(Boolean).join(" ");const lines=["*New inquiry from the Fiducia Solicitors website*","",`*Name:* ${get("name")}`,`*Email:* ${get("email")}`];if(phone)lines.push(`*Phone:* ${phone}`);if(get("country"))lines.push(`*Country:* ${get("country")}`);lines.push("","*Message:*",get("message"));return lines.join("\n")}function ContactForm(){const uid=useId();const f=name=>`${uid}-${name}`;const[status,setStatus]=useState("");const handleSubmit=e=>{e.preventDefault();const text=buildInquiryMessage(new FormData(e.currentTarget));const url=`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;const win=window.open(url,"_blank");if(win)win.opener=null;else window.location.href=url;setStatus("Opening WhatsApp with your inquiry…")};return React.createElement("div",{className:"contact__content"},React.createElement("p",{className:"contact__eyebrow"},"GET IN TOUCH"),React.createElement("h2",{className:"contact__title",id:"contact-title"},"Speak With a Legal"," ",React.createElement("br",null),"Expert (Free)"),React.createElement("form",{className:"contact__form",onSubmit:handleSubmit,noValidate:false},React.createElement(Field,{id:f("name"),label:"Full Name",className:"field--name"},React.createElement("input",{className:"field__input",id:f("name"),name:"name",type:"text",placeholder:"Full Name",autoComplete:"name",required:true})),React.createElement(Field,{id:f("email"),label:"Email Address",className:"field--email"},React.createElement("input",{className:"field__input",id:f("email"),name:"email",type:"email",placeholder:"Email Address",autoComplete:"email",required:true})),React.createElement("div",{className:"field glass field--phone"},React.createElement("div",{className:"field__code"},React.createElement("label",{className:"visually-hidden",htmlFor:f("code")},"Country dialling code"),React.createElement("select",{className:"field__select field__select--code",id:f("code"),name:"dialCode",defaultValue:""},React.createElement("option",{value:"",disabled:true},"Select Code"),DIAL_CODES.map(c=>React.createElement("option",{key:c,value:c},c))),React.createElement("img",{className:"field__chevron field__chevron--code",src:chevronImg,alt:"",width:"22",height:"22"})),React.createElement("label",{className:"visually-hidden",htmlFor:f("phone")},"Contact Number"),React.createElement("input",{className:"field__input field__input--phone",id:f("phone"),name:"phone",type:"tel",placeholder:"Contact Number",autoComplete:"tel-national"})),React.createElement(Field,{id:f("country"),label:"Country",className:"field--country"},React.createElement("select",{className:"field__select",id:f("country"),name:"country",defaultValue:""},React.createElement("option",{value:"",disabled:true},"Select your Country"),COUNTRIES.map(c=>React.createElement("option",{key:c,value:c},c))),React.createElement("img",{className:"field__chevron field__chevron--country",src:chevronImg,alt:"",width:"22",height:"22"})),React.createElement(Field,{id:f("message"),label:"Message",className:"field--message"},React.createElement("textarea",{className:"field__input field__textarea",id:f("message"),name:"message",placeholder:"Write your Message...",required:true})),React.createElement("button",{type:"submit",className:"submit glass"},React.createElement("span",{className:"submit__label"},"Send Inquiry"),React.createElement("span",{className:"submit__icon glass glow glow--gold","aria-hidden":"true"},React.createElement(ArrowIcon,null))),React.createElement("p",{className:"contact__status",role:"status","aria-live":"polite"},status)))}function Contact(){return React.createElement("section",{className:"contact",id:"contact","aria-labelledby":"contact-title","data-scroll":"","data-scroll-start":"1","data-scroll-span":"0.75"},React.createElement("div",{className:"contact__card"},React.createElement("div",{className:"contact__panel glass","aria-hidden":"true"}),React.createElement(ContactForm,null)),React.createElement("img",{className:"contact__statue statue statue--contact",src:contactStatueImg,alt:"",width:"797",height:"1230",loading:"lazy"}))}function Footer(){return React.createElement("footer",{className:"footer","data-scroll":"","data-scroll-start":"1","data-scroll-span":"0.75"},React.createElement("p",{className:"footer__word","aria-hidden":"true"},"FIDUCIA"),React.createElement("div",{className:"footer__panel"},React.createElement("div",{className:"footer__col footer__col--brand","data-reveal":""},React.createElement("p",{className:"footer__heading"},"Fiducia."),React.createElement("p",{className:"footer__text"},"Trusted solicitors providing expert legal guidance across all areas of law since 2000.")),React.createElement("nav",{className:"footer__col footer__col--links","aria-label":"Footer","data-reveal":"",style:{"--d":"100ms"}},React.createElement("p",{className:"footer__heading"},"Quick Links"),React.createElement("ul",{className:"footer__links"},React.createElement("li",null,React.createElement("a",{className:"footer__link",href:"#about"},"About Us.")),React.createElement("li",null,React.createElement("a",{className:"footer__link",href:"#services"},"Services.")),React.createElement("li",null,React.createElement("a",{className:"footer__link",href:"#why-us"},"Why us.")),React.createElement("li",null,React.createElement("a",{className:"footer__link",href:"#testimonials"},"Testimonials.")))),React.createElement("div",{className:"footer__col footer__col--reg","data-reveal":"",style:{"--d":"200ms"}},React.createElement("p",{className:"footer__heading"},"Regulated By"),React.createElement("p",{className:"footer__text"},"Fiducia Solicitors is authorised and regulated by the Solicitors Regulation Authority"," ",React.createElement("br",null),"(SRA No. 123456)."))),React.createElement("p",{className:"footer__copy"},"© 2026 Fiducia Solicitors. All rights reserved."))}const LOADER_MIN_MS=2000;const LOADER_MAX_MS=5000;const LOADER_EXIT_MS=1200;function heroImageReady(){const img=document.querySelector(".hero__statue");if(!img||img.complete&&img.naturalWidth)return Promise.resolve();const loaded=img.decode?img.decode():new Promise(r=>img.addEventListener("load",r,{once:true}));return loaded.catch(()=>{})}function Loader({onOpen}){const[phase,setPhase]=useState("loading");const logoRef=useRef(null);const reduced=usePrefersReducedMotion();const reducedRef=useRef(reduced);reducedRef.current=reduced;useEffect(()=>{const root=document.documentElement;root.classList.add("is-loading");if("scrollRestoration"in window.history)window.history.scrollRestoration="manual";if(!window.location.hash)window.scrollTo(0,0);let cancelled=false;const timers=[];const wait=ms=>new Promise(r=>timers.push(window.setTimeout(r,ms)));const finish=()=>{root.classList.remove("is-loading");setPhase("done")};Promise.race([Promise.all([wait(LOADER_MIN_MS),heroImageReady(),document.fonts?document.fonts.ready:null]),wait(LOADER_MAX_MS)]).then(()=>{if(cancelled)return;onOpen();if(reducedRef.current){finish();return}const box=logoRef.current;const target=document.querySelector(".header__logo");if(box&&target){const a=box.getBoundingClientRect();const b=target.getBoundingClientRect();box.style.setProperty("--to-x",`${(b.left+b.width/2-(a.left+a.width/2)).toFixed(1)}px`);box.style.setProperty("--to-y",`${(b.top+b.height/2-(a.top+a.height/2)).toFixed(1)}px`);box.style.setProperty("--to-s",(b.width/a.width).toFixed(4))}setPhase("opening");timers.push(window.setTimeout(()=>!cancelled&&finish(),LOADER_EXIT_MS))});return()=>{cancelled=true;timers.forEach(t=>window.clearTimeout(t));root.classList.remove("is-loading")}},[onOpen]);if(phase==="done")return null;return React.createElement("div",{className:`loader loader--${phase}`,role:"status","aria-label":"Loading Fiducia Solicitors"},React.createElement("div",{className:"loader__curtain loader__curtain--top","aria-hidden":"true"}),React.createElement("div",{className:"loader__curtain loader__curtain--bottom","aria-hidden":"true"}),React.createElement("div",{className:"loader__glow","aria-hidden":"true"}),React.createElement("div",{className:"loader__center","aria-hidden":"true"},React.createElement("div",{className:"loader__logo",ref:logoRef},React.createElement("div",{className:"loader__logo-inner"},React.createElement("img",{className:"loader__logo-img",src:logoImg,alt:""}),React.createElement("span",{className:"loader__shine",style:{"--logo":`url(${logoImg})`}}))),React.createElement("span",{className:"loader__bar"},React.createElement("span",{className:"loader__bar-fill"}))))}export default function App(){const reduced=usePrefersReducedMotion();const[ready,setReady]=useState(false);const handleOpen=useCallback(()=>setReady(true),[]);useSmoothScroll(!reduced);useScrollScene(!reduced);return React.createElement(React.Fragment,null,React.createElement("style",null,CSS),React.createElement(Loader,{onOpen:handleOpen}),React.createElement("div",{className:`site${ready?" is-ready":""}`},React.createElement("div",{className:"site__texture",style:{backgroundImage:`url(${pageTextureImg})`},"aria-hidden":"true"}),React.createElement("a",{className:"skip-link",href:"#main"},"Skip to content"),React.createElement("div",{className:"site__inner"},React.createElement(Header,null),React.createElement("main",{id:"main",tabIndex:-1,"aria-busy":!ready},React.createElement(OpeningScene,null),React.createElement(Stats,null),React.createElement(About,null),React.createElement(Practice,null),React.createElement(WhyChooseUs,null),React.createElement(Testimonials,null),React.createElement(Contact,null)),React.createElement(Footer,null))))}const CSS=`
@import url('https://fonts.googleapis.com/css2?family=Abhaya+Libre:wght@800&family=Anton&family=Montserrat:wght@200;300;400;500;600;700&display=swap');

/* Omega Sans is not on Google Fonts; Montserrat ExtraLight stands in until the font file is added. */
@font-face {
  font-family: 'Omega Sans';
  src: local('Omega Sans'), local('OmegaSans-Regular');
  /* With the font file in /public/fonts, add: url('/fonts/OmegaSans-Regular.woff2') format('woff2') */
  font-weight: 100 900;
  font-display: swap;
}

@property --glow-angle {
  syntax: '<angle>';
  inherits: false;
  initial-value: 0deg;
}

:root {
  /* Colour */
  --color-bg: #000000;
  --color-text: #ffffff;
  --color-gold: #f6ba23;
  --color-gold-watermark: rgba(246, 186, 35, 0.1);
  --color-gold-ring: #3c3012;
  --color-gold-disc: #634d16;
  --color-lawyer: #1b1b1b;
  --color-muted: #727272;
  --color-placeholder: rgba(255, 255, 255, 0.41);
  --color-divider: #ffffff;
  --color-glass: rgba(217, 217, 217, 0.01);
  --color-glass-warm: rgba(246, 187, 127, 0.01);
  --color-glass-control: rgba(217, 217, 217, 0.12);
  --color-card: #0f0f0f;
  --color-card-edge: rgba(255, 255, 255, 0.12);
  --color-edge-strong: rgba(255, 255, 255, 0.55);
  --color-edge-soft: rgba(255, 255, 255, 0.1);

  /* Type */
  --font-sans: 'Montserrat', system-ui, sans-serif;
  --font-serif: 'Abhaya Libre', Georgia, serif;
  --font-display: 'Omega Sans', 'Montserrat', system-ui, sans-serif;
  --font-impact: Impact, 'Anton', 'Haettenschweiler', 'Arial Narrow Bold', sans-serif;
  --fw-extralight: 200;
  --fw-light: 300;
  --fw-regular: 400;
  --fw-medium: 500;
  --fw-semibold: 600;
  --fw-bold: 700;
  --fw-extrabold: 800;
  --fs-hero: 80px;
  --fs-stat: 96px;
  --fs-display: 64px;
  --fs-h2: 55px;
  --fs-h2-sm: 48px;
  --fs-intro: 48px;
  --fs-footer-h: 40px;
  --fs-lead: 28px;
  --fs-label: 24px;
  --fs-body-lg: 20px;
  --fs-body: 16px;
  --fs-small: 13px;

  /* Layout */
  --page-max: 1440px;
  --gutter-l: 67px;
  --gutter-r: 71px;

  /* Radius */
  --radius-pill: 100px;
  --radius-card: 50px;
  --radius-phone-card: 41px;
  --radius-field: 10px;

  /* Shadow */
  --shadow-glass: 0 1px 2.1px 0 #555555;
  --shadow-field: 1px 1px 2.1px 0 #555555;
  --shadow-card: 11px 15px 20px #000000;
  --blur-glass: 37.717px;

  /* Motion */
  --dur-fast: 200ms;
  --dur-base: 400ms;
  --dur-glow: 6s;
  --ease-out: cubic-bezier(0.22, 1, 0.36, 1);
  --ease-standard: cubic-bezier(0.4, 0, 0.2, 1);
}

*, *::before, *::after { box-sizing: border-box; }
html { overflow-x: clip; }
[tabindex='-1']:focus { outline: none; }
body {
  margin: 0;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-sans);
  -webkit-font-smoothing: antialiased;
  overflow-x: clip;
}
img { display: block; max-width: 100%; }
h1, h2, h3, p, ul, blockquote { margin: 0; padding: 0; }
ul { list-style: none; }
a { color: inherit; }
button, input, select, textarea { font: inherit; color: inherit; }
:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 4px; }

.visually-hidden {
  position: absolute !important;
  width: 1px; height: 1px; padding: 0; margin: -1px;
  overflow: hidden; clip: rect(0 0 0 0); white-space: nowrap; border: 0;
}
.skip-link {
  position: absolute; left: 16px; top: -60px; z-index: 100;
  padding: 10px 16px; border-radius: var(--radius-field);
  background: var(--color-gold); color: #000; font-weight: var(--fw-bold); text-decoration: none;
  transition: top var(--dur-fast) var(--ease-standard);
}
.skip-link:focus { top: 16px; }

.heading-mixed { font-size: var(--fs-display); }
.heading-mixed > span { line-height: 0; }
.t-sans { font-family: var(--font-sans); font-weight: var(--fw-semibold); font-size: var(--fs-h2); }
.t-sans--48 { font-size: var(--fs-h2-sm); }
.t-display { font-family: var(--font-display); font-weight: var(--fw-extralight); font-size: var(--fs-display); }
.t-display--55 { font-size: var(--fs-h2); }

/* ---------- Site shell ---------- */
.site {
  position: relative;
  background: var(--color-bg);
  overflow-x: clip;
}
.site__texture {
  position: fixed; inset: 0;
  z-index: 0;
  background-color: #000;
  background-size: cover;
  background-position: center 30%;
  opacity: 0.03;
  transform: scale(calc(1.04 + var(--page, 0) * 0.14));
  transform-origin: 50% 40%;
  pointer-events: none;
  will-change: transform;
}
.site__inner {
  position: relative;
  z-index: 1;
  max-width: var(--page-max);
  margin: 0 auto;
}
.container { padding-left: var(--gutter-l); padding-right: var(--gutter-r); }

.section-label {
  font-weight: var(--fw-bold);
  font-size: var(--fs-label);
  line-height: normal;
}

/* ---------- Scroll reveal ---------- */
[data-reveal] {
  opacity: 0;
  translate: 0 32px;
  filter: blur(8px);
  transition:
    opacity 1s var(--ease-out) var(--d, 0ms),
    translate 1.1s var(--ease-out) var(--d, 0ms),
    filter 1s var(--ease-out) var(--d, 0ms);
}
[data-reveal].is-revealed { opacity: 1; translate: none; filter: none; }

/* ---------- Intro: word-by-word light-up ---------- */
.intro__word {
  color: var(--color-text);
  transition: color 500ms var(--ease-standard), text-shadow 500ms var(--ease-standard);
}
.intro__word.is-lit,
.intro__word--gold { color: var(--color-gold); }
.intro__word.is-lit { text-shadow: 0 0 18px rgba(246, 186, 35, 0.18); }

/* ---------- Hero load-in ---------- */
@keyframes hero-in {
  from { opacity: 0; translate: 0 36px; filter: blur(10px); }
  to { opacity: 1; translate: none; filter: none; }
}
/* Plays as the loading screen opens */
.is-ready .hero__title { animation: hero-in 1.2s var(--ease-out) 350ms backwards; }
.is-ready .hero__subtitle { animation: hero-in 1.2s var(--ease-out) 500ms backwards; }
.is-ready .cta { animation: hero-in 1.2s var(--ease-out) 650ms backwards; }
.is-ready .hero__visual { animation: hero-in 1.6s var(--ease-out) 450ms backwards; }
@keyframes header-in {
  from { opacity: 0; translate: 0 -14px; }
  to { opacity: 1; translate: none; }
}
.is-ready .nav, .is-ready .header__toggle { animation: header-in 1s var(--ease-out) 700ms backwards; }

/* ---------- Loading screen ---------- */
html.is-loading { overflow: hidden; }
html.is-loading .header__logo { visibility: hidden; } /* the loader's logo lands here, then hands over */
.loader {
  position: fixed; inset: 0; z-index: 1000;
  touch-action: none;
  overscroll-behavior: none;
}
.loader--opening { pointer-events: none; }
.loader__curtain {
  position: absolute; left: 0; right: 0; height: 50.5%;
  background: #030303;
  transition: transform 1050ms cubic-bezier(0.76, 0, 0.24, 1) 120ms;
}
.loader__curtain--top { top: 0; }
.loader__curtain--bottom { bottom: 0; }
/* a hairline of gold along the seam as the curtains part */
.loader__curtain::after {
  content: '';
  position: absolute; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(246, 186, 35, 0.55) 30%, rgba(255, 233, 170, 0.9) 50%, rgba(246, 186, 35, 0.55) 70%, transparent);
  opacity: 0;
  transition: opacity 300ms var(--ease-standard) 120ms;
}
.loader__curtain--top::after { bottom: 0; }
.loader__curtain--bottom::after { top: 0; }
.loader--opening .loader__curtain--top { transform: translate3d(0, -100%, 0); }
.loader--opening .loader__curtain--bottom { transform: translate3d(0, 100%, 0); }
.loader--opening .loader__curtain::after { opacity: 1; }

.loader__glow {
  position: absolute; inset: 0;
  background: radial-gradient(circle at 50% 50%, rgba(246, 186, 35, 0.09), transparent 34%);
  animation: loader-fade-in 1.4s var(--ease-out) both;
  transition: opacity 500ms var(--ease-standard);
}
.loader--opening .loader__glow { opacity: 0; }

.loader__center {
  position: absolute; inset: 0;
  display: flex; flex-direction: column; align-items: center; justify-content: center;
  gap: 34px;
}
.loader__logo {
  --to-x: 0px; --to-y: 0px; --to-s: 1;
  position: relative;
  width: 132px; aspect-ratio: 99 / 98; /* same box and crop as the header logo */
  overflow: hidden;
  border-radius: 10.7px;
  transition: transform 1100ms cubic-bezier(0.65, 0, 0.35, 1);
  will-change: transform;
}
.loader--opening .loader__logo { transform: translate3d(var(--to-x), var(--to-y), 0) scale(var(--to-s)); }
.loader__logo-inner {
  position: absolute; inset: 0;
  animation: loader-logo-in 1.1s var(--ease-out) 100ms both;
}
.loader__logo-img,
.loader__shine {
  position: absolute;
  max-width: none;
  width: 157.97%; height: 160.29%;
  left: -33.33%; top: -33.09%;
}
/* one light sweep across the gold, clipped to the logo's own shape */
.loader__shine {
  background: linear-gradient(110deg, transparent 38%, rgba(255, 248, 225, 0.85) 50%, transparent 62%) no-repeat;
  background-size: 260% 100%;
  background-position: 130% 0;
  -webkit-mask: var(--logo) center / 100% 100% no-repeat;
  mask: var(--logo) center / 100% 100% no-repeat;
  mix-blend-mode: soft-light;
  animation: loader-shine 1.3s cubic-bezier(0.45, 0, 0.2, 1) 750ms both;
}
.loader__bar {
  position: relative;
  width: 132px; height: 1px;
  background: rgba(246, 186, 35, 0.14);
  overflow: hidden;
  animation: loader-fade-in 800ms var(--ease-out) 300ms both;
  transition: opacity 250ms var(--ease-standard);
}
.loader__bar-fill {
  position: absolute; inset: 0;
  background: linear-gradient(90deg, rgba(246, 186, 35, 0.4), #f6ba23, #ffe9aa);
  transform-origin: left;
  animation: loader-progress 1.75s cubic-bezier(0.65, 0, 0.35, 1) 200ms both;
}
.loader--opening .loader__bar { opacity: 0; }
@keyframes loader-logo-in {
  from { opacity: 0; transform: scale(0.9); filter: blur(8px); }
  to { opacity: 1; transform: none; filter: none; }
}
@keyframes loader-shine {
  from { background-position: 130% 0; }
  to { background-position: -30% 0; }
}
@keyframes loader-progress {
  from { transform: scaleX(0); }
  to { transform: scaleX(1); }
}
@keyframes loader-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

/* ---------- Glass + edge utilities ---------- */
.glass {
  background: var(--color-glass);
  -webkit-backdrop-filter: blur(var(--blur-glass));
  backdrop-filter: blur(var(--blur-glass));
  box-shadow: var(--shadow-field);
}

.edge { position: relative; }
.edge::before {
  content: '';
  position: absolute; inset: 0;
  border-radius: inherit;
  padding: 1px;
  background: linear-gradient(100deg,
    var(--color-edge-strong) 0%, var(--color-edge-soft) 16%,
    var(--color-edge-soft) 84%, var(--color-edge-strong) 100%);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  pointer-events: none;
}

/* ---------- Animation 04: glowing buttons (rotating iridescent ring + warm halo) ---------- */
.glow { position: relative; isolation: isolate; }
.glow::before,
.glow::after {
  content: '';
  position: absolute; inset: -1px;
  border-radius: inherit;
  pointer-events: none;
  background: conic-gradient(from var(--glow-angle),
    rgba(255, 128, 32, 0.95) 0deg,
    #fff4d6 28deg, #ffffff 44deg, #8fdcff 66deg, #5a6cff 92deg,
    rgba(255, 255, 255, 0.14) 135deg,
    rgba(255, 110, 50, 0.6) 190deg, #ffd27a 228deg, #6fd3ff 268deg,
    rgba(150, 90, 255, 0.65) 305deg, rgba(255, 128, 32, 0.95) 360deg);
  animation: glow-spin var(--dur-glow) linear infinite;
}
.glow::before {
  padding: var(--glow-ring, 2px);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  opacity: 0.85;
  transition: opacity var(--dur-base) var(--ease-standard);
}
.glow::after {
  z-index: -1;
  inset: calc(-1 * var(--glow-spread, 18px));
  padding: var(--glow-spread, 18px);
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  filter: blur(var(--glow-blur, 9px));
  opacity: var(--glow-halo, 0.4);
  transition: opacity var(--dur-base) var(--ease-standard);
}
:is(a, button):hover .glow::before, .glow:is(button, a):hover::before,
:is(a, button):focus-visible .glow::before, .glow:is(button, a):focus-visible::before { opacity: 1; }
:is(a, button):hover .glow::after, .glow:is(button, a):hover::after,
:is(a, button):focus-visible .glow::after, .glow:is(button, a):focus-visible::after { opacity: 0.75; }
@keyframes glow-spin { to { --glow-angle: 360deg; } }

/* ---------- Animation 03 (interpretation): travelling card outline glow ---------- */
/* Gold palette (nav, inquiry button) */
.glow--gold::before,
.glow--gold::after {
  background: conic-gradient(from var(--glow-angle),
    rgba(246, 186, 35, 0.18) 0deg, #f6ba23 40deg, #fff1c4 70deg, #f6ba23 100deg,
    rgba(246, 186, 35, 0.18) 160deg, rgba(190, 128, 20, 0.45) 220deg, #ffd56a 280deg,
    rgba(246, 186, 35, 0.18) 330deg, rgba(246, 186, 35, 0.18) 360deg);
}
/* Border line only (CTA): a thin gold line with a light that travels round it, no halo */
.glow--line::before {
  padding: 1px;
  opacity: 1;
  background:
    conic-gradient(from var(--glow-angle),
      transparent 0deg, transparent 200deg, rgba(246, 186, 35, 0.4) 260deg,
      #f6ba23 310deg, #fff4cf 335deg, transparent 360deg),
    linear-gradient(rgba(246, 186, 35, 0.32), rgba(246, 186, 35, 0.32));
}
.glow--line::after { display: none; }
.glow--soft { --glow-ring: 1.5px; --glow-blur: 14px; --glow-halo: 0.32; --dur-glow: 8s; }
.glow--soft::before { opacity: 0.75; }
/* Tighter halo for the nav, the menu button and the Send Inquiry arrow */
.nav.glow, .header__toggle.glow { --glow-ring: 1px; --glow-spread: 6px; --glow-blur: 5px; --glow-halo: 0.5; }
.submit__icon.glow { --glow-ring: 1px; --glow-spread: 5px; --glow-blur: 4px; --glow-halo: 0.55; }

/* ---------- Crystal glass ---------- */
.crystal {
  background:
    linear-gradient(135deg, rgba(255, 255, 255, 0.16) 0%, rgba(255, 255, 255, 0.05) 32%,
      rgba(255, 255, 255, 0.015) 58%, rgba(255, 255, 255, 0.09) 100%),
    rgba(12, 12, 12, 0.28);
  -webkit-backdrop-filter: blur(18px) saturate(180%) brightness(1.08);
  backdrop-filter: blur(18px) saturate(180%) brightness(1.08);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.42),
    inset 0 -1px 0 rgba(255, 255, 255, 0.1),
    inset 0 0 22px rgba(255, 255, 255, 0.05),
    0 14px 40px rgba(0, 0, 0, 0.45);
}

/* ---------- Justice statues: continuous float + light hover glow ---------- */
.statue {
  animation: statue-float 6s ease-in-out infinite;
  transition: filter 600ms var(--ease-standard);
  will-change: transform;
}
.statue--contact { animation-duration: 7.5s; animation-delay: -2.5s; }
.statue:hover {
  filter: drop-shadow(0 0 10px rgba(246, 186, 35, 0.42)) drop-shadow(0 0 34px rgba(246, 186, 35, 0.18));
}
@keyframes statue-float {
  0%, 100% { transform: translate3d(0, 0, 0); }
  50% { transform: translate3d(0, calc(-14px * var(--float, 1)), 0); }
}

.outline-glow::before,
.outline-glow::after {
  content: '';
  position: absolute; inset: -1px;
  border-radius: inherit;
  pointer-events: none;
  background: conic-gradient(from var(--glow-angle),
    transparent 0deg, transparent 250deg,
    rgba(246, 186, 35, 0.15) 275deg, var(--color-gold) 320deg,
    #fff3c4 340deg, transparent 360deg);
  animation: glow-spin var(--dur-glow) linear infinite;
  opacity: 0;
  transition: opacity var(--dur-base) var(--ease-standard);
}
.outline-glow::before {
  padding: 1.5px;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
}
.outline-glow::after {
  inset: -10px; padding: 10px;
  -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
  -webkit-mask-composite: xor;
  mask: linear-gradient(#000 0 0) content-box exclude, linear-gradient(#000 0 0);
  filter: blur(6px); z-index: -1;
}
.outline-glow:hover::before { opacity: 1; }
.outline-glow:hover::after { opacity: 0.55; }

/* ---------- Header / nav ---------- */
.header {
  position: fixed; top: 0; left: 50%; z-index: 50;
  width: 100%; max-width: var(--page-max);
  height: 160px;
  transform: translateX(-50%);
  pointer-events: none;
}
.header > * { pointer-events: auto; }
.header__logo {
  position: absolute; left: 72px; top: 62px;
  width: 99px; height: 98px;
  overflow: hidden;
  border-radius: 8px;
  transition: opacity 450ms var(--ease-out) 150ms, transform 600ms var(--ease-out) 100ms, visibility 0s;
}
.header--min .header__logo {
  opacity: 0; visibility: hidden;
  transform: translateY(-10px) scale(0.85);
  transition: opacity 300ms var(--ease-standard), transform 450ms var(--ease-out), visibility 0s linear 300ms;
}
.header__logo-img {
  position: absolute;
  max-width: none;
  width: 157.97%; height: 160.29%;
  left: -33.33%; top: -33.09%;
}

.nav {
  --nav-w: 1092px;
  position: absolute; right: 69px; top: 67px;
  width: var(--nav-w); height: 87px;
  border-radius: var(--radius-pill);
  transition: width 700ms var(--ease-out);
}
.header--min .nav { width: 87px; transition-delay: 160ms; }
.nav__clip {
  position: absolute; inset: 0;
  border-radius: inherit;
  overflow: hidden;
}
.nav__list {
  position: absolute; right: 0; top: 0;
  width: var(--nav-w); height: 100%;
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 52px 0 157px;
  transition: opacity 350ms var(--ease-standard) 380ms, transform 600ms var(--ease-out) 300ms, visibility 0s;
}
.header--min .nav__list {
  opacity: 0; visibility: hidden;
  transform: translateX(24px);
  transition: opacity 180ms var(--ease-standard), transform 300ms var(--ease-standard), visibility 0s linear 180ms;
}
.nav__expand {
  position: absolute; right: 0; top: 0;
  width: 87px; height: 87px;
  padding: 0; border: 0;
  border-radius: 50%;
  background: transparent;
  display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 6px;
  cursor: pointer;
  opacity: 0; visibility: hidden;
  transform: scale(0.6) rotate(-90deg);
  transition: opacity 200ms var(--ease-standard), transform 300ms var(--ease-standard), visibility 0s linear 200ms;
}
.header--min .nav__expand {
  opacity: 1; visibility: visible; transform: none;
  transition: opacity 350ms var(--ease-out) 600ms, transform 500ms var(--ease-out) 600ms, visibility 0s;
}
.nav__expand-bar { width: 26px; height: 2px; border-radius: 2px; background: var(--color-text); }
.nav__expand-bar:nth-child(2) { width: 18px; background: var(--color-gold); }
.nav__link {
  position: relative;
  display: block;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-label);
  line-height: normal;
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-standard);
}
.nav__link:hover { color: var(--color-gold); }

.header__toggle {
  display: none;
  position: absolute; right: 24px; top: 28px;
  width: 56px; height: 56px;
  border-radius: 50%;
  border: 0;
  cursor: pointer;
  align-items: center; justify-content: center; flex-direction: column; gap: 6px;
}
.header__toggle-bar {
  display: block; width: 22px; height: 2px; border-radius: 2px;
  background: var(--color-text);
  transition: transform var(--dur-base) var(--ease-out), opacity var(--dur-fast) var(--ease-standard);
}
.header--open .header__toggle-bar:nth-child(1) { transform: translateY(8px) rotate(45deg); }
.header--open .header__toggle-bar:nth-child(2) { opacity: 0; }
.header--open .header__toggle-bar:nth-child(3) { transform: translateY(-8px) rotate(-45deg); }

.mobile-menu {
  display: none;
  position: absolute; left: 24px; right: 24px; top: 100px;
  border-radius: 28px;
  background-color: rgba(8, 8, 8, 0.7);
  opacity: 0; visibility: hidden;
  transform: translateY(-12px) scale(0.98);
  transform-origin: top right;
  transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), visibility 0s linear var(--dur-base);
}
.header--open .mobile-menu {
  opacity: 1; visibility: visible; transform: none;
  transition: opacity var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), visibility 0s;
}
.mobile-menu__list { padding: 12px; }
.mobile-menu__link {
  display: block; padding: 14px 18px; border-radius: 16px;
  font-weight: var(--fw-semibold); font-size: 18px; text-decoration: none;
}
.mobile-menu__link:hover { background: rgba(255, 255, 255, 0.05); }

/* ---------- Hero ---------- */
.hero {
  --statue-w: 429px;
  --zt: 0;
  --veil: 0;
  --bloom: 0;
  position: relative;
  display: flex; flex-direction: column; align-items: center;
  padding-top: 209.5px;
  text-align: center;
}
.hero__title,
.hero__subtitle,
.cta {
  position: relative;
  z-index: 2;
}
.hero__title {
  font-family: var(--font-serif);
  font-weight: var(--fw-extrabold);
  font-size: var(--fs-hero);
  line-height: 67px;
  white-space: nowrap;
}
.hero__title-line { display: block; }
.hero__title-line:first-child { transform: translateX(0.5px); }
.hero__subtitle {
  margin-top: 27.5px;
  font-size: var(--fs-body-lg);
  font-weight: var(--fw-regular);
  line-height: 24px;
}
.hero__subtitle-line { display: block; }

.cta {
  position: relative;
  left: -18.5px;
  isolation: isolate;
  margin-top: 49px;
  display: flex; align-items: center;
  width: 506px; height: 87px;
  padding-left: 26px;
  border-radius: var(--radius-pill);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.015), rgba(255, 255, 255, 0.04)), var(--color-glass-warm);
  text-decoration: none;
}
.cta__label {
  font-weight: var(--fw-bold);
  font-size: var(--fs-label);
  line-height: normal;
  color: var(--color-gold);
  text-transform: uppercase;
  white-space: nowrap;
}
.cta__icon {
  position: absolute; right: 0; top: 0;
  width: 89px; height: 87px;
  display: grid; place-items: center;
  border-radius: var(--radius-pill);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.02), rgba(255, 255, 255, 0.06)), var(--color-bg);
  box-shadow: inset 0 0 0 1px rgba(246, 186, 35, 0.28);
  transition: box-shadow var(--dur-base) var(--ease-standard);
}
.cta:hover .cta__icon, .cta:focus-visible .cta__icon { box-shadow: inset 0 0 0 1px rgba(246, 186, 35, 0.7); }
.cta:hover .cta__arrow, .cta:focus-visible .cta__arrow { transform: translateX(4px); }
.cta__arrow {
  width: 41.435px; height: 41.435px;
  transition: transform var(--dur-base) var(--ease-out);
}

.hero__visual {
  position: relative;
  width: 100%;
  display: flex; justify-content: center;
  padding-bottom: calc(var(--statue-w) * 127 / 429);
}
.hero__statue {
  position: relative; z-index: 1;
  width: var(--statue-w);
  height: calc(var(--statue-w) * 644 / 429);
  object-fit: cover;
}
.hero__word {
  position: absolute;
  left: -16px; width: calc(100% - 9px);
  top: calc(var(--statue-w) * 257 / 429);
  height: calc(var(--statue-w) * 514 / 429);
  overflow: hidden;
  pointer-events: none;
  -webkit-mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.7) 74%);
  mask-image: linear-gradient(180deg, transparent 0%, rgba(0, 0, 0, 0.35) 45%, rgba(0, 0, 0, 0.7) 74%);
}
.hero__word-text {
  position: absolute; left: 50%; top: 0;
  transform: translate(-50%, -16.22%);
  font-family: var(--font-impact);
  font-size: min(450px, 31.25vw);
  line-height: 1.22;
  color: var(--color-lawyer);
  white-space: nowrap;
}

/* ---------- Opening scene: dive into the statue's face ---------- */
.hero-pin {
  position: relative; z-index: 1;
  /* full-bleed clip: the zoomed statue must never add to the page's scroll area */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  overflow: clip;
}
.hero-pin > .hero { max-width: var(--page-max); margin-inline: auto; }
.hero-pin.is-cinematic .hero {
  position: sticky; /* top is set in JS so the hero pins when its bottom meets the viewport */
  min-height: 100vh; /* while pinned the hero always covers the screen, so the zoom never shows past its edges */
}
.hero-pin.is-cinematic .hero__title,
.hero-pin.is-cinematic .hero__subtitle,
.hero-pin.is-cinematic .cta {
  /* the headline flies past the lens as the camera moves in */
  transform: translate3d(0, calc(var(--zt) * -110px), 0) scale(calc(1 + var(--zt) * 0.5));
  opacity: calc(1 - var(--zt) * 1.3);
  filter: blur(calc(var(--zt) * 10px));
}
.hero-pin.is-cinematic .hero__word { opacity: calc(1 - var(--zt)); }
.hero--diving .cta { pointer-events: none; }
.hero--diving .hero__statue { filter: none; will-change: auto; }
.hero--deep .hero__word { visibility: hidden; }
.hero--black .hero__visual,
.hero--black .hero__title,
.hero--black .hero__subtitle,
.hero--black .cta { visibility: hidden; }
.hero__veil {
  position: absolute; top: 0; left: 50%; z-index: 3;
  width: 100vw; height: 100%;
  transform: translateX(-50%);
  pointer-events: none;
  background:
    radial-gradient(ellipse 70% 60% at 50% 50%,
      rgba(255, 220, 140, calc(var(--bloom) * 0.55)) 0%,
      rgba(246, 186, 35, calc(var(--bloom) * 0.28)) 38%,
      transparent 72%),
    rgba(0, 0, 0, var(--veil));
}

/* ---------- Intro ---------- */
.intro-pin { position: relative; z-index: 2; pointer-events: none; }
.intro-pin.is-cinematic .intro {
  position: sticky; /* top is set in JS: vertically centred */
  margin-top: 0;
}
.intro-pin.is-cinematic .intro__inner {
  /* emerges out of the darkness from deep in the scene */
  opacity: var(--e, 1);
  transform: perspective(1100px) translate3d(0, 0, calc((1 - var(--e, 1)) * -800px)) rotateX(calc((1 - var(--e, 1)) * 10deg));
  filter: blur(calc((1 - var(--e, 1)) * 14px));
  will-change: transform, opacity, filter;
}
.intro {
  margin: 179px auto 0;
  width: 1297px; max-width: calc(100% - 40px);
  transform: translateX(-4.5px);
  text-align: center;
  font-family: var(--font-serif);
  font-weight: var(--fw-extrabold);
  font-size: var(--fs-intro);
  line-height: 57px;
}
.intro__text + .intro__text { margin-top: 5px; }

/* ---------- Stats ---------- */
.stats {
  position: relative;
  margin-top: 310px;
  height: 191px;
}
.stats__list { height: 100%; }
.stats__item {
  position: absolute; top: 15px;
  left: calc(var(--x) / 1440 * 100%);
  transform: translateX(-50%);
  display: flex; flex-direction: column; align-items: center;
  white-space: nowrap;
  text-align: center;
}
.stats__value {
  font-family: var(--font-serif);
  font-weight: var(--fw-extrabold);
  font-size: var(--fs-stat);
  line-height: normal;
  margin-bottom: 20px;
}
.stats__label {
  font-size: var(--fs-body-lg);
  line-height: normal;
  color: var(--color-gold);
}
.stats__divider {
  position: absolute; top: 0; bottom: 0;
  left: calc(var(--x) / 1440 * 100%);
  width: 1px;
  background: var(--color-divider);
  transform-origin: top;
}
.stats__divider[data-reveal] { opacity: 1; translate: none; filter: none; transform: scaleY(0); transition: transform 1.2s var(--ease-out) 200ms; }
.stats__divider.is-revealed { transform: scaleY(1); }
.count { font-variant-numeric: tabular-nums; }

/* ---------- About ---------- */
.about { padding-top: 119px; }
.about__grid {
  margin-top: 120px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 584px;
  grid-template-areas: 'title body' 'link pills';
  column-gap: 144px;
  row-gap: 48px;
}
.about__title { grid-area: title; line-height: 66px; white-space: nowrap; }
.about__body { grid-area: body; padding-top: 10px; }
.about__lead {
  font-weight: var(--fw-semibold);
  font-size: var(--fs-lead);
  line-height: 34px;
  white-space: nowrap;
}
.about__text {
  margin-top: 18px;
  font-size: var(--fs-body);
  line-height: 26px;
}
.about__text + .about__text { margin-top: 29px; line-height: 20px; }
.about__link {
  grid-area: link;
  align-self: center;
  justify-self: start;
  position: relative;
  font-size: var(--fs-body);
  line-height: 20px;
  text-decoration: none;
}
.about__link::after {
  content: '';
  position: absolute; left: 0; top: 28px;
  width: 190px; height: 1px;
  background: currentColor;
  transform-origin: left;
  transition: transform var(--dur-base) var(--ease-out);
}
.about__link:hover::after { transform: scaleX(0.6); }
.about__pills {
  grid-area: pills;
  display: flex; justify-content: space-between;
  margin-left: -18px;
}
.pill {
  height: 33px;
  padding: 2px 10px 0;
  border-radius: var(--radius-pill);
  background: var(--color-glass-warm);
  font-weight: var(--fw-bold);
  font-size: var(--fs-label);
  line-height: 29px;
  white-space: nowrap;
}
.pill:nth-child(1) { width: 201px; text-align: center; }
.pill:nth-child(2) { width: 137px; text-align: center; }
.pill:nth-child(3) { width: 165px; text-align: center; }

/* ---------- Practice / carousel (Animation 01) ---------- */
.practice { padding-top: 229px; }
.practice__head {
  margin-top: 166px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 584px;
  column-gap: 144px;
  align-items: start;
}
.practice__title { line-height: 67px; white-space: nowrap; }
.practice__aside { position: relative; padding-top: 53px; }
.practice__tag {
  position: absolute; right: 0; top: 20px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-body);
  line-height: 20px;
  white-space: nowrap;
}
.practice__desc { font-size: var(--fs-body); line-height: 20px; }

.carousel {
  --card-w: 550px;
  --track-shift: -5px;
  --track-pad: 24px;
  --track-h: calc(var(--card-w) * 653 / 550 + var(--track-pad) * 2);
  --pin-distance: 210vh;
  margin-top: calc(63px - var(--track-pad));
  width: 100vw;
  margin-left: calc(50% - 50vw);
}
.carousel__pin {
  position: relative;
  height: calc(var(--track-h) + var(--pin-distance));
}
.carousel__track {
  position: sticky;
  /* centred, nudged down to clear the fixed nav, never pushed off the bottom */
  top: max(0px, min(calc(100vh - var(--track-h) - 16px), calc(50vh - var(--track-h) / 2 + 60px)));
  height: var(--track-h);
  overflow: hidden;
  perspective: 1800px;
  perspective-origin: 50% 50%;
}
.carousel__card {
  position: absolute;
  left: calc(50% + var(--track-shift)); top: 50%;
  width: var(--card-w);
  aspect-ratio: var(--ratio);
  transform:
    translate3d(calc(-50% + var(--x, 0) * var(--card-w)), -50%, 0)
    rotateY(var(--ry, 0deg))
    scale(var(--s, 1));
  transform-style: preserve-3d;
  opacity: var(--fade, 1);
  will-change: transform;
}
.carousel__tilt {
  --tx: 0deg; --ty: 0deg; --gx: 50%; --gy: 50%;
  position: absolute; inset: 0;
  display: block;
  padding: 0; border: 0; background: none;
  border-radius: calc(var(--card-w) * 0.062);
  cursor: pointer;
  transform-style: preserve-3d;
  transform: rotateX(var(--tx)) rotateY(var(--ty)) translateZ(0);
  transition: transform 450ms var(--ease-out);
}
.carousel__tilt:hover { transform: rotateX(var(--tx)) rotateY(var(--ty)) translateZ(36px); transition-duration: 180ms; }
.carousel__tilt:focus-visible { outline: 2px solid var(--color-gold); outline-offset: 6px; }
.carousel__flipper {
  position: absolute; inset: 0;
  border-radius: inherit;
  transform-style: preserve-3d;
  transition: transform 900ms cubic-bezier(0.2, 0.8, 0.2, 1);
}
.carousel__tilt--flipped .carousel__flipper { transform: rotateY(180deg); }
.carousel__face {
  position: absolute; inset: 0;
  border-radius: inherit;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  box-shadow: var(--shadow-card);
  transition: box-shadow var(--dur-base) var(--ease-standard);
}
.carousel__card--active .carousel__face--front { box-shadow: none; }
.carousel__tilt:hover .carousel__face {
  box-shadow: 0 0 0 1px rgba(246, 186, 35, 0.55), 0 0 28px rgba(246, 186, 35, 0.22), 0 30px 60px rgba(0, 0, 0, 0.7);
}
.carousel__image { width: 100%; height: 100%; pointer-events: none; -webkit-user-drag: none; user-select: none; }
.carousel__shine {
  position: absolute; inset: 0;
  border-radius: inherit;
  background: radial-gradient(circle at var(--gx) var(--gy), rgba(255, 255, 255, 0.22), transparent 45%);
  opacity: 0;
  transition: opacity var(--dur-base) var(--ease-standard);
  pointer-events: none;
}
.carousel__tilt:hover .carousel__shine { opacity: 1; }
.carousel__face--back {
  transform: rotateY(180deg);
  overflow: hidden;
  background: #0b0b0b;
}
/* The Figma card artwork has its title baked in: the back zooms into the photograph and fades the text area out. */
.carousel__back-image {
  width: 100%; height: 100%;
  transform: scale(1.55);
  transform-origin: 50% 0;
  pointer-events: none;
}
.carousel__face--back::after {
  content: '';
  position: absolute; inset: 0;
  background: linear-gradient(180deg, transparent 0%, transparent 48%, rgba(0, 0, 0, 0.85) 70%, #000 82%);
  box-shadow: inset 0 0 0 1px rgba(246, 186, 35, 0.35);
  border-radius: inherit;
}

/* ---------- Why choose us (Animation 02 interpretation: staggered reveal; 03: outline glow) ---------- */
.why { padding-top: 239px; }
.why__title { margin-top: 65px; line-height: 64px; white-space: nowrap; }
.why__sub { font-size: var(--fs-body); line-height: 20px; }
.why__grid {
  margin-top: 97px;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 501px));
  column-gap: 203px;
  row-gap: 72px;
}
.why-card {
  position: relative;
  isolation: isolate;
  height: 206px;
  border-radius: var(--radius-card);
  background: var(--color-card);
  box-shadow: var(--shadow-glass), inset 0 0 0 1px var(--color-card-edge);
  display: flex; flex-direction: column; align-items: center;
  padding: 18px 5px 0 0;
  text-align: center;
  opacity: 0;
  transform: perspective(900px) rotateX(22deg) translateY(56px) scale(0.96);
  transform-origin: 50% 100%;
  transition:
    opacity 900ms var(--ease-out) calc(var(--i) * 130ms),
    transform 1100ms var(--ease-out) calc(var(--i) * 130ms);
}
.why-card--visible { opacity: 1; transform: none; }
.why-card:nth-child(n + 3) .why-card__title { margin-top: 11px; }
.why-card__icon {
  width: 110px; height: 110px; border-radius: 50%;
  display: grid; place-items: center;
  background: radial-gradient(circle, var(--color-gold-disc) 0 46px, var(--color-gold-ring) 46.5px 55px);
}
.why-card__icon-img { width: 50px; height: 50px; }
.why-card__title {
  margin-top: 4px;
  font-weight: var(--fw-bold);
  font-size: var(--fs-label);
  line-height: 29px;
}
.why-card__title-line { display: block; }

/* ---------- Testimonials ---------- */
@keyframes phone-float {
  0%, 100% { transform: translate3d(0, 0, 0) rotate(-0.8deg); }
  50% { transform: translate3d(0, -12px, 0) rotate(0.8deg); }
}
.testimonials { padding-top: 136px; }
.testimonials__title { margin-top: 80px; line-height: 64px; white-space: nowrap; }
@keyframes marquee { to { transform: translate3d(calc(-1 * var(--set-w)), 0, 0); } }
.testimonials__list {
  --g: 241px; /* Figma gap between phones */
  --set-w: calc(3 * (270px + var(--g)));
  --marquee-dur: 38s;
  margin-top: 41px; /* 71px in Figma, minus the 30px room left for the float */
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 30px 0 40px;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(90deg, transparent 0, #000 3.5%, #000 96.5%, transparent 100%);
  mask-image: linear-gradient(90deg, transparent 0, #000 3.5%, #000 96.5%, transparent 100%);
}
.testimonials__rail {
  display: flex;
  width: max-content;
  /* first frame matches Figma: the three phones centred, first one at x = 72 */
  margin-left: calc(50vw - 407px - var(--g));
  animation: marquee var(--marquee-dur) linear infinite;
}
.testimonials__list:hover .testimonials__rail,
.testimonials__list:focus-within .testimonials__rail { animation-play-state: paused; }

.phone-slot { flex: none; margin-right: var(--g); }
.phone {
  --bezel: 7px;
  animation: phone-float 7s ease-in-out infinite;
  animation-delay: calc(var(--phase, 0) * -2.3s);
  position: relative;
  flex: none;
  width: 270px; height: 565px;
  padding: var(--bezel);
  border-radius: 48px;
  background: linear-gradient(150deg, #e3dac9 0%, #8a8171 18%, #d6ccb9 38%, #6c6456 62%, #cfc5b1 82%, #7a7264 100%);
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.6), 0 18px 40px rgba(0, 0, 0, 0.6);
}
.phone__button {
  position: absolute; width: 3px; border-radius: 2px;
  background: linear-gradient(90deg, #6d6658, #cfc5b1);
}
.phone__button--action { left: -3px; top: 108px; height: 22px; }
.phone__button--vol-up { left: -3px; top: 150px; height: 40px; }
.phone__button--vol-down { left: -3px; top: 200px; height: 40px; }
.phone__button--power { right: -3px; left: auto; top: 170px; height: 64px; background: linear-gradient(270deg, #6d6658, #cfc5b1); }
.phone__screen {
  position: relative;
  height: 100%;
  border-radius: 41px;
  background: #080808;
  box-shadow: inset 0 0 0 2px #000;
  overflow: hidden;
}
.phone__island {
  position: absolute; left: 50%; top: 10px;
  width: 80px; height: 24px; border-radius: 12px;
  transform: translateX(-50%);
  background: #000;
}
.phone__island::after {
  content: '';
  position: absolute; right: 10px; top: 8px;
  width: 8px; height: 8px; border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, #3a3f6b, #0b0c16 70%);
}
.phone__watermark {
  position: absolute; left: 50%; top: 60px;
  width: 162px;
  transform: translateX(-50%);
  font-family: var(--font-impact);
  font-size: 48px;
  line-height: normal;
  text-transform: uppercase;
  text-align: center;
  color: var(--color-gold-watermark);
}
.phone__card {
  position: absolute; left: -1px; top: 148px;
  width: 259px; height: 405px;
  border-radius: var(--radius-phone-card);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.015) 60%);
  -webkit-backdrop-filter: blur(var(--blur-glass));
  backdrop-filter: blur(var(--blur-glass));
  box-shadow: var(--shadow-glass);
  letter-spacing: 0.06em;
}
.phone__eyebrow {
  position: absolute; left: 24px; top: 18px;
  font-weight: var(--fw-medium); font-size: 16px; line-height: 1.173; letter-spacing: 0.96px;
}
.phone__heading {
  position: absolute; left: 24px; top: 41px;
  font-weight: var(--fw-bold); font-size: 24px; line-height: 1.173; letter-spacing: -0.24px;
}
.phone__stars { position: absolute; left: 26px; top: 72px; }
.phone__reviewer { position: absolute; left: 25px; top: 126px; width: 210px; height: 40px; }
.phone__avatar {
  position: absolute; left: 0; top: 0;
  width: 24px; height: 25px; border-radius: 50%;
  display: grid; place-items: center;
  background: var(--color-gold);
  font-weight: var(--fw-semibold); font-size: 13px; letter-spacing: 0;
}
.phone__name {
  position: absolute; left: 29px; top: 5px;
  font-size: 14px; line-height: 1.173; letter-spacing: 0.84px; white-space: nowrap;
}
.phone__meta {
  font-size: 10px; line-height: 1.173; letter-spacing: 0.6px;
  color: var(--color-muted); white-space: nowrap;
}
.phone__reviewer .phone__meta { position: absolute; left: 29px; top: 21px; }
.phone__rating { position: absolute; left: 24px; top: 169px; display: flex; align-items: center; gap: 3px; }
.phone__quote {
  position: absolute; left: 25px; top: 217px; width: 232px;
  font-size: 10px; line-height: 1.173; letter-spacing: 0.6px;
}
.phone__quote-line { display: block; }
.phone__cite { margin-top: 11.73px; display: flex; flex-direction: column; }
.phone__author { font-weight: var(--fw-bold); }

.stars { display: inline-flex; color: var(--color-gold); }
.stars__star { fill: currentColor; }
.stars--lg { gap: 1px; }
.stars--lg .stars__star { width: 15.4px; height: 15.4px; }
.stars--sm { gap: 0; }
.stars--sm .stars__star { width: 9px; height: 9px; }

/* ---------- Contact ---------- */
.contact {
  position: relative;
  margin-top: 77px; /* 117px in Figma, minus the 40px the testimonials marquee keeps below the phones */
  height: 1080px;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
}
.contact {
  --slide-card: 360px;
  --slide-statue: 420px;
  --statue-alpha: 1;
}
/* The form (panel + fields) slides in from the right while the statue slides in from the left */
.contact__card {
  position: absolute; inset: 0;
  transform:
    perspective(1600px)
    translate3d(calc((1 - var(--ease, 1)) * var(--slide-card)), 0, 0)
    rotateY(calc((1 - var(--ease, 1)) * -18deg));
  transform-origin: 62% 50%;
  opacity: var(--ease, 1);
}
.contact__statue {
  z-index: 1;
  translate: calc((1 - var(--ease, 1)) * -1 * var(--slide-statue)) 0;
  opacity: calc(var(--ease, 1) * var(--statue-alpha));
}
.contact__panel {
  position: absolute; left: 419px; top: 187px;
  width: 950px; height: 729px;
  border-radius: var(--radius-card);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.015));
  box-shadow: var(--shadow-field), inset 0 0 0 1px rgba(255, 255, 255, 0.06);
}
.contact__statue {
  position: absolute; left: -24px; top: 27px;
  width: 797px; height: 1230px;
  max-width: none;
}
.contact__content {
  position: absolute; left: 773px; top: 246px;
  width: 430px;
}
.contact__eyebrow {
  margin-left: 3px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-body-lg);
  line-height: 24px;
}
.contact__title {
  margin-top: 7px;
  font-weight: var(--fw-bold);
  font-size: 40px;
  line-height: 1.036;
}
.contact__form { margin-top: 19px; width: 411px; display: flex; flex-direction: column; }

.field {
  position: relative;
  height: 51px;
  border-radius: var(--radius-field);
  transition: box-shadow var(--dur-fast) var(--ease-standard);
}
.field:focus-within { box-shadow: var(--shadow-field), 0 0 0 1px rgba(246, 186, 35, 0.6); }
.field--email { margin-top: 25px; }
.field--phone { margin-top: 23px; display: flex; }
.field--country { margin-top: 25px; }
.field--message { margin-top: 21px; height: 135px; }
.field__input,
.field__select {
  width: 100%; height: 100%;
  border: 0; outline: none;
  background: transparent;
  padding: 0 25px;
  font-weight: var(--fw-semibold);
  font-size: var(--fs-small);
  line-height: normal;
  color: var(--color-text);
  border-radius: inherit;
}
.field__input::placeholder { color: var(--color-placeholder); opacity: 1; }
.field__textarea { padding-top: 13px; resize: none; }
.field__select {
  appearance: none; -webkit-appearance: none;
  cursor: pointer;
}
.field__select:invalid, .field__select:has(option[value='']:checked) { color: var(--color-placeholder); }
.field__select option { background: #111; color: var(--color-text); }
.field__chevron {
  position: absolute; top: 50%;
  width: 16px; height: 16px;
  transform: translateY(-50%);
  opacity: 0.6;
  pointer-events: none;
}
.field__chevron--country { left: 203px; }
.field__code {
  position: relative; flex: none;
  width: 112px; height: 100%;
  border-radius: var(--radius-field);
  background: rgba(255, 255, 255, 0.025);
  box-shadow: 1px 1px 2.1px #555, inset 0 0 0 1px rgba(255, 255, 255, 0.08);
}
.field__select--code { padding: 0 0 0 9px; }
.field__chevron--code { left: 92px; }
.field__input--phone { padding-left: 15px; }

.submit {
  position: relative;
  margin: 27px 0 0 75px;
  width: 261px; height: 45px;
  padding: 0 0 0 78px;
  border: 0;
  border-radius: var(--radius-field);
  text-align: left;
  cursor: pointer;
}
.submit__label {
  font-weight: var(--fw-semibold);
  font-size: var(--fs-small);
  line-height: normal;
  color: var(--color-placeholder);
  transition: color var(--dur-fast) var(--ease-standard);
}
.submit:hover .submit__label, .submit:focus-visible .submit__label { color: var(--color-text); }
.submit__icon {
  position: absolute; right: 0; top: 0;
  width: 55px; height: 45px;
  display: grid; place-items: center;
  border-radius: var(--radius-field);
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.02)), #0b0b0b;
}
.arrow-icon { width: 28px; height: 16px; color: #ffffff; }
.contact__status {
  margin: 10px 0 0 75px;
  width: 261px; min-height: 15px;
  font-size: 12px; line-height: 15px;
  text-align: center;
  color: var(--color-gold);
}
.contact__status:empty { visibility: hidden; }

/* ---------- Footer ---------- */
.footer {
  position: relative;
  margin-top: 28px;
  height: 700px;
  overflow: hidden;
}
.footer__word {
  position: absolute; left: 50%; top: 14px;
  transform: translate3d(calc(-50% - 4px), calc((1 - var(--enter, 1)) * 85%), 0);
  font-weight: var(--fw-bold);
  font-size: min(300px, 20.83vw);
  line-height: normal;
  letter-spacing: -0.03em;
  color: rgba(255, 255, 255, 0.59);
  opacity: calc(0.1 * var(--enter, 1));
  will-change: transform, opacity;
  white-space: nowrap;
}
.footer__panel {
  position: absolute; left: 37px; right: 37px; top: 282px;
  height: 345px;
  border-radius: var(--radius-card);
  background: linear-gradient(180deg, rgba(14, 14, 14, 0.7) 0%, rgba(6, 6, 6, 0.96) 35%, #050505 100%);
  -webkit-backdrop-filter: blur(12px);
  backdrop-filter: blur(12px);
  box-shadow:
    inset 0 1.5px 0 rgba(255, 255, 255, 0.32),
    inset 0 22px 30px -22px rgba(255, 255, 255, 0.14),
    inset 1px 0 0 rgba(255, 255, 255, 0.06),
    inset -1px 0 0 rgba(255, 255, 255, 0.06);
  display: grid;
  grid-template-columns: 499px 361px 1fr;
  padding: 104px 40px 0 73px;
}
.footer__heading {
  font-weight: var(--fw-bold);
  font-size: var(--fs-footer-h);
  line-height: 1.036;
}
.footer__text {
  margin-top: 25px;
  font-weight: var(--fw-medium);
  font-size: var(--fs-body);
  line-height: 1.25;
  max-width: 430px;
}
.footer__col--reg { margin-top: -4px; }
.footer__col--reg .footer__text { margin-top: 16px; max-width: 367px; }
.footer__links { margin-top: 25px; padding-left: 6px; }
.footer__links li + li { margin-top: 7px; }
.footer__links li:last-child { margin-top: 4px; }
.footer__link {
  font-weight: var(--fw-medium);
  font-size: var(--fs-body);
  line-height: 1.25;
  text-decoration: none;
  transition: color var(--dur-fast) var(--ease-standard);
}
.footer__link:hover { color: var(--color-gold); }
.footer__copy {
  position: absolute; left: 0; right: 0; top: 658px;
  text-align: center;
  font-weight: var(--fw-medium);
  font-size: var(--fs-body);
  line-height: 1.25;
  opacity: 0.9;
}

/* ================================================================== */
/* Touch devices: no hover, so the card glow runs once revealed        */
/* ================================================================== */
@media (hover: none) {
  .why-card--visible.outline-glow::before { opacity: 0.85; }
  .why-card--visible.outline-glow::after { opacity: 0.4; }
  .glow::before { opacity: 1; }
  .glow::after { opacity: 0.6; }
}

/* ================================================================== */
/* Desktop below the 1440 artboard                                     */
/* ================================================================== */
@media (max-width: 1439px) {
  .nav { --nav-w: calc(100% - 279px - 69px); }
  .nav__list { width: calc(100vw - 348px); padding: 0 44px 0 calc(157px - (1440px - 100vw) * 0.5); }
  .nav__link { font-size: clamp(18px, 1.67vw, 24px); }
  .stats__value { font-size: clamp(56px, 6.67vw, 96px); }
  .about__grid, .practice__head { column-gap: clamp(48px, 10vw, 144px); grid-template-columns: minmax(0, 1fr) minmax(0, 584px); }
  .about__title, .practice__title, .about__lead, .why__title, .testimonials__title { white-space: normal; }
  .why__grid { column-gap: clamp(32px, 14vw, 203px); }
  .testimonials__list { --g: clamp(48px, 16.7vw, 241px); }
  .contact__panel { left: auto; right: 71px; width: min(950px, calc(100% - 140px)); }
  .contact__content { left: auto; right: max(185px, calc((100% - 1440px) / 2 + 256px)); }
  .contact__statue { left: calc(-24px - (1440px - 100vw) * 0.35); }
  .footer__panel { grid-template-columns: 1.4fr 1fr 1.1fr; column-gap: 24px; }
}

/* ================================================================== */
/* Tablet                                                              */
/* ================================================================== */
@media (max-width: 1024px) {
  :root {
    --fs-hero: clamp(40px, 6.6vw, 68px);
    --fs-intro: clamp(28px, 4vw, 40px);
    --fs-display: 52px;
    --fs-h2: 44px;
    --fs-h2-sm: 40px;
    --fs-label: 20px;
    --gutter-l: 40px;
    --gutter-r: 40px;
  }

  .header { height: 112px; }
  .header__logo { left: 32px; top: 24px; width: 66px; height: 65px; }
  .nav { display: none; }
  .header__toggle { display: flex; }
  .mobile-menu { display: block; }

  .hero { --statue-w: min(380px, 52vw); padding-top: 150px; padding-left: 24px; padding-right: 24px; }
  .hero__title { line-height: 1.04; white-space: normal; }
  .hero__subtitle { font-size: 18px; line-height: 1.35; }
  .cta { left: 0; width: auto; height: 72px; padding: 0 98px 0 28px; }
  .cta__label { font-size: 20px; }
  .cta__icon { width: 74px; height: 72px; }
  .cta__arrow { width: 34px; height: 34px; }

  .intro { margin-top: 110px; line-height: 1.2; transform: none; }
  .stats { margin-top: 160px; }
  .stats__label { font-size: 17px; }

  .about { padding-top: 100px; }
  .about__grid {
    margin-top: 64px;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas: 'title' 'body' 'pills' 'link';
    row-gap: 36px;
  }
  .about__title { line-height: 1.2; }
  .about__body { padding-top: 0; }
  .about__lead { font-size: 24px; line-height: 1.3; }
  .about__text br { display: none; }
  .about__pills { margin-left: 0; justify-content: flex-start; gap: 16px; flex-wrap: wrap; }
  .pill { width: auto; font-size: 20px; padding: 2px 18px 0; }
  .pill:nth-child(n) { width: auto; }
  .about__link { justify-self: start; }

  .practice { padding-top: 140px; }
  .practice__head { margin-top: 64px; grid-template-columns: minmax(0, 1fr); row-gap: 20px; }
  .practice__title { line-height: 1.2; }
  .practice__aside { padding-top: 0; }
  .practice__tag { position: static; margin-bottom: 10px; }
  .carousel { --card-w: 440px; --track-shift: 0px; --pin-distance: 180vh; margin-top: 24px; }

  .why { padding-top: 120px; }
  .why__title { margin-top: 40px; line-height: 1.2; }
  .why__grid { margin-top: 56px; grid-template-columns: repeat(2, minmax(0, 1fr)); column-gap: 24px; row-gap: 24px; }
  .why-card__title { font-size: 20px; line-height: 26px; padding: 0 16px; }

  .testimonials { padding-top: 120px; }
  .testimonials__title { margin-top: 40px; line-height: 1.2; }
  .testimonials__list { --g: 40px; --marquee-dur: 26s; margin-top: 26px; }

  .contact { --slide-card: 220px; --slide-statue: 240px; --statue-alpha: 0.35; margin-top: 96px; height: auto; padding: 72px 24px; }
  .contact__card { position: relative; inset: auto; z-index: 1; }
  .contact__panel { inset: 0; width: auto; height: auto; -webkit-backdrop-filter: blur(3px); backdrop-filter: blur(3px); }
  .contact__statue { z-index: 0; left: -18%; top: 0; width: 70%; height: auto; pointer-events: none; }
  .contact__content { position: relative; left: auto; right: auto; top: auto; width: auto; max-width: 480px; margin: 0 auto; padding: 56px 0; }
  .contact__form { width: 100%; }
  .submit { margin-left: auto; margin-right: auto; }
  .contact__status { margin-left: auto; margin-right: auto; max-width: 100%; }

  .footer { height: auto; padding: 0 24px 40px; margin-top: 64px; }
  .footer__word { top: 0; }
  .footer__panel {
    position: relative; left: auto; right: auto; top: auto; height: auto;
    margin-top: calc(20.83vw * 0.9);
    grid-template-columns: repeat(3, minmax(0, 1fr));
    column-gap: 32px;
    padding: 56px 40px 64px;
  }
  .footer__heading { font-size: 30px; }
  .footer__copy { position: static; margin-top: 28px; }
}

/* ================================================================== */
/* Mobile                                                              */
/* ================================================================== */
@media (max-width: 768px) {
  :root {
    --fs-hero: clamp(26px, 7.2vw, 52px);
    --fs-intro: clamp(22px, 5.8vw, 32px);
    --fs-display: 40px;
    --fs-h2: 34px;
    --fs-h2-sm: 32px;
    --fs-lead: 22px;
    --fs-label: 16px;
    --gutter-l: 20px;
    --gutter-r: 20px;
  }

  .header__logo { left: 20px; top: 20px; width: 56px; height: 55px; }
  .header__toggle { right: 20px; top: 20px; width: 52px; height: 52px; }
  .mobile-menu { left: 16px; right: 16px; top: 86px; }

  .hero { --statue-w: min(300px, 72vw); padding-top: 116px; padding-left: 20px; padding-right: 20px; }
  .hero__subtitle { font-size: 15px; }
  .cta { height: 60px; padding: 0 76px 0 20px; }
  .cta__label { font-size: clamp(13px, 3.8vw, 16px); }
  .cta__icon { width: 60px; height: 60px; }
  .cta__arrow { width: 28px; height: 28px; }

  .intro { margin-top: 72px; max-width: calc(100% - 40px); }

  .stats { margin-top: 96px; height: auto; padding: 0 20px; }
  .stats__list { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); row-gap: 0; }
  .stats__item { position: static; transform: none; padding: 24px 8px; }
  .stats__item:nth-child(odd) { border-right: 1px solid var(--color-divider); }
  .stats__item:nth-child(-n + 2) { border-bottom: 1px solid var(--color-divider); }
  .stats__value { font-size: clamp(44px, 12vw, 64px); margin-bottom: 8px; }
  .stats__label { font-size: 15px; }
  .stats__divider { display: none; }

  .about { padding-top: 80px; }
  .about__lead br, .about__lead { white-space: normal; }
  .about__lead br { display: none; }
  .pill { font-size: 16px; height: 36px; line-height: 32px; }

  .practice { padding-top: 96px; }
  .carousel { --card-w: min(300px, 70vw); --pin-distance: 150vh; }
  .carousel__tilt:hover { transform: none; }

  .why { padding-top: 96px; }
  .why__grid { grid-template-columns: minmax(0, 1fr); }
  .why-card { height: auto; min-height: 190px; padding-bottom: 24px; }
  .why-card:nth-child(n + 3) .why-card__title { margin-top: 4px; }

  .testimonials { padding-top: 96px; }
  .testimonials__list { --g: 28px; --marquee-dur: 22s; }

  .contact { padding: 48px 16px; }
  .contact { --slide-card: 140px; --slide-statue: 160px; --statue-alpha: 0.22; }
  .contact__panel { border-radius: 32px; }
  .contact__statue { left: -30%; width: 110%; }
  .contact__content { padding: 44px 20px; }
  .contact__title { font-size: 28px; }
  .field__chevron--country { left: auto; right: 20px; }
  .submit { width: 100%; max-width: 261px; }

  .footer__panel { grid-template-columns: minmax(0, 1fr); row-gap: 36px; padding: 44px 28px 48px; border-radius: 32px; }
  .footer__text, .footer__col--reg .footer__text { max-width: none; }
  .footer__copy { font-size: 14px; }
}

/* ================================================================== */
/* Reduced motion                                                      */
/* ================================================================== */
@media (prefers-reduced-motion: reduce) {
  html { scroll-behavior: auto; }
  *, *::before, *::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; transition-delay: 0ms !important; }
  .glow::before, .glow::after, .outline-glow::before, .outline-glow::after { --glow-angle: 45deg; }
  .why-card { opacity: 1; transform: none; }
  [data-reveal] { opacity: 1; translate: none; filter: none; }
  .site__texture { transform: none; }
  .testimonials__rail { animation: none; margin-inline: auto; }
  .testimonials__list { overflow-x: auto; -webkit-mask-image: none; mask-image: none; }
  .phone-slot[data-clone] { display: none; }
  .phone-slot:nth-child(3) { margin-right: 0; }
}
`;
import ReactDOM from "./vendor/react-dom_client.js";ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(React.StrictMode,null,React.createElement(App)));