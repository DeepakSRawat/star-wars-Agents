"use client";
import { useState } from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import Modal from "./Modal";
import CharacterDetails from "./CharacterDetails";

interface Character {
	name: string;
	height: string;
	mass: string;
	birth_year: string;
	created: string;
	films: string[];
	homeworld: string;
	url: string;
}

interface HomeContentProps {
	results: Character[];
	count: number;
	currentPage: number;
	search: string | undefined;
}

export default function HomeContent({
	results,
	count,
	currentPage,
	search,
}: HomeContentProps) {
	const [selectedCharacter, setSelectedCharacter] =
		useState<Character | null>(null);
	const [characterHomeworld, setCharacterHomeworld] = useState<any>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleCardClick = async (character: Character) => {
		try {
			const homeworldResponse = await fetch(character.homeworld);
			const homeworldData = await homeworldResponse.json();
			setSelectedCharacter(character);
			setCharacterHomeworld(homeworldData);
			setIsModalOpen(true);
		} catch (error) {
			console.error("Failed to fetch homeworld:", error);
		}
	};

	return (
		<div>
			<div className="responsive-container mb-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
					{results &&
						results.length > 0 &&
						results.map((item: Character) => {
							const id = item.url.split("/");
							return (
								<Card
									key={item.name}
									name={item.name}
									id={Number(id[id.length - 2])}
									onClick={() => handleCardClick(item)}
								/>
							);
						})}
				</div>
			</div>

			<div className="mt-auto">
				<Pagination
					currentPage={currentPage}
					totalCount={count}
					search={search}
				/>
			</div>

			{/* Character Details Modal */}
			<Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
				{selectedCharacter && characterHomeworld && (
					<CharacterDetails
						character={selectedCharacter}
						homeworld={characterHomeworld}
					/>
				)}
			</Modal>
		</div>
	);
}
