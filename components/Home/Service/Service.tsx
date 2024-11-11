import { cards } from "./Data";
import CardComponent from "./ServiceCard";

const Services = () => {
  return (
    <section id="services">
      <div
        className="w-full md:w-11/12 lg:w-10/12 mx-auto my-24 bg-transparent"
        style={{ maxWidth: "1400px" }}
      >
        <div className="mt-20 mb-20 lg:mb-32">
          <div className="flex justify-center">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
          <h1 className="text-5xl font-bold text-center text-primary py-4">
            Services
          </h1>
          <div className="flex justify-center">
            <span className="flex justify-end w-10 h-2 border-b-[8px] border-secondary" />
          </div>
        </div>
        {cards.map((card, index) => (
          <CardComponent
            key={index}
            description={card.description}
            icon={card.icon}
            image={card.image}
            isEven={index % 2 === 1} // Even cards will have the alternate layout
            title={card.title}
          />
        ))}
      </div>
    </section>
  );
};

export default Services;
