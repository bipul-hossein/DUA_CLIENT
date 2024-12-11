import React from 'react';
import BadmintonScoreDoubles from '../../../components/badmintonScore/BadmintonScoreDoubles';

const BadmintonScore = () => {
    const matchData = {
        team1: {
            player1: { name: "Kevin Sanjaya Sukamuljo", country: "Indonesia" },
            player2: { name: "Marcus Fernaldi Gideon", country: "Indonesia" },
        },
        team2: {
            player1: { name: "Li Junhui", country: "China" },
            player2: { name: "Liu Yuchen", country: "China" },
        },
        sets: [
            { team1Score: 21, team2Score: 19 },
            { team1Score: 19, team2Score: 21 },
            { team1Score: 21, team2Score: 15 },
        ],
        isFinished: true
    };

    return (
        <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
            <div className="relative py-3 sm:max-w-xl sm:mx-auto">
                <BadmintonScoreDoubles
                    team1={matchData.team1}
                    team2={matchData.team2}
                    sets={matchData.sets}
                    isFinished={matchData.isFinished}
                />
            </div>
        </div>
    );
};

export default BadmintonScore;

