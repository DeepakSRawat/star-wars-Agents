import Link from "next/link";
import Search from "./Search";
import Image from "next/image";

const Header = () => {
	return (
		<div className="responsive-container my-12 md:my-16 flex flex-col items-center">
			<Link href={"/"} className="flex flex-col items-center">
				<Image
					src={"/image/star-wars-title.png"}
					width={200}
					height={200}
					alt="Star wars"
				/>
				<h1 className="star-wars-title text-yellow-400 drop-shadow-2xl">
					AGENTS
				</h1>
			</Link>
			<p className="text-center text-gray-600 dark:text-gray-400 mt-3 text-sm sm:text-base md:text-lg">
				Explore the Star Wars Universe
			</p>
			<Search />
		</div>
	);
};

export default Header;
