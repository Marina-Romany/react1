import React from 'react';


function Contact(){
    return(
      
      <div>
          <div>
    <h2 class="align-items-center justify-content-center"> </h2>
    <div class="input-group mb-3">
      <span class="input-group-text fw-bold fst-italic" id="basic-addon1">Name </span>
      <input type="text" class="form-control" placeholder="write your name here" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>

<div class="input-group mb-3">
  <span class="input-group-text fw-bold fst-italic" id="inputGroup-sizing-default">E-mail </span>
  <input type="text" class="form-control" aria-label="" placeholder="E-mail" aria-describedby="inputGroup-sizing-default"/>
</div>
      <div class="input-group mb-3">
        <span class="input-group-text fw-bold fst-italic" id="inputGroup-sizing-default">Country </span>
        <input type="text" class="form-control" aria-label="your country" aria-describedby="inputGroup-sizing-default"
        placeholder="country"/>
      </div>
      <div class="input-group mb-3">
        <span class="input-group-text fw-bold fst-italic" id="basic-addon1">Message</span>
        <input type="text" class="form-control" placeholder="Message" aria-label="message" aria-describedby="basic-addon1"/>
      </div>
      <div class="col-sm-8"> 
        <button class="btn btn-info btn-md fw-bold fst-italic">
          <span class="glyphicon glyphicon-envelope fw-bold fst-italic"></span> send
               </button> 
      </div>
</div>
{/* <!-- end main --> */}

{/* <!-- star Footer --> */}
<footer class="text-center text-lg-start bg-light text-muted">
  {/* <!-- Section: Links  --> */}
  <section class="">
    <div class="container text-center text-md-start mt-5">
      {/* <!-- Grid row --> */}
      <div class="row mt-3">
        {/* <!-- Grid column --> */}
        <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* <!-- Links --> */}
          <h6 class="text-uppercase fw-bold mb-4">
            Contact
          </h6>
          <section class="mb-4">
            {/* <!-- Facebook --> */}
            <a class="btn btn-primary btn-floating m-1" href="https://www.facebook.com/mi.ro.549436" role="button"><i class="fab fa-facebook-f"></i></a>
          
            {/* <!-- Google --> */}
            <a class="btn btn-primary btn-floating m-1"  href="marinaromany41@gmail.com" role="button"><i class="fab fa-google"></i></a>
            {/* <!-- Linkedin --> */}
            <a class="btn btn-primary btn-floating m-1"href="https://www.linkedin.com/in/marina-romany-42bb50180" role="button"><i class="fab fa-linkedin-in"></i></a>
            {/* <!-- Github --> */}
            <a class="btn btn-primary btn-floating m-1"  href="marinaromany" role="button"><i class="fab fa-github"></i></a>
          </section>
          
          <p><i class="fas fa-home me-3"></i> Alexandria,Egypt</p>
          <p>
            <i class="fas fa-envelope me-3"></i>
            marinaromany41@gmail.com
          </p>
          <p><i class="fas fa-phone me-3"></i> +02 01211257205</p>
         
        </div>
        {/* <!-- Grid column --> */}
      </div>
      {/* <!-- Grid row --> */}
    </div>
  </section>
  </footer>
      </div>
        );
}

export default Contact;