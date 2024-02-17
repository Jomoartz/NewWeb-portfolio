///ABOUT US PAGE
let html_dark_ModeButton= document.querySelector(".headericon2");
let changed='whitesmoke';
let html_ContactBody = document.getElementById('contactPage_body');


let html_HeaderDropDownMenuButton= document.querySelector(".headericon3");
const html_navBar=document.getElementById('about_nav_bar');
const html_nav_bar_InnerButton=document.getElementById('about_nav_bar_InnerButton');



html_HeaderDropDownMenuButton.addEventListener('click', Drop_DownMenu_funct=()=>{
    html_navBar.style.display="block";} );
    
    html_nav_bar_InnerButton.addEventListener('click', Drop_DownMenu_funct=()=>{
    html_navBar.style.display="none";} )


html_dark_ModeButton.addEventListener(
    'click',  DarkMode_funct=()=>{
            
            if(changed==='whitesmoke')
            {
            html_ContactBody.style.background='rgb(81, 136, 136)'; 
            changed='black';}

            else if (changed==='black')
            {
            html_ContactBody.style.background=' rgb(145, 207, 207)';
            changed='whitesmoke';} }
        )