let html_HeaderDropDownMenuButton= document.querySelector(".headericon3");
let html_dark_ModeButton= document.querySelector(".headericon2");
const html_navBar=document.getElementById('nav_bar');
const html_nav_bar_InnerButton=document.getElementById('nav_bar_InnerButton');
let html_main = document.getElementById('index_main');
let html_body= document.querySelector("body");
let html_profile_pictureContainer= document.querySelector(".profile_pictureContainer");
let changed='whitesmoke';


html_HeaderDropDownMenuButton.addEventListener('click', Drop_DownMenu_funct=()=>{
   html_navBar.style.display="block";} );

html_nav_bar_InnerButton.addEventListener('click', Drop_DownMenu_funct=()=>{
   html_navBar.style.display="none";} )

html_dark_ModeButton.addEventListener(
   'click',  DarkMode_funct=()=>{
         
         if(changed==='whitesmoke')
         {html_body.style.background='rgb(19, 18, 61)';
         html_profile_pictureContainer.style.background='rgb(19, 18, 61)';
                  changed='rgb(19, 18, 61)';}
         
         else if (changed==='rgb(19, 18, 61)')
         {html_body.style.background='whitesmoke';
         html_profile_pictureContainer.style.background='whitesmoke';
                  changed='whitesmoke';}
         console.log('clicked');
      }
       )
    
//console.log(html_dark_ModeButton);