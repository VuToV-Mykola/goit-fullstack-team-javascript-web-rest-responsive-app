import{a as d,S as I,N as Q,P as x,R as C}from"./assets/vendor-CoX6hYw-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const u="https://sound-wave.b.goit.study/api",U=1,D=8,q=10;async function F(t=U,e=D){return(await d.get(`${u}/artists`,{params:{page:t,limit:e}})).data}async function H(t){if(!t)throw new Error("Artist id is required");return(await d.get(`${u}/artists/${t}`)).data}async function P(t){if(!t)throw new Error("Artist id is required");return(await d.get(`${u}/artists/${t}/albums`)).data}async function O(){try{return(await d.get(`${u}/feedbacks`)).data}catch(t){throw new Error("Failed to load feedbacks",{cause:t})}}document.querySelectorAll(".nav-list a").forEach(t=>{t.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function V(){const t=document.querySelector("#btn-hero-js");t&&t.addEventListener("click",()=>{const e=document.querySelector("#artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{V()});const z=document.getElementById("artistsList"),m=document.getElementById("loadMoreBtn"),E=document.getElementById("artistsLoader");let v=1;const h=8;async function k(){try{G();const t=await F(v,h),e=t.artists||t;R(e),e.length<h?m.classList.add("is-hidden"):m.classList.remove("is-hidden"),v+=1}catch(t){console.error("Failed to load artists:",t)}finally{W()}}function R(t){if(!Array.isArray(t))return;const e=t.map(({_id:s,strArtist:n,strArtistThumb:a,genres:r,strBiographyEN:i},o)=>{const l=r.map(p=>`<span class="artist-genre">${p}</span>`).join("");return`
        <li class="artist-card" data-id="${s}">
          <div class="artist-thumb">
            <img src="${a}" alt="${n}" class="artist-img" width="500" height="295" loading="lazy" decoding="async"${o===0?' fetchpriority="high"':""}>
          </div>

          <div class="artist-content">
            <div class="artist-genres">${l}</div>
            <h3 class="artist-name">${n}</h3>
            <p class="artist-bio">${i}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");z.insertAdjacentHTML("beforeend",e)}function G(){E.classList.remove("is-hidden")}function W(){E.classList.add("is-hidden")}k();m.addEventListener("click",k);const A=document.querySelector(".modal-content"),S=document.querySelector(".modal-close-btn"),c=document.querySelector(".backdrop"),$=document.getElementById("modalLoader");function K(t,e=[]){const{strArtist:s,strArtistThumb:n,intFormedYear:a,intDiedYear:r,strGender:i,intMembers:o,strCountry:l,strBiographyEN:b,genres:p}=t;return`
    <h2 class="artist-title">${s}</h2>

<div class="artist-container">
  <div class="artist-image">
    <img src="${n}" alt="${s||"Artist"}">
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${N(a,r)}</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${i??"—"}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${o??"—"}</span>
    </div>

    <div class="info-row">
      <span class="label">Country</span>
      <span class="value">${l??"—"}</span>
    </div>

    <div class="info-row info-row--bio">
      <span class="label">Biography</span>
      <span class="value">${b??"—"}</span>
    </div>

       <div class="info-row info-row--genres">
    <ul class="info-genres">
      ${(p||[]).map(T=>`<li class="info-genre">${T||""}</li>`).join("")}
    </ul>
   </div>
  </div>
