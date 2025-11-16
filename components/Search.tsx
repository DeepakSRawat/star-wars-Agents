"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const Search = () => {
	const router = useRouter();
	const [value, setValue] = useState("");

	const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === "Enter" && value.trim().length > 0) {
			e.preventDefault();
			router.push(`/?search=${value}`);
		}
	};

	return (
		<div className="flex justify-center items-center my-4 border rounded-2xl border-yellow-400 py-1 gap-2 w-full max-w-md">
			<Link href={`/?search=${value}`}>
				<Image
					src={"/icons/search.svg"}
					width={24}
					height={24}
					alt="search"
					className=" w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"
				/>
			</Link>
			<input
				placeholder="Search Agent"
				className="px-4 py-2 focus:outline-none transition"
				style={{ letterSpacing: "0.2rem" }}
				type="search"
				value={value}
				onChange={(e) => setValue(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
		</div>
	);
};

export default Search;
