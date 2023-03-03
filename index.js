let menu_lable = document.getElementById("menu_label");
let nav_links = document.getElementById("nav_links");
let animate = document.getElementById("animate");
// {/* <span><</span>Ankit <span>Patel</span>> */}
let span_left = document.createElement("span")
let span_right = document.createElement("span")
span_left.setAttribute("id","left_span")
span_right.setAttribute("id","right_span")
let animate_content = ["<","A","n","k","i","t ","P","a","t","e","l",">"]
let i = 0
animate.append(span_left)
span_left.innerText=animate_content[i++]

setInterval(() => {
    if(i == animate_content.length){
        i = 0
        animate.innerHTML = null
        span_left.innerText=null
        span_right.innerText=null
    }
    if(i == 0){
        animate.append(span_left)
        span_left.innerText=animate_content[i]
    } 
    else if(i>0 && i<=5){
        animate.innerHTML+=animate_content[i]
        
    }else
    if(i>=6 && i<=animate_content.length-2){
        if(i == 6) animate.append(span_right)
        span_right.innerText+=animate_content[i]
    }else{
        animate.innerHTML+=animate_content[i]
    }
    i++
    
}, 300);


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


