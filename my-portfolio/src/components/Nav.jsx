import { useState, useEffect, useRef } from "react"

export default function Nav() {
    const [visible, setVisible] = useState(true)
    const [menuOpen, setMenuOpen] = useState(false)
    const lastY = useRef(0)
    const timer = useRef(null)
    const hovering = useRef(false)

    const startHideTimer = () => {
        if (timer.current) clearTimeout(timer.current)
        timer.current = setTimeout(() => {
            if (!hovering.current && !menuOpen) setVisible(false)
        }, 2000)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) {
                setVisible(true)
                lastY.current = window.scrollY
                return
            }

            const currentY = window.scrollY
            const diff = currentY - lastY.current

            if (currentY < 50) {
                if (timer.current) clearTimeout(timer.current)
                setVisible(true)
            } else if (diff < -8) {
                setVisible(true)
                startHideTimer()
            } else if (diff > 8) {
                if (!hovering.current) {
                    if (timer.current) clearTimeout(timer.current)
                    setVisible(false)
                }
            }

            lastY.current = currentY
        }

        window.addEventListener("scroll", handleScroll)
        return () => {
            window.removeEventListener("scroll", handleScroll)
            if (timer.current) clearTimeout(timer.current)
        }
    }, [menuOpen])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 640) {
                setMenuOpen(false)
            }
        }

        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    const handleMenuToggle = () => {
        if (menuOpen) {
            setMenuOpen(false)
            if (window.scrollY >= 50 && !hovering.current) {
                startHideTimer()
            }
            return
        }

        if (timer.current) clearTimeout(timer.current)
        setVisible(true)
        setMenuOpen(true)
    }

    const handleLinkClick = () => {
        setMenuOpen(false)
    }

    return (
        <nav
            onMouseEnter={() => {
                hovering.current = true
                if (timer.current) clearTimeout(timer.current)
            }}
            onMouseLeave={() => {
                hovering.current = false
                if (window.scrollY >= 50 && !menuOpen) {
                    startHideTimer()
                }
            }}
            className={`fixed top-0 left-0 right-0 z-50 flex flex-wrap items-start justify-between gap-4 bg-[#F4F0EB]/80 px-5 py-5 backdrop-blur-sm transition-transform duration-700 sm:px-8 sm:py-6 lg:px-16 lg:py-8 xl:px-28 ${visible ? "translate-y-0" : "-translate-y-full"}`}
        >
            <div className="font-bold text-2xl sm:text-xl">gh</div>
            <button
                type="button"
                onClick={handleMenuToggle}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-stone-700 transition-opacity hover:opacity-60 sm:hidden cursor-pointer"
                aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-nav-menu"
            >
                <span className="relative block h-4 w-5">
                    <span
                        className={`absolute left-0 top-0 h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? "translate-y-[7px] rotate-45" : ""}`}
                    />
                    <span
                        className={`absolute left-0 top-[7px] h-0.5 w-5 bg-current transition-opacity duration-300 ${menuOpen ? "opacity-0" : "opacity-100"}`}
                    />
                    <span
                        className={`absolute left-0 top-[14px] h-0.5 w-5 bg-current transition-all duration-300 ${menuOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
                    />
                </span>
            </button>
            <ul className="hidden flex-col items-end gap-1 text-right sm:flex">
                <li><a href="#about" className="text-sm transition-opacity hover:opacity-60">about</a></li>
                <li><a href="#experience" className="text-sm transition-opacity hover:opacity-60">experience</a></li>
                <li><a href="#projects" className="text-sm transition-opacity hover:opacity-60">projects</a></li>
                <li><a href="#contact" className="text-sm transition-opacity hover:opacity-60">contact</a></li>
            </ul>
            <div
                id="mobile-nav-menu"
                className={`basis-full overflow-hidden transition-all duration-300 sm:hidden ${menuOpen ? "max-h-48 opacity-100" : "pointer-events-none max-h-0 opacity-0"}`}
            >
                <ul className="flex flex-col gap-3 border-t border-stone-300 pt-4 text-right">
                    <li><a href="#about" onClick={handleLinkClick} className="text-sm transition-opacity hover:opacity-60">about</a></li>
                    <li><a href="#experience" onClick={handleLinkClick} className="text-sm transition-opacity hover:opacity-60">experience</a></li>
                    <li><a href="#projects" onClick={handleLinkClick} className="text-sm transition-opacity hover:opacity-60">projects</a></li>
                    <li><a href="#contact" onClick={handleLinkClick} className="text-sm transition-opacity hover:opacity-60">contact</a></li>
                </ul>
            </div>
        </nav>
    )
}