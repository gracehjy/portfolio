import { projects } from "../data/content";
import FadeIn from "./FadeIn";
import { Tag, TagContainer } from "./Tag";

export default function Projects() {
    return (
        <section id="projects" className="px-5 py-8 sm:px-8 lg:px-16 xl:px-28">
            <FadeIn>
                <h2 className="font-bold text-xl mb-8">projects</h2>
            </FadeIn>
            <div className="flex flex-col gap-16">
                {/* for each profect, get the name, tech stack tags, description, and images */}
                {projects.map((proj, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <h3 className="font-bold text-sm shrink-0">{proj.name}</h3>
                        {/* get each tag */}
                        <TagContainer>
                            {proj.tags?.map((tag, j) => (
                                <Tag key={j} value={tag} />
                            ))}
                        </TagContainer>
                        {/* show description */}
                        <p className="text-sm text-stone-600 leading-relaxed mb-6">
                            {proj.description}
                        </p>
                        {/* show images */}
                        {proj.images?.length > 0 && (
                            <div className={`grid justify-items-center gap-y-4 ${proj.images.length > 1 ? "grid-cols-1 xl:grid-cols-[repeat(2,minmax(0,28rem))] xl:justify-center xl:gap-x-4" : "grid-cols-1"}`}>
                                {proj.images.map((src, j) => (
                                    <FadeIn key={j} delay={j * 150}>
                                        <div className={`relative group w-full ${proj.images.length > 1 ? "max-w-md xl:max-w-none" : "max-w-md"}`}>
                                            <img src={src} alt={`${proj.name} screenshot ${j + 1}`} className="w-full rounded-sm"/>
                                            {/* if there's a link, show visit repo on hover on image */}
                                            {proj.link && (
                                                <a href={proj.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="absolute inset-0 flex items-center justify-center rounded-sm bg-black/0 group-hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100"
                                                >
                                                    <span className="text-white text-sm tracking-wide">visit repo</span>
                                                </a>
                                            )}
                                        </div>  
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