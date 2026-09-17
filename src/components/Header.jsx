function Header() {
  return (
    <header>
      <div className="header-brand">
        <img
          className="logo"
          src="/imagem/logo .png"
          alt="Logo da EcoTech"
        />

        <div className="nomelogo">
          <h1>EcoTech</h1>
          <p>Tecnologia que cuida do futuro</p>
        </div>
      </div>

      <nav className="header-nav">
        <ul>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#ods12">ODS 12</a></li>
          <li><a href="#residuos">Resíduos</a></li>
          <li><a href="#ajuda">Como Ajudar</a></li>
          <li><a href="#consulta">Consultas</a></li>
          <li>
            <button className="btnContato" type="button">
              Contato
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;