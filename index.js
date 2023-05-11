const container=document.querySelector('#container');
const clickMe=document.getElementById("click");
const form=document.getElementById("form");
const bouton_submit=document.getElementById("bouton");


clickMe.addEventListener("click",function(){
    clickMe.style["opacity"]="0"
    form.style["opacity"]="1"

});

bouton_submit.addEventListener("click",function(){
  const name=document.getElementById("name");
const password=document.getElementById("password");
 
       alert('bienvenu  '+name.value);
    

})


