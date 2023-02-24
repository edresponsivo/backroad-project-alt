import Title from "../components/Title";
import Service from "../components/Service";
import { services } from "../data";

const Services = () => {
  return (
    <section className="section services" id="services">
      <Title title={{ prefix: "our", word: "services" }} />
      <div className="section-center services-center">
        {services.map((service) => {
          return <Service key={service.id} {...service} />;
        })}
      </div>
    </section>
  );
};
export default Services;
