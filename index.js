import{a as u,S as d,i as a}from"./assets/vendor-Bz4lgVUE.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="50838161-3c383bf924b9914213562243a";function p(n){return u("https://pixabay.com/api/",{params:{key:f,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40}}).then(t=>t.data).catch(t=>{console.log(t)})}let l=null;function m(n){const i=document.querySelector(".gallery"),t=n.map(o=>`<li>
        <a href="${o.largeImageURL}">
          <img src="${o.webformatURL}" alt="${o.tags}" loading="lazy" />
        </a>
        <div class="info">
          <p> Likes ${o.likes}</p>
          <p> Views ${o.views}</p>
          <p> Comments ${o.comments}</p>
          <p> Downoloads ${o.downloads}</p>
        </div>
      </li>`).join("");i.insertAdjacentHTML("beforeend",t),l?l.refresh():l=new d(".gallery a",{captionsData:"alt",captionDelay:250})}function h(){const n=document.querySelector(".gallery");n.innerHTML=""}function y(){return document.querySelector(".loader").classList.remove("hidden")}function c(){return document.querySelector(".loader").classList.add("hidden")}const g=document.querySelector(".form");g.addEventListener("submit",L);function L(n){n.preventDefault();const i=n.currentTarget.elements["search-text"].value.trim();if(!i){a.warning({title:"Warning",message:"Please enter a search query!",position:"topRight"});return}h(),y(),p(i).then(t=>{if(c(),t.hits.length===0){a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t.hits)}).catch(t=>{c(),a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})})}
//# sourceMappingURL=index.js.map
