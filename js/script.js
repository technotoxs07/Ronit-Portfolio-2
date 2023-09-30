/*=====typing animation ====*/
var typed = new Typed(".typing" ,{
strings: ["Web Designer", "Web Developer","Graphic Designer",".Net Developer"],
typeSpeed: 100,
BackSpeed:60,
loop:true
});
/*========aside=====*/
const nav= document.querySelector(".nav"),
navList = nav.querySelectorAll("li"),
totalNavList =navList.length;
for(let i=0; i<totalNavList; i++)
{
  const a = navList[i].querySelector("a");
  a.addEventListener("click",function()
  {
    for(let j=0; j<totalNavList; j++)
    {
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active")
  })
}
/*********togglerrrrrr******
const navTogglerBtn = document.querySelector(".nav-toggler"),
aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
})
function asideSectionTogglerBtn()
{
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for(let i=0;  i<totalSection; i++)
  {
    allSection[i].classList.toggle("open");
  }
}***/