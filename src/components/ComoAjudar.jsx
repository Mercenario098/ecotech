function ComoAjudar() {
  return (
    <section id="ajuda">
      <div className="divCards3">
        <div className="card">
          <img
            src="/imagem/reduzir.png"
            alt="Imagem de redução de resíduos"
          />
          <h3>1. Reduzir</h3>
          <p>
            Evite trocar equipamentos sem necessidade.
            Use de forma consciente.
          </p>
        </div>

        <div className="card">
          <img
            src="/imagem/reutilizar.png"
            alt="Imagem de reutilização de resíduos"
          />
          <h3>2. Reutilizar</h3>
          <p>
            Doe, conserte ou dê uma nova finalidade aos equipamentos.
          </p>
        </div>

        <div className="card">
          <img
            src="/imagem/reciclar.png"
            alt="Imagem de reciclagem"
          />
          <h3>3. Reciclar</h3>
          <p>
            Separe os resíduos e procure pontos de coleta para que eles
            sejam reciclados corretamente.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ComoAjudar;