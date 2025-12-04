import { Breadcrumbs, SocialShareButtons } from "@/components/ui";
import { INewDetail } from "./types";
import { Details } from "./components";
import { MoreContent } from "@/components/MoreContent";

export const NewDetails = ({ newId }: INewDetail) => {
  const shareUrl = `${process.env.NEXT_PUBLIC_FRONTEND_URL}/noticias/${newId.slug}`;

  return (
    <section className="container mx-auto px-4">
      <div className="space-y-10 max-w-4xl mx-auto">
        <Breadcrumbs text="noticias" breadcrumb={newId} />
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-neutral-900">
          {newId.title}
        </h1>
        <div className="pt-4 border-t border-neutral-200">
          <p className="text-sm font-medium text-neutral-600 uppercase tracking-wide">
            Compartir:
          </p>
          <SocialShareButtons shareUrl={shareUrl} />
        </div>
        <Details newId={newId} />
        <div className="my-16 max-w-2xl mx-auto opacity-70">
          <div className="h-[1.2px] w-full bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
        </div>
        <MoreContent type="news" />
      </div>
    </section>
  );
};
