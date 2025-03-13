const projects = [
    {
        "title":"Website: <span>K&H Group</span>",
        "description":"An assisted living company, offering personalized care of the highest quality and a comfortable, family-like, environment. They provide a range of services to meet the unique needs of each resident.",
        "tech":"PHP, HTML, CSS, Bootstrap, JavaScript/JQuery, SQL",
        "links":{
            "external":"https://www.kandhgroup.org/",
            "github":""
        },
        "image":{
            "url":"./assets/projects/kandhgroup.webp",
            "alt":"k&H Group"
        }
    },
    {
        "title":"Website: <span>Tuskin Financial Limited</span>",
        "description":"A customer driven, friendly and flexible Micro-Financing company, guaranteeing competitive market rates. They offer personal and payroll loans, targeted products for micro, small and medium sized enterprises (SMEs) and the transportation sector.",
        "tech":"WordPress, PHP, CSS, Bootstrap, JavaScript/JQuery, SQL",
        "links":{
            "external":"https://tuskinholdings.com/",
            "github":""
        },
        "image":{
            "url":"./assets/projects/tuskinfinancial.webp",
            "alt":"Tuskin Fiancial Limited"
        }
    },
    {
        "title":"Web Application: <span>outLaunderX</span>",
        "description":"A comprehensive anti-money laundering (AML) and Counter Financing of Terrorism (CFT) solution, providing executive level data analysis tailored to meet the unique needs of financial insitutions and regulated entities worldwide.",
        "tech":"PHP, HTML, CSS, Bootstrap, JavaScript, SQL",
        "links":{
            "external":"",
            "github":""
        },
        "image":{
            "url":"./assets/projects/outlaunderx.webp",
            "alt":"outLaunderX App"
        }
    },
    {
        "title":"Web Application: <span>AML Knowledge Assessment</span>",
        "description":"This application facilitates exam covering the basic requirements and obligations of regulated entities under POCA, TPA and UNSCRIA within Jamaica. The questions focus on key areas of the legislation to ascertain if the employees of the regulated entities have basic knowledge of the requirements of applicable legislation.",
        "tech":"PHP, HTML, CSS, Bootstrap, JavaScript, SQL",
        "links":{
            "external":"https://aml.fscjamaica.org/knowledge-assessment/",
            "github":""
        },
        "image":{
            "url":"./assets/projects/knowledge-assessment.webp",
            "alt":"Knowledge Assessment App"
        }
    },
    {
        "title":"Web Application: <span>Flex E-Store</span>",
        "description":"An easy way to purchase a wide variety products online. With a modern, responsive and dynamic design, this E-commerce application provides excellent shopping experience.",
        "tech":"Laravel/PHP, Livewire, HTML, CSS, Tailwind, JavaScript, Alpine.js, SQL",
        "links":{
            "external":"",
            "github":"https://github.com/omar-p-graham/ecommerce_laravel"
        },
        "image":{
            "url":"./assets/projects/flexestore.webp",
            "alt":"Flex E-Store"
        }
    },
    {
        "title":"Website: <span>Flex Recipe Hub</span>",
        "description":"A culinary voyage with meals from around the world. From the spicy jerk chicken of Jamaica to the sophisticated pastries of France, the ultimate online portal for discovering and mastering international cuisine.",
        "tech":"Vue.js, HTML, CSS, TailWind, JavaScript",
        "links":{
            "external":"https://flex-recipe-app.vercel.app/",
            "github":"https://github.com/omar-p-graham/flex_recipe_app"
        },
        "image":{
            "url":"./assets/projects/recipehub.webp",
            "alt":"Flex Recipe Hub"
        }
    },
    {
        "title":"Website: <span>Flex News</span>",
        "description":"Flex News provides daily news articles at your finger tips on topics like Entertainment, Sports, Science, Technology, among others.",
        "tech":"Vue.js, HTML, CSS, TailWind, JavaScript",
        "links":{
            "external":"https://flexnews-api.netlify.app/",
            "github":"https://github.com/omar-p-graham/Flex-News"
        },
        "image":{
            "url":"./assets/projects/flexnews.webp",
         "alt":"Flex News"
        }
    }
];

$(function(){
    $.each(projects, function(index, data){
        // Load data for "Project Info" section
        $(`<div class="project-summary">
                <h2 class="section-sub-heading">${data.title}</h2>
                <p class="project-description">${data.description}</p>
                <div class="project-tech"><p>${data.tech}</p></div>
            </div>`).appendTo(".project-info");
        
        if(data.links.external != "" || data.links.github != ""){
            let links = "";

            if(data.links.external != ""){ //External link to project site/app
                links += `<a href="${data.links.external}" target="_blank" data-title="To external link">View <i class='bx bx-link-external'></i></a>`;
            }
            if(data.links.github != ""){ //External link to Github Repository
                links += `<a href="${data.links.github}" target="_blank" data-title="To Github Repository">Repository <i class='bx bxl-github'></i></a>`;
            }
            $(`<div class="project-links">${links}</div>`).appendTo(`.project-summary:eq(${index})`);
        }

        // Load project images
        $(`<div class="project-image">
                <img src="${data.image.url}" alt="${data.image.alt}">
            </div>`).appendTo(".project-images");
    });

    let index = 0;
    $(`.project-summary:eq(${index})`).addClass("active");

    const currentProject = () => {
        $(".project-summary").removeClass("active");
        $(`.project-summary:eq(${index})`).addClass("active");
        
        $(".project-images").css("transform",`translateX(calc(${index * -100}% - ${index * 20}px))`);
    }

    $(".controllers .left-arrow").click(function(){
        if(index > 1){
            index--;
            $(".controllers .right-arrow").removeClass("disabled");
        }else{
            index = 0;
            $(this).addClass("disabled");
        }
        currentProject();
    });

    $(".controllers .right-arrow").click(function(){
        if(index < (projects.length-2)){
            index++;
            $(".controllers .left-arrow").removeClass("disabled");
        }else{
            index = (projects.length-1);
            $(this).addClass("disabled");
        }
        currentProject();
    });
});