"use client";
import { useState } from "react";

export default function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between p-4 rounded-lg font-medium text-lg cursor-pointer hover:bg-gray-100"
      >
        {title}
        <span className={`transition-transform ${open ? "rotate-180" : ""}`}>⌄</span>
      </button>
      {open && <div className="px-6 py-4 text-lg text-gray-600">{children}</div>}
    </div>
  );
}
