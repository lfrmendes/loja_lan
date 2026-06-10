import Button from "./Button";

type ContactFormProps = {
  buttonText?: string;
};

export default function ContactForm({
  buttonText = "Enviar",
}: ContactFormProps) {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <header>
          <p>Envie sua dúvida</p>

          <h2>Entre em contato</h2>

          <span>
            <p>
              Entre em contato, estamos dispostos a tirar qualquer dúvida, seja
              um orçamento, uma dúvida técnica de algum de nossos produtos.
              Estamos à disposição para responder.
            </p>
          </span>
        </header>

        <form className="contact-form">
          <input type="email" placeholder="Seu melhor Email" />

          <textarea placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?" />

          <Button text={buttonText} />
        </form>
      </div>
    </section>
  );
}
