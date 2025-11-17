"use client";
import { useState, useEffect } from "react";
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { SWAPI_BASE_URL } from "@/lib/constants";
import NotFound from "./(no-header)/not-found";
import Modal from "@/components/Modal";
import CharacterDetails from "@/components/CharacterDetails";

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

export default function Home({
	searchParams,
}: {
	searchParams: Promise<{ page?: string; search?: string }>;
}) {
	const [params, setParams] = useState<{ page?: string; search?: string }>(
		{}
	);
	const [results, setResults] = useState<Character[]>([]);
	const [count, setCount] = useState(0);
	const [isLoading, setIsLoading] = useState(true);
	const [isNotFound, setIsNotFound] = useState(false);
	const [selectedCharacter, setSelectedCharacter] =
		useState<Character | null>(null);
	const [characterHomeworld, setCharacterHomeworld] = useState<any>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const fetchParams = async () => {
			const searchParamsData = await searchParams;
			setParams(searchParamsData);
		};
		fetchParams();
	}, [searchParams]);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const page = Number(params?.page) || 1;
				const search = params?.search;
				let request;

				if (search) {
					request = await fetch(
						`${SWAPI_BASE_URL}/people/?search=${search}`
					);
				} else {
					request = await fetch(
						`${SWAPI_BASE_URL}/people/?page=${page}`
					);
				}

				if (request.status === 404) {
					setIsNotFound(true);
					return;
				}

				const data = await request.json();

				if (!data.results || !data.results.length) {
					setIsNotFound(true);
					return;
				}

				setResults(data.results);
				setCount(data.count);
				setIsNotFound(false);
			} catch (error) {
				setIsNotFound(true);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, [params]);

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

	if (isLoading) {
		return (
			<div className="min-h-screen flex items-center justify-center">
				<div className="text-white text-xl">Loading...</div>
			</div>
		);
	}

	if (isNotFound) {
		return <NotFound />;
	}

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
					currentPage={Number(params?.page) || 1}
					totalCount={count}
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
