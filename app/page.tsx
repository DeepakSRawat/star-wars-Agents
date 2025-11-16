// export const dynamic = "force-dynamic";
// export const revalidate = 0;
import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import { SWAPI_BASE_URL } from "@/lib/constants";
import NotFound from "./(no-header)/not-found";

export default async function Home({
	searchParams,
}: {
	searchParams: Promise<{ page?: string; search?: string }>;
}) {
	const params = await searchParams;
	// console.log("searchparam:", params);
	const page = Number(params?.page) || 1;
	const search = params?.search;
	let request;
	try {
		if (search) {
			request = await fetch(`${SWAPI_BASE_URL}/people/?search=${search}`);
		} else {
			request = await fetch(`${SWAPI_BASE_URL}/people/?page=${page}`);
		}
		if (request.status == 404) return <NotFound />;
	} catch (error) {
		return <NotFound />;
	}

	const { results, count } = await request.json();
	if (!results.length) return <NotFound />;
	// const temp = await request.json();
	// console.log("results and count:", temp);

	return (
		// <div className="min-h-screen flex flex-col items-center py-8 sm:py-12 md:py-16 bg-linear-to-b from-[#0a0a0a] to-slate-900">
		<div>
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
