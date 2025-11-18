import { SWAPI_BASE_URL } from "@/lib/constants";
import NotFound from "./(no-header)/not-found";
import HomeContent from "@/components/HomeContent";

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

interface HomePageProps {
	searchParams: Promise<{ page?: string; search?: string }>;
}

async function fetchCharacters(page: number, search?: string) {
	try {
		let url: string;

		if (search && page) {
			url = `${SWAPI_BASE_URL}/people/?search=${search}&page=${page}`;
		} else if (search) {
			url = `${SWAPI_BASE_URL}/people/?search=${search}`;
		} else {
			url = `${SWAPI_BASE_URL}/people/?page=${page}`;
		}

		const request = await fetch(url, {
			next: { revalidate: 60 }, // Revalidate every 60 seconds for ISR
		});

		if (request.status === 404) {
			return { isNotFound: true, results: [], count: 0 };
		}

		const data = await request.json();

		if (!data.results || !data.results.length) {
			return { isNotFound: true, results: [], count: 0 };
		}

		return {
			results: data.results as Character[],
			count: data.count as number,
			isNotFound: false,
		};
	} catch (error) {
		return { isNotFound: true, results: [], count: 0 };
	}
}

export default async function Home({ searchParams }: HomePageProps) {
	const params = await searchParams;
	const page = Number(params?.page) || 1;
	const search = params?.search;

	const { results, count, isNotFound } = await fetchCharacters(page, search);

	if (isNotFound) {
		return <NotFound />;
	}

	return (
		<HomeContent
			results={results}
			count={count}
			currentPage={page}
			search={search}
		/>
	);
}
