import Link from "next/link";

export default function TitleSection({data}) {
    return (
        <div className="flex w-full items-center justify-center py-20 bg-purple-100">
            <div className="flex flex-col w-full max-w-7xl gap-2 px-4">
            <Link className="text-purple-500 font-medium text-lg text-center w-full mb-4 transition hover:text-orange-500 md:w-max hover:scale-105" href={data.previouspage}>Voltar</Link>
                {data.tag && <span className="text-purple-500">{data.tag}</span>}
                <h1 className="text-purple-600">{data.title}</h1>
                {data.content && <p>{data.content}</p>}
            </div>
        </div>
    )
}