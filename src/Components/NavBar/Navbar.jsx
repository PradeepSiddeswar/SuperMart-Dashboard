import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Navbar = () => {
    return(
        <>
       <nav class="navbar navbar-expand-lg" style={{backgroundColor:'#7952b3'}}> 
  <div class="container-fluid " style={{color:'green', fontWeight:'bold', fontSize:'25px', color:'white', fontFamily:'revert-layer'}}>  DASHBOARD
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="true" aria-label="Toggle navigation" style={{backgroundColor:'white'}}>
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <a class="navbar-brand" href="#" style={{fontWeight:'bold'}}></a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#"></a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled"></a>
        </li>
      </ul>
      <form class="d-flex p-2" role="search" >
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        {/* <button class="btn btn-outline-success" type="submit" style={{color:'white'}}>Search</button> */}
      </form>
      <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Virat_Kohli_during_the_India_vs_Aus_4th_Test_match_at_Narendra_Modi_Stadium_on_09_March_2023.jpg" alt="Avatar" class="avatar" style={{verticalAlign:'middle', width:'50px', height:'50px', borderRadius:'90%'}}/>

    </div>
  </div>
</nav>

        </>
    )
}
export default Navbar