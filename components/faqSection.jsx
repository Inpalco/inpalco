import Link from "next/link";
import Accordion from "./ui/accordion";

export default function FaqSection({data}) {
    return (
        <div className="flex w-full items-center justify-center py-14 md:py-20">
            <div className="flex flex-col items-start w-full max-w-7xl gap-10 px-4 md:gap-20 md:flex-row">
                <div className="flex flex-col gap-4 w-full flex-1">
                    <h2>{data.title}</h2>
                    <p className="secondary">{data.content}</p>
                    {
                        data.link &&
                        <Link className="text-white font-medium text-lg bg-purple-700 text-center py-4 px-8 rounded-full w-full transition mt-2 hover:bg-orange-500 md:w-max hover:scale-105 hover:drop-shadow-lg" href={`${data.link}`}>{data.cta}</Link>
                    }
                </div>
                <div className="w-full flex-1">
                    <ul className="flex flex-col gap-8">
                    {data.question.map((item, index) => (
                        <Accordion key={index} title={item.question} content={item.answer} />
                    ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}