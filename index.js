import{a as c,S as d,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const f="27888525-8999ed18604edf74585499e22";c.defaults.baseURL="https://pixabay.com/api/";const p=a=>{const r={key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return c.get("",{params:r})}catch(t){console.log(t.message)}},u=({webformatURL:a,largeImageURL:r,tags:t,likes:i,views:e,comments:s,downloads:l})=>` <li class="gallery-item">
        <div class="gallery-thumb"><a class="gallery-link" href="${r}" ><img src="${a}" alt="${t}"/></a></div>
        <div class="gallery-info-wrapper">
          <div class="gallery-info-box">
            <span class="gallery-info-data">Likes</span>
            <span class="gallery-info-amount">${i}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Views</span>
            <span class="gallery-info-amount">${e}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Comments</span>
            <span class="gallery-info-amount">${s}</span>
          </div>
          <div class="gallery-info-box">
            <span class="gallery-info-data">Downloads</span>
            <span class="gallery-info-amount">${l}</span>
          </div>
        </div>
      </li>`,m=a=>a.map(r=>u(r)).join(""),g=new d(".gallery-link"),o={form:document.querySelector(".form"),gallerylist:document.querySelector(".gallery"),loader:document.querySelector(".loader")};o.form.addEventListener("submit",a=>{a.preventDefault(),o.gallerylist.innerHTML="",o.loader.classList.add("is-visible");const r=a.target.elements["search-text"].value.trim();if(!r){n.error({message:"Please fill out the request!",position:"topRight"}),o.loader.classList.remove("is-visible");return}p(r).then(({data:{hits:t}})=>{if(!t.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),o.loader.classList.remove("is-visible");return}o.loader.classList.remove("is-visible"),o.gallerylist.innerHTML=m(t),g.refresh()}).catch(t=>{n.error({})})});
//# sourceMappingURL=index.js.map
