import{a as m}from"./assets/vendor-D5GkNzM3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function a(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=a(s);fetch(s.href,r)}})();const f="https://sound-wave.b.goit.study/api",A=1,$=8;async function M(t=A,e=$){return(await m.get(`${f}/artists`,{params:{page:t,limit:e}})).data}async function I(t){if(!t)throw new Error("Artist id is required");return(await m.get(`${f}/artists/${t}`)).data}async function B(t){if(!t)throw new Error("Artist id is required");return(await m.get(`${f}/artists/${t}/albums`)).data}document.querySelectorAll(".nav-list a").forEach(t=>{t.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function S(){const t=document.querySelector("#btn-hero-js");t&&t.addEventListener("click",()=>{const e=document.querySelector("#artists");e&&e.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{S()});document.getElementById("artistsList");const l=document.getElementById("loadMoreBtn"),h=document.getElementById("artistsLoader");let y=1;const v=8;async function g(){try{q();const t=await M(y,v),e=t.artists||t;k(e),e.length<v?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),y+=1}catch(t){console.error("Failed to load artists:",t)}finally{T()}}function k(t){if(!Array.isArray(t))return;const e=t.map(({_id:a,strArtist:n,strArtistThumb:s,genres:r,strBiographyEN:o})=>{const c=r.map(d=>`<span class="artist-genre">${d}</span>`).join("");return`
        <li class="artist-card" data-id="${a}">
          <div class="artist-thumb">
            <img src="${s}" alt="${n}" class="artist-img" />
          </div>

          <div class="artist-content">
            <div class="artist-genres">${c}</div>
            <h3 class="artist-name">${n}</h3>
            <p class="artist-bio">${o}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");artistsList.insertAdjacentHTML("beforeend",e)}function q(){h.classList.remove("is-hidden")}function T(){h.classList.add("is-hidden")}g();l.addEventListener("click",g);await B(artistId);const u=document.querySelector(".modal-content"),P=document.querySelector(".modal-close-btn"),i=document.querySelector(".backdrop"),L=document.getElementById("modalLoader");function C(t){const{strArtist:e,strArtistThumb:a,intFormedYear:n,intDiedYear:s,strGender:r,intMembers:o,strCountry:c,strBiographyEN:d,genres:w}=t;return`
    <h2 class="artist-name">${e}</h2>

<div class="artist-container">
  <div class="artist-image">
    <img src="${a}" alt="${e||"Artist"}" />
  </div>

  <div class="artist-info">
    <div class="info-row">
      <span class="label">Years active</span>
      <span class="value">${n}-${s===null?"present":s}</span>
    </div>

    <div class="info-row">
      <span class="label">Sex</span>
      <span class="value">${r}</span>
    </div>

    <div class="info-row">
      <span class="label">Members</span>
      <span class="value">${o}</span>
    </div>

    <div class="info-row">
      <span class="label">Country</span>
      <span class="value">${c}</span>
    </div>

    <div class="info-row info-row--bio">
      <span class="label">Biography</span>
      <span class="value">${d}</span>
    </div>

       <div class="info-row info-row--genres">
    <ul class="info-genres">
      ${w.map(E=>`<li class="info-genre">${E}</li>`).join("")}
    </ul>
   </div>
  </div>
</div>


  `}async function O(t){i.classList.remove("is-hidden"),document.body.style.overflow="hidden";try{b();const e=await I(t);u.innerHTML=C(e)}catch(e){console.log(e),u.innerHTML=`
      <p class="error">Failed to load artist information</p>
    `}finally{j()}}function p(){i.classList.add("is-hidden"),document.body.style.overflow="",u.innerHTML=""}P.addEventListener("click",p);document.addEventListener("keydown",t=>{t.key==="Escape"&&p()});i.addEventListener("click",t=>{t.target===i&&p()});function b(){L.classList.remove("is-hidden")}function j(){L.classList.add("is-hidden")}document.getElementById("artistsList");artistsList.addEventListener("click",async t=>{if(t.target.classList.contains("artist-more")){const e=t.target.closest(".artist-card");if(!e)return;const a=e.dataset.id;i.classList.remove("is-hidden"),document.body.style.overflow="hidden";const n=document.querySelector(".modal-content");n.innerHTML="",b();try{await O(a)}catch(s){console.log(s)}}});
//# sourceMappingURL=index.js.map
