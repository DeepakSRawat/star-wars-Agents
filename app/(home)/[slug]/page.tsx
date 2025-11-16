import ImageCard from "@/components/ImageCard";
import { PICSUM_BASE_URL, SWAPI_BASE_URL } from "@/lib/constants";
import { stringToColor } from "@/lib/utils";
import Image from "next/image";

const page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const request = await fetch(`${SWAPI_BASE_URL}/people/${slug}`);
	const data = await request.json();
	const HomeWorldRequest = await fetch(data.homeworld);
	const HomeWorldData = await HomeWorldRequest.json();

	const bgcolor = stringToColor(data.name);

	const dateFormatter = new Date(data.created);
	const day = dateFormatter.getDay();
	const month = dateFormatter.getMonth();
	const year = dateFormatter.getFullYear();

	const gradientStyle = {
		height: "100vh", // Full screen height
		background: `linear-gradient(to bottom, #0a0a0a, ${bgcolor})`, // Top → Bottom
	};

	return (
		<div
			className="min-h-screen flex flex-col items-center py-8 px-4 sm:px-6 lg:px-8"
			style={gradientStyle}
		>
			{/* Header */}
			<div className="w-full max-w-4xl mb-12">
				<h1 className="text-4xl sm:text-5xl font-bold text-center mb-2 text-white drop-shadow-lg">
					{data.name}
				</h1>
			</div>

			{/* Main Content Grid */}
			<div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
				{/* Character Image */}
				<div className="md:col-span-1 flex justify-center">
					<div className="rounded-2xl shadow-2xl overflow-hidden">
						<ImageCard
							width={300}
							height={300}
							className="w-full h-auto"
							src={`${PICSUM_BASE_URL}/seed/${data.name}/300`}
							alt={data.name}
						/>
						{/* <Image
							width={300}
							height={300}
							className="w-full h-auto"
							src={`${PICSUM_BASE_URL}/seed/${data.name}/300`}
							alt={data.name}
						/> */}
					</div>
				</div>

				{/* Character Details */}
				<div className="md:col-span-2 space-y-6">
					{/* Personal Stats */}
					<div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">
							Character Stats
						</h2>
						<div className="grid grid-cols-2 gap-4 sm:gap-6">
							<div className="border-l-4 border-blue-500 pl-4">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Height
								</p>
								<p className="text-xl font-bold text-gray-900">
									{data.height}
								</p>
							</div>
							<div className="border-l-4 border-green-500 pl-4">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Mass
								</p>
								<p className="text-xl font-bold text-gray-900">
									{data.mass}
								</p>
							</div>
							<div className="border-l-4 border-purple-500 pl-4">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Birth Year
								</p>
								<p className="text-xl font-bold text-gray-900">
									{data.birth_year}
								</p>
							</div>
							<div className="border-l-4 border-orange-500 pl-4">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Films
								</p>
								<p className="text-xl font-bold text-gray-900">
									{data.films.length}
								</p>
							</div>
							<div className="col-span-2 border-l-4 border-pink-500 pl-4">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Created
								</p>
								<p className="text-xl font-bold text-gray-900">
									{day}/{month + 1}/{year}
								</p>
							</div>
						</div>
					</div>

					{/* HomeWorld Details */}
					<div className="bg-white bg-opacity-95 rounded-lg shadow-lg p-6">
						<h2 className="text-2xl font-bold mb-4 text-gray-800">
							Home World
						</h2>
						<div className="space-y-4">
							<div className="border-b-2 border-gray-200 pb-3">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Planet Name
								</p>
								<p className="text-lg font-bold text-gray-900">
									{HomeWorldData.name}
								</p>
							</div>
							<div className="border-b-2 border-gray-200 pb-3">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Terrain
								</p>
								<p className="text-lg font-bold text-gray-900">
									{HomeWorldData.terrain}
								</p>
							</div>
							<div className="border-b-2 border-gray-200 pb-3">
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Climate
								</p>
								<p className="text-lg font-bold text-gray-900">
									{HomeWorldData.climate}
								</p>
							</div>
							<div>
								<p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
									Population
								</p>
								<p className="text-lg font-bold text-gray-900">
									{HomeWorldData.population}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default page;
