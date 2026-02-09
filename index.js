import{a as l,S as M,N as I,P as T,R as Q}from"./assets/vendor-CoX6hYw-.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const d="https://sound-wave.b.goit.study/api",x=1,C=8,D=10;async function U(t=x,e=C){return(await l.get(`${d}/artists`,{params:{page:t,limit:e}})).data}async function q(t){if(!t)throw new Error("Artist id is required");return(await l.get(`${d}/artists/${t}`)).data}async function H(t){if(!t)throw new Error("Artist id is required");return(await l.get(`${d}/artists/${t}/albums`)).data}async function F(){try{return(await l.get(`${d}/feedbacks`)).data}catch(t){throw new Error("Failed to load feedbacks",{cause:t})}}document.querySelectorAll(".nav-list a").forEach(t=>{t.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function O(){const t=document.querySelector("#btn-hero-js");t&&t.addEventListener("click",()=>{const e=document.querySelector("#artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{O()});const P=document.getElementById("artistsList"),p=document.getElementById("loadMoreBtn"),h=document.getElementById("artistsLoader");let m=1;const v=8;async function y(){try{G();const t=await U(m,v),e=t.artists||t;z(e),e.length<v?p.classList.add("is-hidden"):p.classList.remove("is-hidden"),m+=1}catch(t){console.error("Failed to load artists:",t)}finally{W()}}function z(t){if(!Array.isArray(t))return;const e=t.map(({_id:s,strArtist:a,strArtistThumb:n,genres:r,strBiographyEN:i})=>{const c=r.map(f=>`<span class="artist-genre">${f}</span>`).join("");return`
        <li class="artist-card" data-id="${s}">
          <div class="artist-thumb">
            <img src="${n}" alt="${a}" class="artist-img" loading="lazy">
          </div>

          <div class="artist-content">
            <div class="artist-genres">${c}</div>
            <h3 class="artist-name">${a}</h3>
            <p class="artist-bio">${i}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");P.insertAdjacentHTML("beforeend",e)}function G(){h.classList.remove("is-hidden")}function W(){h.classList.add("is-hidden")}y();p.addEventListener("click",y);const A=document.querySelector(".modal-content"),k=document.querySelector(".modal-close-btn"),o=document.querySelector(".backdrop"),w=document.getElementById("modalLoader");function K(t,e=[]){const{strArtist:s,strArtistThumb:a,intFormedYear:n,intDiedYear:r,strGender:i,intMembers:c,strCountry:f,strBiographyEN:S,genres:$}=t;return`
    <h2 class="artist-title">${s}</h2>

<div class="artist-container">
  <div class="artist-image">
    <img src="${a}" alt="${s||"Artist"}">
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${R(n,r)}
</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${i}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${c}</span>
    </div>

    <div class="info-row">
      <span class="label">Country</span>
      <span class="value">${f}</span>
    </div>

    <div class="info-row info-row--bio">
      <span class="label">Biography</span>
      <span class="value">${S}</span>
    </div>

       <div class="info-row info-row--genres">
    <ul class="info-genres">
      ${$.map(B=>`<li class="info-genre">${B}</li>`).join("")}
    </ul>
   </div>
  </div>
