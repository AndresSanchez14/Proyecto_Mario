import NavbarStyle from "./css/Navbar.module.css";
const Narbar = () => {
  return (
    <nav className={NavbarStyle.navbar}>
      <a href="#container">Inicio</a>
      <a href="#redes">¿Quien es mario?</a>
      <a href="#salto">Portafolio</a>
      <a href="#contactoFotter">Contacto</a>
    </nav>
  );
};

export default Narbar;
