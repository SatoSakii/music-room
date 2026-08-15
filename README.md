# Music Room

Solution mobile complète autour de la musique collaborative : une application Expo
(React Native + NativeWind) et une API Express + Prisma, permettant de voter pour les
morceaux d'un événement live, d'éditer des playlists à plusieurs en temps réel et de
déléguer le contrôle de la lecture.

Projet 42 - l'énoncé traduit est dans [SUBJECT.md](SUBJECT.md).

## Structure

| Dossier   | Rôle                                                      |
| --------- | --------------------------------------------------------- |
| `app/`    | Application mobile Expo - simple « télécommande » de l'API |
| `server/` | API REST, seule détentrice des données                     |

## Stack

**Mobile (`app/`)**

- Expo SDK 54 (compatible Expo Go), TypeScript strict
- expo-router (navigation par fichiers, `src/app`)
- NativeWind 4 + TailwindCSS 3

**Serveur (`server/`)**

- Express 5, TypeScript strict (ESM / NodeNext)
- Prisma 6 sur SQLite
- Validation des entrées avec Zod

## Installation

Les deux paquets sont indépendants et s'installent séparément.

```bash
# API
cd server
npm install
cp .env.example .env
npx prisma generate

# Application mobile
cd ../app
npm install
cp .env.example .env
```

## Lancement

```bash
cd server && npm run dev    # http://localhost:4000
cd app && npm start         # puis scanne le QR code avec Expo Go
```