const webDev = [
    {
        "title": "HTML 5",
        "svg": "html5"
    },
    {
        "title": "JavaScript",
        "svg": "javascript"
    },
    {
        "title": "JQuery",
        "svg": "jquery"
    },
    {
        "title": "Vue JS",
        "svg": "vuejs"
    },
    {
        "title": "Vite JS",
        "svg": "vitejs"
    },
    {
        "title": "Node JS",
        "svg": "nodejs"
    },
    {
        "title": "Express JS",
        "svg": "expressjs"
    },
    {
        "title": "Alpine JS",
        "svg": "alpine"
    },
    {
        "title": "JSON",
        "svg": "json"
    },
    {
        "title": "CSS 3",
        "svg": "css3"
    },
    {
        "title": "SCSS/SASS",
        "svg": "scss"
    },
    {
        "title": "Bootstrap",
        "svg": "bootstrap"
    },
    {
        "title": "Tailwind CSS",
        "svg": "tailwind"
    },
    {
        "title": "PHP",
        "svg": "php"
    },
    {
        "title": "Laravel",
        "svg": "laravel"
    },
    {
        "title": "LiveWire",
        "svg": "livewire"
    },
    {
        "title": "WordPress",
        "svg": "wordpress"
    }
];

const databases = [,
    {
        "title": "MySQL",
        "svg": "mysql"
    },
    {
        "title": "PostgresSQL",
        "svg": "postgressql"
    },
    {
        "title": "Mongo DB",
        "svg": "mongodb"
    }
];

const packageManagers = [,
    {
        "title": "Node Package Manager",
        "svg": "npm"
    },
    {
        "title": "Composer",
        "svg": "composer"
    }
];

const cicd = [
    {
        "title": "Git",
        "svg": "git"
    },
    {
        "title": "GitHub",
        "svg": "github"
    }
];

const data = [
    {
        "title": "MS Excel",
        "svg": "excel"
    },
    {
        "title": "Power BI",
        "svg": "powerbi"
    },
    {
        "title": "Tableau",
        "svg": "tableau"
    }
];

const loadSkills = (divID,skillset) => {
    const div = document.getElementById(divID);

    skillset.forEach((skill,index) => {
        const figure = document.createElement("figure");
        figure.setAttribute("id",skillset+"-"+index);
        const img = document.createElement("img");
        img.setAttribute("src","./assets/skills/"+skill.svg+".svg");
        img.setAttribute("alt",skill.title);
        const figcaption = document.createElement("figcaption");
        figcaption.appendChild(document.createTextNode(skill.title));
        figure.appendChild(img);
        figure.appendChild(figcaption);
        div.appendChild(figure);
    });
};

loadSkills("skill-web-dev",webDev);
loadSkills("skill-databases",databases);
loadSkills("skill-packages",packageManagers);
loadSkills("skill-cicd",cicd);
loadSkills("skill-analysis",data);

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) { 
        const j = Math.floor(Math.random() * (i + 1)); 
        [array[i], array[j]] = [array[j], array[i]]; 
      } 
      return array;
}

setInterval(() => {
    let skills = shuffleArray(webDev.concat(databases,packageManagers,cicd,data).filter(item => item !== ""));

    let count = 0;
    
    $('.skill-rain img').each(function(){
        $(this).attr('src',`./assets/skills/${skills[count]['svg']}.svg`);
        count++;
    });
}, 2500);