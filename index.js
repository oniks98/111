(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();function u(){const o=document.querySelector(".App");o?o.classList.add("animate_content"):console.error(".App section not found");const s=document.querySelector("#switch").checked?"dark":"light";document.documentElement.setAttribute("data-theme",s);const n=document.querySelector("#toggle-main");n?n.checked=s==="dark":console.error("#toggle-main not found"),setTimeout(()=>{o?o.style.display="none":console.error(".App section not found")},1e3),["header-container","hero-container","about-container","tech-container","projects-container","benefits-container","questions-container","reviews-container","collaboration-container","footer-container","to-top-container"].forEach(e=>{const t=document.getElementById(e);t?t.style.display="block":console.error(`Element with ID ${e} not found`)})}document.querySelector(".start-btn").addEventListener("click",u);document.querySelector("#toggle-main").addEventListener("change",()=>{const s=document.querySelector("#toggle-main").checked?"dark":"light";document.documentElement.setAttribute("data-theme",s)});const f=document.querySelector(".scroll-to-top");f.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})});window.onscroll=()=>h();function h(){const o=document.querySelector(".scroll-to-top");window.scrollY>60?o.classList.remove("js-transparent"):o.classList.add("js-transparent")}const k="/landing-page-2.0/assets/icons-D_rawvzV.svg",i="/landing-page-2.0/assets/projects-desk-03-min-bAztutHK.png",D="/landing-page-2.0/assets/projects-desk-03@2x-min-D7O6BJsL.png",_="/landing-page-2.0/assets/projects-mob-03-min-BsXsyoM6.png",y="/landing-page-2.0/assets/projects-mob-03@2x-min-tmcSzpo2.png",v="/landing-page-2.0/assets/projects-tabl-03-min-ZgDTbOh9.png",S="/landing-page-2.0/assets/projects-tabl-03@2x-min-Dqd8dn0C.png",p="/landing-page-2.0/assets/projects-desk-04-min-yxZx66BP.png",M="/landing-page-2.0/assets/projects-desk-04@2x-min-DHJNdR6B.png",T="/landing-page-2.0/assets/projects-mob-04-min-5yr3aGDi.png",w="/landing-page-2.0/assets/projects-mob-04@2x-min-BeXemoj4.png",B="/landing-page-2.0/assets/projects-tabl-04-min-Dt9XScdK.png",L="/landing-page-2.0/assets/projects-tabl-04@2x-min-B8Ml2TOY.png",l="/landing-page-2.0/assets/projects-desk-05-min-CfD1cLSZ.png",P="/landing-page-2.0/assets/projects-desk-05@2x-min-BRPn2X1J.png",q="/landing-page-2.0/assets/projects-mob-05-min-Db3py1Xm.png",E="/landing-page-2.0/assets/projects-mob-05@2x-min-B8zvmCB6.png",O="/landing-page-2.0/assets/projects-tabl-05-min-F3tbbktz.png",A="/landing-page-2.0/assets/projects-tabl-05@2x-min-BRqBFzgK.png",g="/landing-page-2.0/assets/projects-desk-06-min-X_gqtJm5.png",C="/landing-page-2.0/assets/projects-desk-06@2x-min-Dj8eCfdF.png",X="/landing-page-2.0/assets/projects-mob-06-min-C9QNW9Tj.png",$="/landing-page-2.0/assets/projects-mob-06@2x-min-DEtw7lg5.png",z="/landing-page-2.0/assets/projects-tabl-06-min-ugbcXMlD.png",N="/landing-page-2.0/assets/projects-tabl-06@2x-min-CmmfjQzn.png",d="/landing-page-2.0/assets/projects-desk-07-min--lZv1p8n.png",I="/landing-page-2.0/assets/projects-desk-07@2x-min-DmSkXiQs.png",F="/landing-page-2.0/assets/projects-mob-07-min-BSVWNsA-.png",K="/landing-page-2.0/assets/projects-mob-07@2x-min-Dd3dUvIN.png",Z="/landing-page-2.0/assets/projects-tabl-07-min-CPlUFmPk.png",J="/landing-page-2.0/assets/projects-tabl-07@2x-min-BDIDMcu4.png",m="/landing-page-2.0/assets/projects-desk-08-min-xocuOah2.png",W="/landing-page-2.0/assets/projects-desk-08@2x-min-BIWP6k6v.png",H="/landing-page-2.0/assets/projects-mob-08-min-DBYeKoNQ.png",Q="/landing-page-2.0/assets/projects-mob-08@2x-min-Ws78KLoX.png",R="/landing-page-2.0/assets/projects-tabl-08-min-C_fZqAdW.png",V="/landing-page-2.0/assets/projects-tabl-08@2x-min-DRzjhCHA.png",j="/landing-page-2.0/assets/projects-desk-09-min-DsvIyQeP.png",U="/landing-page-2.0/assets/projects-desk-09@2x-min-BvUdwZmo.png",Y="/landing-page-2.0/assets/projects-mob-09-min-DX2Z5Nr9.png",G="/landing-page-2.0/assets/projects-mob-09@2x-min-Cc_85EFK.png",ee="/landing-page-2.0/assets/projects-tabl-09-min-DT00A0X5.png",te="/landing-page-2.0/assets/projects-tabl-09@2x-min-BOveHSsW.png",x=[{alt:"Mimino website",img:i,sources:{mobile:{"1x":_,"2x":y},tablet:{"1x":v,"2x":S},desktop:{"1x":i,"2x":D}}},{alt:"Vyshyvanka vibes Landing Page",img:p,sources:{mobile:{"1x":T,"2x":w},tablet:{"1x":B,"2x":L},desktop:{"1x":p,"2x":M}}},{alt:"Power pulse webservice",img:l,sources:{mobile:{"1x":q,"2x":E},tablet:{"1x":O,"2x":A},desktop:{"1x":l,"2x":P}}},{alt:"Chego jewelry website",img:g,sources:{mobile:{"1x":X,"2x":$},tablet:{"1x":z,"2x":N},desktop:{"1x":g,"2x":C}}},{alt:"Energy flow webservice ",img:d,sources:{mobile:{"1x":F,"2x":K},tablet:{"1x":Z,"2x":J},desktop:{"1x":d,"2x":I}}},{alt:"Starlight studio landing page",img:m,sources:{mobile:{"1x":H,"2x":Q},tablet:{"1x":R,"2x":V},desktop:{"1x":m,"2x":W}}},{alt:"Fruitbox online store",img:j,sources:{mobile:{"1x":Y,"2x":G},tablet:{"1x":ee,"2x":te},desktop:{"1x":j,"2x":U}}}],se=document.querySelector(".projects-list_img"),b=document.querySelector(".projects-button_loading");b.addEventListener("click",oe);let a=0;function oe(){const s=x.slice(a,a+3);se.insertAdjacentHTML("beforeend",ne(s)),a+=s.length,a>=x.length&&b.classList.add("hidden")}function ne(o){return o.map(({alt:s,img:n,sources:{mobile:c,tablet:e,desktop:t}})=>`
      <li>
        <picture>
          <source
            media="(max-width: 767px)"
            srcset="${c["1x"]} 1x, ${c["2x"]} 2x"
          />
          <source
            media="(max-width: 1279px)"
            srcset="${e["1x"]} 1x, ${e["2x"]} 2x"
          />
          <source
            media="(min-width: 1280px)"
            srcset="${t["1x"]} 1x, ${t["2x"]} 2x"
          />
          <img
            class="projects-img"
            src="${n}"
            alt="${s}"
          />
        </picture>  
        <div class="projects-blok_descr">
          <p class="projects-img_descr">React, JavaScript, Node JS, Git</p>
          <div class="projects-box_descr">
            <h3 class="projects-img_title">${s}</h3>
            <a
              href="https://bulatovatati.github.io/landing-page-2.0/"
              class="projects-button_link"
              target="_blank"
            >
              <span class="projects-button_text">VISIT</span>
              <svg class="projects-button_icon" width="24" height="24">
                <use href="${k}#icon-arrow-projects"></use>
              </svg>
            </a>
          </div>
        </div> 
      </li>`).join("")}
//# sourceMappingURL=index.js.map