</div>

    ${et(e)}

  `}function R(t,e){return!t&&!e?"Information missing":t&&!e?`${t}–present`:!t&&e?`until ${e}`:`${t}–${e}`}async function V(t){o.classList.remove("is-hidden"),document.body.style.overflow="hidden",N();try{Z();const e=await q(t),a=(await H(t)).albumsList||[];A.innerHTML=K(e,a)}catch(e){console.log(e),A.innerHTML=`
      <p class="error">Failed to load artist information</p>
    `}finally{j()}}function u(){J(),o.classList.add("is-hidden"),document.body.style.overflow="",A.innerHTML=""}function L(t){t.key==="Escape"&&u()}function E(t){t.target===o&&u()}function N(){k.addEventListener("click",u),document.addEventListener("keydown",L),o.addEventListener("click",E)}function J(){k.removeEventListener("click",u),document.removeEventListener("keydown",L),o.removeEventListener("click",E)}function Z(){w.classList.remove("is-hidden")}function j(){w.classList.add("is-hidden")}const X=document.getElementById("artistsList");X.addEventListener("click",async t=>{if(t.target.classList.contains("artist-more")){const e=t.target.closest(".artist-card");if(!e)return;const s=e.dataset.id;try{await V(s)}catch(a){console.log(a)}}});function _(t){if(!t)return"--:--";const e=Math.floor(t/1e3),s=Math.floor(e/60),a=e%60;return`${s}:${a.toString().padStart(2,"0")}`}function Y(t){const{strTrack:e,intDuration:s,movie:a}=t;return`
    <li class="track">
      <span class="track-name">${e}</span>
      <span class="track-time">${_(s)}</span>

      ${a?`
        <a
          class="track-link"
          href="${a}"
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
  `}function tt(t){const{strAlbum:e,intYearReleased:s,tracks:a=[]}=t;return`
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
        ${a.map(Y).join("")}
      </ul>
    </div>
  `}function et(t){return!t||!t.length?"":`
    <section class="albums">
      <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
        ${t.map(tt).join("")}
      </div>
    </section>
  `}const st="data:image/webp;base64,UklGRiQBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDgggAAAAPADAJ0BKhQAFAA+nUieSzAKKgIALATiWYAnTKEdnEL+eA0wABv4heAA/us2w1kwKNArgZqWSY8ASti4AuWvaUuzQIlICLUWc/uA6AD33jV0i7nVbWOZqKML24UWAobzJs/trZd1Vp23QfZJYf/0mLgEpGG7XGf/sDQSrZfqgAAA",at="data:image/webp;base64,UklGRsgAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDggJAAAAHACAJ0BKhQAFAA+nUqfSwKAgAsBOJaQAAPaOgAA/vccAAAAAA==";function nt(t){return Array.isArray(t)?t:t&&typeof t.data<"u"?t.data:[]}function rt(t){return Math.round(Number(t))}function it(t){const e=rt(t.rating),s=String(t.descr??""),a=String(t.name??"");return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="feedback-rating" data-score="${e}"></div>
        <p class="feedback-text">${s}</p>
        <p class="feedback-author">${a}</p>
      </div>
    </div>
  `}function ot(){const t=document.querySelectorAll(".feedback-rating"),e=20;t.forEach(s=>{const a=parseInt(s.getAttribute("data-score"),10);if(Number.isNaN(a))return;new Q(s,{starOn:st,starOff:at,score:a,readOnly:!0}).init(),s.querySelectorAll("img").forEach(r=>{r.setAttribute("width",String(e)),r.setAttribute("height",String(e))})})}let g=0;function ct(t){const e=t.slides.length,s=t.activeIndex;if(e<=1)return 0;const a=Math.ceil(e/2),n=s<g;return g=s,n||s===e-1?s>=a?2:s===0?0:1:s<a-1?0:s===e-1?2:1}function b(t){const e=t.pagination.bullets;if(!e||e.length===0)return;e.forEach(a=>a.classList.remove("swiper-pagination-bullet-active"));const s=ct(t);e[s]&&e[s].classList.add("swiper-pagination-bullet-active")}function lt(t){const e=t.pagination.bullets;if(!e||e.length<3)return;const s=t.slides.length,a=s>=5?4:Math.floor(s/2);e[0].addEventListener("click",()=>t.slideTo(0)),e[1].addEventListener("click",()=>t.slideTo(a)),e[2].addEventListener("click",()=>t.slideTo(s-1))}async function dt(){const t=document.querySelector(".feedback-swiper .swiper-wrapper");if(t)try{const e=await F(),a=nt(e).slice(0,D);a.length===0?t.innerHTML=`
        <div class="swiper-slide">
          <div class="feedback-card">
            <p class="feedback-text">Відгуки тимчасово недоступні.</p>
          </div>
        </div>
      `:(t.innerHTML=a.map(it).join(""),ot());const n=new M(".feedback-swiper",{modules:[I,T],direction:"horizontal",loop:!1,autoHeight:!0,grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{eventsTarget:".feedback-swiper"},navigation:{nextEl:".feedback-nav-next",prevEl:".feedback-nav-prev"},pagination:{el:".feedback-swiper .swiper-pagination",clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",renderBullet(r,i){return r>=3?"":`<span class="${i}" role="button" tabindex="0" aria-label="${["Go to first feedback","Go to middle feedback","Go to last feedback"][r]}"></span>`}}});lt(n),n.on("slideChange",()=>b(n)),b(n)}catch{t.innerHTML=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <p class="feedback-text">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>
        </div>
      </div>
    `}}dt();
//# sourceMappingURL=index.js.map
