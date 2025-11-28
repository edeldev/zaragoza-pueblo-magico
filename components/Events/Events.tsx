import { BannerEvent, ButtonEvent, EventList } from "./components";

export const Events = () => {
  return (
    <section>
      <BannerEvent />

      <div className="bg-white">
        <div className="container mx-auto px-5 lg:px-0 py-10">
          <ButtonEvent />
          <EventList />
        </div>
      </div>
    </section>
  );
};