</div>

    ${at(e)}

  `}function y(t){if(t==null||t==="")return!0;const e=String(t).trim().toLowerCase();return e===""||e==="information missing"}function N(t,e){const s=!y(t),n=!y(e);return!s&&!n?"Information missing":s&&!n?`${t}–present`:!s&&n?`until ${e}`:`${t}–${e}`}async function Y(t){c.classList.remove("is-hidden"),document.body.style.overflow="hidden",J();try{j();const e=await H(t),a=[...(await P(t)).albumsList||[]].sort((r,i)=>{const o=r.intYearReleased??0;return(i.intYearReleased??0)-o});A.innerHTML=K(e,a)}catch(e){console.log(e),A.innerHTML=`
      <p class="error">Failed to load artist information</p>
    `}finally{X()}}function f(){Z(),c.classList.add("is-hidden"),document.body.style.overflow="",A.innerHTML=""}function B(t){t.key==="Escape"&&f()}function M(t){t.target===c&&f()}function J(){S.addEventListener("click",f),document.addEventListener("keydown",B),c.addEventListener("click",M)}function Z(){S.removeEventListener("click",f),document.removeEventListener("keydown",B),c.removeEventListener("click",M)}function j(){$.classList.remove("is-hidden")}function X(){$.classList.add("is-hidden")}const _=document.getElementById("artistsList");_.addEventListener("click",async t=>{if(t.target.classList.contains("artist-more")){const e=t.target.closest(".artist-card");if(!e)return;const s=e.dataset.id;try{await Y(s)}catch(n){console.log(n)}}});function tt(t){if(!t)return"--:--";const e=Math.floor(t/1e3),s=Math.floor(e/60),n=e%60;return`${s}:${n.toString().padStart(2,"0")}`}function et(t){const e=t.movie||t.strMusicVid||t.strVideo||null;if(!e||typeof e!="string")return null;const s=e.trim();return s||null}function st(t){const{strTrack:e,intDuration:s}=t,n=et(t);return`
    <li class="track">
      <span class="track-name">${e}</span>
      <span class="track-time">${tt(s)}</span>

      ${n?`
        <a
          class="track-link"
          href="${n}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open ${e||"track"} on YouTube">
          <svg class="youtube-icon" width="20" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M23.5 6.2s-.2-1.7-.8-2.4c-.7-.8-1.5-.8-1.9-.9C17.9 2.5 12 2.5 12 2.5h0s-5.9 0-8.8.4c-.4.1-1.2.1-1.9.9-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.7.8 1.6.8 2 .9 1.5.2 6.8.4 8.9.4s5.9 0 8.8-.4c.4-.1 1.2-.1 1.9-.9.6-.7.8-2.4.8-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.5 14.7V7.3l6.3 3.7-6.3 3.7z"
              fill="currentColor"></path>
          </svg>
        </a>`:""}
    </li>
  `}function nt(t){const{strAlbum:e,intYearReleased:s,tracks:n=[]}=t;return`
    <div class="album-card">
      <h3 class="album-title">
        ${e}
        <span class="album-year">(${s})</span>
      </h3>

      <div class="tracks-header">
        <span>Track</span>
        <span>Time</span>
        <span>Link</span>
      </div>

      <ul class="tracks-list">
        ${n.map(a=>st(a)).join("")}
      </ul>
    </div>
  `}function at(t){return!t||!t.length?"":`
    <section class="albums">
      <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
        ${t.map(nt).join("")}
      </div>
    </section>
  `}const rt="data:image/webp;base64,UklGRiQBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDgggAAAAPADAJ0BKhQAFAA+nUieSzAKKgIALATiWYAnTKEdnEL+eA0wABv4heAA/us2w1kwKNArgZqWSY8ASti4AuWvaUuzQIlICLUWc/uA6AD33jV0i7nVbWOZqKML24UWAobzJs/trZd1Vp23QfZJYf/0mLgEpGG7XGf/sDQSrZfqgAAA",it="data:image/webp;base64,UklGRsgAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDggJAAAAHACAJ0BKhQAFAA+nUqfSwKAgAsBOJaQAAPaOgAA/vccAAAAAA==";function ot(t){return Array.isArray(t)?t:t&&typeof t.data<"u"?t.data:[]}function ct(t){return Math.round(Number(t))}function lt(t){const e=ct(t.rating),s=String(t.descr??""),n=String(t.name??"");return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="feedback-rating" data-score="${e}"></div>
        <p class="feedback-text">${s}</p>
        <p class="feedback-author">${n}</p>
      </div>
    </div>
  `}function dt(){const t=document.querySelectorAll(".feedback-rating"),e=20;t.forEach(s=>{const n=parseInt(s.getAttribute("data-score"),10);if(Number.isNaN(n))return;new C(s,{starOn:rt,starOff:it,score:n,readOnly:!0}).init(),s.querySelectorAll("img").forEach(r=>{r.setAttribute("width",String(e)),r.setAttribute("height",String(e))})})}let w=0;function ut(t){const e=t.slides.length,s=t.activeIndex;if(e<=1)return 0;const n=Math.ceil(e/2),a=s<w;return w=s,a||s===e-1?s>=n?2:s===0?0:1:s<n-1?0:s===e-1?2:1}function L(t){const e=t.pagination.bullets;if(!e||e.length===0)return;e.forEach(n=>n.classList.remove("swiper-pagination-bullet-active"));const s=ut(t);e[s]&&e[s].classList.add("swiper-pagination-bullet-active")}function ft(t){const e=t.pagination.bullets;if(!e||e.length<3)return;const s=t.slides.length,n=s>=5?4:Math.floor(s/2);e[0].addEventListener("click",()=>t.slideTo(0)),e[1].addEventListener("click",()=>t.slideTo(n)),e[2].addEventListener("click",()=>t.slideTo(s-1))}async function pt(){const t=document.querySelector(".feedback-swiper .swiper-wrapper");if(t)try{const e=await O(),n=ot(e).slice(0,q);n.length===0?t.innerHTML=`
        <div class="swiper-slide">
          <div class="feedback-card">
            <p class="feedback-text">Відгуки тимчасово недоступні.</p>
          </div>
        </div>
      `:(t.innerHTML=n.map(lt).join(""),dt());const a=new I(".feedback-swiper",{modules:[Q,x],direction:"horizontal",loop:!1,autoHeight:!0,grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{eventsTarget:".feedback-swiper"},navigation:{nextEl:".feedback-nav-next",prevEl:".feedback-nav-prev"},pagination:{el:".feedback-swiper .swiper-pagination",clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",renderBullet(r,i){return r>=3?"":`<span class="${i}" role="button" tabindex="0" aria-label="${["Go to first feedback","Go to middle feedback","Go to last feedback"][r]}"></span>`}}});ft(a),a.on("slideChange",()=>L(a)),L(a)}catch{t.innerHTML=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <p class="feedback-text">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>
        </div>
      </div>
    `}}pt();const g=document.getElementById("toTopBtn");window.onscroll=function(){mt()};function mt(){document.body.scrollTop>300||document.documentElement.scrollTop>300?g.classList.add("show"):g.classList.remove("show")}g.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});
//# sourceMappingURL=index.js.map
