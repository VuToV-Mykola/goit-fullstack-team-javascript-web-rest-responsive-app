import{a as m}from"./assets/vendor-D5GkNzM3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=n(s);fetch(s.href,r)}})();const f="https://sound-wave.b.goit.study/api",L=1,b=8;async function A(e=L,t=b){return(await m.get(`${f}/artists`,{params:{page:e,limit:t}})).data}async function $(e){if(!e)throw new Error("Artist id is required");return(await m.get(`${f}/artists/${e}`)).data}document.querySelectorAll(".nav-list a").forEach(e=>{e.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function E(){const e=document.querySelector("#btn-hero-js");e&&e.addEventListener("click",()=>{const t=document.querySelector("#artists-js");t&&t.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{E()});const d=document.querySelector(".modal-content");function w(e){const{strArtist:t,strArtistThumb:n,intFormedYear:a,intDiedYear:s,strGender:r,intMembers:i,strCountry:o,strBiographyEN:c,genres:y}=e;return`
    <h2 class="artist-name">${t}</h2>

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
      ${y.map(h=>`<li class="info-genres-item">${h}</li>`).join("")}
    </ul>
  `}async function M(e){try{const t=await $(e);console.log(t),d.innerHTML=w(t)}catch(t){console.log(t),d.innerHTML=`
      <p class="error">Failed to load artist information</p>
    `}}document.getElementById("artistsList");const l=document.getElementById("loadMoreBtn"),v=document.getElementById("artistsLoader");let u=1;const p=8;async function g(){try{S();const e=await A(u,p),t=e.artists||e;I(t),t.length<p?l.classList.add("is-hidden"):l.classList.remove("is-hidden"),u+=1}catch(e){console.error("Failed to load artists:",e)}finally{B()}}function I(e){if(!Array.isArray(e))return;const t=e.map(({_id:n,strArtist:a,strArtistThumb:s,genres:r,strBiographyEN:i})=>{const o=r.map(c=>`<span class="artist-genre">${c}</span>`).join("");return`
        <li class="artist-card" data-id="${n}">
          <div class="artist-thumb">
            <img src="${s}" alt="${a}" class="artist-img" />
          </div>

          <div class="artist-content">
            <div class="artist-genres">${o}</div>
            <h3 class="artist-name">${a}</h3>
            <p class="artist-bio">${i}</p>
            <button class="artist-more" type="button">Learn more</button>
          </div>
        </li>
      `}).join("");artistsList.insertAdjacentHTML("beforeend",t)}function S(){v.classList.remove("is-hidden")}function B(){v.classList.add("is-hidden")}g();l.addEventListener("click",g);artistsList.addEventListener("click",e=>{const t=e.target.closest(".artist-more");if(!t)return;const n=t.closest(".artist-card");n&&M(n.dataset.id)});document.querySelector(".modal-content");
//# sourceMappingURL=index.js.map
