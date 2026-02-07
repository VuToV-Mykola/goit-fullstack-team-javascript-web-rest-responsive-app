import{a as p}from"./assets/vendor-D5GkNzM3.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const g="https://sound-wave.b.goit.study/api",h=1,y=8;async function L(t=h,s=y){return(await p.get(`${g}/artists`,{params:{page:t,limit:s}})).data}document.querySelectorAll(".nav-list a").forEach(t=>{t.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function v(){const t=document.querySelector("#btn-hero-js");t&&t.addEventListener("click",()=>{const s=document.querySelector("#artists");s&&s.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{v()});document.getElementById("artistsList");const a=document.getElementById("loadMoreBtn"),l=document.getElementById("artistsLoader");let c=1;const d=8;async function u(){try{A();const t=await L(c,d),s=t.artists||t;E(s),s.length<d?a.classList.add("is-hidden"):a.classList.remove("is-hidden"),c+=1}catch(t){console.error("Failed to load artists:",t)}finally{b()}}function E(t){if(!Array.isArray(t))return;const s=t.map(({_id:o,strArtist:n,strArtistThumb:e,genres:r,strBiographyEN:i})=>{const f=r.map(m=>`<span class="artist-genre">${m}</span>`).join("");return`
        <li class="artist-card" data-id="${o}">
          <div class="artist-thumb">
            <img src="${e}" alt="${n}" class="artist-img" />
          </div>

          <div class="artist-content">
            <div class="artist-genres">${f}</div>
            <h3 class="artist-name">${n}</h3>
            <p class="artist-bio">${i}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");artistsList.insertAdjacentHTML("beforeend",s)}function A(){l.classList.remove("is-hidden")}function b(){l.classList.add("is-hidden")}u();a.addEventListener("click",u);artistsList.addEventListener("click",t=>{const s=t.target.closest(".artist-more");if(!s)return;const o=s.closest(".artist-card");o&&openArtistModal(o.dataset.id)});
//# sourceMappingURL=index.js.map
