import { PrismicRichText } from "@prismicio/react";

export default function ArticleSection({data}) {
    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col w-full max-w-7xl gap-10 px-4 md:gap-20">
                <div className="flex flex-col gap-4 flex-1">
                    <h2>{data.title}</h2>
                    <PrismicRichText field={data.content} />
                </div>
            </div>
        </div>
    )
}