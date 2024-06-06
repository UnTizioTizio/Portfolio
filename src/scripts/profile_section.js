let profile_section_container = document.getElementById("profile-section-container");

const body_content_list = [
    {
        title: "Dati Personali",
        elements: [
            {icon: "", text: "Ludovico Iannello"},
            {icon: "", text: "Barcellona Pozzo di Gotto(ME)"},
            {icon: "", text: "31/10/2005"},
        ]
    },
    {
        title: "Formazione e Studio",
        elements: [
            {icon: "", text: "ITT E. Majorana Milazzo"},
            {icon: "", text: "Informatica e Telecomunicazioni"},
        ]
    },
    {
        title: "Competenze",
        elements: [
            {icon: "", text: "Realizzazione di applicazioni Fullstack"},
            {icon: "", text: "Conoscenze intermedie in molti ambiti della programmazione"},
            {icon: "", text: "Modellazione 3D a livello standard"},
        ]
    }
];

const profile_section_template = (parameter) => `
    <div class="profile-section bg-cambridge-blue fixed-top">
        <div class="profile-picture-container">
            <img src="${parameter.profile_picture}">
        </div>
        <div class="profile-section-body text-eggshell" id="profile-section-body-id">
        </div>
        <div class="profile-section-footer">
        </div>
    </div>
`;

const body_content_template = (parameter) => `
    <div class="mt-3">
        <h6>${parameter.title}</h6>
        <hr>
        <p>

`;

function GenerateProfileSection(container, list, profile_section_template, body_content_template)
{
    profile_section_container.innerHTML = profile_section_template;
    let body = document.getElementById("profile-section-body-id");
    
    list.foreach(data => {
        body.innerHTML += body_content_template(data);

        //Fill body content template
        data.elements.foreach(elements_data => {
            body.innerHTML += elements_data.
        });
    });
}