export const FooterInstitutions = () => {
  return (
    <div className="mt-4 space-y-4">
      <div className="flex flex-wrap gap-4 justify-center items-center">
        <img
          src="/escudo.webp"
          alt="Escudo de zaragoza nuevo león"
          className="object-contain w-[110px] md:w-[130px] h-[110px] md:h-[130px]"
        />
        <img
          src="/zaragoza.webp"
          alt="logo de zaragoza nuevo león"
          className="object-contain w-[110px] md:w-[130px] h-[110px] md:h-[130px]"
        />
      </div>
      <div className="flex flex-wrap gap-3 justify-center items-center">
        <img
          src="/mexico-logo.svg"
          alt="logo mexico"
          className="w-[200px] md:w-[230px] h-full"
        />
        <img
          src="/turismo-logo.svg"
          alt="logo turismo"
          className="w-[200px] md:w-[230px] h-full"
        />
      </div>
    </div>
  );
};
