let menu_lable = document.getElementById("menu_label");
let nav_links = document.getElementById("nav_links");

menu_lable.addEventListener("click",()=>{
    if(nav_links.className == "nav_links_visible"){
       nav_links.className = "nav_links_not_visible"
       menu_lable.innerText = "X"
    }else{
        nav_links.className = "nav_links_visible"
        menu_lable.innerText = "Menu"
    }
});
nav_links.addEventListener("click",()=>{
    if(nav_links.className == "nav_links_visible"){
        nav_links.className = "nav_links_not_visible"
        menu_lable.innerText = "X"
     }else{
         nav_links.className = "nav_links_visible"
         menu_lable.innerText = "Menu"
     }
})

