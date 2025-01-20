'use client';
import { CaretDown } from "@phosphor-icons/react/dist/ssr";
import { useState, useRef } from "react";

export default function Accordion(props) {

  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null); // Referência para o conteúdo
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (

    <li className="flex flex-col">
      <div
        onClick={toggleAccordion}
        className="cursor-pointer flex items-center justify-between transition hover:bg-purple-100 p-4 rounded-full"
      >
        <h3 className="text-purple-500">{props.title}</h3>
        <CaretDown
          weight="bold"
          size={24}
          className={`text-purple-500 transform transition-transform ${
            isOpen ? "-rotate-180" : ""
          }`}
        />
      </div>
      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : "0",
        }}
        className="overflow-hidden transition-all duration-300 ease-in-out"
      >
        <p className="p-4">{props.content}</p>
      </div>
    </li>
  );
}
