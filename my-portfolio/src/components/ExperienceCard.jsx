import { useState, useRef } from "react"

export default function ExperienceCard({ exp }) {
    const [open, setOpen] = useState(false)
    const contentRef = useRef(null)

    return (
        <div>
            <div
                className="flex cursor-pointer items-start justify-between gap-4"
                onClick={() => exp.details && setOpen(!open)}
            >
                <div className="min-w-0 flex-1">
                    <p className="font-bold text-sm">{exp.company}</p>
                    <p className="text-sm text-stone-600">{exp.title}</p>
                    <p className="mt-1 text-xs text-stone-400 leading-relaxed">
                        {exp.location} | {exp.date}
                    </p>
                </div>
                {exp.details && (
                    <button
                        className="mt-1 shrink-0 cursor-pointer text-lg leading-none text-stone-500 transition-all duration-300 hover:text-stone-900"
                        style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                        +
                    </button>
                )}
            </div>

            <div
                ref={contentRef}
                className="overflow-hidden transition-all duration-400 ease-in-out"
                style={{
                    maxHeight: open ? contentRef.current?.scrollHeight + "px" : "0px",
                    opacity: open ? 1 : 0,
                }}
            >
                <p className="mt-3 pr-2 text-sm leading-relaxed text-stone-600 sm:pr-8">
                    {exp.details}
                </p>
            </div>
        </div>
    )
}