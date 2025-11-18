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
		<nav className="flex justify-center py-6 sm:my-8 md:my-10 mx-2 sm:mx-4 md:mx-6 sm:px-4">
			<ul className="flex items-center flex-wrap justify-center gap-0.5 sm:gap-2 md:gap-3 bg-linear-to-r from-gray-700 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 shadow-lg">
				{/* First Page */}
				<li>
					<Link href={{ pathname: "/", query: { page: 1 } }}>
						<div
							className={`rounded-l-full rounded-r-sm px-2 sm:px-3 py-1 sm:py-2 transition-smooth flex items-center justify-center ${
								currentPage === 1
									? "opacity-40 cursor-not-allowed"
									: "hover:bg-gray-500 dark:hover:bg-gray-600 cursor-pointer"
							}`}
						>
							<Image
								src={"/icons/arrow-left-double.svg"}
								alt="starting"
								width={24}
								height={24}
								className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
							/>
						</div>
					</Link>
				</li>
				{/* Previous Page */}
				<li>
					<Link
						href={{
							pathname: "/",
							query: { page: `${Math.max(1, currentPage - 1)}` },
						}}
					>
						<div
							className={`rounded px-2 sm:px-3 py-1 sm:py-2 transition-smooth flex items-center justify-center ${
								currentPage === 1
									? "opacity-40 cursor-not-allowed"
									: "hover:bg-gray-500 dark:hover:bg-gray-600 cursor-pointer"
							}`}
						>
							<Image
								src={"/icons/arrow-left.svg"}
								alt="previous"
								width={24}
								height={24}
								className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
							/>
						</div>
					</Link>
				</li>
				{/* Page Numbers */}
				{pageNumbers.map((num) => (
					<li key={num}>
						<Link
							href={{
								pathname: "/",
								query: { page: num },
							}}
						>
							<div
								className={`px-2.5 sm:px-3.5 md:px-4 py-1 sm:py-2 rounded transition-smooth font-semibold text-sm sm:text-base ${
									currentPage === num
										? "bg-yellow-400 dark:bg-yellow-500 text-gray-900 shadow-md"
										: "text-white hover:bg-gray-500 dark:hover:bg-gray-600"
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
						href={{
							pathname: "/",
							query: {
								page: `${Math.min(
									totalPages,
									currentPage + 1
								)}`,
							},
						}}
					>
						<div
							className={`rounded px-2 sm:px-3 py-1 sm:py-2 transition-smooth flex items-center justify-center ${
								currentPage === totalPages
									? "opacity-40 cursor-not-allowed"
									: "hover:bg-gray-500 dark:hover:bg-gray-600 cursor-pointer"
							}`}
						>
							<Image
								src={"/icons/arrow-right.svg"}
								alt="next"
								width={24}
								height={24}
								className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
							/>
						</div>
					</Link>
				</li>
				{/* Last Page */}
				<li>
					<Link
						href={{
							pathname: "/",
							query: { page: `${totalPages}` },
						}}
					>
						<div
							className={`rounded-r-full rounded-l-sm px-2 sm:px-3 py-1 sm:py-2 transition-smooth flex items-center justify-center ${
								currentPage === totalPages
									? "opacity-40 cursor-not-allowed"
									: "hover:bg-gray-500 dark:hover:bg-gray-600 cursor-pointer"
							}`}
						>
							<Image
								src={"/icons/arrow-right-double.svg"}
								alt="ending"
								width={24}
								height={24}
								className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
							/>
						</div>
					</Link>
				</li>
			</ul>
		</nav>
	);
}
