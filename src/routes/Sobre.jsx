import { SobreStyle } from "../css/SobreStyle";
import imageSobre  from "../assets/images/Nuclear1.jpg";

const Sobre = () => {
  return (
    <SobreStyle>
      <div className="heading-sobre">
        <h1>Sobre Nós</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
          praesentium, veniam modi rem tempore a. Porro minus nisi veniam
          deleniti harum asperiores quae voluptatem dolorum reprehenderit rem
          eaque temporibus, consectetur quas a provident. Ea, veritatis ex!
          Soluta, voluptatum veniam asperiores, quisquam, ex maiores vero
          ratione aut harum impedit iusto dicta?
        </p>
      </div>
      <div className="container-sobre">
        <section className="sobre">
          <div className="sobre-img">
            <img src={imageSobre} alt="" />
          </div>
          <div className="sobre-content">
            <h2>Nossa História</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Laboriosam officiis sint praesentium facilis natus fugit vitae sed
              mollitia velit iure, deserunt hic asperiores voluptatum ullam vero
              dolorem nihil. Optio quam ex doloremque. Amet, esse id eaque culpa
              obcaecati voluptates ut non tempora blanditiis molestiae aliquid,
              fuga debitis error, magni aliquam?
            </p>
          </div>
        </section>
      </div>
    </SobreStyle>
  );
};

export default Sobre;
