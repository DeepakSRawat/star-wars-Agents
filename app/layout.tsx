import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const orbitron = Orbitron({
	subsets: ["latin"],
	display: "swap", // Helps with font loading
	weight: ["400", "500", "600", "700", "800", "900"], // Orbitron has many weights
	variable: "--font-orbitron", // The CSS variable name for Tailwind
});

export const metadata: Metadata = {
	title: "Star wars Directory",
	description: "star wars all characters details",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${orbitron.variable} font-orbitron`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
