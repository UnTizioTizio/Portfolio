// const navbar_template = `
//     <nav class="navbar navbar-expand-lg fixed-top bg-cambridge-blue">
//         <div class="container-fluid">
//             <div class="navbar-collapse" id="navbarSupportedContent">
//                 <div class="navbar-nav mb-2 mb-lg-0 w-100 d-flex flex-column justify-content-" id="navbar-options-menu">
//                 </div>
//             </div>
//         </div>
//     </nav>
// `;

// const navbar_option_template = (parameter) => `
//     <div class="mx-2 text-center" style="width: 6.2rem;">
//         <a class="nav-link active" href="${parameter.href}" type="button" data-bs-toggle="modal" data-bs-target="#${parameter.modal}">
//             <i class="d-block text-eggshell bi ${parameter.icon}" style="font-size: 1.25rem;"></i>
//             <span class="d-none d-sm-block text-eggshell">${parameter.text}</span>
//         </a>
//     </div>
// `;

const navbar_option_list = [
    {text: "Info", href: "#", modal: "info-modal", icon: "bi-info-circle"},
    {text: "Skills", href: "#skills-section", modal: "#", icon: "bi-briefcase"},
    {text: "Certifications", href: "#", modal: "#", icon: "bi-mortarboard"},
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
    });
}