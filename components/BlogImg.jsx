import Image from "next/image";

export default function BlogImg({data}) {
    return (
        <div className="flex w-full items-center justify-center py-4">
            <div className="flex items-center w-full max-w-7xl">
                <Image
                    src={data.image.url}
                    alt={data.image.alt}
                    width={768}
                    height={480}
                    className="object-cover rounded-3xl w-full max-h-[25rem]"/>
            </div>
        </div>
    )
}