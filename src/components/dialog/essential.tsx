import SlideUpDialog from "../ui/slideup-dialog";

const EssentialDialog = () => {
    return (
        <SlideUpDialog title="Essential">
            <div className="overflow-y-scroll size-full scrollbar-thin space-y-3">
                <span className="bg-[#493BFF] px-3 py-2 text-base lg:text-lg font-medium">
                    Caractéristiques
                </span>
                <ul className="ps-5 space-y-1">
                    <li className="list-decimal text-[#493BFF]">
                        Design Personnalisé Haut de Gamme :
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            Landing Page hautement personnalisée moderne et
                            intuitive
                        </li>
                    </ul>
                    <li className="list-decimal text-[#493BFF]">
                        Landing page
                    </li>
                    <li className="list-decimal text-[#493BFF]">Sections</li>
                    <ul className="space-y-1">
                        <li className="list-disc text-sm font-inter capitalize">
                            Accueil
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Présentation des services
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Page de réservation en ligne avancée
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Page de contact avec formulaire
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Page de témoignages clients
                        </li>
                    </ul>
                    <li className="list-decimal text-[#493BFF]">
                        Fonctionnalités Avancées :
                    </li>
                    <ul className="space-y-1">
                        <li className="list-disc text-sm font-inter capitalize">
                            Système de réservation avancé avec paiement en ligne
                            sécurisé.
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Intégration de Google Maps et options de navigation
                            en temps réel.
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Optimisation SEO avancée pour un meilleur classement
                            sur les moteurs de recherche.
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Responsive design optimisé pour une expérience
                            utilisateur parfaite sur tous les appareils.
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Intégration des réseaux sociaux pour une meilleure
                            interaction avec les clients.
                        </li>
                    </ul>
                    <li className="list-decimal text-[#493BFF]">
                        Support et Maintenance :
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            Support par email et téléphone pendant 3 mois après
                            la livraison du site.
                        </li>
                    </ul>
                </ul>
            </div>
        </SlideUpDialog>
    );
};

export default EssentialDialog;
