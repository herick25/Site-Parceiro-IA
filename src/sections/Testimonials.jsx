import React from "react";
import Slider from "react-slick";
import { FaStar, FaRegStar, FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const depoimentos = [
  {
    texto:
      "Eu vivia perdendo prazo de boleto. Com o Parceiro IA, parei de tomar susto. Em duas semanas já tava tudo redondo.",
    nome: "João Pedro",
    cargo: "Assistente Administrativo",
    avatar: "/avatars/joao.jpg",
    rating: 5,
  },
  {
    texto:
      "Queria algo simples pra juntar trabalho e finanças. O Parceiro IA resolveu minha vida. Uso todo dia.",
    nome: "Jessica Pereira",
    cargo: "Autônoma",
    avatar: "/avatars/maria.jpg",
    rating: 5,
  },
  {
    texto:
      "Agenda lotada aqui. Os lembretes são top e rapidinho já vejo tudo. Bem prático mesmo.",
    nome: "Debora Teixeira",
    cargo: "Empreendedora",
    avatar: "/avatars/lucas.jpg",
    rating: 5,
  },
  {
    texto:
      "Pra mim o destaque é a parte de gastos. Envio a compra no chat e pronto, já cai na categoria certinha.",
    nome: "Ana Souza",
    cargo: "Analista de Projetos",
    avatar: "/avatars/ana.jpg",
    rating: 4,
  },
  {
    texto:
      "A função de listas salvou nas compras e nos estudos. Rápido, sem frescura. Recomendo!",
    nome: "Pedro Henrique",
    cargo: "Estudante",
    avatar: "/avatars/pedro.jpg",
    rating: 5,
  },
  {
    texto:
      "Tava desconfiada no começo, mas curti. Me lembra do dentista, reunião, tudo. Não fico mais perdida.",
    nome: "Fernanda Rocha",
    cargo: "Autônoma",
    avatar: "/avatars/fernanda.jpg",
    rating: 4,
  },
  {
    texto:
      "O melhor é que não preciso abrir app nenhum. Mando áudio no Whats e já resolve. Simples e direto.",
    nome: "Rafael Souza",
    cargo: "Vendedor",
    avatar: "/avatars/rafael.jpg",
    rating: 5,
  },
  {
    texto:
      "Uso pra metas de treino e estudos. Os lembretes dão aquela motivação que faltava.",
    nome: "Wesley Nogueira",
    cargo: "Personal Trainer",
    avatar: "/avatars/carla.jpg",
    rating: 5,
  },
];

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 3,         // Desktop
    slidesToScroll: 1,
    centerMode: false,
    centerPadding: "0px",
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } }, // Tablet
      { breakpoint: 768,  settings: { slidesToShow: 1 } }, // Mobile
    ],
  };

  return (
    <section id="avaliacoes" className="py-16 px-4 bg-gelo" data-aos="fade-up">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-[#1f2f2b] text-center mb-10">
          O que nossos clientes dizem:
        </h2>

        <Slider {...settings}>
          {depoimentos.map((d, i) => (
            <div key={i} className="px-3 h-full">
              <article
                className="
                  h-full min-h-[360px] md:min-h-[380px]
                  rounded-2xl bg-white shadow-sm ring-1 ring-black/5
                  p-6 flex flex-col justify-between hover:shadow-md transition-shadow
                  max-w-[360px] mx-auto
                "
              >
                <div className="flex items-center justify-center text-4xl text-black/10" aria-hidden>
                  <FaQuoteLeft />
                </div>

                <p className="mt-4 text-[15px] leading-relaxed text-[#1f2f2b]/80 text-center line-clamp-5">
                  {d.texto}
                </p>

                <div className="mt-4 flex items-center justify-center gap-1" aria-label={`avaliação ${d.rating} de 5`}>
                  {[1,2,3,4,5].map(n =>
                    n <= d.rating ? (
                      <FaStar key={n} className="h-5 w-5 text-[#58b179]" />
                    ) : (
                      <FaRegStar key={n} className="h-5 w-5 text-[#58b179]" />
                    )
                  )}
                </div>

                <div className="mt-6 flex items-center justify-center gap-3">
                  <img
                    src={d.avatar}
                    alt={d.nome}
                    onError={(e) => {
                      e.currentTarget.outerHTML =
                        `<div class="h-10 w-10 rounded-full bg-gradient-to-br from-[#58b179] to-emerald-600 flex items-center justify-center text-white font-semibold">${d.nome.charAt(0)}</div>`;
                    }}
                    className="h-10 w-10 rounded-full object-cover ring-1 ring-black/10"
                  />
                  <div className="text-center">
                    <div className="font-semibold text-[#1f2f2b] leading-tight">{d.nome}</div>
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
