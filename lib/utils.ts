export function stringToColor(str: string) {
	let hash = 0;

	for (let i = 0; i < str.length; i++) {
		hash = str.charCodeAt(i) + ((hash << 5) - hash);
	}

	const color = ((hash >> 24) ^ (hash >> 16) ^ (hash >> 8) ^ hash) & 0xffffff;

	return "#" + color.toString(16).padStart(6, "0");
}

export function hexToRgb(hex: string) {
	const sanitized = hex.replace("#", "");
	const bigint = parseInt(sanitized, 16);

	return {
		r: (bigint >> 16) & 255,
		g: (bigint >> 8) & 255,
		b: bigint & 255,
	};
}

export function rgbToHex(r: number, g: number, b: number) {
	return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}

export function lighten(hex: string, amount: number) {
	const { r, g, b } = hexToRgb(hex);

	return rgbToHex(
		Math.min(255, r + amount),
		Math.min(255, g + amount),
		Math.min(255, b + amount)
	);
}

export function darken(hex: string, amount: number) {
	const { r, g, b } = hexToRgb(hex);

	return rgbToHex(
		Math.max(0, r - amount),
		Math.max(0, g - amount),
		Math.max(0, b - amount)
	);
}

export function saturate(hex: string, amount: number) {
	let { r, g, b } = hexToRgb(hex);

	const avg = (r + g + b) / 3;

	return rgbToHex(
		Math.min(255, r + (r - avg) * amount),
		Math.min(255, g + (g - avg) * amount),
		Math.min(255, b + (b - avg) * amount)
	);
}
