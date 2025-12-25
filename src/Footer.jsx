import mazLogo from "./assets/image.png";

export default function Footer() {
    return(
        <footer className="pt-16 pb-8 px-2">
            <div className="mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2">
                    <div className='space-y-6'>
                        <img src={mazLogo} alt="Logo" className="w-44" />
                        <p className='text-lg leading-relaxed'>
                            Votre assistant IA pour les appels téléphoniques.
                            </p>
                    </div>

                </div>
            </div>
        </footer>
    )
}