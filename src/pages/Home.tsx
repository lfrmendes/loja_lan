import { useState, useEffect } from "react";

import "../styles/header.css";
import "../styles/utility.css";
import "../styles/hero.css";
import "../styles/solution.css";
import "../styles/testimonials.css";
import "../styles/pricing.css";
import "../styles/contact.css";
import "../styles/footer.css";

import Close from "../assets/close.svg";
import Menu from "../assets/hamburguer.svg";
import Monitor from "../assets/monitor.svg";
import Construction from "../assets/construction.svg";
import Account from "../assets/account.svg";

import Star from "../assets/Star.png";
import VoidStar from "../assets/VoidStar.png";
import Check from "../assets/Check.png";
import Bah from "../assets/images/bah.jpg";
import CachorroChupetao from "../assets/images/cachorrochupetao.jpg";
import Monkey from "../assets/images/monkey.jpg";
import Sorridente from "../assets/images/sorridente.jpg";

import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import Footer from "../components/Footer";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (!response.ok) {
        const body = await response.json().catch(() => ({}));
        throw new Error(body.error ?? "Erro ao enviar mensagem.");
      }

      setStatus("success");
      setEmail("");
      setMessage("");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img src="/logo.png" alt="Logo FR Computer" width={180} height={80} />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Avaliações</a>
              </li>
              <li>
                <a href="#pricing">Planos</a>
              </li>
              <li>
                <a href="#contact">Contato</a>
              </li>
            </ul>
          </div>

          <div className="desktop-only">
            <div className="flex items-center">
              <a className="reverse-color ml-lg" href="">
                Login
              </a>
              <Button text="Cadastre-se" />
            </div>
          </div>

          <div className="mobile-menu">
            {showMobileMenu ? (
              <div className="mobile-menu-content">
                <div className="container flex">
                  <ul>
                    <li>
                      <a onClick={() => setShowMobileMenu(false)} href="#">
                        Home
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#solution"
                      >
                        Soluções
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#testimonials"
                      >
                        Avaliações
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#pricing"
                      >
                        Planos
                      </a>
                    </li>
                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#contact"
                      >
                        Contato
                      </a>
                    </li>
                  </ul>
                  <span
                    onClick={() => setShowMobileMenu(!showMobileMenu)}
                    className="btn-wrapper"
                  >
                    <img src={Close} alt="Fechar menu" width={24} height={24} />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="Abrir menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <div className="container content">
          <p className="eyebrow desktop-only">Seu jogo. Nossa performance.</p>

          <h1>
            Monte seu PC Gamer ou escolha um plano para{" "}
            <span>jogar sem limites.</span>
          </h1>

          <p>
            Peças de alta performance, periféricos incríveis e planos exclusivos
            para nossa Lan House. Tudo que você precisa para elevar seu nível no
            game.
          </p>

          <div className="flex gap-1">
            <span>
              <Button text="Montar meu PC" />
            </span>
            <span className="desktop-only">
              <Button text="Ver planos" secondary />
            </span>
          </div>
        </div>
      </section>

      <section className="container" id="solution">
        <header>
          <span className="eyebrow">Por que escolher a FR Computer?</span>
          <h2>Vantagens que fazem a diferença</h2>
          <p>
            Da montagem à manutenção, da Lan House às peças originais — a{" "}
            <strong>FR Computer</strong> tem tudo que o gamer precisa em um só
            lugar.
          </p>
        </header>

        <div className="even-columns">
          <Card
            icon={Monitor}
            title="Peças Originais"
            description="Trabalhamos apenas com componentes das melhores marcas do mercado, com garantia e máxima performance."
          />
          <Card
            icon={Construction}
            title="Montagem Especializada"
            description="Nossa equipe monta seu PC do zero com capricho, do cabeamento ao gerenciamento térmico."
          />
          <Card
            icon={Account}
            title="Suporte Técnico"
            description="Assistência antes, durante e depois da compra. Upgrade, manutenção e diagnóstico completo."
          />
        </div>
      </section>

      <section id="testimonials">
        <header>
          <p className="eyebrow desktop-only">O que dizem nossos clientes</p>
          <h2>Avaliações de quem joga com a gente</h2>
          <p>
            Quem montou aqui, voltou. Confira o que nossos clientes falam sobre
            a experiência FR Computer.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialCard
              image={Bah}
              testimony="Montei meu PC com a FR Computer e ficou simplesmente incrível! Atendimento top e peças de altíssima qualidade."
              name="Lucas Gauchinho"
              role="Desempregado"
              stars={5}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />
            <TestimonialCard
              image={CachorroChupetao}
              testimony="Ambiente da Lan House é impecável, PCs potentes e conexão estável. Meu lugar favorito pra jogar com os amigos!"
              name="Beatriz"
              role="Amadora nos jogos"
              stars={5}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />
            <TestimonialCard
              image={Monkey}
              testimony="Upgrade de placa de vídeo feito em menos de uma hora. Voltei pra casa com o PC rodando tudo no máximo!"
              name="Rafael Guloso"
              role="Clt Raiz"
              stars={4}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />
            <TestimonialCard
              image={Sorridente}
              testimony="Melhor custo-benefício que já encontrei. Peças originais, preço justo e entrega rápida."
              name="Ana Contente"
              role="Designer"
              stars={5}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />
            <TestimonialCard
              image={Bah}
              testimony="Montei meu PC com a FR Computer e ficou simplesmente incrível! Atendimento top e peças de altíssima qualidade."
              name="Lucas Gauchinho"
              role="Desempregado"
              stars={5}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />
            <TestimonialCard
              image={CachorroChupetao}
              testimony="Ambiente da Lan House é impecável, PCs potentes e conexão estável. Meu lugar favorito pra jogar com os amigos!"
              name="Beatriz"
              role="Amadora nos jogos"
              stars={5}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />
          </div>
        </section>
      </section>

      <section id="pricing" className="container">
        <header>
          <p className="eyebrow desktop-only">Planos Lan House</p>
          <h2>Escolha o plano ideal para você</h2>
        </header>

        <section className="even-columns">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Para sessões rápidas e jogos casuais.</p>
            </span>
            <span className="price">
              <h2>R$ 29,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Assinar plano" secondary />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>10 horas por mês</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>PC Gamer Padrão</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>Internet de Alta Velocidade</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>Suporte Básico</p>
            </span>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>MAIS ESCOLHIDO</p>
            </span>
            <span className="plan">
              <h3>Pro Gamer</h3>
              <p>Para quem joga mais e busca performance.</p>
            </span>
            <span className="price">
              <h2>R$ 59,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Assinar plano" />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>25 horas por mês</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>PC Gamer Avançado</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>Internet de Ultra Velocidade</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>Descontos em produtos</p>
            </span>
          </div>

          <div className="pricing-card">
            <span className="plan">
              <h3>Elite</h3>
              <p>Para jogadores exigentes e competitivos.</p>
            </span>
            <span className="price">
              <h2>R$ 89,90</h2>
              <p>/mês</p>
            </span>
            <Button text="Assinar plano" secondary />
            <span className="hr" />
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>50 horas por mês</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>PC Gamer High End</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>Internet de Ultra Velocidade</p>
            </span>
            <span className="features">
              <img src={Check} alt="check" width={20} height={20} />
              <p>Acesso prioritário</p>
            </span>
          </div>
        </section>
      </section>

      <section id="contact" className="container">
        <header className="contact-header">
          <p className="eyebrow">Fale conosco</p>
          <h2>Tem alguma dúvida?</h2>
          <span>
            <p>
              Entre em contato conosco e nossa equipe vai te ajudar a encontrar
              a melhor solução para você — seja um orçamento, dúvida técnica ou
              plano personalizado.
            </p>
          </span>
        </header>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            placeholder="Descreva sua dúvida, solicite um orçamento ou envie sua mensagem."
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <Button
            text={status === "loading" ? "Enviando..." : "Enviar mensagem"}
          />

          {status === "success" && (
            <p style={{ color: "#4ade80" }}>Mensagem enviada com sucesso!</p>
          )}
          {status === "error" && (
            <p style={{ color: "#f87171" }}>Erro ao enviar. Tente novamente.</p>
          )}
        </form>
      </section>

      <Footer />
    </>
  );
}
