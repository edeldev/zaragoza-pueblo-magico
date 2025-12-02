import { getNewId } from "@/api/news";
import { AnimationPage, ContainerPages } from "@/components";
import { NewDetails } from "@/components/News/NewDetails";
import { TNewDetail } from "@/interface/news";

export default async function NewsId({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
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
