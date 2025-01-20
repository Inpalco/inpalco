export default function Section(props) {
  return (
    <section className={`flex items-center justify-center w-full mb-16 px-5 ${props.mainClassName}`}>
      <div className={`flex items-center flex-col gap-20 p-0 justify-between max-w-7xl md:p-10 w-full ${props.className}`}>
        {props.children}
      </div>
    </section>
  )
}