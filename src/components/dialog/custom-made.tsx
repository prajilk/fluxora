import React from "react";
import SlideUpDialog from "../ui/slideup-dialog";

const CustomMade = () => {
    return (
        <SlideUpDialog title="Sur mesure">
            <div className="overflow-y-scroll size-full scrollbar-thin space-y-3">
                <span className="bg-primary px-3 py-2 text-lg font-medium">
                    Caractéristiques
                </span>
                <ul className="ps-5 space-y-1">
                    <li className="list-decimal text-primary">Essential</li>
                    <li className="list-decimal text-primary">
                        Caractéristiques :
                    </li>
                    <li className="list-decimal text-primary">
                        Design Personnalisé Haut de Gamme :
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            Landing Page hautement personnalisée moderne et
                            intuitive
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">Landing Page</li>
                    <li className="list-decimal text-primary">Sections :</li>
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
                    <li className="list-decimal text-primary">
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
                    <li className="list-decimal text-primary">
                        Support et Maintenance :
                    </li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            Support par email et téléphone pendant 3 mois après
                            la livraison du site.
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">Prix</li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            1599 € HT
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">Options 1</li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            Ajout Logo
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">Options 2</li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            Ajout Identité visuelle + Logo
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">Options 3</li>
                    <ul>
                        <li className="list-disc text-sm font-inter capitalize">
                            Ajout Identité visuelle + Logo + 30 post
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        Offre premium :
                    </li>
                    <ul className="space-y-1">
                        <li className="list-disc text-sm font-inter capitalize">
                            Accompagnement personnalisé sur la réalisation du
                            projet du client sur mesure en fonction de ses
                            besoins.
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            1 à 8 pages en fonction de la demande ou Landing
                            page
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Optimisation SEO
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Responsive Web site
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Identité visuelle &#040;Branding&#041;
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Logo
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Post Réseaux sociaux
                        </li>
                        <li className="list-disc text-sm font-inter capitalize">
                            Maintenance du site pendant 6 mois
                        </li>
                    </ul>
                    <li className="list-decimal text-primary">
                        Option : Prolongation maintenance du site
                    </li>
                </ul>
            </div>
        </SlideUpDialog>
    );
};

export default CustomMade;
