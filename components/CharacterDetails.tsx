"use client";
import { PICSUM_BASE_URL } from "@/lib/constants";
import { stringToColor } from "@/lib/utils";
import Image from "next/image";
import ImageCard from "./ImageCard";

interface CharacterDetailsProps {
	character: any;
	homeworld: any;
}

const CharacterDetails = ({ character, homeworld }: CharacterDetailsProps) => {
	const bgcolor = stringToColor(character.name);
	const gradientStyle = {
		minHeight: "100vh", // Full screen height
		background: `linear-gradient(to bottom, transparent, ${bgcolor})`, // Top → Bottom
	};

	const dateFormatter = new Date(character.created);
	const day = dateFormatter.getDay();
	const month = dateFormatter.getMonth();
	const year = dateFormatter.getFullYear();

	return (
		<div
			className="py-8 px-4 sm:px-6 lg:px-8"
			style={{
				background: `${bgcolor}98`,
			}}
		>
			{/* Header */}
			<div className="mb-8 text-center">
				<h1 className="text-4xl sm:text-5xl font-bold mb-2 text-white">
					{character.name}
				</h1>
				<div className="h-1 w-24 bg-linear-to-r from-yellow-400 to-red-600 mx-auto rounded"></div>
			</div>

			{/* Main Content Grid */}
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
				{/* Character Image */}
				<div className="md:col-span-1 flex justify-center">
					<div className="rounded-2xl shadow-2xl overflow-hidden">
						<ImageCard
							width={300}
							height={300}
							className="w-full h-auto"
							src={`${PICSUM_BASE_URL}/seed/${character.name}/300`}
							alt={character.name}
						/>
					</div>
				</div>

				{/* Character Details */}
				<div className="md:col-span-2 space-y-6">
					{/* Personal Stats */}
					<div className="bg-black/50 backdrop-blur-sm bg-opacity-95 rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-bold mb-4 text-yellow-400">
							Character Stats
						</h2>
						<div className="grid grid-cols-2 gap-4 sm:gap-6">
							<div className="border-l-4 border-blue-500 pl-4">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Height
								</p>
								<p className="text-xl font-bold text-red-400">
									{character.height}
								</p>
							</div>
							<div className="border-l-4 border-green-500 pl-4">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Mass
								</p>
								<p className="text-xl font-bold text-red-400">
									{character.mass}
								</p>
							</div>
							<div className="border-l-4 border-purple-500 pl-4">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Birth Year
								</p>
								<p className="text-xl font-bold text-red-400">
									{character.birth_year}
								</p>
							</div>
							<div className="border-l-4 border-orange-500 pl-4">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Films
								</p>
								<p className="text-xl font-bold text-red-400">
									{character.films.length}
								</p>
							</div>
							<div className="col-span-2 border-l-4 border-pink-500 pl-4">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Created
								</p>
								<p className="text-xl font-bold text-red-400">
									{day}/{month + 1}/{year}
								</p>
							</div>
						</div>
					</div>

					{/* HomeWorld Details */}
					<div className="bg-black/50 backdrop-blur-sm bg-opacity-95 rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-bold mb-4 text-yellow-400">
							Home World
						</h2>
						<div className="space-y-4">
							<div className="border-b-2 border-gray-200 pb-3">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Planet Name
								</p>
								<p className="text-lg font-bold text-red-400">
									{homeworld.name}
								</p>
							</div>
							<div className="border-b-2 border-gray-200 pb-3">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Terrain
								</p>
								<p className="text-lg font-bold text-red-400">
									{homeworld.terrain}
								</p>
							</div>
							<div className="border-b-2 border-gray-200 pb-3">
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Climate
								</p>
								<p className="text-lg font-bold text-red-400">
									{homeworld.climate}
								</p>
							</div>
							<div>
								<p className="text-sm font-semibold text-gray-400 uppercase tracking-wide">
									Population
								</p>
								<p className="text-lg font-bold text-red-400">
									{homeworld.population}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CharacterDetails;
