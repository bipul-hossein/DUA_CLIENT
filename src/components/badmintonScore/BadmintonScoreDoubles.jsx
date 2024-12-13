import React from 'react';

const BadmintonScoreDoubles = ({ team1, team2, sets, isFinished }) => {
    const getWinner = () => {
        const team1Wins = sets.filter(set => set.team1Score > set.team2Score).length;
        const team2Wins = sets.filter(set => set.team2Score > set.team1Score).length;
        if (team1Wins > team2Wins) return "Team 1";
        if (team2Wins > team1Wins) return "Team 2";
        return "Tie";
    };

    const renderTeam = (team, align) => (
        <div className={`text-${align}`}>
            <h3 className="font-semibold text-lg">{team.player1.name} / {team.player2.name}</h3>
            <p className="text-sm text-gray-600">{team.player1.country}</p>
        </div>
    );

    return (
        <div className="max-w-lg mx-auto bg-gray-100 shadow-lg rounded-lg overflow-hidden">
            <div className="bg-[#13679f] text-gray-1bg-gray-100 text-center py-4">
                <h2 className="text-2xl font-bold">Men's Doubles Match Result</h2>
            </div>
            <div className="p-4">
                <div className="flex justify-between items-center mb-4 text-gray-900">
                    {renderTeam(team1, 'left')}
                    {renderTeam(team2, 'right')}
                </div>
                <div className="border-t border-b border-gray-200 py-2 mb-4">
                    <div className="flex justify-between items-center">
                        <div className="font-bold text-lg text-gray-900">Sets</div>
                        <div className="font-bold text-lg text-gray-900">Score</div>
                    </div>
                    {sets.map((set, index) => (
                        <div key={index} className="flex justify-between items-center mt-2">
                            <div className='text-gray-900'>Set {index + 1}</div>
                            <div className='text-gray-900'>{set.team1Score} - {set.team2Score}</div>
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    {isFinished ? (
                        <div className="bg-green-100 text-green-800 font-semibold py-2 px-4 rounded">
                            Match Finished - Winner: {getWinner()}
                        </div>
                    ) : (
                        <div className="bg-yellow-100 text-yellow-800 font-semibold py-2 px-4 rounded">
                            Match Ongoing
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default BadmintonScoreDoubles;

