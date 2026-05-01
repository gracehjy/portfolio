import { useEffect, useState } from "react"

const photos = [
    "/photos/ozarks.JPG",
    "/photos/ozarks_girls.JPG",
    "/photos/mount_tam.JPG",
    "/photos/grace_joyce.JPG",
    "/photos/ozarks_group.JPG",
    "/photos/tinkles.JPG",
    "/photos/grace.jpg",
]

const photoStyles = [
  { width: "71%", top: "0%",  left: "20%" },
  { width: "62%", top: "8%",  left: "10%" },
  { width: "52%", top: "25%", left: "24%" },
  { width: "60%", top: "5%",  left: "25%" },
  { width: "60%", top: "45%", left: "10%" },
  { width: "65%", top: "50%", left: "30%" },
  { width: "60%", top: "30%", left: "38%" },
]

export default function Hero() {
    const [visible, setVisible] = useState(0)

    useEffect(() => {
        if(visible >= photos.length) return
        const timer = setTimeout(() => setVisible(v => v + 1), 180)
        return () => clearTimeout(timer)
    }, [visible])

    return (
        <>
            <section id="about" className="mb-16 flex flex-col gap-10 px-5 sm:px-8 lg:mb-20 lg:flex-row lg:items-center lg:gap-12 lg:px-16 xl:px-28">
                {/* photo collage */}
                <div className="relative h-[320px] w-full shrink-0 overflow-hidden sm:h-[420px] lg:h-[560px] lg:w-1/2">
                    {photos.map((src, i) => (
                        <img 
                            key={i} 
                            src={src} 
                            alt="collage_photo" 
                            className="absolute object-cover shadow-md transition-all duration-200"
                            style={{
                                ...photoStyles[i],
                                opacity: i < visible ? 1 : 0
                            }}>
                        </img>
                    ))}
                </div>

                {/* intro part */}
                <div className="w-full lg:w-1/2">
                    <h1 className="mb-4 text-2xl font-bold">hello, i'm grace!</h1>
                    <p className="mb-3 text-sm leading-relaxed">i build software systems and applications, with interests in design, machine learning, and full-stack development.</p>
                    <p className="mb-3 text-sm leading-relaxed">while you’re here, let me introduce myself as a person. i love spending time with friends and family, traveling and seeing the world, eating and trying new foods, and playing pickleball.</p>
                    <p className="mb-3 text-sm leading-relaxed">during my time at university, I was a performer for a traditional filipino dance called tinikling! this was one of my favorite memories of college, and where I met some of the coolest people in my life!</p>
                </div>
            </section>
        </>
    )
}