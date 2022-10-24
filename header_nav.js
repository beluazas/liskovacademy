// Se inserta header, barra de navegación y footer
let header = `
<img src="img/logo.png" alt="" width="300px">
`
document.getElementById("idheader").innerHTML = header

let nav = ` 
<ul class="menu">
<li class="item"><a href="index.html">INICIO</a></li>
<li class="item"><a href="quienes_somos.html">QUIÉNES SOMOS</a></li>
<li class="item has-submenu">
  <a tabindex="0">CURSOS <i class="fa-solid fa-angle-down"></i></a>
  <ul class="submenu">
    <li class="subitem"><a href="IA.html">IA</a></li>
    <li class="subitem"><a href="fullstack_java.html">Full Stack</a></li>
    <li class="subitem"><a href="ux_design.html">Diseño UX/UI</a></li>
  </ul>
</li>
<li class="item"><a href="faq.html">FAQ</a></li>
<li class="item"><a href="contact.html">CONTACTO</a>
</li>
<li class="toggle"><a href="#"><i class="fas fa-bars"></i></a></li>
</ul>
`

document.getElementById("idnav").innerHTML = nav

// Decisiones sobre la barra de navegación responsive y el dropdown

const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
const items = document.querySelectorAll(".item");

function toggleMenu() {
  if (menu.classList.contains("active")) {
    menu.classList.remove("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
  } else {
    menu.classList.add("active");
    toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
  }
}

function toggleItem() {
  if (this.classList.contains("submenu-active")) {
    this.classList.remove("submenu-active");
  } else if (menu.querySelector(".submenu-active")) {
    menu.querySelector(".submenu-active").classList.remove("submenu-active");
    this.classList.add("submenu-active");
  } else {
    this.classList.add("submenu-active");
  }
}

function closeSubmenu(e) {
  if (menu.querySelector(".submenu-active")) {
    let isClickInside = menu
      .querySelector(".submenu-active")
      .contains(e.target);

    if (!isClickInside && menu.querySelector(".submenu-active")) {
      menu.querySelector(".submenu-active").classList.remove("submenu-active");
    }
  }
}

toggle.addEventListener("click", toggleMenu, false);
for (let item of items) {
  if (item.querySelector(".submenu")) {
    item.addEventListener("click", toggleItem, false);
  }
  item.addEventListener("keypress", toggleItem, false);
}
document.addEventListener("click", closeSubmenu, false);