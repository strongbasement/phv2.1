let k=0;
const observor=new IntersectionObserver(entries=>{
    entries.forEach(entries=>{
        if(entries.isIntersecting){
        
            switch(k)
            {
               case 0: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInLeft");
               break;
               case 1: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInTop");
               break;
               case 2: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInRight");
               break;
               case 3: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInLeft");
               break;
               case 4: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInTop");
               break;
               case 5: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInRight");
               break;
               case 6: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInLeft");
               break;
               case 7: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInTop");
               break;
               case 8: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInLeft");
               break;
               case 9: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInTop");
               break;
               case 10: 
               document.querySelectorAll(".animated")[k++].classList.add("fadeInRight");
               break;
               
              

            }
            

            
          
        
        }
    })
})

observor.observe(document.querySelector(".one"));
observor.observe(document.querySelector(".two"));
observor.observe(document.querySelector(".three"));
observor.observe(document.querySelector(".four"));
observor.observe(document.querySelector(".five"));
observor.observe(document.querySelector(".six"));
observor.observe(document.querySelector(".seven"));
observor.observe(document.querySelector(".eight"));
observor.observe(document.querySelector(".nine"));
observor.observe(document.querySelector(".ten"));
observor.observe(document.querySelector(".eleven"));




