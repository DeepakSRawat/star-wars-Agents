"use client";
import Image, { ImageLoader } from "next/image";
import { useState } from "react";

const ImageCard = ({
	src,
	...props
}: {
	width: number;
	height: number;
	className: string;
	src: string;
	alt: string;
}) => {
	const [isLoading, setIsLoading] = useState(true);

	// We need a parent container to place the GIF as an overlay
	return (
		<>
			{isLoading && (
				<Image
					{...props}
					src="/image/bb8.gif"
					alt="Loading..."
					priority
					unoptimized
				/>
			)}

			<Image
				{...props}
				src={src} // Use the actual image source prop
				onLoadingComplete={() => setIsLoading(false)}
			/>
		</>
	);
};

export default ImageCard;
