import { Fade } from "react-awesome-reveal"

export default function Tarifs() {
    return(
        <section className="relative py-24">
            <div className="mx-auto px-8 sm:px-6 lg:px-16">
                            <div className="flex items-center justify-center mb-6">
                              <div className="space-y-4">
                                <div className="flex items-center justify-center">
                                <Fade triggerOnce direction='up' duration={1000} delay={200}>
                                <h2 className="text-lg border border-blue-950 rounded-full px-4 py-1 tracking-tighter text-center text-blue-950 mb-4">Tarifs et offres</h2>
                                </Fade>
                                </div>
                                <Fade triggerOnce direction='up' duration={1000} delay={400}>
                                <h2 className="text-4xl max-w-5xl md:text-5xl text-black font-bold md:leading-14 mb-8 text-center">
                                    Choisissez l’offre qui vous convient
                                </h2>
                                </Fade>
                                <div className="flex justify-center">
                                <Fade triggerOnce direction='up' duration={1000} delay={600}>
                                <p className="text-lg max-w-xl mb-6 text-center text-blue-950 px-4">
                                    Mazia propose des formules flexibles pour toutes les tailles d’entreprise. Que vous souhaitiez tester le service ou l’intégrer pleinement à vos opérations, nos options s’adaptent à vos besoins.
                                </p>
                                </Fade>
                                </div>
                              </div>
                            </div>
            </div>
        </section>
    )
}