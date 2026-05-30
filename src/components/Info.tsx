import { FadeUp } from "./ui/FadeUp"

const SLIDES = [
    {
      id: 1,
      name: "Online mode",
      description:
        "Join the Cluster for Clean Energy and Climate Change (CCECC) from anywhere in the world with our Online Mode. This offering allows attendees to engage with leading experts, participate in discussions, and access all conference materials remotely. You'll have the opportunity to present your research, network with fellow academics, and contribute to vital conversations on clean energy solutions and climate change strategies, all from the comfort of your own home or office.",
      image: "../theme1.jpg",
    },
    {
      id: 2,
      name: "Networking & Collaboration",
      description:
        "Networking & Collaboration is essential for fostering partnerships and driving innovative solutions in the clean energy and climate change sectors. This service provides a platform for researchers, practitioners, and academics to connect and share insights, promoting collaboration on projects and initiatives. By facilitating these interactions, we aim to strengthen the community and enhance the effectiveness of clean energy solutions in Nigeria, ultimately contributing to a more sustainable future.",
      image: "../theme2.jpg",
    },
    {
      id: 3,
      name: "National Engagement",
      description:
        "The National Engagement service empowers stakeholders to unite their efforts towards clean energy and climate change solutions. By facilitating dialogue among researchers, policymakers, and industry leaders, we create a platform for sharing localized insights and strategies. This service is designed for academics, government representatives, and business leaders who are committed to fostering an inclusive approach to climate action. Together, we can advance sustainable development and resilience in our communities.",
      image: "../theme3.jpg",
    }
]


export function Info(){
    return (
        <section id="theme" className="bg-white px-8 lg:px-20 py-24 font-sans overflow-hidden">
          <FadeUp delay={1} duration={0.5}>
          <div className="text-center mb-14">
             <p className="text-[11px] font-bold text-primary tracking-widest uppercase mb-2.5">
            Conference Theme
             </p>
            <h2 className="text-[clamp(1.7rem,3vw,2.5rem)] font-extrabold text-text-main tracking-[-0.5px] mb-3.5 font-heading capitalize">
            Advancing Clean Energy Solutions for Climate-Resilient and Sustainable Development in Sub-Saharan Africa
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-3 lg:gap-8">
            {SLIDES.map((theme)=> (
              <FadeUp delay={theme.id - 0.5} duration={1}>
                <div key={theme.id} className="flex flex-col gap-4 hover:shadow-lg rounded overflow-hidden">
                    <img src={theme.image} alt={theme.name} />
                    <div className="lg:text-center px-3">
                        <h3 className="text-text-main font-semibold">{theme.name}</h3>
                        <p className="text-sm leading-relaxed">{theme.description}</p>
                    </div>
                </div>
              </FadeUp>  
            ))}
          </div>
          </FadeUp>
        </section>
    )
}










