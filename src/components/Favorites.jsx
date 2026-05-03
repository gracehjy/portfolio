import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion" // react animation library
import { about_categories } from "../data/content"
import FadeIn from "./FadeIn"

function FavoriteCard({ item }) {
    return (
        <a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            className="flex flex-col items-center gap-3 group"
        >
            <img
                src={item.image}
                alt={item.title}
                className="w-44 h-60 object-cover rounded-lg shadow-sm hover:scale-105 hover:rotate-1 transition-transform duration-200"
            />
            <p className="text-xs text-center text-stone-600 dark:text-stone-400 w-full sm:w-44 lg:w-48">{item.title}</p>
        </a>
    )
}

export default function Favorites() {
    // tracks current category index and swipe direction for animation
    const [[currentPage, direction], setPageWithDir] = useState([0, 0])

    // moves to next/prev category, ignores out-of-bounds
    const paginate = (newDirection) => {
        const next = currentPage + newDirection
        if (next >= 0 && next < about_categories.length) {
            setPageWithDir([next, newDirection])
        }
    }

    const category = about_categories[currentPage]

    // slide in from right if going forward, left if going backward
    const variants = {
        enter: (direction) => ({ x: direction > 0 ? 100 : -100, opacity: 0 }),
        center: { x: 0, opacity: 1 },
        exit: (direction) => ({ x: direction < 0 ? 100 : -100, opacity: 0 })
    }

    return (
        <FadeIn>
            <section className="px-5 py-8 overflow-hidden sm:px-8 lg:px-16 xl:px-28">
                    <h2 className="font-bold text-xl text-center">a few of my favorite things</h2>
                    <p className="text-sm text-center text-stone-400 mb-8">{category.label}</p>
                {/* items container */}
                <div className="relative flex justify-center min-h-[580px] md:min-h-[300px]">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentPage}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="absolute w-full"
                        >
                            {/* 2-col grid on mobile, single row on md+ */}
                            <div className="grid grid-cols-2 gap-4 md:flex md:flex-nowrap md:gap-6 md:justify-center">
                                {category.items.map((item, i) => (
                                    <FavoriteCard key={i} item={item} />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* prev/next arrows, hidden when at bounds */}
                <div className="flex justify-between mt-6 px-2">
                    <button
                        onClick={() => paginate(-1)}
                        disabled={currentPage === 0}
                        className="text-[#333] text-xl cursor-pointer disabled:opacity-0 transition-opacity hover:opacity-60"
                    >←</button>
                    <button
                        onClick={() => paginate(1)}
                        disabled={currentPage >= about_categories.length - 1}
                        className="text-[#333] text-xl cursor-pointer disabled:opacity-0 transition-opacity hover:opacity-60"
                    >→</button>
                </div>
            </section>
        </FadeIn>
    )
}