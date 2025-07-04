import { SLUG_BUSINESS } from "@/utils/slugBusiness";
import { Button, Container } from "../ui";
import { BusinessByCommerce } from "./components";

export const Trade = () => {
  return (
    <Container id="trade">
      <div className="flex justify-between items-center mb-5 md:mb-8">
        <h2 className="text-3xl font-bold">Comercios</h2>

        <Button
          href={""}
          className="border border-primary hover:bg-primary/80 transition duration-300 text-primary hover:text-white rounded-full hidden md:block"
        >
          Ver todo
        </Button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-5 gap-5">
        {SLUG_BUSINESS.map((busines) => (
          <BusinessByCommerce key={busines.id} slug={busines.slug} />
        ))}
      </div>
      <Button
        href={""}
        className="border border-primary hover:bg-primary/80 transition duration-300 text-primary hover:text-white  rounded-full inline-block md:hidden mt-5"
      >
        Ver todo
      </Button>
    </Container>
  );
};
