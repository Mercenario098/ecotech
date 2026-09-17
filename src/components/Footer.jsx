function Footer() {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-section footer-about">
          <div className="footer-brand">
            <img
              className="footer-logo"
              src="/imagem/logo .png"
              alt="Logo da EcoTech"
            />
            <h3>EcoTech</h3>
          </div>

          <p>
            Projeto desenvolvido para promover
            consumo e produção responsáveis,
            incentivando atitudes sustentáveis
            no uso da tecnologia.
          </p>
        </div>

        <div className="footer-section footer-nav">
          <h4>Navegação</h4>

          <ul>
            <li><a href="#inicio">Início</a></li>
            <li><a href="#ods12">ODS 12</a></li>
            <li><a href="#residuos">Resíduos</a></li>
            <li><a href="#ajuda">Como ajudar</a></li>
            <li><a href="#consulta">Consulta</a></li>
            <li><a href="#consulta">Contato</a></li>
          </ul>
        </div>

        <div className="footer-section footer-ods">
          <h4>ODS Trabalhado</h4>

          <img
            src="/imagem/ods-12.png"
            alt="ODS 12 - Consumo e Produção Responsáveis"
            className="footer-ods-badge"
          />
        </div>

        <div className="footer-section footer-integrantes">
          <h4>Integrantes</h4>

          <ul>
            <li>Lucas Azevedo Caldas</li>
            <li>Marinélia Araújo Costa</li>
            <li>Polyana Carreira Fonseca</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2026 EcoTech - Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;