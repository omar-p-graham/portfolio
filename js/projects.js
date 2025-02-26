const projects = [
    {
        "title":"Website: K&H Group",
        "description":"This is the project description",
        "tech":"HTML, CSS, JS",
        "links":{
            "external":"https://www.kandhgroup.org/",
            "github":""
        },
        "image":"./assets/projects/kandhgroup.webp",
        "alt":"k&H Group"
    },
    {
        "title":"Website: Tuskin Financial Limited",
        "description":"This is the project description",
        "tech":"HTML, CSS, JS",
        "links":{
            "external":"https://tuskinholdings.com/",
            "github":"https://www.github.com/omar-p-graham"
        },
        "image":"./assets/projects/tuskinfinancial.webp",
        "alt":"Tuskin Fiancial Limited"
    },
    {
        "title":"Web App: outLaunderX",
        "description":"This is the project description",
        "tech":"HTML, CSS, JS",
        "links":{
            "external":"",
            "github":""
        },
        "image":"./assets/projects/outlaunderx.webp",
        "alt":"outLaunderX App"
    },
    {
        "title":"Website: Flex Recipe Hub",
        "description":"This is the project description",
        "tech":"HTML, CSS, JS",
        "links":{
            "external":"https://flex-recipe-app.vercel.app/",
            "github":"https://github.com/omar-p-graham/flex_recipe_app"
        },
        "image":"./assets/projects/recipehub.webp",
        "alt":"Flex Recipe Hub"
    },
    {
        "title":"Website: Flex News",
        "description":"This is the project description",
        "tech":"HTML, CSS, JS",
        "links":{
            "external":"https://flexnews-api.netlify.app/",
            "github":"https://github.com/omar-p-graham/Flex-News"
        },
        "image":"./assets/projects/flexnews.webp",
        "alt":"Flex News"
    }
];

let index = 0;

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
    if(index < 1){
        index++;
        $(".controllers .left-arrow").removeClass("disabled");
    }else{
        index = 2;
        $(this).addClass("disabled");
    }
    currentProject();
});