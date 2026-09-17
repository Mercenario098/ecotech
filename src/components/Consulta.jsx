import { useState } from "react";

function Consulta() {
  const [busca, setBusca] = useState("");
  const [resultado, setResultado] = useState(null);
  const [mensagem, setMensagem] = useState(
    "Consulte materiais como celular, bateria ou carregador."
  );
  const [erro, setErro] = useState(false);

  function normalizarBusca(valor) {
    return valor
      .trim()
      .toLocaleLowerCase("pt-BR")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  async function consultarResiduo(nome) {
    const material = normalizarBusca(nome);

    if (!material) {
      setResultado(null);
      setMensagem("Digite o nome de um material para realizar a consulta.");
      setErro(true);
      return;
    }

    setMensagem("Consultando...");
    setResultado(null);
    setErro(false);

    try {
      const resposta = await fetch(
        `/api/residuos?nome=${encodeURIComponent(material)}`
      );

      if (resposta.status === 404) {
        setMensagem("Material não encontrado no banco de dados.");
        setErro(true);
        return;
      }

      if (!resposta.ok) {
        throw new Error("Erro ao consultar a API.");
      }

      const dados = await resposta.json();

      setResultado(dados);
      setMensagem("");
      setErro(false);
    } catch (error) {
      console.error("Erro:", error);

      setResultado(null);
      setMensagem(
        "Não foi possível consultar o servidor. Verifique se a API está funcionando."
      );
      setErro(true);
    }
  }

  function handleSubmit(evento) {
    evento.preventDefault();
    consultarResiduo(busca);
  }

  function consultarExemplo(material) {
    setBusca(material);
    consultarResiduo(material);
  }

  return (
    <section
      className="consulta-section"
      id="consulta"
      aria-labelledby="consulta-title"
    >
      <div className="consulta-illustration" aria-hidden="true">
        <img
          src="/imagem/img-fundo.png"
          alt="Ilustração de consulta de resíduos"
        />
      </div>

      <div className="consulta-content">
        <h2 id="consulta-title">Consulte um resíduo</h2>

        <p>
          Digite o nome do material para consultar informações
          <br />
          sobre o descarte correto.
        </p>

        <form className="consulta-form" onSubmit={handleSubmit}>
          <label className="sr-only" htmlFor="residuo">
            Nome do material
          </label>

          <input
            id="residuo"
            type="search"
            autoComplete="off"
            placeholder="Ex.: celular, bateria, notebook..."
            value={busca}
            onChange={(evento) => setBusca(evento.target.value)}
          />

          <button type="submit">Consultar</button>
        </form>

        {resultado ? (
          <div className="consulta-status" role="status" aria-live="polite">
            <strong>{resultado.nome}</strong>
            <br /><br />

            <strong>Categoria:</strong> {resultado.categoria}
            <br />

            <strong>Reciclável:</strong>{" "}
            {resultado.reciclavel === 1 || resultado.reciclavel === true
              ? "Sim"
              : "Não"}

            <br /><br />

            <strong>Descrição:</strong>
            <br />
            {resultado.descricao}

            <br /><br />

            <strong>Como descartar:</strong>
            <br />
            {resultado.descarte}
          </div>
        ) : (
          <small
            className={
              erro
                ? "consulta-status consulta-status-erro"
                : "consulta-status"
            }
            role="status"
            aria-live="polite"
          >
            {mensagem}
          </small>
        )}
      </div>

      <div className="consulta-exemplos">
        <h3>Exemplo de materiais</h3>

        <ul>
          <li>
            <button type="button" onClick={() => consultarExemplo("celular")}>
              Celular
            </button>
          </li>

          <li>
            <button type="button" onClick={() => consultarExemplo("computador")}>
              Computador
            </button>
          </li>

          <li>
            <button type="button" onClick={() => consultarExemplo("bateria")}>
              Bateria
            </button>
          </li>

          <li>
            <button type="button" onClick={() => consultarExemplo("carregador")}>
              Carregador
            </button>
          </li>

          <li>
            <button type="button" onClick={() => consultarExemplo("pilha")}>
              Pilha
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Consulta;