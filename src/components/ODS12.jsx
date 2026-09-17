function ODS12() {
  return (
    <section className="secao2" id="ods12">
      <div className="ods-container">
        <div className="ods-content">
          <h2>Projeto alinhado ao</h2>
          <h3>ODS 12 – Consumo e Produção Responsáveis</h3>
          <p>
            Promovemos o uso consciente da tecnologia e ações sustentáveis
            para um mundo melhor.
          </p>
        </div>

        <div className="ods-badge">
          <img
            className="img-ods12"
            src="/imagem/ods-12.png"
            alt="Imagem do ODS 12"
          />
        </div>
      </div>

      <img
        className="img-eco"
        src="/imagem/img-eco.png"
        alt="Imagem de um ecossistema"
      />

      <section
        className="ods-acao"
        aria-label="ODS 12 - Consumo e Produção Responsáveis"
      >
        <h2 className="ods-acao-title">
          ODS 12 – Consumo e Produção Responsáveis
        </h2>

        <div className="ods-acao-layout">
          <div>
            <img
              className="ods-badge-card"
              src="/imagem/ods-12.png"
              alt="Imagem do ODS 12"
            />
          </div>

          <div className="ods-acao-copy">
            <p>
              O ODS 12 busca garantir padrões de consumo e produção
              sustentáveis, reduzindo o desperdício, incentivando a eficiência
              no uso de recursos e promovendo práticas responsáveis ao longo de
              toda a cadeia produtiva.
            </p>

            <p>
              No contexto tecnológico, isso envolve utilizar equipamentos de
              forma consciente, prolongar sua vida útil e realizar o descarte
              correto dos resíduos eletrônicos.
            </p>
          </div>

          <div>
            <img
              className="ods-eco-illustration"
              src="/imagem/img-eco.png"
              alt="Ilustração de um ecossistema sustentável"
            />
          </div>
        </div>
      </section>
    </section>
  );
}

export default ODS12;