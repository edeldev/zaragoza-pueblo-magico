export const BannerEvent = () => {
  return (
    <>
      <div className="md:hidden relative h-40 md:h-[300px] flex items-center justify-center">
        <img
          src="/background-events.webp"
          alt="Banner de página de eventos"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <h2 className="relative text-3xl font-bold z-10 text-white text-center px-4">
          Próximos eventos
        </h2>
      </div>

      <section className="hidden md:grid grid-cols-12 bg-event-bg">
        <div className="col-span-5 flex justify-center items-center">
          <h2 className="text-4xl font-bold">Próximos eventos</h2>
        </div>
        <div className="col-span-2" />

        <div className="col-span-5 relative before:content-[''] before:absolute before:w-[15px] before:h-full before:bg-secondary before:left-0">
          <img
            src="/background-events.webp"
            alt="Banner de página de eventos"
            className="w-full h-50 object-cover"
          />
        </div>
      </section>
    </>
  );
};
