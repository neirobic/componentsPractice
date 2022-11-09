/* when nav is clicked, toggle visibility of expanded menu on and off,
going from expanded to collapsed or collapsed to expanded
*/

const nav = document.querySelector("nav");
const navCollapsed = document.querySelector(".nav-collapsed");
const navExpanded = document.querySelector(".nav-expanded");

nav.addEventListener('click', collapseExpand);

function collapseExpand() {
    navCollapsed.classList.toggle("hidden");
    navExpanded.classList.toggle("hidden");
}


