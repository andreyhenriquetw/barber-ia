import Header from "./_components/header";

import BookingItem from "./_components/booking-item";

const Home = () => {
  return (
    <main>
      <div>
        {/* HEADER */}
        <Header />

        {/* CONTAINER RELATIVO */}
        <div className="rounde relative w-full">
          {/* VIDEO */}
          <div className="h-[540px] w-full overflow-hidden shadow-lg ring-1 ring-black/10">
            <video
              src="/videosilas1.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster="/thumb-do-video.jpg"
              className="w-full object-cover object-top"
            ></video>
          </div>

          {/* TEXTO ANIMADO */}
          <div
            className="text-entrando absolute top-1/2 left-6 translate-y-25 text-white"
            style={{
              fontFamily: "var(--font-merriweather)",
              fontSize: "42px",
              fontWeight: "600",
              lineHeight: "1.1",
              textShadow: "0px 4px 10px rgba(0,0,0,0.5)",
            }}
          >
            Agende nos
            <br />
            melhores
            <br />
            <span
              style={{
                fontSize: "30px",
                fontWeight: "400",
                fontFamily: "var(--font-merriweather)",
              }}
            >
              <span style={{ fontSize: "22px" }}>com</span>{" "}
              <span style={{ fontStyle: "italic" }}>Silas</span>
            </span>
          </div>

          {/* BOTÃO DE AGENDAR */}
          <button
            className="btn-entrando shine-button"
            style={{
              position: "absolute",
              right: "24px",
              bottom: "17px",
              padding: "12px 20px",
              borderRadius: "12px",
              color: "#fff",
              fontSize: "14px",
              fontWeight: 600,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.25)",
              border: "none",
              cursor: "pointer",
              transition: "all 0.2s ease",
              background: "linear-gradient(90deg, #2ec7ff 0%, #0094ff 100%)",
              overflow: "hidden",
            }}
          >
            AGENDAR AGORA
          </button>
        </div>

        <div className="mt-5 px-5">
          {/* AGENDAMENTO */}

          <h2 className="mb-3 text-xs font-semibold text-white uppercase">
            Agendamentos
          </h2>
          <BookingItem
            serviceName="Corte de cabelo"
            barbershopName="Silas Barbearia"
            barbershopImageUrl="https://utfs.io/f/45331760-899c-4b4b-910e-e00babb6ed81-16q.png"
            status="agendado"
            date={new Date()}
          />
        </div>
      </div>
    </main>
  );
};

export default Home;
