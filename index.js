import{a as f,S as B,N as I,P as M,R as F}from"./assets/vendor-BstjoptQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&a(r)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function a(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();const g="https://sound-wave.b.goit.study/api",Q=1,x=8,A=10;async function $(e=Q,t=x){return(await f.get(`${g}/artists`,{params:{page:e,limit:t}})).data}async function T(e){if(!e)throw new Error("Artist id is required");return(await f.get(`${g}/artists/${e}`)).data}async function C(){try{return(await f.get(`${g}/feedbacks`)).data}catch(e){throw new Error("Failed to load feedbacks",{cause:e})}}document.querySelectorAll(".nav-list a").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function H(){const e=document.querySelector("#btn-hero-js");e&&e.addEventListener("click",()=>{const t=document.querySelector("#artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{H()});document.getElementById("artistsList");const d=document.getElementById("loadMoreBtn"),y=document.getElementById("artistsLoader");let b=1;const m=8;async function k(){try{q();const e=await $(b,m),t=e.artists||e;U(t),t.length<m?d.classList.add("is-hidden"):d.classList.remove("is-hidden"),b+=1}catch(e){console.error("Failed to load artists:",e)}finally{P()}}function U(e){if(!Array.isArray(e))return;const t=e.map(({_id:n,strArtist:a,strArtistThumb:s,genres:i,strBiographyEN:r})=>{const c=i.map(l=>`<span class="artist-genre">${l}</span>`).join("");return`
        <li class="artist-card" data-id="${n}">
          <div class="artist-thumb">
            <img src="${s}" alt="${a}" class="artist-img" />
          </div>

          <div class="artist-content">
            <div class="artist-genres">${c}</div>
            <h3 class="artist-name">${a}</h3>
            <p class="artist-bio">${r}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");artistsList.insertAdjacentHTML("beforeend",t)}function q(){y.classList.remove("is-hidden")}function P(){y.classList.add("is-hidden")}k();d.addEventListener("click",k);const u=document.querySelector(".modal-content"),D=document.querySelector(".modal-close-btn"),o=document.querySelector(".backdrop"),L=document.getElementById("modalLoader");function O(e){const{strArtist:t,strArtistThumb:n,intFormedYear:a,intDiedYear:s,strGender:i,intMembers:r,strCountry:c,strBiographyEN:l,genres:E}=e;return`
    <h2 class="artist-name">${t}</h2>

<div class="artist-container">
  <div class="artist-image">
    <img src="${n}" alt="${t||"Artist"}" />
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${a}-${s===null?"present":s}</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${i}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${r}</span>
    </div>

    <div class="info-row">
      <span class="label">Country</span>
      <span class="value">${c}</span>
    </div>

    <div class="info-row info-row--bio">
      <span class="label">Biography</span>
      <span class="value">${l}</span>
    </div>

       <div class="info-row info-row--genres">
    <ul class="info-genres">
      ${E.map(S=>`<li class="info-genre">${S}</li>`).join("")}
    </ul>
   </div>
  </div>
