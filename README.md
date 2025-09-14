# Shoot 'Em All Leaderboard

A comprehensive web application for the Shoot 'Em All aim trainer game, featuring global leaderboards, game statistics, and an integrated gameplay experience.

## Overview

This project provides a complete ecosystem for the Shoot 'Em All game, including:

-   **Leaderboard System**: Global rankings with player scores, accuracy, and timestamps
-   **Game Integration**: Embedded gameplay with fullscreen support and game controls
-   **Statistics API**: Real-time game statistics and player data

## Features

### 🎯 Game Features

-   60-second aim training sessions
-   Precision-based scoring system
-   Real-time accuracy tracking
-   Embedded game with reload and fullscreen controls

### 📊 Leaderboard

-   Global player rankings sorted by score and accuracy
-   Top 3 podium display with visual rankings
-   Complete player statistics including dates
-   Real-time data updates

### 📈 Statistics

-   Total player count
-   Best accuracy achieved
-   Current high score
-   Live game statistics

## Technology Stack

-   **Framework**: Next.js 15 with App Router
-   **Language**: TypeScript
-   **Styling**: Tailwind CSS v4
-   **Deployment**: Vercel
-   **Database**: MongoDB (via external API)

## Project Structure

```
src/
├── app/
│   ├── api/
│   │   ├── leaderboard/route.ts    # Leaderboard API endpoint
│   │   └── stats/route.ts          # Statistics API endpoint
│   ├── leaderboard/page.tsx        # Leaderboard page
│   ├── play/page.tsx               # Game page
│   ├── privacy-policy/page.tsx     # Privacy policy
│   ├── layout.tsx                  # Root layout
│   ├── page.tsx                    # Home page
│   └── globals.css                 # Global styles
└── components/
    ├── LeaderboardEntry.tsx        # Individual leaderboard row
    └── Footer.tsx                  # Site footer
```

## API Endpoints

### Internal API Routes

-   `GET /api/leaderboard` - Fetches and formats leaderboard data
-   `GET /api/stats` - Retrieves game statistics

### External API Integration

The application integrates with `https://api.sea.xvcf.dev` for:

-   Player leaderboard data
-   Game statistics
-   Real-time updates

## Getting Started

1. **Clone the repository**

    ```bash
    git clone https://github.com/RafaeloxMC/sea-leaderboard.git
    cd sea-leaderboard
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run start` - Start production server
-   `npm run lint` - Run ESLint

## Data Privacy

The application collects minimal data:

-   Game scores and accuracy
-   Anonymized player names
-   Game session timestamps

No personal information, IP addresses, or tracking cookies are stored. See the [privacy policy](src/app/privacy-policy/page.tsx) for complete details.

## Contributing

This project follows standard Next.js development practices. Feel free to submit issues or pull requests.

## License

Private project - All rights reserved.
