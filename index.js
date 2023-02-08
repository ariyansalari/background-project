const Submit=document.querySelector(".submit-form");
const ListElement=document.querySelector("#ListElement");
const Username=document.querySelector("#username");
const UsernameList=document.querySelector("#Username-form")
const Primarycolor=document.querySelector("#primary-color")
const Secondarycolor=document.querySelector("#secondary-color")
const profileColor=document.querySelector("#profile-color")
const inputs=document.querySelectorAll(".image");
const SaveSubmit=document.querySelector("#submit-save");
const Avatar=document.querySelector("#Avatar")
const backgroundColor=document.querySelector(".background")
let selectedAvatar;
inputs.forEach((i)=>{

       i.addEventListener("click",(e)=>{
        
        selectedAvatar=e.target.previousElementSibling.src;
       })

    
    


})
SaveSubmit.addEventListener("click",(e)=>{
    e.preventDefault();

ListElement.style.top="-80rem";
UsernameList.innerHTML=Username.value.length>0?Username.value:UsernameList.textContent
   
console.log(UsernameList)
    Username.value="";
    Avatar.src=selectedAvatar == null ? Avatar.src : selectedAvatar;
    
  
    document.querySelector(":root").style.setProperty("--primary",Primarycolor.value);
document.querySelector(":root").style.setProperty("--secondary",Secondarycolor.value);
document.querySelector(":root").style.setProperty("--thirth",profileColor.value);
})
window.addEventListener("click",(e)=>{
    if(e.target==ListElement)
    {
        ListElement.style.display="none";
    }
})


Submit.addEventListener("click",(e)=>{
    e.preventDefault();
ListElement.style.top="0.01rem"

})