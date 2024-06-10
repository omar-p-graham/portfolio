const theme = document.querySelector(".theme-icon img");
const body = document.querySelector("body");

theme.addEventListener("click",function(){
    if(body.classList.contains("dark")){
        body.classList.remove("dark");
        theme.setAttribute("src","./assets/images/svg/sun.svg");
    }else{
        body.classList.add("dark");
        theme.setAttribute("src","./assets/images/svg/moon.svg");
    }
});

const jobTitles = ["Web Developer","Full-Stack Developer","Data Analyst","Anti-Money Laundering Analyst"];
let jobIndex = 0;
document.querySelector(".job-titles h3").innerHTML = jobTitles[jobIndex];

const getTitles = setInterval(() => {
    jobIndex = (jobIndex==(jobTitles.length-1)) ? 0 : jobIndex+1;
    
    document.querySelector(".job-titles h3").innerHTML = jobTitles[jobIndex];
},3000);

const expDetails = document.querySelectorAll(".experience-detail");

expDetails.forEach((detail) => {
    detail.addEventListener("click", () => {
        detail.classList.toggle("open")
    })
});
