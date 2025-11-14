import { BASE_URL } from "@/lib/constants";
import Image from "next/image";
import Link from "next/link";

export default function Pagination({
	currentPage,
	totalCount,
}: {
	currentPage: number;
	totalCount: number;
}) {
	const perPage = 10;
	const totalPages = Math.ceil(totalCount / perPage);
	const pageNumbers = [];
	let startPage = Math.max(1, currentPage - 2);
	let endPage = Math.min(totalPages, currentPage + 2);

	if (currentPage <= 3) {
		endPage = Math.min(5, totalPages);
	} else if (currentPage >= totalPages - 2) {
		startPage = Math.max(1, totalPages - 4);
	}

	for (let i = startPage; i <= endPage; i++) {
		pageNumbers.push(i);
	}

	return (
		<nav className="flex justify-center mx-6">
			<ul className="flex items-center space-x-2 bg-gray-600 rounded-full px-2 py-1">
				{/* First Page */}
				<li>
					<Link href={`${BASE_URL}/?page=1`}>
						<div
							className={`rounded-l-full rounded-r-sm px-2 py-1 ${
								currentPage === 1
									? "opacity-50 pointer-events-none"
									: "hover:bg-gray-500"
							}`}
						>
							<Image
								src={"/icons/arrow-left-double.svg"}
								alt="starting"
								width={17}
								height={17}
							/>
						</div>
					</Link>
				</li>
				{/* Previous Page */}
				<li>
					<Link
						href={`${BASE_URL}/?page=${Math.max(
							1,
							currentPage - 1
						)}`}
					>
						<div
							className={`rounded ${
								currentPage === 1
									? "opacity-50 pointer-events-none"
									: "hover:bg-gray-500"
							} px-2 py-1`}
						>
							<Image
								src={"/icons/arrow-left.svg"}
								alt="previous"
								width={17}
								height={17}
							/>
						</div>
					</Link>
				</li>
				{/* Page Numbers */}
				{pageNumbers.map((num) => (
					<li key={num}>
						<Link href={`${BASE_URL}/?page=${num}`}>
							<div
								className={`px-3 py-1 rounded transition ${
									currentPage === num
										? "bg-white text-gray-900 font-semibold"
										: "text-white hover:bg-gray-500"
								}`}
							>
								{num}
							</div>
						</Link>
					</li>
				))}
				{/* Next Page */}
				<li>
					<Link
						href={`${BASE_URL}/?page=${Math.min(
							totalPages,
							currentPage + 1
						)}`}
					>
						<div
							className={`rounded ${
								currentPage === totalPages
									? "opacity-50 pointer-events-none"
									: "hover:bg-gray-500"
							} px-2 py-1`}
						>
							<Image
								src={"/icons/arrow-right.svg"}
								alt="next"
								width={17}
								height={17}
							/>
						</div>
					</Link>
				</li>
				{/* Last Page */}
				<li>
					<Link href={`${BASE_URL}/?page=${totalPages}`}>
						<div
							className={`rounded-r-full rounded-l-sm px-2 py-1 ${
								currentPage === totalPages
									? "opacity-50 pointer-events-none"
									: "hover:bg-gray-500"
							}`}
						>
							<Image
								src={"/icons/arrow-right-double.svg"}
								alt="ending"
								width={17}
								height={17}
							/>
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
