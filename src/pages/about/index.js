import React from 'react';

import Image from 'next/image';

import Avatar from '../../public/avatar.jpg'

const Index = () => {
    return (
        <div className='about__main'>
            <div className='about__content'>
                <Image src={Avatar} alt='Delphine Paiva' className='about__avatar' />
                <div className='about__bio'>
                    <h2>Bonjour, je m'appelle Delphine !</h2>
                    <p>
                        Développeuse web junior, passionnée par l'UI et l'UX Design.
                        <br />
                        <br />
                        Passionnée par les nouvelles technologies et l'IOT depuis de nombreuses années, j'ai tout d'abord exercé en temps qu'infirmière avant de me reconvertir dans le développement.
                        <br />
                        <br />
                        Ma formation intensive en sept. 2020, m’a fait découvrir JavaScript et le framework React, SQL, Git, et m'a fait travailler en méthode Agile SCRUM sur plusieurs projets.
                        J'ai réalisé un premier stage d'une durée de 6 mois auprès de la société GMI Aero et j’ai obtenu le titre pro Bac+2 Développeuse Web et Web mobile avec <a href='/'>ce projet</a>.
                        <br />
                        <br />
                        J'ai poursuivi mon apprentissage en Bachelor 3 Informatique en Ingénierie Logiciel à Paris Ynov Campus et en alternance auprès de la société Odigo qui m'a fait découvrir la POO en Java. J'ai continué d'utiliser JavaScript avec le framework Angular et j'ai découvert également la CI/CD avec Docker.
                        <br />
                        <br />
                        Mon alternance se termine fin novembre 2022 et je suis à la recherche d'une nouvelle entreprise et alternance pour réaliser un Master en développement logiciel, mobile et IOT. L'entreprise de mes rêves ?
                        <br />
                        ✔️ Curiosité, Optimisme et Bienveillance font partie de ses valeurs
                        <br />
                        ✔️ Des projets challengeants sur lesquels je peux contribuer et évoluer
                        <br />
                        ✔️ Une forte cohésion d'équipe
                    </p>
                </div>
            </div>
            <div className='fun__facts'>
                <h2 className='facts__title'>🔎 Ces faits que vous ne verrez pas sur mon CV</h2>
                <p className='facts__text'>Passionnée de photographie animalière, je rêve de photographier une panthère des neiges dans son environnement naturel.</p>
                <p className='facts__text'>A définir ...</p>
            </div>

        </div>
    );
}

export default Index;
