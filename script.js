// Sticky Header

const stickyHeader = document.getElementById("stickyHeader");

window.addEventListener("scroll", () => {

  if(window.scrollY > 300){
    stickyHeader.classList.add("show");
  }
  else{
    stickyHeader.classList.remove("show");
  }

});

// Gallery

const thumbs = document.querySelectorAll(".thumb");
const mainImage = document.getElementById("mainImage");

thumbs.forEach((thumb) => {

  thumb.addEventListener("click", () => {

    thumbs.forEach((t)=>t.classList.remove("active"));

    thumb.classList.add("active");

    const img = thumb.querySelector("img");

    mainImage.src = img.src;

  });

});


// FAQ Accordion

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item)=>{

  const question = item.querySelector(".faq-question");

  question.addEventListener("click",()=>{

    faqItems.forEach((faq)=>{

      if(faq !== item){
        faq.classList.remove("active");
        faq.querySelector(".faq-icon").textContent = "+";
      }

    });

    item.classList.toggle("active");

    const icon = item.querySelector(".faq-icon");

    if(item.classList.contains("active")){
      icon.textContent = "−";
    }else{
      icon.textContent = "+";
    }

  });

});

// Applications Slider

const applicationsSlider =
  document.getElementById("applicationsSlider");

const nextApp =
  document.querySelector(".next-app");

const prevApp =
  document.querySelector(".prev-app");

nextApp.addEventListener("click",()=>{

  applicationsSlider.scrollBy({
    left:420,
    behavior:"smooth"
  });

});

prevApp.addEventListener("click",()=>{

  applicationsSlider.scrollBy({
    left:-420,
    behavior:"smooth"
  });

});


// Pause testimonial slider on hover

const testimonialSlider =
  document.getElementById("testimonialSlider");

testimonialSlider.addEventListener("mouseenter",()=>{

  testimonialSlider.style.animationPlayState = "paused";

});

testimonialSlider.addEventListener("mouseleave",()=>{

  testimonialSlider.style.animationPlayState = "running";

});

