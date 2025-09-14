import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ⚠️ Agora são só imagens (sem texto/estrelas/avatars)
const imagens = [
  { src: "/testimonials/whats-1.jpg", alt: "Depoimento WhatsApp 1" },
  { src: "/testimonials/whats-2.jpg", alt: "Depoimento WhatsApp 2" },
  { src: "/testimonials/whats-3.jpg", alt: "Depoimento WhatsApp 3" },
  { src: "/testimonials/whats-4.jpg", alt: "Depoimento WhatsApp 4" },
  { src: "/testimonials/whats-5.jpg", alt: "Depoimento WhatsApp 5" },
  { src: "/testimonials/whats-6.jpg", alt: "Depoimento WhatsApp 6" },
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
    // backup de breakpoints (como antes)
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

        {/* key força reinit quando muda quantidade */}
        <Slider {...settings} key={slidesToShow}>
          {imagens.map((img, i) => (
            <div key={i} className="px-3">
              <article
                className="
                  rounded-2xl bg-white shadow-sm ring-1 ring-black/5
                  p-2 max-w-[380px] mx-auto hover:shadow-md transition-shadow
                "
              >
                {/* container da imagem */}
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover"
                    onError={(e) => {
                      e.currentTarget.style.opacity = "0.4";
                      e.currentTarget.alt = "Imagem não encontrada";
                    }}
                  />
                </div>
              </article>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
