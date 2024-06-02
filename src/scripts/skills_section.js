let skills_section_element = document.getElementById("skills-section");

const skills_list = [
    {
        src: "src/images/Web_dev.jpg", 
        alt: "Web Dev",
        overlay:{
            color: "#27aae380",
            text: "Web Dev"
        },
        modal:{}
    },
    {
        src: "src/images/gamedev.png", 
        alt: "Unity",
        overlay:{
            color: "#1e1e1e80",
            text: "Unity"
        },
        modal:{}
    },
    {
        src: "src/images/ESP8266.jpg", 
        alt: "IoT",
        overlay:{
            color: "#33bd9680",
            text: "IoT"
        },
        modal:{}
    },
    {
        src: "src/images/Blender model.jpg", 
        alt: "Blender",
        overlay:{
            color: "#eb770080",
            text: "Blender"
        },
        modal:{}
    }
];

const card_template = (parameter) => `
    <div class="card m-3 skill-card">
        <img class="card-img object-fit-cover" style="width: 30rem; height: 26rem" src="${parameter.src}" alt="${parameter.alt}">
        <div class="skill-card-overlay" style="background-color:${parameter.overlay.color};">
            <div>${parameter.overlay.text}</div>
        </div>
    </div>
`;

window.addEventListener("load", () => {
    GenerateCards(skills_section_element, skills_list, card_template);
});

function GenerateCards(section, list, card_template)
{
    list.forEach(data => {
        section.innerHTML += card_template(data);
    });
}