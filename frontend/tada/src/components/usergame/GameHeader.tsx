import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../stores';

interface GameHeaderProps {
	foundTreasure: number;
}

function GameHeader({ foundTreasure }: GameHeaderProps): JSX.Element {
	const gameInfo = useSelector((state: RootState) => state.user);
	const { gamePlayTime, gameStartTime } = gameInfo;
	const treausre = require('../../assets/images/closetreasure_color.png');
	const gameStartTimeKST = new Date(gameStartTime + '+09:00');
	const gameEndTimeKST = new Date(gameStartTimeKST.getTime() + gamePlayTime * 60 * 1000);

	const [timeLeft, setTimeLeft] = useState<number>(gameEndTimeKST.getTime() - Date.now());

	useEffect(() => {
		const timer = setInterval(() => {
			const currentTime = Date.now();
			const diff = gameEndTimeKST.getTime() - currentTime;

			if (diff < 0) {
				clearInterval(timer);
			} else {
				setTimeLeft(diff);
			}
		}, 1000);
		return () => clearInterval(timer);
	}, [gameEndTimeKST]);

	const minutes = Math.floor(timeLeft / 1000 / 60);
	const seconds = Math.floor((timeLeft / 1000) % 60);

	const timeLeftString = `${minutes.toString().padStart(2, '0')}:${seconds
		.toString()
		.padStart(2, '0')}`;

	return (
		<div className="flex items-center justify-around py-4 border-b-2 bg-main border-b-white">
			<div className="flex items-center justify-center h-12 text-2xl font-black bg-white border-4 rounded-full text-main w-36">
				{timeLeftString}
			</div>
			<div className="flex items-center space-x-2 text-2xl font-black text-white text-gray3">
				<img className="w-12 h-12" src={treausre} alt="" />
				<p>x {gameInfo.treasureNumber - foundTreasure}</p>
			</div>
		</div>
	);
}

export default GameHeader;
