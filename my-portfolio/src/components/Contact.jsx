import FadeIn from "./FadeIn"

export default function Contact() {
    return (
        <section id="contact" className="px-5 py-8 sm:px-8 lg:px-16 xl:px-28">
            <FadeIn>
                <h2 className="font-bold text-xl mb-8">contact</h2>
            </FadeIn>
            <FadeIn>
                <p className="mb-8 text-sm leading-relaxed">have questions or just want to chat? feel free to reach out or use the ai chatbot in the bottom right corner (also take a look at my resume <a href="/pdfs/resume.pdf" target="_blank" rel="noopener noreferrer" className="font-bold hover:underline">here</a>)!</p>
            </FadeIn>
            <FadeIn>
            <ul className="flex flex-wrap gap-x-10 gap-y-4 justify-center">
                <li><a href="https://www.linkedin.com/in/gracehjy/" className="text-sm hover:opacity-60 transition-opacity">linkedin</a></li>
                <li><a href="mailto:grace.h@wustl.edu" className="text-sm hover:opacity-60 transition-opacity">email</a></li>
                <li><a href="https://github.com/gracehjy" className="text-sm hover:opacity-60 transition-opacity">github</a></li>
            </ul>
            </FadeIn>
        </section>
    )
}