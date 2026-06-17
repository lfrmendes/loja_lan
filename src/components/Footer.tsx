import Monitor from "../assets/monitor.svg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-logo">
          <img src="/logo.png" alt="FR Computer" width={140} />

          <p>
            Performance que você sente.
            <br />
            Experiência que você vive.
          </p>

          <div className="social-icons">
            <img src={Monitor} alt="Instagram" />
            <img src={Monitor} alt="Facebook" />
            <img src={Monitor} alt="YouTube" />
            <img src={Monitor} alt="Discord" />
          </div>
        </div>

        <div>
          <h3>Empresa</h3>

          <ul>
            <li>Sobre nós</li>
            <li>Trabalhe conosco</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3>Categorias</h3>

          <ul>
            <li>Placas de Vídeo</li>
            <li>Processadores</li>
            <li>Periféricos</li>
            <li>Montagem de PC</li>
          </ul>
        </div>

        <div>
          <h3>Suporte</h3>

          <ul>
            <li>Central de Ajuda</li>
            <li>Política de Garantia</li>
            <li>Trocas e Devoluções</li>
            <li>Fale Conosco</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 FR Computer. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
