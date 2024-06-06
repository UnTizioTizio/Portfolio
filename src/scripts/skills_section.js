const skills_list = [
    {
        src: "src/images/Web_dev.jpg", 
        title: "Web Dev",
        overlay_color: "#27aae380",
        modal:{
            ID: "web-dev-modal",
            color: "#27aae3",
            text: "Grazie al corso NGW per Developer organizzato dall'azienda Expleo, ho acquisito competenze necessarie per la realizzazione di applicazioni Fullstack."
        }
    },
    {
        src: "src/images/gamedev2.png", 
        title: "Game Dev",
        overlay_color: "#1e1e1e80",
        modal:{
            ID: "game-dev-modal",
            color: "#1e1e1e",
            text: "Sin da piccolo ho sempre avuto la passione per i videogiochi. Dal 2021 fino ad oggi studio da autodidatta e realizzo piccoli progetti con Unity"
        }
    },
    {
        src: "src/images/ESP8266.jpg", 
        title: "IoT",
        overlay_color: "#33bd9680",
        modal:{
            ID: "iot-modal",
            color: "#33bd96",
            text: `Durante il mio percorso scolastico ho sviluppato competenze per la creazione di 
                   progetti IoT, utilizzando schede elettroniche come Arduino o NodeMCU basate sul 
                   chip ESP8266.<br>
                   Il progetto più sostanziale che ho realizzato si occpa dell'accensione e spegnimento
                   di un LED da remoto, utilizzando due schede ESP8266: la prima è configurata come 
                   web server a cui l'utente può connettersi e accedere ad una pagina web per il 
                   controllo del LED; la seconda invece riceve il comando trasmesso dall'utente e 
                   accende o spegne il LED.<br>
                   Qui potete trovare la repository su Git Hub`
        }
    },
    {
        src: "src/images/Blender model.jpg", 
        title: "Blender",
        overlay_color: "#eb770080",
        modal:{
            ID: "blender-modal",
            color: "#eb7700",
            text: `Dal 2021 utilizzo Blender da autodidatta per realizzare gli asset dei giochi
                   che sviluppo con Unity`
        }
    },
];

const card_template = (parameter) => `
    <div class="card m-2 skill-card" type="button" data-bs-toggle="modal" data-bs-target="#${parameter.modal.ID}">
        <img class="card-img img-fluid object-fit-cover" src="${parameter.src}" alt="${parameter.title}">
        <div class="skill-card-overlay d-flex flex-column justify-content-center align-items-center" style="background-color:${parameter.overlay_color};">
            <span class="text-eggshell">${parameter.title}</span>
        </div>
    </div>
`;

const modal_template = (parameter) => `
    <div class="modal fade" id="${parameter.modal.ID}" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header" style="background-color: ${parameter.modal.color}">
                    <h1 class="modal-title fs-5 text-eggshell">${parameter.title}</h1>
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