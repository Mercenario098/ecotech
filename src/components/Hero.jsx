function Hero() {
  return (
    <section className="secao-hero" id="inicio">
      <div className="hero-container">
        <div className="secao1">
          <h2>
            Tecnologia
            <br />
            que cuida do futuro.
          </h2>

          <p>
            Aprenda a reduzir, reutilizar e descartar
            corretamente resíduos eletrônicos.
          </p>

          <button className="btnODS12" type="button">
            Conheça o ODS 12 <span className="arrow">→</span>
          </button>
        </div>

        <div className="hero-image">
          <img
            src="/imagem/img-fundo.png"
            alt="Imagem da EcoTech"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;