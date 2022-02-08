import React from 'react';


function Home(){
    return(
       <div>

<div class="navbar navbar-expand-md bg-secondary navbar-dark text-white">
  <div class="container">
   <a href="#" class="navbar-brand fst-italic" > my portoflio   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
  </svg></a>

   <button class="navbar-toggler" 
   type="button"
    data-bs-toggle="collapse"
     data-bs-target="#mainmenu">
    <span class="navbar-toggler-icon"></span>
    </button>

   <div class="collapse navbar-collapse" id="mainmenu">
     <ul class="navbar-nav ms-auto">
      <li class="nav-item fw-bold fst-italic"><a href="index.html" class="nav-link">home</a></li>
      <li class="nav-item fw-bold fst-italic"><a href="about.html" class="nav-link">about me</a></li>
       <li class="nav-item fw-bold fst-italic"><a href="Services.html" class="nav-link">Services</a></li>
       <li class="nav-item fw-bold fst-italic"><a href="contact me.html" class="nav-link">contact me</a></li>
     </ul>
   </div>
  </div>
</div>
{/* <!--  start nav bar --> */}
<section id="here" class="bg-white text-light text-center text-sm-start py-5 ">
 <div class="container">
  <div class="d-sm-flex  align-items-center justify-content-center">
    <div class="py-3">
      <h1 class="display-2"> <span class="textname fst-italic"> I AM MARINA ROMANY </span></h1>
      <p class="py-2 lead text text"> Full Stack Developer</p>
      
    </div>
    {/* <img  class="img-fluid" src="/img/welcomel.svg" alt="new"> */}
  </div>
 </div>
</section>


       </div>
        );
}

export default Home;