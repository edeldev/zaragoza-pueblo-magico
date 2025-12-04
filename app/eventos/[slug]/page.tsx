import { getEventId } from "@/api/event";
import { AnimationPage, ContainerPages } from "@/components";
import { EventDetails } from "@/components/Events";
import { TEvent } from "@/interface/event";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const { eventId } = await getEventId({ slug });

  if (!eventId || eventId.length === 0) {
    return {
      title: "Evento no encontrado | Zaragoza, Nuevo León",
      description: "No se encontró información del evento solicitado.",
    };
  }

  const event = eventId[0];

  return {
    title: `${event.title} | Zaragoza, Nuevo León`,
    description: "Detalles del evento en General Zaragoza, Nuevo León.",
    openGraph: {
      title: event.title,
      description: "Detalles del evento en General Zaragoza, Nuevo León.",
      url: `/eventos/${event.slug}`,
    },
  };
}

export default async function eventId(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

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
