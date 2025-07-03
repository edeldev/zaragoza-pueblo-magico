export const Maps = () => {
  return (
    <div className="col-span-12 md:col-span-5 sticky top-55 h-fit">
      <div className="bg-gray-100 rounded-lg p-4">
        <h3 className="font-bold text-xl mb-4 text-center">
          Ubicación de Zaragoza
        </h3>
        <div className="relative w-full h-80 rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.013963434435!2d-99.4849646850756!3d23.9859644844847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8664e2e2e2e2e2e2%3A0x7e2e2e2e2e2e2e2e!2sZaragoza%2C%20Nuevo%20Le%C3%B3n%2C%20M%C3%A9xico!5e0!3m2!1ses!2smx!4v1718040000000!5m2!1ses!2smx"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Mapa de Zaragoza, Nuevo León"
            className="rounded-lg"
          ></iframe>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Zaragoza, Nuevo León, México</p>
          <p className="text-xs text-gray-500 mt-1">
            Pueblo Mágico en la Sierra Madre Oriental
          </p>
        </div>
      </div>
    </div>
  );
};
