import type { Metadata } from "next";
import { getShareMetadata } from "@/utils/shareMetadata";
import { getEventId } from "@/api/event";
import { AnimationPage, ContainerPages } from "@/components";
import { EventDetails } from "@/components/Events";
import { TEvent } from "@/interface/event";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  const { eventId } = await getEventId({ slug });

  if (!eventId || eventId.length === 0) {
    return {
      title: "Evento no encontrado | Zaragoza, Nuevo León",
      description: "No se encontró información del evento solicitado.",
    };
  }

  const event = eventId[0];

  return getShareMetadata({
    title: event.title,
    path: `/eventos/${event.slug}`,
    image: event.imageUrl,
    content: event.resume?.length ? event.resume : event.content,
    fallbackDescription: "Detalles del evento en General Zaragoza, Nuevo León.",
  });
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
