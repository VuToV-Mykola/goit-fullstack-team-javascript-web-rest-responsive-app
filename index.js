import{a as c,S as M,N as I,P as T,R as x}from"./assets/vendor-BstjoptQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(n){if(n.ep)return;n.ep=!0;const r=s(n);fetch(n.href,r)}})();const l="https://sound-wave.b.goit.study/api",Q=1,C=8,D=10;async function U(e=Q,t=C){return(await c.get(`${l}/artists`,{params:{page:e,limit:t}})).data}async function H(e){if(!e)throw new Error("Artist id is required");return(await c.get(`${l}/artists/${e}`)).data}async function q(e){if(!e)throw new Error("Artist id is required");return(await c.get(`${l}/artists/${e}/albums`)).data}async function F(){try{return(await c.get(`${l}/feedbacks`)).data}catch(e){throw new Error("Failed to load feedbacks",{cause:e})}}document.querySelectorAll(".nav-list a").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function O(){const e=document.querySelector("#btn-hero-js");e&&e.addEventListener("click",()=>{const t=document.querySelector("#artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{O()});const P=document.getElementById("artistsList"),p=document.getElementById("loadMoreBtn"),h=document.getElementById("artistsLoader");let m=1;const v=8;async function y(){try{W();const e=await U(m,v),t=e.artists||e;z(t),t.length<v?p.classList.add("is-hidden"):p.classList.remove("is-hidden"),m+=1}catch(e){console.error("Failed to load artists:",e)}finally{K()}}function z(e){if(!Array.isArray(e))return;const t=e.map(({_id:s,strArtist:a,strArtistThumb:n,genres:r,strBiographyEN:i})=>{const u=r.map(f=>`<span class="artist-genre">${f}</span>`).join("");return`
        <li class="artist-card" data-id="${s}">
          <div class="artist-thumb">
            <img src="${n}" alt="${a}" class="artist-img" />
          </div>

          <div class="artist-content">
            <div class="artist-genres">${u}</div>
            <h3 class="artist-name">${a}</h3>
            <p class="artist-bio">${i}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");P.insertAdjacentHTML("beforeend",t)}function W(){h.classList.remove("is-hidden")}function K(){h.classList.add("is-hidden")}y();p.addEventListener("click",y);const A=document.querySelector(".modal-content"),k=document.querySelector(".modal-close-btn"),o=document.querySelector(".backdrop"),w=document.getElementById("modalLoader");function V(e,t=[]){const{strArtist:s,strArtistThumb:a,intFormedYear:n,intDiedYear:r,strGender:i,intMembers:u,strCountry:f,strBiographyEN:S,genres:B}=e;return`
    <h2 class="artist-title">${s}</h2>

<div class="artist-container">
  <div class="artist-image">
    <img src="${a}" alt="${s||"Artist"}" />
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${n}-${r??"present"}
</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${i}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${u}</span>
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
      ${B.map($=>`<li class="info-genre">${$}</li>`).join("")}
    </ul>
   </div>
  </div>
