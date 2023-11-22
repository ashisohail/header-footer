import "./Header.css";

function Header() {
  return (
    <header>
      <div class="logo">
        <a href="#">Ayesha Siddiqa</a>
      </div>
      <div class="hamburger">
        <i class="fa-solid fa-bars"></i>
      </div>

      <nav class="nav-container">
        <div class="nav-bar">
          <a href="">Home</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
