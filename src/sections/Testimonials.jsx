import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const depoimentos = [
  { src: "/testimonials/whats-1.jpg", nome: "João Pedro", cargo: "Assistente Administrativo" },
  { src: "/testimonials/whats-2.jpg", nome: "Jessica Pereira", cargo: "Autônoma" },
  { src: "/testimonials/whats-3.jpg", nome: "Debora Teixeira", cargo: "Empreendedora" },
  { src: "/testimonials/whats-4.jpg", nome: "Ana Souza", cargo: "Analista de Projetos" },
  { src: "/testimonials/whats-5.jpg", nome: "Pedro Henrique", cargo: "Estudante" },
  { src: "/testimonials/whats-6.jpg", nome: "Fernanda Rocha", cargo: "Autônoma" },
];

export default function Testimonials() {
  // mesma lógica: 1 mobile, 2 tablet, 3 desktop
  const calcSlides = () => {
    const w = typeof window !== "undefined" ? window.innerWidth : 1200;
    if (w <= 768) return 1;   // mobile
    if (w <= 1024) return 2;  // tablet
    return 3;                 // desktop
  };

  const [slidesToShow, setSlidesToShow] = React.useState(calcSlides());

  React.useEffect(() => {
    const onResize = () => setSlidesToShow(calcSlides());
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow,
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    adaptiveHeight: false,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768,  settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="avaliacoes" className="py-16 px-4 bg-gelo" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2f2b] text-center mb-10">
          O que nossos clientes dizem:
        </h2>

        <Slider {...settings} key={slidesToShow}>
          {depoimentos.map((d, i) => (
            <div key={i} className="px-3">
              <article
                className="
                  rounded-2xl bg-white shadow-sm ring-1 ring-black/5
                  p-4 max-w-[380px] mx-auto hover:shadow-md transition-shadow
                  flex flex-col
                "
              >
                {/* Foto do elogio */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={d.src}
                    alt={`Depoimento de ${d.nome}`}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.4";
                      e.currentTarget.alt = "Imagem não encontrada";
                    }}
                  />
                </div>

                {/* Nome e cargo embaixo */}
                <div className="mt-4 flex items-center justify-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#58b179] to-emerald-600 flex items-center justify-center text-white font-semibold">
                    {d.nome.charAt(0)}
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-[#1f2f2b] leading-tight">
                      {d.nome}
                    </div>
                    <div className="text-sm text-[#1f2f2b]/60">{d.cargo}</div>
                  </div>
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
