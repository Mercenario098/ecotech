function Residuos() {
  return (
    <section id="residuos">
      <h2 className="titulo-residuos">Resíduos Eletrônicos</h2>

      <p className="descricao-residuos">
        Alguns materiais tecnológicos precisam de atenção especial no descarte.
      </p>

      <div className="divCards2">
        <div className="card">
          <img src="/imagem/celular.png" alt="Imagem de um celular" />
          <h3>Celulares</h3>
          <p>
            Devem ser encaminhados para pontos de coleta apropriados.
          </p>
        </div>

        <div className="card">
          <img src="/imagem/computador.png" alt="Imagem de um computador" />
          <h3>Computadores</h3>
          <p>
            Peças podem ser reaproveitadas ou recicladas, evitando a poluição.
          </p>
        </div>

        <div className="card">
          <img src="/imagem/pilha.png" alt="Imagem de uma pilha" />
          <h3>Pilhas e baterias</h3>
          <p>
            Devem ser entregues em pontos de coleta específicos.
          </p>
        </div>

        <div className="card">
          <img src="/imagem/carregador.png" alt="Imagem de um carregador" />
          <h3>Cabos e carregadores</h3>
          <p>
            Podem conter materiais recicláveis e devem ter destinação correta.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Residuos;