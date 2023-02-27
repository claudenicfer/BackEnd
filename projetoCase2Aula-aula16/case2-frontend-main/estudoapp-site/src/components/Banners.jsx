import Carousel from "react-bootstrap/Carousel";
import "../assets/css/banner.css";
// https://via.placeholder.com/1500x300/ffd000
// https://api.lorem.space/image/movie?w=1500&amp;amp;amp;amp;h=300
function Banners() {
  return (
    <Carousel variant="dark" className="conteudo-margin">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/1500x300/?organization"
          alt="Slide incrível"
        />
        <Carousel.Caption>
          <h5>EstudoApp</h5>
          <p>Um app para facilitar a vida do estudante!</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/1500x300/?work"
          alt="Outro slide incrível"
        />
        <Carousel.Caption>
          <h5>Quais são as funcionalidades?</h5>
          <p>Confira os principais recursos disponíveis no app</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/random/1500x300/?student"
          alt="Último slide"
        />

        <Carousel.Caption>
          <div className="carousel-caption-container">
            <div className="carousel-caption-content">
              <h5>Contato para parcerias?</h5>
              <p>
                Entre em contato com a nossa equipe para conversar sobre
                oportunidades de parceria
              </p>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banners;
