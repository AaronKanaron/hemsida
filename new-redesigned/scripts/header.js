var pressAmount = 0;
// buttons for menu overlay
const menuOpen = document.querySelector(".menu");
const menuClose = document.querySelector(".close");
const overlay = document.querySelector(".overlay");
//for header
const header = document.getElementById("header");
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if(currentScroll <= 0) {
        header.classList.remove("scroll-up")
    }

    if(currentScroll > lastScroll && !header.classList.contains("scroll-down")) {
        header.classList.remove("scroll-up")
        header.classList.add("scroll-down")
        header.classList.remove("top")
    }

    if(currentScroll < lastScroll && header.classList.contains("scroll-down")) {
        header.classList.add("scroll-up")
        header.classList.remove("scroll-down")
        header.classList.remove("top")
    }

    if(!header.classList.contains("scroll-down") && !header.classList.contains("scroll-up")){
        header.classList.add("top")
    }

    

    lastScroll = currentScroll;
})

menuOpen.addEventListener("click", () => {
    overlay.classList.add("overlay--show");
    console.log("Öppna Meny")
});

menuClose.addEventListener("click", () => {
    overlay.classList.remove("overlay--show");
});
  

const themeMap = {
    dark: "light",
    light: "dark",
};
  
const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
const bodyClass = document.body.classList;
bodyClass.add(theme);
  
function toggleTheme() {
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
    
    pressAmount+=1;
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    console.log(pressAmount)
    if(pressAmount >= 100){
        console.log("Du har klickat över 100 gånger!")
    }
}


document.getElementById('theme-toggle').onclick = toggleTheme;