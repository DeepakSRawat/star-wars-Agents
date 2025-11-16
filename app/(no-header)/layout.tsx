import React from "react";

export default function NoHeaderLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className="h-full">{children}</body>
		</html>
	);
}
