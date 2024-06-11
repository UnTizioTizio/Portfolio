const info_content_template = `
    <div class="mt-2">
        <h5>Dati Personali</h5>
        <hr>
        <p>
            <i class="bi bi-person-fill"></i> Ludovico Iannello<br>
            <i class="bi bi-cake2"></i> 31 / 10 / 2005<br>
            <i class="bi bi-geo-alt-fill"></i> Barcellona Pozzo di Gotto(ME)<br>
        </p>
    </div>
    <div class="mt-2">
        <h5>Formazione e Studio</h5>
        <hr>
        <p>
            <i class="bi bi-mortarboard-fill"></i> ITT E. Majorana Milazzo<br>
            <i class="bi bi-laptop"></i> Diplomando in Informatica e Telecomunicazioni
        </p>
    </div>
    <div class="mt-2">
        <h5>Competenze</h5>
        <hr>
        <ul>
            <li>Conoscenze intermedie in diversi ambiti della programmazione</li>
            <li>Sviluppo di videogiochi</li>
            <li>Sviluppo di applicazioni Fullstack</li>
            <li>Modellazione 3D a livello standard</li>
        </ul>
    </div>
    <div class="mt-2">
        <h5>Contatti</h5>
        <hr>
        <p>
            <i class="bi bi-envelope-at-fill"></i> ludovico.iannello.scuola@gmail.com<br>
            <i class="bi bi-telephone"></i> +39 329 669 8691
        </p>
    </div>
`;

window.addEventListener("load", () => {
    AddInfoContent("info-section1", info_content_template);
    AddInfoContent("info-section2", info_content_template)
});

function AddInfoContent(section_ID, template)
{
    let info_section = document.getElementById(section_ID);
    info_section.innerHTML += template;
}