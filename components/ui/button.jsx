import Link from "next/link";

export default function Button({ children, href }) {
  return (
    <Link 
      className="
        bg-purple-500
        text-white
        text-center
        font-semibold
        p-4
        rounded-full
        w-full
        transition
        hover:bg-purple-600
        md:w-max
      " 
      href={href}>
      {children}
    </Link>
  );
}

export function SecondaryButton({ children, href }) {
  return(
    <Link 
      className="
        text-purple-500
        border
        border-purple-500
        text-center
        font-semibold
        px-4
        py-3
        rounded-full
        w-full
        transition
        hover:text-purple-600
        hover:bg-purple-100
        md:w-max
      " 
      href={href}>
      {children}
    </Link>
  );
}