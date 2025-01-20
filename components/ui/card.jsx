import { Star } from "@phosphor-icons/react/dist/ssr";

export default function Card(props) {
  return(
    <div className="flex flex-col items-center justify-center gap-6 p-8 bg-white rounded-xl shadow-sm">
      {props.children}
      <div className="flex flex-col items-center justify-center gap-3 text-center">
        <h3>{props.title}</h3>
        <p className="secondary">{props.content}</p>
      </div>
      {props.stars && (
        <div className="flex items-center justify-center gap-1">
          <Star weight="fill" width={24} height={24} className="text-yellow-400" />
          <Star weight="fill" width={24} height={24} className="text-yellow-400" />
          <Star weight="fill" width={24} height={24} className="text-yellow-400" />
          <Star weight="fill" width={24} height={24} className="text-yellow-400" />
          <Star weight="fill" width={24} height={24} className="text-yellow-400" />
        </div>
      )}
    </div>
  )
}