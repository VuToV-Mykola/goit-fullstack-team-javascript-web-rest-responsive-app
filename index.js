import{a as d,S as w,N as E,P as L,R as S}from"./assets/vendor-BstjoptQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(a){if(a.ep)return;a.ep=!0;const r=s(a);fetch(a.href,r)}})();const u="https://sound-wave.b.goit.study/api",B=1,I=8,f=10;async function F(e=B,t=I){return(await d.get(`${u}/artists`,{params:{page:e,limit:t}})).data}async function Q(e){if(!e)throw new Error("Artist id is required");return(await d.get(`${u}/artists/${e}`)).data}async function x(){try{return(await d.get(`${u}/feedbacks`)).data}catch(e){throw new Error("Failed to load feedbacks",{cause:e})}}document.querySelectorAll(".nav-list a").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function $(){const e=document.querySelector("#btn-hero-js");e&&e.addEventListener("click",()=>{const t=document.querySelector("#artists");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{$()});const A=document.querySelector(".modal-content");function M(e){const{strArtist:t,strArtistThumb:s,intFormedYear:n,intDiedYear:a,strGender:r,intMembers:i,strCountry:o,strBiographyEN:c,genres:k}=e;return`
    <h2 class="artist-name">${t}</h2>

  <div class="artist-image">
    <img src="${s}" alt="${t||"Artist"}" />
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${n}-${a===null?"present":a}</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${r}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${i}</span>
    </div>

    <div class="info-row">
      <span class="label">Country</span>
      <span class="value">${o}</span>
    </div>

    <div class="info-row">
      <span class="label">Biography</span>
      <span class="value">${c}</span>
    </div>
  </div>

    <ul class="info-genres">
      ${k.map(y=>`<li class="info-genres-item">${y}</li>`).join("")}
    </ul>
  `}async function T(e){try{const t=await Q(e);A.innerHTML=M(t)}catch(t){console.log(t),A.innerHTML=`
      <p class="error">Failed to load artist information</p>
    `}}document.getElementById("artistsList");const l=document.getElementById("loadMoreBtn"),v=document.getElementById("artistsLoader");let p=1;const g=8;async function h(){try{C();const e=await F(p,g),t=e.artists||e;U(t),t.length<g?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),p+=1}catch(e){console.error("Failed to load artists:",e)}finally{H()}}function U(e){if(!Array.isArray(e))return;const t=e.map(({_id:s,strArtist:n,strArtistThumb:a,genres:r,strBiographyEN:i})=>{const o=r.map(c=>`<span class="artist-genre">${c}</span>`).join("");return`
        <li class="artist-card" data-id="${s}">
          <div class="artist-thumb">
            <img src="${a}" alt="${n}" class="artist-img" />
          </div>

          <div class="artist-content">
            <div class="artist-genres">${o}</div>
            <h3 class="artist-name">${n}</h3>
            <p class="artist-bio">${i}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");artistsList.insertAdjacentHTML("beforeend",t)}function C(){v.classList.remove("is-hidden")}function H(){v.classList.add("is-hidden")}h();l.addEventListener("click",h);artistsList.addEventListener("click",e=>{const t=e.target.closest(".artist-more");if(!t)return;const s=t.closest(".artist-card");s&&T(s.dataset.id)});const P="data:image/webp;base64,UklGRiQBAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDgggAAAAPADAJ0BKhQAFAA+nUieSzAKKgIALATiWYAnTKEdnEL+eA0wABv4heAA/us2w1kwKNArgZqWSY8ASti4AuWvaUuzQIlICLUWc/uA6AD33jV0i7nVbWOZqKML24UWAobzJs/trZd1Vp23QfZJYf/0mLgEpGG7XGf/sDQSrZfqgAAA",D="data:image/webp;base64,UklGRsgAAABXRUJQVlA4WAoAAAAQAAAAEwAAEwAAQUxQSH0AAAABcEhte918CEX4EYpQhCDEYEH4DVaDzmAzKMIQfoQgvLvkUoSImAD1b3fNG2xzB+xTBtRlJgP4TPxFZ0m5+HHSfB9e8mbBhXW/wuVzLinVsZr1bzESq9ppJKlbRkrvOfLq1ZHaWQFiywGwtgpUXyQ5UFrOaWrag9ySadAkCQBWUDggJAAAAHACAJ0BKhQAFAA+nUqfSwKAgAsBOJaQAAPaOgAA/vccAAAAAA==";function O(e){return Array.isArray(e)?(console.log("[feedback] getFeedbacksList: відповідь — масив, length =",e.length),e):e&&typeof e.data<"u"?(console.log("[feedback] getFeedbacksList: відповідь — об'єкт .data, length =",e.data.length),e.data):(console.log("[feedback] getFeedbacksList: порожній результат"),[])}function q(e){return Math.round(Number(e))}function W(e){const t=q(e.rating),s=String(e.descr??""),n=String(e.name??"");return`
    <div class="swiper-slide">
      <div class="feedback-card">
        <div class="feedback-rating" data-score="${t}"></div>
        <p class="feedback-text">${s}</p>
        <p class="feedback-author">${n}</p>
      </div>
    </div>
  `}function z(){const e=document.querySelectorAll(".feedback-rating");console.log("[feedback] initStars: знайдено елементів рейтингу =",e.length),e.forEach(t=>{const s=parseInt(t.getAttribute("data-score"),10);if(Number.isNaN(s))return;new S(t,{starOn:P,starOff:D,score:s,readOnly:!0}).init()})}let b=0;function K(e){const t=e.slides.length,s=e.activeIndex;if(t<=1)return 0;const n=Math.ceil(t/2),a=s<b;return b=s,a||s===t-1?s>=n?2:s===0?0:1:s<n-1?0:s===t-1?2:1}function m(e){const t=e.pagination.bullets;if(!t||t.length===0)return;t.forEach(n=>n.classList.remove("swiper-pagination-bullet-active"));const s=K(e);t[s]&&t[s].classList.add("swiper-pagination-bullet-active")}function N(e){const t=e.pagination.bullets;if(!t||t.length<3)return;const s=e.slides.length,n=s>=5?4:Math.floor(s/2);t[0].addEventListener("click",()=>e.slideTo(0)),t[1].addEventListener("click",()=>e.slideTo(n)),t[2].addEventListener("click",()=>e.slideTo(s-1))}async function G(){console.log("[feedback] initFeedbackSection: старт");const e=document.querySelector(".feedback-swiper .swiper-wrapper");if(!e){console.warn("[feedback] initFeedbackSection: не знайдено .feedback-swiper .swiper-wrapper, вихід");return}try{console.log("[feedback] fetchFeedbacks: запит до API...");const t=await x();console.log("[feedback] fetchFeedbacks: відповідь отримано");const n=O(t).slice(0,f);console.log("[feedback] відгуків після обрізки (limit = "+f+"):",n.length),n.length===0?(console.log("[feedback] показ повідомлення «Відгуки тимчасово недоступні»"),e.innerHTML=`
        <div class="swiper-slide">
          <div class="feedback-card">
            <p class="feedback-text">Відгуки тимчасово недоступні.</p>
          </div>
        </div>
      `):(e.innerHTML=n.map(W).join(""),console.log("[feedback] вставлено слайдів:",n.length),z()),console.log("[feedback] ініціалізація Swiper...");const a=new w(".feedback-swiper",{modules:[E,L],direction:"horizontal",loop:!1,autoHeight:!0,grabCursor:!0,simulateTouch:!0,keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},mousewheel:{eventsTarget:".feedback-swiper"},navigation:{nextEl:".feedback-nav-next",prevEl:".feedback-nav-prev"},pagination:{el:".feedback-swiper .swiper-pagination",clickable:!1,bulletClass:"swiper-pagination-bullet",bulletActiveClass:"swiper-pagination-bullet-active",renderBullet(r,i){return r>=3?"":`<span class="${i}" role="button" tabindex="0"></span>`}}});N(a),a.on("slideChange",()=>m(a)),m(a),console.log("[feedback] initFeedbackSection: успішно завершено, слайдів =",a.slides.length)}catch(t){console.error("[feedback] Помилка завантаження відгуків:",t),e.innerHTML=`
      <div class="swiper-slide">
        <div class="feedback-card">
          <p class="feedback-text">Не вдалося завантажити відгуки. Спробуйте пізніше.</p>
        </div>
      </div>
    `,console.log("[feedback] показано повідомлення про помилку користувачу")}}console.log("[feedback] підключено, виклик initFeedbackSection()");G();
//# sourceMappingURL=index.js.map
