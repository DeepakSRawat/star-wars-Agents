import { PICSUM_BASE_URL } from "@/lib/constants";
import Image from "next/image";

const Card = async ({ name }: { name: string }) => {
	// const getImageFinalurl = await fetch(
	// 	`${PICSUM_BASE_URL}${name}/picsum/200/200`,
	// 	{ redirect: "follow" }
	// );
	// console.log("getimagefinalurl===========>", getImageFinalurl);
	// const imgurl = getImageFinalurl.url;
	// console.log("imgurl:", imgurl);
	return (
		<div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
			<Image
				width={200}
				height={200}
				className="rounded-t-lg"
				src={`${PICSUM_BASE_URL}/seed/${name}/200`}
				alt="Card Image"
			/>
			<div className="p-5">
				<h5 className="mb-2 text-2xl font-bold text-gray-900">
					{name}
				</h5>
				{/* <p className="text-gray-700">
					This card includes an image and some descriptive text.
				</p> */}
			</div>
		</div>
	);
};

export default Card;
