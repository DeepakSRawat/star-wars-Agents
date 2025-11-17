import Image from "next/image";

export default function NotFound() {
	return (
		<div
			className="flex flex-col items-center text-center"
			style={{ letterSpacing: "0.5em" }}
		>
			<h2>404 Not Found</h2>
			<Image
				src="/image/notFound.jpg"
				width={500}
				height={500}
				alt="Not Found"
				className="rounded-2xl my-2 opacity-90"
			/>

			<a
				href="/"
				className="border backdrop-blur-sm rounded-2xl p-2 hover:cursor-pointer hover:bg-yellow-400 hover:text-black hover:border-black text-yellow-400"
			>
				Return Home
			</a>
		</div>
	);
}
