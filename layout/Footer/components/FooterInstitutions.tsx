import Image from "next/image";
import MEXICO_LOGO from "@/public/mexico-logo.svg";
import TURISMO_LOGO from "@/public/turismo-logo.svg";

export const FooterInstitutions = () => {
  return (
    <div className="flex justify-center items-center gap-3 overflow-hidden mt-2 flex-wrap">
      <Image src={MEXICO_LOGO} alt="logo mexico" width={250} height={250} />
      <Image src={TURISMO_LOGO} alt="logo turismo" width={250} height={250} />
    </div>
  );
};
