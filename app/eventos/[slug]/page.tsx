import { getEventId } from "@/api/event";
import { AnimationPage, ContainerPages } from "@/components";
import { EventDetails } from "@/components/Events";
import { TEvent } from "@/interface/event";

export default async function EventId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { eventId } = await getEventId({ slug });

  if (!eventId || eventId.length === 0)
    return (
      <ContainerPages className="bg-white h-[500px] flex justify-center items-center">
        <p className="text-xl">No hay resultados</p>
      </ContainerPages>
    );

  return (
    <AnimationPage>
      <ContainerPages className="bg-white px-5 lg:px-0 py-18">
        {eventId.map((details: TEvent) => (
          <EventDetails key={details.slug} eventId={details} />
        ))}
      </ContainerPages>
    </AnimationPage>
  );
}
