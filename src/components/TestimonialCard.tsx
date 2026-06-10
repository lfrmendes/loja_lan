type TestimonialCardProps = {
  image: string;
  testimony: string;
  name: string;
  role: string;
  stars: number;
  starIcon: string;
  voidStarIcon: string;
};

export default function TestimonialCard({
  image,
  testimony,
  name,
  role,
  stars,
  starIcon,
  voidStarIcon,
}: TestimonialCardProps) {
  return (
    <div className="carousel-card">
      <img src={image} alt={`Perfil de ${name}`} />

      <span className="testimony">
        <p>{testimony}</p>
      </span>

      <span className="rating">
        {[...Array(stars)].map((_, index) => (
          <img
            key={`star-${index}`}
            src={starIcon}
            alt="estrela"
            width={22}
            height={20}
          />
        ))}

        {[...Array(5 - stars)].map((_, index) => (
          <img
            key={`void-star-${index}`}
            src={voidStarIcon}
            alt="estrela vazia"
            width={22}
            height={20}
          />
        ))}
      </span>

      <span className="names">
        <p>{name}</p>
        <p>{role}</p>
      </span>
    </div>
  );
}
