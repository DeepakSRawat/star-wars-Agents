// export const dynamic = "force-dynamic";
// export const revalidate = 0;
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { SWAPI_BASE_URL } from "@/lib/constants";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	const params = await searchParams;
	// console.log("searchparam:", params);
	const page = Number(params?.page) || 1;

	const request = await fetch(`${SWAPI_BASE_URL}/people/?page=${page}`);
	const { results, count } = await request.json();

	return (
		<>
			<h1>star wars directory</h1>
			<div className="flex flex-col gap-2 pt-20">
				{results.map((item: any) => (
					<Card key={item.name} name={item.name} />
				))}
			</div>
			<Pagination currentPage={page} totalCount={count} />
		</>
	);
}
