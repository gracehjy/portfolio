import { experiences } from "../data/content";
import ExperienceCard from "./ExperienceCard";
import FadeIn from "./FadeIn";

export default function Experience() {
    return (
        <section id="experience" className="px-5 py-8 sm:px-8 lg:px-16 xl:px-28">
            <FadeIn>
                <h2 className="font-bold text-xl mb-8">experience</h2>
            </FadeIn>
            <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-2">
                {experiences.map((exp, i) => (
                    <FadeIn key={i} delay={i * 100}>
                        <ExperienceCard exp={exp} />
                    </FadeIn>
                ))}
            </div>
        </section>
    )
}