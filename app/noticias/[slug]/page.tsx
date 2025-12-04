import { getNewId } from "@/api/news";
import { AnimationPage, ContainerPages } from "@/components";
import { NewDetails } from "@/components/News/NewDetails";
import { TNewDetail } from "@/interface/news";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const { newId } = await getNewId({ slug });

  if (!newId || newId.length === 0) {
    return {
      title: "Noticia no encontrada | Zaragoza, Nuevo León",
      description: "No se encontró información de la noticia solicitada.",
    };
  }

  const noti = newId[0];

  return {
    title: `${noti.title} | Zaragoza, Nuevo León`,
    description: "Detalles de la noticia en General Zaragoza, Nuevo León.",
    openGraph: {
      title: noti.title,
      description: "Detalles de la noticia en General Zaragoza, Nuevo León.",
      url: `/noticias/${noti.slug}`,
    },
  };
}

export default async function NewsId(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;

  const { newId } = await getNewId({ slug });

  if (!newId || newId.length === 0)
    return (
      <ContainerPages className="bg-white h-[500px] flex justify-center items-center">
        <p className="text-xl">No hay resultados</p>
      </ContainerPages>
    );

  return (
    <AnimationPage>
      <ContainerPages className="bg-white px-5 lg:px-0 py-18">
        {newId.map((details: TNewDetail) => (
          <NewDetails key={details.slug} newId={details} />
        ))}
      </ContainerPages>
    </AnimationPage>
  );
}
