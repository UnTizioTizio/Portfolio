const skills_list = [
    {
        src: "src/images/Web_dev.jpg", 
        title: "Web Dev",
        overlay_color: "#27aae380",
        modal:{
            ID: "web-dev-modal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo atque ipsa sequi culpa nemo mollitia quia cumque quaerat eum ipsum error ab sapiente deleniti quo iusto eos, labore nihil?"
        }
    },
    {
        src: "src/images/gamedev.png", 
        title: "Game Dev",
        overlay_color: "#1e1e1e80",
        modal:{
            ID: "game-dev-modal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo atque ipsa sequi culpa nemo mollitia quia cumque quaerat eum ipsum error ab sapiente deleniti quo iusto eos, labore nihil?"
        }
    },
    {
        src: "src/images/ESP8266.jpg", 
        title: "IoT",
        overlay_color: "#33bd9680",
        modal:{
            ID: "iot-modal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo atque ipsa sequi culpa nemo mollitia quia cumque quaerat eum ipsum error ab sapiente deleniti quo iusto eos, labore nihil?"
        }
    },
    {
        src: "src/images/Blender model.jpg", 
        title: "Blender",
        overlay_color: "#eb770080",
        modal:{
            ID: "blender-modal",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Non explicabo atque ipsa sequi culpa nemo mollitia quia cumque quaerat eum ipsum error ab sapiente deleniti quo iusto eos, labore nihil?"
        }
    },
];

const card_template = (parameter) => `
    <div class="card m-3 skill-card" type="button" data-bs-toggle="modal" data-bs-target="#${parameter.modal.ID}">
        <img class="card-img img-fluid object-fit-cover" style="width: 30rem; height: 26rem" src="${parameter.src}" alt="${parameter.title}">
        <div class="skill-card-overlay" style="background-color:${parameter.overlay_color};">
            <div>${parameter.title}</div>
        </div>
    </div>
`;

const modal_template = (parameter) => `
    <div class="modal fade" id="${parameter.modal.ID}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h1 class="modal-title fs-5">${parameter.title}</h1>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">${parameter.modal.text}</div>
            </div>
        </div>
    </div>
`;

window.addEventListener("load", () => {
    GenerateSkills(skills_list, card_template, modal_template);
});

function GenerateSkills(list, card_template, modal_template)
{
    let skills_section_element = document.getElementById("skills-section");
    list.forEach(data => {
        skills_section_element.innerHTML += card_template(data);
        skills_section_element.innerHTML += modal_template(data);
    });
}