</div>


  `}async function W(e){o.classList.remove("is-hidden"),document.body.style.overflow="hidden";try{w();const t=await T(e);u.innerHTML=O(t)}catch(t){console.log(t),u.innerHTML=`
      <p class="error">Failed to load artist information</p>
    `}finally{z()}}function p(){o.classList.add("is-hidden"),document.body.style.overflow="",u.innerHTML=""}D.addEventListener("click",p);document.addEventListener("keydown",e=>{e.key==="Escape"&&p()});o.addEventListener("click",e=>{e.target===o&&p()});function w(){L.classList.remove("is-hidden")}function z(){L.classList.add("is-hidden")}document.getElementById("artistsList");artistsList.addEventListener("click",async e=>{if(e.target.classList.contains("artist-more")){const t=e.target.closest(".artist-card");if(!t)return;const n=t.dataset.id;o.classList.remove("is-hidden"),document.body.style.overflow="hidden";const a=document.querySelector(".modal-content");a.innerHTML="",w();try{await W(n)}catch(s){console.log(s)}}});const K="data:image/webp;base64,UklGRiQBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDgggAAAAPADAJ0BKhQAFAA+nUieSzAKKgIALATiWYAnTKEdnEL+eA0wABv4heAA/us2w1kwKNArgZqWSY8ASti4AuWvaUuzQIlICLUWc/uA6AD33jV0i7nVbWOZqKML24UWAobzJs/trZd1Vp23QfZJYf/0mLgEpGG7XGf/sDQSrZfqgAAA",N="data:image/webp;base64,UklGRsgAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDggJAAAAHACAJ0BKhQAFAA+nUqfSwKAgAsBOJaQAAPaOgAA/vccAAAAAA==";function G(e){return Array.isArray(e)?(console.log("[feedback] getFeedbacksList: відповідь — масив, length =",e.length),e):e&&typeof e.data<"u"?(console.log("[feedback] getFeedbacksList: відповідь — об'єкт .data, length =",e.data.length),e.data):(console.log("[feedback] getFeedbacksList: порожній результат"),[])}function R(e){return Math.round(Number(e))}function V(e){const t=R(e.rating),n=String(e.descr??""),a=String(e.name??"");return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="feedback-rating" data-score="${t}"></div>
        <p class="feedback-text">${n}</p>
        <p class="feedback-author">${a}</p>
      </div>
    </div>
  `}function J(){const e=document.querySelectorAll(".feedback-rating");console.log("[feedback] initStars: знайдено елементів рейтингу =",e.length),e.forEach(t=>{const n=parseInt(t.getAttribute("data-score"),10);if(Number.isNaN(n))return;new F(t,{starOn:K,starOff:N,score:n,readOnly:!0}).init()})}let v=0;function Y(e){const t=e.slides.length,n=e.activeIndex;if(t<=1)return 0;const a=Math.ceil(t/2),s=n<v;return v=n,s||n===t-1?n>=a?2:n===0?0:1:n<a-1?0:n===t-1?2:1}function h(e){const t=e.pagination.bullets;if(!t||t.length===0)return;t.forEach(a=>a.classList.remove("swiper-pagination-bullet-active"));const n=Y(e);t[n]&&t[n].classList.add("swiper-pagination-bullet-active")}function Z(e){const t=e.pagination.bullets;if(!t||t.length<3)return;const n=e.slides.length,a=n>=5?4:Math.floor(n/2);t[0].addEventListener("click",()=>e.slideTo(0)),t[1].addEventListener("click",()=>e.slideTo(a)),t[2].addEventListener("click",()=>e.slideTo(n-1))}async function X(){console.log("[feedback] initFeedbackSection: старт");const e=document.querySelector(".feedback-swiper .swiper-wrapper");if(!e){console.warn("[feedback] initFeedbackSection: не знайдено .feedback-swiper .swiper-wrapper, вихід");return}try{console.log("[feedback] fetchFeedbacks: запит до API...");const t=await C();console.log("[feedback] fetchFeedbacks: відповідь отримано");const a=G(t).slice(0,A);console.log("[feedback] відгуків після обрізки (limit = "+A+"):",a.length),a.length===0?(console.log("[feedback] показ повідомлення «Відгуки тимчасово недоступні»"),e.innerHTML=`
        <div class="swiper-slide">
          <div class="feedback-card">
            <p class="feedback-text">Відгуки тимчасово недоступні.</p>
          </div>
        </div>
      `):(e.innerHTML=a.map(V).join(""),console.log("[feedback] вставлено слайдів:",a.length),J()),console.log("[feedback] ініціалізація Swiper...");const s=new B(".feedback-swiper",{modules:[I,M],direction:"horizontal",loop:!1,autoHeight:!0,grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{eventsTarget:".feedback-swiper"},navigation:{nextEl:".feedback-nav-next",prevEl:".feedback-nav-prev"},pagination:{el:".feedback-swiper .swiper-pagination",clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",renderBullet(i,r){return i>=3?"":`<span class="${r}" role="button" tabindex="0"></span>`}}});Z(s),s.on("slideChange",()=>h(s)),h(s),console.log("[feedback] initFeedbackSection: успішно завершено, слайдів =",s.slides.length)}catch(t){console.error("[feedback] Помилка завантаження відгуків:",t),e.innerHTML=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <p class="feedback-text">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>
        </div>
      </div>
    `,console.log("[feedback] показано повідомлення про помилку користувачу")}}console.log("[feedback] підключено, виклик initFeedbackSection()");X();
//# sourceMappingURL=index.js.map
