const navbar_template = `
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0" id="navbar-options-menu">
                </ul>
            </div>
        </div>
    </nav>
`;

const navbar_option_template = (parameter) => `
    <li class="nav-item">
        <a class="nav-link active" href="${parameter.href}">${parameter.text}</a>
    </li>
`;

const navbar_option_list = [
    {text: "Home", href: "#"},
    {text: "Skills", href: "#"},
    {text: "Certifications", href: "#"},
];

window.addEventListener("load", () => {
    GenerateNavbar(navbar_option_list, navbar_template, navbar_option_template);
});

function GenerateNavbar(list, navbar_template, navbar_option_template)
{
    document.getElementById("navbar-container").innerHTML += navbar_template;
    let navbar_options_menu = document.getElementById("navbar-options-menu");

    list.forEach(data => {
        navbar_options_menu.innerHTML += navbar_option_template(data);
        console.log(data);
    });
}