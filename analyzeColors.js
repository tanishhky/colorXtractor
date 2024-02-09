function componentToHex(c) {
	var hex = c.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

// Test the function
var rgbString = "155,20,13";
var hexValue = rgbToHex(rgbString);
console.log("Hexadecimal value:", hexValue);

function analyzeColors(imageData, percentiles) {
	// Create a new image object to get the width and height of the image
	const img = new Image();
	img.src = imageData;
	img.onload = function () {
		const canvas = document.createElement("canvas");
		const ctx = canvas.getContext("2d");
		canvas.width = this.width;
		canvas.height = this.height;
		ctx.drawImage(this, 0, 0);

		// Get the pixel data from the canvas
		const pixelData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

		// Count occurrences of each color
		const colorMap = {};
		for (let i = 0; i < pixelData.length; i += 4) {
			const r = pixelData[i];
			const g = pixelData[i + 1];
			const b = pixelData[i + 2];
			const margin = 5; // Adjust margin of difference as needed
			const color = `${Math.floor(r / margin) * margin},${
				Math.floor(g / margin) * margin
			},${Math.floor(b / margin) * margin}`;
			colorMap[color] = (colorMap[color] || 0) + 1;
		}
		topN(colorMap, percentiles);
		// topN(colorMap, [0, 0.1, 0.2, 0.3, 0.4]);
	};
}

function topN(colorMap, percentiles) {
	// Sort colors by occurrence
	const sortedColors = Object.keys(colorMap).sort(
		(a, b) => colorMap[b] - colorMap[a]
	);

	// Extract 5 colors based on percentiles
	const extractedColors = percentiles.map((percentile) => {
		const index = Math.floor(sortedColors.length * (1-percentile));
		return rgbToHex(sortedColors[index]);
	});

	console.log(extractedColors);
	return extractedColors;
}
