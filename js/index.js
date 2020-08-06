const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

//nav 
const navData = siteContent.nav;
console.log(navData);
const navDom  = document.querySelectorAll("nav a");
console.log(navDom);

navDom.forEach((element, index) => {
element.textContent = Object.values(navData)[index];
});
//cta
const cta = siteContent.cta;

const ctaH1 = document.querySelector(".cta h1");
console.log(ctaH1);
ctaH1.textContent = cta.h1;

const ctaButton = document.querySelector(".cta button");
console.log(ctaButton);
ctaButton.textContent = cta.button;

const ctaImg = document.getElementById("cta-img");
// ctaImg.setAttribute("src", siteContent["cta"]["img-src"]);
ctaImg.src = siteContent.cta["img-src"];

//main-content top
const main = siteContent["main-content"];
console.log(main);
const mainH4 = document.querySelectorAll(".main-content h4");
console.log(mainH4);
mainH4[0].textContent = main["features-h4"];
mainH4[1].textContent = main["about-h4"];
const mainP = document.querySelectorAll(".main-content p");
console.log(mainP);
mainP[0].textContent = main["features-content"];
mainP[1].textContent = main["about-content"];

//main-content bottom
mainH4[2].textContent = main["services-h4"];
mainH4[3].textContent = main["product-h4"];
mainH4[4].textContent = main["vision-h4"];
mainP[2].textContent = main["services-content"];
mainP[3].textContent = main["product-content"];
mainP[4].textContent = main["vision-content"];

const mainImg = document.querySelector(".middle-img");
// console.log(mainImg);
mainImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//contact
const contactDom = siteContent.contact;
console.log(contactDom);
const contactH4 = document.querySelector(".contact h4");
console.log(contactH4);
contactH4.textContent = contactDom["contact-h4"];

const contactP = document.querySelectorAll(".contact p");
console.log(contactP);
contactP[0].textContent = contactDom.address;
contactP[1].textContent = contactDom.phone;
contactP[2].textContent = contactDom.email;

//footer
const footerDom = document.querySelector("footer p");
console.log(footerDom);
footerDom.textContent = siteContent.footer.copyright;