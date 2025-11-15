// export const dynamic = "force-dynamic";
// export const revalidate = 0;
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { SWAPI_BASE_URL } from "@/lib/constants";
import { notFound } from "next/navigation";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ page?: string }>;
}) {
	const params = await searchParams;
	// console.log("searchparam:", params);
	const page = Number(params?.page) || 1;
	let request;
	try {
		request = await fetch(`${SWAPI_BASE_URL}/people/?page=${page}`);
		if (request.status == 404) return notFound();
	} catch (error) {
		return notFound();
	}

	const { results, count } = await request.json();

	return (
		<div className="min-h-screen flex flex-col items-center py-8 sm:py-12 md:py-16 bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
			<div className="responsive-container mb-12 md:mb-16">
				<h1 className="star-wars-title text-yellow-400 drop-shadow-2xl">
					STAR WARS AGENTS
				</h1>
				<p className="text-center text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base md:text-lg">
					Explore the Star Wars Universe
				</p>
			</div>

			<div className="responsive-container mb-12">
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 sm:gap-5 md:gap-6">
					{results &&
						results.length > 0 &&
						results.map((item: any) => {
							const id = item.url.split("/");
							return (
								<Card
									key={item.name}
									name={item.name}
									id={id[id.length - 2]}
								/>
							);
						})}
				</div>
			</div>

			<div className="mt-auto">
				<Pagination currentPage={page} totalCount={count} />
			</div>
		</div>
	);
}
