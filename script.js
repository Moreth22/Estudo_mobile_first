const toggler = document.querySelector('.toggle');
const navBar = document.querySelector('.NavBar');
const navBarItens = document.querySelectorAll('.navBarItem');


navBarItens.forEach ( (element)=>{
  if (element.querySelector('.subMenuNav')){
    element.addEventListener('click', (e)=>{
      element.classList.toggle('subactive');
    }
    );
  }
  }
);


toggler.addEventListener('click',(e)=>{
  if (navBar.classList.contains('active')){
    navBar.classList.remove('active');
    toggler.querySelector('a').innerHTML= '<i class="fa-solid fa-bars">';
  }
  else{
    navBar.classList.add('active');
     toggler.querySelector('a').innerHTML= '<i class="fa-solid fa-rectangle-xmark"></i>';
  }
  
})


