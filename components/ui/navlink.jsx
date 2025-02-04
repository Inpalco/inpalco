import Link from "next/link";

export default function NavLink({ href, text, isActive, onClick }) {
  return (
    <li>
      <Link 
        className={`
          px-4
          py-2
          rounded-full
          transition
          hover:text-purple-600
          hover:bg-purple-100
          hover:scale-105
          ${isActive ? 'text-purple-800 bg-purple-200 font-medium' : 'text-slate-900'}
        `}
        onClick={onClick}
        href={href}>
        {text}
      </Link>
    </li>
  )
}