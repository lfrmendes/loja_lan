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
import HeroRectangleOne from "../assets/images/rectangleOne.png";
import HeroRectangleTwo from "../assets/images/rectangleTwo.png";
import Champion from "../assets/champion.svg";
import Star from "../assets/Star.png";
import ProfileImageOne from "../assets/ProfileImageOne.svg";
import VoidStar from "../assets/VoidStar.png";
import Check from "../assets/Check.png";

import Button from "../components/Button";
import Card from "../components/Card";
import TestimonialCard from "../components/TestimonialCard";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function Home() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(() => {
    const html = document.querySelector("html");

    if (html) {
      html.style.overflow = showMobileMenu ? "hidden" : "auto";
    }
  }, [showMobileMenu]);

  return (
    <>
      <header className="container py-sm">
        <nav className="flex items-center justify-between">
          <img
            src="/logo.png"
            alt="Logo FR Computer"
            width={200}
            height={100}
          />

          <div className="desktop-only">
            <ul className="flex gap-1">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#solution">Soluções</a>
              </li>
              <li>
                <a href="#testimonials">Depoimentos</a>
              </li>
              <li>
                <a href="#pricing">Preços</a>
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
                        Depoimentos
                      </a>
                    </li>

                    <li>
                      <a
                        onClick={() => setShowMobileMenu(false)}
                        href="#pricing"
                      >
                        Preços
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
                    <img
                      src={Close}
                      alt="ícone fechar menu"
                      width={24}
                      height={24}
                    />
                  </span>
                </div>
              </div>
            ) : (
              <span
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className="btn-wrapper"
              >
                <img src={Menu} alt="ícone menu" width={24} height={24} />
              </span>
            )}
          </div>
        </nav>
      </header>

      <section id="hero">
        <span className="desktop-only">
          <img src={HeroRectangleTwo} alt="Retangulo um tela inicial" />
        </span>

        <img src={HeroRectangleOne} alt="Retangulo dois tela inicial" />

        <div className="container content">
          <p className="desktop-only">Olá</p>

          <h1>
            Comida de mãe direto no seu apê, é só pedir que entregamos para
            você!
          </h1>

          <p>
            Já pensou em matar a saudade daquela comida caseira? O melhor de
            tudo, nossas receitas são 100% saudáveis, bora entrar no shape.
          </p>

          <div className="flex gap-1">
            <span>
              <Button text="Cadastre-se" />
            </span>

            <span className="desktop-only">
              <Button text="Veja mais" secondary />
            </span>
          </div>
        </div>
      </section>
      <section className="container" id="solution">
        <header>
          <span>
            <h2>Soluções</h2>

            <span className="desktop-only">
              <h2>Sob medida para você</h2>
            </span>
          </span>

          <p>
            Inovação é com a gente! A <strong>DonaFrost</strong>
            já conquistou diversos clientes, seja você mais um deles, veja tudo
            que pode ganhar com nossos serviços.
          </p>
        </header>

        <div className="even-columns">
          <Card
            icon={Champion}
            title="Produto Vencedor"
            description="Ideia matadora, nosso time já ganhou diversos eventos de inovação com nosso produto."
          />

          <Card
            icon={Champion}
            title="Atendimento Rápido"
            description="Nossa equipe está preparada para atender você com rapidez e qualidade."
          />

          <Card
            icon={Champion}
            title="Suporte Especializado"
            description="Conte com profissionais experientes para encontrar a melhor solução."
          />
        </div>
      </section>
      <section id="testimonials">
        <header>
          <span>
            <p className="desktop-only">Conselho de quem conhece</p>

            <h2>Cada cliente importa!</h2>
          </span>

          <p>
            Quem já pediu sabe da qualidade das nossas receitas, estamos tirando
            aquela ideia de que comida congelada tem de ser algo sem gosto,
            acompanhe abaixo os testemunhos de quem já comprou e aprovou.
          </p>
        </header>

        <section className="carousel">
          <div className="carousel-content">
            <TestimonialCard
              image={ProfileImageOne}
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              name="Ellon Ma"
              role="CEO BING CHILLING"
              stars={4}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />

            <TestimonialCard
              image={ProfileImageOne}
              testimony="Certamente o mercado chinês de eletricos está bombando, só existe uma coisa melhor do que isso, provar uma boa comida DonaFrost no almoço."
              name="Ryan Gosling"
              role="Agrônomo"
              stars={4}
              starIcon={Star}
              voidStarIcon={VoidStar}
            />
          </div>
        </section>
      </section>
      <section id="pricing" className="container">
        <header>
          <p className="desktop-only">Planos e preços</p>
          <h2>Nossos planos</h2>
        </header>

        <section className="even-columns">
          <div className="pricing-card">
            <span className="plan">
              <h3>Básico</h3>
              <p>Você tem direito a uma prova das comidas DonaFrost.</p>
            </span>

            <h2>Grátis</h2>

            <Button text="Pedir agora" secondary />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Retire na loja</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Apenas 1 por CPF</p>
            </span>
          </div>

          <div className="pricing-card premium">
            <span className="bonus">
              <p>1º MÊS COM DESCONTO</p>
            </span>

            <span className="plan">
              <h3>Premium</h3>
              <p>Para quem precisa de uma marmita diária, muito saborosa.</p>
            </span>

            <span className="price">
              <h2>R$ 89,90</h2>
              <p>/mês</p>
            </span>

            <Button text="Pedir agora" />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 Entregas</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>5 Refeições por semana</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>2 Sucos por semana</p>
            </span>
          </div>
          <div className="pricing-card">
            <span className="plan">
              <h3>Empresarial</h3>
              <p>
                Ideal para empresas que desejam oferecer refeições aos
                colaboradores.
              </p>
            </span>

            <span className="price">
              <h2>R$ 149,90</h2>
              <p>/mês</p>
            </span>

            <Button text="Pedir agora" />

            <span className="hr" />

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>10 refeições por semana</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Entrega prioritária</p>
            </span>

            <span className="features">
              <img src={Check} alt="ícone check" width={24} height={24} />
              <p>Suporte dedicado</p>
            </span>
          </div>
        </section>
      </section>
      <section id="contact" className="container">
        <header className="contact-header">
          <p>Envie sua dúvida</p>

          <h2>Entre em contato</h2>

          <span>
            <p>
              Entre em contato conosco. Estamos prontos para esclarecer dúvidas,
              fornecer informações sobre nossos produtos e ajudar você a
              encontrar a melhor solução para suas necessidades.
            </p>
          </span>
        </header>

        <form className="contact-form">
          <input type="email" placeholder="Seu melhor e-mail" />

          <textarea
            placeholder="Descreva sua dúvida, solicite um orçamento ou envie sua mensagem."
            rows={3}
          />

          <Button text="Enviar" />
        </form>
      </section>
      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h3>logo.png</h3>

            <div className="social-links">
              <span>Instagram</span>
              <span>Facebook</span>
              <span>YouTube</span>
            </div>
          </div>

          <div>
            <h3>Empresa</h3>

            <ul>
              <li>Sobre nós</li>
              <li>Faça parte do time</li>
              <li>Blog</li>
            </ul>
          </div>

          <div>
            <h3>Funcionalidades</h3>

            <ul>
              <li>Marketing</li>
              <li>Análise de dados</li>
              <li>Boot discord</li>
            </ul>
          </div>

          <div>
            <h3>Recursos</h3>

            <ul>
              <li>IOS & Android</li>
              <li>Teste a Demo</li>
              <li>Clientes</li>
              <li>API</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            Feito com amor na aula de Programação Web 💙 ©2024 AktieTech - Todos
            os direitos reservados.
          </p>
        </div>
      </footer>
    </>
  );
}