</div>

    ${ee(t)}

  `}async function N(e){o.classList.remove("is-hidden"),document.body.style.overflow="hidden",R();try{G();const t=await H(e),a=(await q(e)).albumsList||[];A.innerHTML=V(t,a)}catch(t){console.log(t),A.innerHTML=`
      <p class="error">Failed to load artist information</p>
    `}finally{J()}}function d(){Y(),o.classList.add("is-hidden"),document.body.style.overflow="",A.innerHTML=""}function L(e){e.key==="Escape"&&d()}function E(e){e.target===o&&d()}function R(){k.addEventListener("click",d),document.addEventListener("keydown",L),o.addEventListener("click",E)}function Y(){k.removeEventListener("click",d),document.removeEventListener("keydown",L),o.removeEventListener("click",E)}function G(){w.classList.remove("is-hidden")}function J(){w.classList.add("is-hidden")}const Z=document.getElementById("artistsList");Z.addEventListener("click",async e=>{if(e.target.classList.contains("artist-more")){const t=e.target.closest(".artist-card");if(!t)return;const s=t.dataset.id;try{await N(s)}catch(a){console.log(a)}}});function j(e){if(!e)return"--:--";const t=Math.floor(e/1e3),s=Math.floor(t/60),a=t%60;return`${s}:${a.toString().padStart(2,"0")}`}function X(e){const{strTrack:t,intDuration:s,movie:a}=e;return`
    <li class="track">
      <span class="track-name">${t}</span>
      <span class="track-time">${j(s)}</span>

      ${a?`
        <a
          class="track-link"
          href="${a}"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open track on YouTube">
          <svg class="youtube-icon" width="20" height="14" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M23.5 6.2s-.2-1.7-.8-2.4c-.7-.8-1.5-.8-1.9-.9C17.9 2.5 12 2.5 12 2.5h0s-5.9 0-8.8.4c-.4.1-1.2.1-1.9.9-.6.7-.8 2.4-.8 2.4S0 8.1 0 10v1.9c0 1.9.2 3.8.2 3.8s.2 1.7.8 2.4c.7.8 1.6.8 2 .9 1.5.2 6.8.4 8.9.4s5.9 0 8.8-.4c.4-.1 1.2-.1 1.9-.9.6-.7.8-2.4.8-2.4s.2-1.9.2-3.8V10c0-1.9-.2-3.8-.2-3.8zM9.5 14.7V7.3l6.3 3.7-6.3 3.7z"
              fill="currentColor" />
          </svg>
        </a>`:""}
    </li>
  `}function _(e){const{strAlbum:t,intYearReleased:s,tracks:a=[]}=e;return`
    <div class="album-card">
      <h3 class="album-title">
        ${t}
        <span class="album-year">(${s})</span>
      </h3>

      <div class="tracks-header">
        <span>Track</span>
        <span>Time</span>
        <span>Link</span>
      </div>

      <ul class="tracks-list">
        ${a.map(X).join("")}
      </ul>
    </div>
  `}function ee(e){return!e||!e.length?"":`
    <section class="albums">
      <h2 class="albums-title">Albums</h2>
      <div class="albums-list">
        ${e.map(_).join("")}
      </div>
    </section>
  `}const te="data:image/webp;base64,UklGRiQBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDgggAAAAPADAJ0BKhQAFAA+nUieSzAKKgIALATiWYAnTKEdnEL+eA0wABv4heAA/us2w1kwKNArgZqWSY8ASti4AuWvaUuzQIlICLUWc/uA6AD33jV0i7nVbWOZqKML24UWAobzJs/trZd1Vp23QfZJYf/0mLgEpGG7XGf/sDQSrZfqgAAA",se="data:image/webp;base64,UklGRsgAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDggJAAAAHACAJ0BKhQAFAA+nUqfSwKAgAsBOJaQAAPaOgAA/vccAAAAAA==";function ae(e){return Array.isArray(e)?e:e&&typeof e.data<"u"?e.data:[]}function ne(e){return Math.round(Number(e))}function re(e){const t=ne(e.rating),s=String(e.descr??""),a=String(e.name??"");return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="feedback-rating" data-score="${t}"></div>
        <p class="feedback-text">${s}</p>
        <p class="feedback-author">${a}</p>
      </div>
    </div>
  `}function ie(){document.querySelectorAll(".feedback-rating").forEach(t=>{const s=parseInt(t.getAttribute("data-score"),10);if(Number.isNaN(s))return;new x(t,{starOn:te,starOff:se,score:s,readOnly:!0}).init()})}let g=0;function oe(e){const t=e.slides.length,s=e.activeIndex;if(t<=1)return 0;const a=Math.ceil(t/2),n=s<g;return g=s,n||s===t-1?s>=a?2:s===0?0:1:s<a-1?0:s===t-1?2:1}function b(e){const t=e.pagination.bullets;if(!t||t.length===0)return;t.forEach(a=>a.classList.remove("swiper-pagination-bullet-active"));const s=oe(e);t[s]&&t[s].classList.add("swiper-pagination-bullet-active")}function ce(e){const t=e.pagination.bullets;if(!t||t.length<3)return;const s=e.slides.length,a=s>=5?4:Math.floor(s/2);t[0].addEventListener("click",()=>e.slideTo(0)),t[1].addEventListener("click",()=>e.slideTo(a)),t[2].addEventListener("click",()=>e.slideTo(s-1))}async function le(){const e=document.querySelector(".feedback-swiper .swiper-wrapper");if(e)try{const t=await F(),a=ae(t).slice(0,D);a.length===0?e.innerHTML=`
        <div class="swiper-slide">
          <div class="feedback-card">
            <p class="feedback-text">Відгуки тимчасово недоступні.</p>
          </div>
        </div>
      `:(e.innerHTML=a.map(re).join(""),ie());const n=new M(".feedback-swiper",{modules:[I,T],direction:"horizontal",loop:!1,autoHeight:!0,grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{eventsTarget:".feedback-swiper"},navigation:{nextEl:".feedback-nav-next",prevEl:".feedback-nav-prev"},pagination:{el:".feedback-swiper .swiper-pagination",clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",renderBullet(r,i){return r>=3?"":`<span class="${i}" role="button" tabindex="0"></span>`}}});ce(n),n.on("slideChange",()=>b(n)),b(n)}catch{e.innerHTML=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <p class="feedback-text">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>
        </div>
      </div>
    `}}le();
//# sourceMappingURL=index.js.map
