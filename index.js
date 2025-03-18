import{a as c,S as d,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const f="27888525-8999ed18604edf74585499e22";c.defaults.baseURL="https://pixabay.com/api/";const u=r=>{const t={key:f,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0};try{return c.get("",{params:t})}catch(a){console.log(a.message)}},m=({webformatURL:r,largeImageURL:t,tags:a,likes:i,views:e,comments:s,downloads:o})=>` <li class="gallery-item">
        <div class="gallery-thumb"><a class="gallery-link" href="${t}" ><img src="${r}" alt="${a}"/></a></div>
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
            <span class="gallery-info-amount">${o}</span>
          </div>
        </div>
      </li>`,p=r=>r.map(t=>m(t)).join(""),g=new d(".gallery-link"),l={form:document.querySelector(".form"),gallerylist:document.querySelector(".gallery"),loader:document.querySelector(".loader")};l.form.addEventListener("submit",r=>{r.preventDefault(),l.gallerylist.innerHTML="",l.loader.classList.add("is-visible");const t=r.target.elements["search-text"].value.trim();if(!t){n.error({message:"Please fill out the request!",position:"topRight"}),l.loader.classList.remove("is-visible"),r.target.elements["search-text"].value="";return}u(t).then(({data:{hits:a}})=>{if(!a.length){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),l.loader.classList.remove("is-visible"),r.target.elements["search-text"].value="";return}l.loader.classList.remove("is-visible"),l.gallerylist.innerHTML=p(a),g.refresh(),r.target.elements["search-text"].value=""}).catch(a=>{n.error({})})});
//# sourceMappingURL=index.js.map
