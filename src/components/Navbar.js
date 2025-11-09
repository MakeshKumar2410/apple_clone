function Navbar()
{
    return(
        <nav>
    <div class="navbar">
      <div class="logo">
        <a href="#"><img src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg" alt="Apple Logo"></img></a>
      </div>

  
      <input type="checkbox" id="menu-checkbox"></input>

  
      <label for="menu-checkbox" class="menu-toggle">
        <i class="fas fa-bars"></i>
      </label>

    
      <div class="nav-links">
        <a href="#">Mac</a>
        <a href="#">iPad</a>
        <a href="#">iPhone</a>
        <a href="#">Watch</a>
        <a href="#">AirPods</a>
        <a href="#">TV & Home</a>
        <a href="#">Only on Apple</a>
        <a href="#">Accessories</a>
        <a href="#">Support</a>
      </div>

     
      <div class="icons">
        <i class="fas fa-search"></i>
        <i class="fas fa-shopping-cart"></i>
      </div>
    </div>
  </nav>

    )
}

export default Navbar