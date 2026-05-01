import { projects } from "../data/content";
import FadeIn from "./FadeIn";

export default function Projects() {
    return (
        <section id="projects" className="px-5 py-8 sm:px-8 lg:px-16 xl:px-28">
            <FadeIn>
                <h2 className="font-bold text-xl mb-8">projects</h2>
            </FadeIn>
            <div className="flex flex-col gap-16">
                {projects.map((proj, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <h3 className="font-bold text-sm">{proj.name}</h3>
                        <p className="text-sm text-stone-600 leading-relaxed mb-6">
                            {proj.description}
                        </p>
                        {proj.images?.length > 0 && (
                            <div className={`flex flex-wrap gap-4 justify-center ${proj.images.length === 1 ? "" : "items-start"}`}>
                                {proj.images.map((src, j) => (
                                    <FadeIn key={j} delay={j * 150}>
                                        <img
                                            src={src}
                                            alt={`${proj.name} screenshot ${j + 1}`}
                                            className="w-full max-w-md rounded-sm border border-stone-200"
                                        />
                                    </FadeIn>
                                ))}
                            </div>
                        )}
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}