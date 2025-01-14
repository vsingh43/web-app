// toggler coding
var toggler_btn=document.querySelector(".toggler-btn");
var side_nav=document.querySelector(".side-nav");


toggler_btn.onclick=function(){
    side_nav.classList.toggle("active");
}

// title animation
var title = document.querySelector("#title");
var arrIndex=0;
var charIndex =0;
var array =[
"Full Stack Developer",
"Data Analyst",
"DevOps Engineer",
"Database Administrator",
];
function updateTitle(){
    charIndex++;
    title.innerHTML="I'm a passionate <span>"+array[arrIndex].slice(0,charIndex)+"</span>";
   
    if(charIndex==array[arrIndex].length ){
        arrIndex++;
        charIndex=0;
    }
    if(arrIndex==array.length){
        arrIndex=0;
    }
    setTimeout(updateTitle,80);
}
updateTitle();