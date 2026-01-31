import{a as m,S as g,i as d}from"./assets/vendor-C3z_TzYV.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&c(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();const h={getImagesByQuery:(t,l)=>m.get(`https://pixabay.com/api/?key=54346745-2618290c8cbee7c5ced8d190a&q=${t}&image_type=photo&orientation=horizontal&safesearch=true&per_page=15&page=${l}`)},o={createGallery:t=>{const l=t.map(e=>`
            <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <img class="gallery-img" src="${e.webformatURL}" alt="${e.tags}">
                <ul class="gallery-text-container">
                <li class="gallery-text">
                    <div class="gallery-title">
                    Likes
                    </div>
                    <div class="gallery-sub-title">
                    ${e.likes}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Views
                    </div>
                    <div class="gallery-sub-title">
                    ${e.views}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Comments
                    </div>
                    <div class="gallery-sub-title">
                    ${e.comments}
                    </div>
                </li>
                <li class="gallery-text">
                    <div class="gallery-title">
                    Downloads
                    </div>
                    <div class="gallery-sub-title">
                    ${e.downloads}
                    </div>
                </li>
                </ul>
            </a>
            </li>
        `);document.querySelector(".gallery").insertAdjacentHTML("beforeend",l.join("")),document.querySelectorAll(".gallery-item").forEach(e=>{e.addEventListener("click",r=>{r.preventDefault(),new g(".gallery-link",{captionsData:"alt",captionDelay:250}).refresh()})})},clearGallery:()=>{const t=document.querySelector(".gallery");t.innerHTML=""},showLoader:()=>{document.querySelector(".loader").classList.add("visible")},hideLoader:()=>{document.querySelector(".loader").classList.remove("visible")},showLoadMoreButton:()=>{document.querySelector(".load-more").classList.add("visible")},hideLoadMoreButton:()=>{document.querySelector(".load-more").classList.remove("visible")}},f=document.querySelector(".form");f.addEventListener("submit",t=>{t.preventDefault()});let i=1,n=[],u="";const p=document.querySelector(".load-more");p.addEventListener("click",async()=>{i++,await y();const l=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:l.height*2,behavior:"smooth"})});const v=document.querySelector(".form-button");v.addEventListener("click",async()=>{o.clearGallery(),u=document.querySelector(".form-input").value,n=[],i=1,o.showLoadMoreButton(),await y()});async function y(){o.showLoader();try{const t=await h.getImagesByQuery(u,i),l=t.data.totalHits,a=i*15;o.hideLoader(),n.push(...t.data.hits),n.length===0?(d.error({message:"Sorry, there are no images matching your search query. Please try again!"}),o.hideLoadMoreButton()):a>=l?(d.info({message:"We're sorry, but you've reached the end of search results."}),o.createGallery(t.data.hits),o.hideLoadMoreButton()):o.createGallery(t.data.hits)}catch(t){console.error(t)}}
//# sourceMappingURL=index.js.map
