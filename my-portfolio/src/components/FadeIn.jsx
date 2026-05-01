import useFadeIn from "../hooks/useFadeIn"

export default function FadeIn({ children, delay = 0, className = "" }) {
    const { ref, visible } = useFadeIn()

    return (
        <div
            ref={ref}
            className={className}
            style={{
                opacity: visible ? 1 : 0,
                transform: visible ? "translateY(0px)" : "translateY(20px)",
                transition: `opacity 0.6s ease, transform 0.6s ease`,
                transitionDelay: `${delay}ms`,
            }}
        >
            {children}
        </div>
    )
}