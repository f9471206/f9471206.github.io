let boxs = document.querySelectorAll(".experience .item ");
let projects = document.querySelectorAll(".project .item");
let h1Title = document.querySelectorAll(".h1Title");
let contacts = document.querySelectorAll(".wrapper .button");
let skillList = document.querySelectorAll(".skill .list .item");
let goToTop = document.querySelector("#toTop");
let myNav = document.querySelector("#myNav");
let wellcomeBg = document.querySelector("#wellcomeBg");
let jsScrolls = document.querySelectorAll(".jsScroll");
let nav_links = document.querySelectorAll(".nav_link");

document.querySelector("#miniBar").addEventListener("click", (e) => {
  e.preventDefault();
  document.querySelector("nav").classList.toggle("close_nav");
});

nav_links.forEach((nav_link) => {
  nav_link.addEventListener("click", (e) => {
    e.preventDefault();
    if (e.target.innerText == "Home") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (e.target.innerText == "About") {
      document
        .querySelector("#about")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (e.target.innerText == "Experience") {
      document
        .querySelector("#experience")
        .scrollIntoView({ behavior: "smooth", top: 0 });
    }
    if (e.target.innerText == "Skill") {
      document
        .querySelector("#skill")
        .scrollIntoView({ behavior: "smooth", block: "center" });
    }
    if (e.target.innerText == "Project") {
      document
        .querySelector("#project")
        .scrollIntoView({ behavior: "smooth", top: 0 });
    }
    if (e.target.innerText == "Contact") {
      document
        .querySelector(".contact")
        .scrollIntoView({ behavior: "smooth", top: 0 });
    }
  });
});

//經歷表上的<a>
//第一個作品
document.querySelector("#project_1").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector("#project_height_1")
    .scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector("#project_height_1").style.animation =
    " blink 1.5s linear forwards";
  document
    .querySelector("#project_height_1")
    .addEventListener("animationend", () => {
      document.querySelector("#project_height_1").style.animation = "";
    });
});

//第二個作品
document.querySelector("#project_2").addEventListener("click", (e) => {
  e.preventDefault();
  document
    .querySelector("#project_height_2")
    .scrollIntoView({ behavior: "smooth", block: "center" });
  document.querySelector("#project_height_2").style.animation =
    " blink 1.5s linear forwards";
  document
    .querySelector("#project_height_2")
    .addEventListener("animationend", () => {
      document.querySelector("#project_height_2").style.animation = "";
    });
});

//頁面位子決定 nav class active
let navID = "Home";
window.addEventListener("scroll", () => {
  jsScrolls.forEach((jsScroll) => {
    if (jsScroll.getBoundingClientRect().top < (window.innerHeight / 5) * 2) {
      navID = jsScroll.id;
    }
  });
  nav_links.forEach((nav_link) => {
    if (nav_link.innerText.toLowerCase().includes(navID)) {
      document.querySelector("nav").classList.add("close_nav");
      document.querySelector(".active").classList.remove("active");
      nav_link.classList.add("active");
    }
  });

  //歡迎圖
  wellcomeBg.style.opacity = 1 - window.pageYOffset / 800;
  wellcomeBg.style.top = +window.pageYOffset + "px";
  wellcomeBg.style.transform = `translateY(${-+window.pageYOffset / 2}px)`;

  //回到最上icon
  goToTop.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
  if (pageYOffset < 200) {
    goToTop.style.opacity = 0;
    myNav.style.boxShadow = "";
    myNav.style.backgroundColor = "";
    nav_links.forEach((nav_link) => {
      nav_link.style.color = "white";
    });
  } else {
    myNav.style.transition = "all 0.6s ease-in";
    myNav.style.boxShadow = "0 10px 10px 1px rgba(0,0,0,0.1)";
    myNav.style.backgroundColor = "#fff";
    goToTop.style.opacity = 1;
    nav_links.forEach((nav_link) => {
      nav_link.style.color = "black";
    });
    document.querySelector(".active").style.color = "white";
  }

  let checkHeight = (window.innerHeight / 5) * 4;
  //標題
  h1Title.forEach((title) => {
    let titleTop = title.getBoundingClientRect().top;
    if (titleTop < checkHeight) {
      title.classList.add("scrollShow");
    } else {
      title.classList.remove("scrollShow");
    }
  });

  //經歷的
  boxs.forEach((box) => {
    let boxTop = box.getBoundingClientRect().top;
    let titleYear = box.children[0];
    let content = box.children[1];
    if (boxTop < checkHeight) {
      titleYear.classList.add("scrollShow");
      content.classList.add("scrollShow");
    } else {
      titleYear.classList.remove("scrollShow");
      content.classList.remove("scrollShow");
    }
  });
  // skill
  skillList.forEach((item) => {
    let img = item.children[0];
    let title = item.children[1];
    let itemTop = item.getBoundingClientRect().top;
    if (itemTop < checkHeight) {
      img.classList.add("showSkill");
      title.classList.add("showSkillH2");
    } else {
      img.classList.remove("showSkill");
      title.classList.remove("showSkillH2");
    }
  });

  //作品
  projects.forEach((item) => {
    let itemTop = item.getBoundingClientRect().top;
    let img = item.children[0];
    let content = item.children[1];
    if (itemTop < checkHeight) {
      img.classList.add("scrollShow");
      content.classList.add("scrollShow");
    } else {
      img.classList.remove("scrollShow");
      content.classList.remove("scrollShow");
    }
  });

  //聯絡ICON
  contacts.forEach((icon) => {
    let iconTop = icon.getBoundingClientRect().top;
    if (iconTop < checkHeight) {
      icon.classList.add("show_icon");
    } else {
      icon.classList.remove("show_icon");
    }
  });
});
