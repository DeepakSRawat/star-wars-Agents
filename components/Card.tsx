import { PICSUM_BASE_URL } from "@/lib/constants";
import { lighten, stringToColor } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Loader from "./Loader";
import ImageCard from "./ImageCard";

// Custom loader function
const imageLoader = () => {
	return <Loader />;
};

const Card = async ({ id, name }: { id: number; name: string }) => {
	const bgColor = stringToColor(name);
	const accentLight = lighten(bgColor, 40);
	// const accentDark = darken(bgColor, 40);
	// const accentVibrant = saturate(bgColor, 0.5);
	return (
		<Link
			href={`/${id}`}
			className="card-base w-full max-w-xs sm:max-w-sm h-full flex flex-col group"
			style={{ backgroundColor: bgColor }}
		>
			<div className="relative overflow-hidden h-64 sm:h-72 md:h-80 w-full">
				{/* <Image
					width={320}
					height={320}
					className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
					src={`${PICSUM_BASE_URL}/seed/${name}/320`}
					alt={name}
				/> */}
				<ImageCard
					width={320}
					height={320}
					className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
					src={`${PICSUM_BASE_URL}/seed/${name}/320`}
					alt={name}
				/>
			</div>
			<div className="p-4 sm:p-5 md:p-6 flex-grow flex flex-col justify-end">
				<h5
					className="text-xl sm:text-2xl md:text-3xl font-bold text-center line-clamp-2 transition-smooth"
					style={{ color: accentLight }}
				>
					{name}
				</h5>
			</div>
		</Link>
	);
};

export default Card;
