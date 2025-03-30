import Link from "next/link";

export default function NavLink({ href, text, isActive, onClick, isNew }) {
  return (
    <li>
      <Link 
        className={`
          px-4
          py-2
          flex
          items-center
          gap-2
          rounded-full
          transition
          relative
          hover:text-purple-600
          hover:bg-purple-100
          hover:scale-105
          ${isActive ? 'text-purple-800 bg-purple-200 font-medium' : 'text-slate-900'}
        `}
        onClick={onClick}
        href={href}>
        {text}
        {isNew && <span class="relative flex size-3">
                    <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-orange-400 opacity-75"></span>
                    <span class="relative inline-flex size-3 rounded-full bg-orange-500"></span>
                  </span>}
      </Link>
    </li>
  )
}