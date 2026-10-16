import type { Metadata } from "next";
import { getShareMetadata } from "@/utils/shareMetadata";
import { getNewId } from "@/api/news";
import { AnimationPage, ContainerPages } from "@/components";
import { NewDetails } from "@/components/News/NewDetails";
import { TNewDetail } from "@/interface/news";

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;

  const { newId } = await getNewId({ slug });

  if (!newId || newId.length === 0) {
    return {
      title: "Noticia no encontrada | Zaragoza, Nuevo León",
      description: "No se encontró información de la noticia solicitada.",
    };
  }

  const noti = newId[0];

  return getShareMetadata({
    title: noti.title,
    path: `/noticias/${noti.slug}`,
    image: noti.imageUrl[0],
    content: noti.resume?.length ? noti.resume : noti.content,
    fallbackDescription: "Detalles de la noticia en General Zaragoza, Nuevo León.",
  });
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
