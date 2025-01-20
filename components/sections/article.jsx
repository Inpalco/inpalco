export default function Article({data}) {
  return(
    // CONTAINER
    <section className="flex justify-center w-full mb-16 p-6 md:p-0 rounded-3xl md:rounded-none">
      <div className="flex flex-col gap-6 my-6 max-w-7xl md:p-10">
        <h2>{data.slices.article.title}</h2>
        <p className="secondary">{data.slices.article.content}</p>
      </div>
    </section>
  )
}