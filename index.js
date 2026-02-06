(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const p="https://sound-wave.b.goit.study/api/artists",c=8;document.getElementById("artistsList");const a=document.getElementById("loadMoreBtn"),l=document.getElementById("artistsLoader");let d=1;async function u(){try{g();const t=await fetch(`${p}?page=${d}&limit=${c}`);if(!t.ok)throw new Error("Failed to fetch artists");const r=await t.json();h(r.artists),r.artists.length<c?a.classList.add("is-hidden"):a.classList.remove("is-hidden"),d+=1}catch(t){console.error(t)}finally{y()}}function h(t){if(!Array.isArray(t))return;const r=t.map(({_id:i,strArtist:o,strArtistThumb:e,genres:s,strBiographyEN:n})=>{const f=s.map(m=>`<span class="artist-genre">${m}</span>`).join("");return`
        <li class="artist-card" data-id="${i}">

          <div class="artist-thumb">
          <img src="${e}" alt="${o}" class="artist-img" />
          </div>

          <p class="artist-genres">${f}</p>

          <h3 class="artist-name">${o}</h3>
          <p class="artist-bio">${n}</p>
          <button class="artist-more">Learn more</button>
        </li>
      `}).join("");artistsList.insertAdjacentHTML("beforeend",r)}function g(){l.classList.remove("is-hidden")}function y(){l.classList.add("is-hidden")}a.addEventListener("click",u);u();document.querySelectorAll(".nav-list a").forEach(t=>{t.addEventListener("click",()=>{document.getElementById("nav-toggle").checked=!1})});function L(){const t=document.querySelector("#btn-hero-js");t&&t.addEventListener("click",()=>{const r=document.querySelector("#artists-js");r&&r.scrollIntoView({behavior:"smooth",block:"start"})})}document.addEventListener("DOMContentLoaded",()=>{L()});
//# sourceMappingURL=index.js.map
