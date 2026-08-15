# Music Room

> Musique, collaboration et mobilité
>
> **Résumé :** Création d'une solution mobile complète centrée sur la musique et
> l'expérience utilisateur.
>
> **Version : 6**

---

## Sommaire

- [I. Préambule](#i-préambule)
  - [I.1 L'expérience musicale](#i1-lexpérience-musicale)
- [II. Consignes IA](#ii-consignes-ia)
- [III. Objectifs](#iii-objectifs)
- [IV. Consignes générales](#iv-consignes-générales)
  - [IV.1 Consignes concernant l'architecture logicielle](#iv1-consignes-concernant-larchitecture-logicielle)
  - [IV.2 Consignes concernant l'expérience mobile](#iv2-consignes-concernant-lexpérience-mobile)
- [V. Partie obligatoire](#v-partie-obligatoire)
  - [V.1 Utilisateur](#v1-utilisateur)
  - [V.2 Services](#v2-services)
    - [V.2.1 Music Track Vote](#v21-music-track-vote)
    - [V.2.2 Music Control Delegation](#v22-music-control-delegation)
    - [V.2.3 Music Playlist Editor](#v23-music-playlist-editor)
  - [V.3 Serveur](#v3-serveur)
  - [V.4 API](#v4-api)
  - [V.5 Application mobile](#v5-application-mobile)
  - [V.6 Sécurisation](#v6-sécurisation)
  - [V.7 Montée en charge](#v7-montée-en-charge)
  - [V.8 Agilité, qualité et intégration continue](#v8-agilité-qualité-et-intégration-continue)
- [VI. Partie bonus](#vi-partie-bonus)
  - [VI.1 Support multi-plateforme](#vi1-support-multi-plateforme)
  - [VI.2 Réflexion sur l'IoT](#vi2-réflexion-sur-liot)
  - [VI.3 Abonnement gratuit vs. abonnement payant](#vi3-abonnement-gratuit-vs-abonnement-payant)
  - [VI.4 Mode hors-ligne](#vi4-mode-hors-ligne)
- [VII. Rendu et évaluation par les pairs](#vii-rendu-et-évaluation-par-les-pairs)

---

## I. Préambule

### I.1 L'expérience musicale

La « consommation » musicale est une expérience personnelle que chacun vit à sa
manière :

- S'entourer de musique au quotidien,
- Profiter de la musique en partageant du temps avec des amis,
- Utiliser la musique pour s'isoler ou se concentrer,
- Ne croire qu'en la performance, les concerts live ou les festivals.

---

## II. Consignes IA

### ● Contexte

L'IA est désormais un puissant partenaire de code - aux côtés de vos pairs - pour
s'attaquer à des projets vastes et exigeants. Vous allez la guider sur les aspects
techniques comme non techniques de votre travail.

Les outils d'IA peuvent augmenter votre efficacité et améliorer la qualité de votre
production, mais vous devez être capable de plonger en profondeur dans n'importe
quelle partie du projet sans dépendre d'eux.

Votre partenaire IA vous assiste, mais vous restez entièrement responsable de la prise
de décisions techniques éclairées, ainsi que de leur explication et de leur défense.

### ● Message principal

- ☛ Visez un usage mûr et responsable de l'IA.
- ☛ Ne laissez jamais l'IA prendre la responsabilité des décisions - surtout lorsqu'elle
  n'a pas conscience de vos objectifs, de vos contraintes ou de la dynamique de votre
  équipe.
- ☛ Maintenez créativité, innovation et supervision humaine par une collaboration active
  avec vos pairs. L'IA est entraînée sur des données existantes et génère rarement des
  idées véritablement nouvelles.
- ☛ Restez informé des tendances émergentes et prêt à vous adapter aux nouveaux concepts
  et technologies.

### ● Règles de l'apprenant

- Conservez le leadership intellectuel sur vos projets et prenez vos propres décisions
  éclairées.
- Privilégiez l'intelligence collective de votre équipe et de vos pairs.
- Tenez-vous activement informé de l'évolution continue des technologies d'IA.

### ● Résultats attendus de la phase

- Compétences en ingénierie de l'IA.
- Efficacité accrue.
- Fiabilité et qualité renforcées.
- Un état d'esprit de pionnier.

### ● Commentaires et exemples

- Vos pairs savent identifier les compromis, questionner les hypothèses et vous aider à
  progresser. La première réponse d'une IA n'est pas forcément la meilleure - elle peut
  manquer d'efficacité, de sécurité ou de valeur ajoutée réelle. Plus que jamais, vous
  devez vous appuyer sur vos pairs.
- L'IA peut vous rendre plus rapide, mais vos pairs vous rendent meilleur. Collaboration,
  discussion et remise en question mutuelle sont les clés du succès.
- Soyez transparent sur la façon dont l'IA a été utilisée dans vos projets, et identifiez
  clairement ce qui a été généré par des outils d'IA.

> **✓ Bonne pratique**
>
> J'ai demandé à une IA de m'aider à générer des tests unitaires pour mon API. Je les ai
> relus avec mon binôme, et nous les avons ajustés pour les cas limites. Cela a fait
> gagner du temps, et nous avons tous les deux appris quelque chose.

> **✗ Mauvaise pratique**
>
> J'ai fait générer toute l'architecture de mon projet par une IA. Ça « marche », mais
> quand on me demande d'expliquer les choix de conception pendant la soutenance ou devant
> un client, j'en suis incapable. Je perds ma crédibilité et j'échoue.

---

## III. Objectifs

Ce projet vise à aborder tous les concepts nécessaires à la création d'une application
mobile, connectée et collaborative, en tenant compte des contraintes d'un produit réel.

Vous devrez travailler sur l'architecture client/serveur de votre solution, prendre des
décisions concernant le stockage de vos données, définir une API qui servira de canal de
communication entre votre serveur et vos clients, anticiper les problématiques de montée
en charge et de sécurisation, et apprendre à travailler avec des tiers en intégrant des
SDK externes.

Il y a beaucoup de sujets. Vous devez répartir les différentes tâches entre les membres
de votre équipe projet.

Les services suivants devront être implémentés :

- **Music Track Vote** - chaîne musicale live avec vote,
- **Music Control Delegation** - délégation du contrôle de la musique,
- **Music Playlist Editor** - édition de playlist multi-utilisateurs en temps réel.

> ⚠️ **Attention** : le SDK que vous choisissez ne doit pas faire le travail à votre
> place.

---

## IV. Consignes générales

### IV.1 Consignes concernant l'architecture logicielle

Il n'y a aucune contrainte quant aux stratégies ou au langage à utiliser pour le
back-end : vous devrez évaluer les avantages et inconvénients des différentes
technologies disponibles et identifier celles qui conviendront le mieux au projet. Vous
devrez justifier vos décisions.

Vous ne pouvez pas commiter dans votre dépôt des bibliothèques que vous n'auriez pas
écrites vous-même. Les dépendances de votre projet doivent être téléchargeables
automatiquement depuis un clone de votre dépôt grâce à un Makefile ou à un mécanisme
similaire.

### IV.2 Consignes concernant l'expérience mobile

L'application mobile doit permettre à l'utilisateur d'effectuer toutes les actions
nécessaires liées au projet. Elle peut être implémentée soit pour Android, soit pour
iOS, avec la technologie de votre choix.

---

## V. Partie obligatoire

### V.1 Utilisateur

Au premier lancement de l'application, l'utilisateur doit créer un compte sur
l'application. Il choisira entre une inscription mail/mot de passe ou via un compte de
réseau social (Facebook ou Google).

Une fois que l'utilisateur possède un compte sur votre plateforme, l'application doit lui
permettre de lier son compte de réseau social (Facebook ou Google).

Dans son profil, l'utilisateur doit pouvoir renseigner et mettre à jour :

- ses informations publiques,
- les informations accessibles uniquement à ses amis,
- ses informations privées,
- ses préférences musicales.

> ℹ️ Si l'utilisateur a créé un compte avec mail/mot de passe, l'application doit exiger
> une validation par mail et l'inviter à changer son mot de passe s'il l'a oublié.

### V.2 Services

Dans l'application, l'utilisateur doit avoir accès à **au moins 2 fonctionnalités sur les
3 suivantes** : Music Track Vote, Music Playlist Editor et Music Control Delegation.

#### V.2.1 Music Track Vote

> **Chaîne musicale live avec vote.**

Des personnes sont rassemblées dans un lieu (soirée, événement…). Votre service doit
permettre à quiconque de suggérer ou de voter pour le prochain morceau à venir dans la
playlist courante. Si un morceau obtient beaucoup de votes, il remonte dans la liste et
est joué plus tôt.

Une **gestion de la visibilité** (public/privé) doit être intégrée au service :

- Par défaut, votre événement est public.
- Tous les utilisateurs peuvent trouver votre événement et voter si celui-ci est public.
- Seuls les utilisateurs invités peuvent trouver l'événement et voter si celui-ci est
  privé.

Une **gestion des licences** doit être intégrée au service :

- Par défaut, tout le monde peut voter.
- Avec la bonne licence, seules les personnes invitées peuvent voter.
- Avec la bonne licence, seules les personnes situées dans un lieu donné à un moment donné
  (entre 16h et 18h par exemple) pourront voter.

> ⚠️ Vous devez particulièrement soigner la gestion des problématiques de concurrence :
> par exemple, si plusieurs personnes votent pour des morceaux différents ou pour le même
> morceau dans une playlist.

#### V.2.2 Music Control Delegation

> **Délégation du contrôle de la musique.**

Une gestion des licences doit être intégrée au service. Elle doit être spécifique à chaque
appareil rattaché au compte de l'utilisateur. L'utilisateur peut choisir de donner le
contrôle de la musique à différents amis.

#### V.2.3 Music Playlist Editor

> **Playlist multi-utilisateurs en temps réel.**

Collaborez avec vos amis ou avec des personnes ayant les mêmes goûts musicaux pour créer
des playlists en temps réel. Les utilisateurs peuvent ainsi créer des stations radio
originales.

Une **gestion de la visibilité** (public/privé) doit être implémentée dans le service :

- Par défaut, une playlist est publique.
- Si elle est publique, tous les utilisateurs ont accès à la playlist.
- Si elle est privée, seuls les utilisateurs invités peuvent accéder à la playlist.

Une **gestion des licences** doit être implémentée dans le service :

- Par défaut, tout le monde peut éditer la playlist.
- Avec la bonne licence, seuls les utilisateurs invités peuvent éditer la playlist.

> ⚠️ Vous devez particulièrement soigner la gestion des problèmes de concurrence : par
> exemple, si plusieurs personnes déplacent des morceaux différents ou le même morceau
> dans une playlist.

### V.3 Serveur

Toutes les données des services seront stockées côté back-end. Le back-end fait référence.
Il est le gardien et le représentant de la « vérité ». Vous pouvez utiliser la technologie
et les frameworks que vous voulez (php, nodejs, golang, firebase, etc.).

### V.4 API

L'API sera le point d'accès à votre back-end pour toutes les applications. Certains
développeurs s'appuieront sur votre API pour diverses intégrations. Par conséquent, la
documentation de cette API est essentielle et vous êtes les premiers développeurs à
l'utiliser. Cette documentation de référence de l'API doit présenter les méthodes, les
entrées et les sorties. Elle peut être auto-générée avec Swagger, par exemple.

Vous devriez créer une API qui adopte le principe REST, mais il en existe d'autres (de
nouvelles tendances apparaissent quotidiennement). Dans tous les cas, vous devrez être
capable de justifier votre choix et d'en expliquer les caractéristiques.

Vous devriez adopter JSON comme format d'échange avec l'API, mais il en existe d'autres.
Dans tous les cas, vous devrez être capable de justifier votre choix et d'en expliquer les
caractéristiques.

### V.5 Application mobile

Les applications ne doivent être que des « télécommandes » vers le back-end, et l'adresse
du back-end doit être configurable dans l'application à des fins de test.

Le support de l'authentification via un réseau social (Facebook ou Google) doit être
implémenté dans l'application mobile. Des ressources sont disponibles sur
`developers.facebook.com` et `developers.google.com`.

### V.6 Sécurisation

Un utilisateur authentifié sur votre solution doit avoir accès à ses données, mais pas à
celles des autres utilisateurs. Vous devez anticiper les comportements malveillants
(bruteforce de votre API, vol de session, etc.), mais on n'attend pas de votre API qu'elle
soit inviolable :

- vous devez implémenter des mécanismes pour protéger vos utilisateurs,
- vous devez identifier les autres risques et expliquer les protections envisageables.

Toute action sur l'application mobile doit générer des logs sur le back-end :

- Plateforme (Android, iOS, etc.),
- Appareil (iPhone 6G, iPad Air, Samsung Edge, etc.),
- Version de l'application.

### V.7 Montée en charge

Vous devez être capable d'évaluer la charge que votre API et votre back-end peuvent
supporter, c'est-à-dire justifier et mesurer le nombre d'utilisateurs pouvant utiliser
simultanément vos 3 services. Vous pouvez utiliser AB (Apache Benchmark), Gatling, Siege,
Tsung ou JMeter par exemple.

N'oubliez pas de préciser les caractéristiques des serveurs (CPU, RAM, Cloud ou
on-premise, etc.). Le nombre maximum d'utilisateurs doit être cohérent avec le choix de la
plateforme : des dizaines pour un Raspberry, des milliers pour un serveur d'entrée de
gamme.

### V.8 Agilité, qualité et intégration continue

Vous avez beaucoup de couches et de fonctionnalités à implémenter pour ce projet, et vous
devrez travailler en équipe. Vous devez vous organiser pour faire preuve d'agilité, être
capables de remettre en question vos propres décisions, et mettre en place des tests
spécifiques et ponctuels pour chaque couche.

> ⚠️ Pour des raisons de sécurité évidentes, tous les identifiants, clés d'API, variables
> d'environnement, etc. doivent être enregistrés localement dans un fichier `.env` ignoré
> par git. Des identifiants stockés publiquement vous mèneront directement à l'échec du
> projet.

---

## VI. Partie bonus

Les bonus proposés ici correspondent à de véritables problématiques métier que vous
rencontrerez en développant une application mobile.

### VI.1 Support multi-plateforme

Une fois que vous avez un serveur et une API fonctionnels, vous pouvez rendre vos services
disponibles sur diverses plateformes. Vous devez déjà supporter une plateforme mobile
(Android ou iOS). En bonus, vous pourriez également rendre votre service web « responsive »
afin qu'il s'adapte à n'importe quelle taille d'écran.

Selon vos choix technologiques, le support web peut nécessiter de réécrire entièrement ou
presque entièrement le code de votre client.

### VI.2 Réflexion sur l'IoT

Vous pouvez implémenter un mécanisme tel qu'iBeacon sur votre événement. Par exemple,
lorsque des personnes s'approchent d'un événement public enregistré sur votre service,
elles reçoivent automatiquement des informations sur l'événement, comment y accéder, le
type de musique, etc.

### VI.3 Abonnement gratuit vs. abonnement payant

De nos jours, les solutions web et les applications mobiles proposent souvent à
l'utilisateur de choisir entre un abonnement gratuit limité et plusieurs abonnements
payants illimités.

Ce bonus vous permettra d'implémenter ce type de logique dans votre application. Vous
devrez alors permettre aux utilisateurs de basculer entre deux offres que vous aurez
établies au préalable. Certaines fonctionnalités de votre application (Music Playlist
Editor par exemple) ne seront accessibles qu'aux utilisateurs disposant d'un abonnement
payant.

### VI.4 Mode hors-ligne

Avec ce bonus, vous implémenterez un mécanisme permettant aux utilisateurs de profiter de
l'application hors-ligne, par exemple lorsqu'ils n'ont pas de réseau mobile. Dans ce cas,
l'expérience et les fonctions proposées par l'application peuvent être complètement
différentes.

Si l'application est utilisée hors-ligne, vous devez prévoir une synchronisation.
Attention toutefois : les mécanismes de synchronisation apportent leur lot de problèmes !

- Gestion des conflits et de la concurrence,
- Gestion des données obsolètes sur l'application mobile.

> ⚠️ La partie bonus ne sera évaluée que si la partie obligatoire est **PARFAITE**.
> Parfaite signifie que la partie obligatoire a été intégralement réalisée et fonctionne
> sans dysfonctionnement. Si vous n'avez pas validé **TOUTES** les exigences obligatoires,
> votre partie bonus ne sera pas évaluée du tout.

---

## VII. Rendu et évaluation par les pairs

Rendez votre travail dans votre dépôt Git comme d'habitude. Seul le travail présent dans
votre dépôt sera évalué pendant la soutenance. N'hésitez pas à revérifier les noms de vos
dossiers et fichiers pour vous assurer qu'ils sont corrects.
