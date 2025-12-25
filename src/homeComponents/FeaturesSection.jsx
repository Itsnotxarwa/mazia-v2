import { ArrowRight, PhoneIncoming, PhoneOutgoing, Settings } from "lucide-react";
import TranscriptionCardVisual from "../components/TranscriptionCardVisual";
import { Fade } from "react-awesome-reveal";


export default function FeaturesSection() {

    return(
        <section className="relative py-24">
                <div className="max-w-7xl mx-auto px-8 sm:px-6 lg:px-16">
                            <div className="flex items-center justify-center mb-20">
                                <div className="space-y-4">
                                    <div className="flex items-center justify-center">
                                    <Fade triggerOnce direction='up' duration={1000} delay={200}>
                                    <h3 className="text-lg tracking-tighter text-center text-blue-950 py-1 px-4 border border-blue-950 rounded-full mb-4">Fonctionnalités Principales</h3>
                                    </Fade>
                                    </div>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center tracking-tight">Mazia au service de votre entreprise</h2>
                                    <div className="flex justify-center">
                                    <p className="text-lg max-w-xl text-center text-blue-950 mb-6 tracking-tight">
                                        Mazia combine l’intelligence vocale, la compréhension du langage naturel et des flux conversationnels optimisés pour gérer tous vos appels.
                                    </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 grid lg:grid-cols-3 grid-cols-1 gap-4">
                                    <div className="border border-black border-dashed group flex flex-col justify-between space-y-6 text-left p-6">
                                        <div className="w-full">
                                            <h3 className="text-lg font-semibold tracking-tighter">Gérez tous vos appels entrants et sortants en un seul endroit.</h3>
                                        </div>
                                        <div className="mt-4 text-left space-y-4 w-full">
                                            <div>
                                                <h4 className="flex gap-1 font-medium ">
                                                    Appels entrants
                                                    <PhoneIncoming size={14} /> 
                                                </h4>
                                                <p className=" text-sm">Support client, informations, prise de rendez-vous</p>
                                            </div>
                                            <div>
                                                <h4 className="flex gap-1 font-medium ">
                                                    Appels sortants
                                                    <PhoneOutgoing size={14} />
                                                </h4>
                                                <p className=" text-sm">Qualification de prospects, relances, notifications</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="max-w-3xl border border-black border-dashed group flex flex-col space-y-6 text-left p-6">
                                        <div className="w-full">
                                            <h3 className="text-lg font-semibold tracking-tighter">Transcriptions & rapports</h3>
                                            <p className="text-sm leading-snug">
                                                Chaque interaction est enregistrée et analysée
                                            </p>
                                        </div>
                                            <TranscriptionCardVisual />
                                    </div>
                                    <div className="max-w-3xl border border-black border-dashed group flex flex-col space-y-6 items-start justify-center text-left p-6">
                                    <div className="w-full">
                                        <div className="flex items-center justify-center text-white bg-[#032CA6] w-12 h-12  rounded-full p-0.5">
                                                <Settings />
                                        </div>
                                    </div>
                                        <div className="w-full">
                                            <h3 className="text-lg font-semibold tracking-tighter">Personnalisation</h3>
                                            <p className=" text-sm leading-snug">
                                                Scripts et flux adaptables à votre activité
                                            </p>
                                        </div>
                                        <div className=" w-full">
                                            <div className="loader">
                                                <div className="line" /></div>
                                            </div>
                                    </div>
                            </div>
                            <div className="w-full mx-auto flex flex-col items-start  text-left space-y-6 mt-12">
                                        <div className="space-y-4">
                                            <p className="text-xl">Automatisez vos appels et suivez les performances en temps réel.</p>
                                        </div>
                                        <div>
                                            <a href="/demo" className="group flex items-center justify-center gap-2 bg-[#032CA6] hover:bg-[#032CA6]/80 text-white px-6 py-2 rounded-xl font-medium transition-all text-sm cursor-pointer">
                                                Essayez Mazia et transformez la gestion de vos appels
                                                <ArrowRight size={18} className="transition duration-300 group-hover:translate-x-2" />
                                            </a>
                                        </div>
                                    </div>
                </div>
            </section>
    )
}