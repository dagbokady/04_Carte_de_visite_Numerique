
export function Navbar() {
    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-30 backdrop-blur-sm bg-opacity-90">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16 md:h-18">


                    <div className="flex items-center gap-3">

                        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                            Carte de Visite
                            <span className="text-blue-600">.ci</span>
                        </h1>
                    </div>


                    <div className="flex items-center gap-4 md:gap-6">

                        <button className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                            Télécharger PNG
                        </button>

                    </div>

                </div>
            </div>
        </nav>
    );
}

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-10">

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">


                    <div>
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-4">

                            <span className="text-lg font-bold text-gray-800">
                Carte de Visite.ci
              </span>
                        </div>
                        <p className="text-gray-600 text-sm">
                            Créez rapidement des cartes de visite professionnelles et modernes.
                        </p>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                            Liens rapides
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>
                                <a href="#" className="hover:text-blue-600 transition-colors">
                                    Comment ça marche
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition-colors">
                                    Exemples de cartes
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-blue-600 transition-colors">
                                    Templates populaires
                                </a>
                            </li>
                        </ul>
                    </div>


                    <div>
                        <h3 className="text-sm font-semibold text-gray-800 mb-4 uppercase tracking-wide">
                            Contact
                        </h3>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>contact@carte-de-visite.ci</li>
                            <li>+225 07 79 03 14 54</li>
                            <li className="pt-2">
                                <div className="flex justify-center md:justify-start gap-4 mt-2">
                                    <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                                        <span className="sr-only">Twitter</span>
                                        𝕏
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                                        LinkedIn
                                    </a>
                                    <a href="#" className="text-gray-500 hover:text-gray-800 transition-colors">
                                        Instagram
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="mt-10 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
                    <p>© {new Date().getFullYear()} Carte de Visite.ci — Tous droits réservés</p>
                    <p className="mt-1">
                        Fait avec passion à Abidjan 🚀
                    </p>
                </div>

            </div>
        </footer>
    );
}