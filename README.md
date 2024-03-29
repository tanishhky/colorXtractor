## Purpose
The purpose of this repository/package is to provide a mechanism to extract colors from an Image() object in JavaScript based on their frequency percentile.

## Installation and Usage
To install your npm package and use it in your website to analyze an image, follow these steps:

### Using Vanilla JS
1. **Install Node.js and npm:** If you haven't already, download and install Node.js from the official website (https://nodejs.org/). This will also install npm, the Node.js package manager.
   
2. **Install npm package:** Open a terminal or command prompt, navigate to your project directory, and run the following command to install your npm package, open Terminal/Command Prompt and run
  ```npm install colorxtractor```
3. **Create a webpage:** Create an HTML file (e.g., index.html) in your project directory to host your website.

4. **Set up the webpage:** Inside your HTML file, set up the necessary structure for your webpage. You can include an input field for uploading images and a <canvas> element to display the image and the analyzed colors.

5. **Include the package:** In your HTML file, include a <script> tag to import your npm package:
   ```<script src="node_modules/colorxtrator/index.js"></script>```

6. **Handle image upload:** Implement JavaScript code to handle image upload from the user. You can use the <input type="file"> element for this purpose.

7. **Call the analyzeColors function:** When the user selects an image, use the analyzeColors function from your npm package to analyze the colors in the image. You'll need to pass the image data to this function.

Here's a simplified example of how you might do this:
```<input type="file" id="imageInput" accept="image/*">

<canvas id="imageCanvas"></canvas>

<script>
document.getElementById('imageInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        const imageData = e.target.result;
        const percentiles = [1, 0.9, 0.8, 0.3, 0.4]; //1 is the most frequent color and 0.3 being at 30%

        // Call the analyzeColors function
        const extractedColors = analyzeColors(imageData, percentiles);
        console.log(extractedColors);
    };

    reader.readAsDataURL(file);
});
</script>
```
8. **Display the results:** After analyzing the image, you can display the extracted colors on the webpage. You might use HTML elements or the <canvas> element to visualize the colors.

9. **Test your website:** Open your HTML file in a web browser and test the functionality by uploading an image. Verify that the colors are correctly extracted and displayed.

10. **Deploy your website:** Once you're satisfied with your website, you can deploy it to a web server so that others can access it online. You can use platforms like GitHub Pages, Netlify, or Vercel for hosting your static website.

### Using ReactJS

1. **Set up a React app:** If you haven't already, create a new React app using Create React App. Run the following command in your terminal:
```npx create-react-app color-extractor-demo```

2. **Install your npm package:** Navigate to your project directory (color-extractor-demo) and install your npm package:
```npm install colorxtrator```

3. **Create a component for image upload:** Inside the src directory, create a new file called ImageUpload.js:
```import React from 'react';
import analyzeColors from 'colorxtrator';

const ImageUpload = () => {
    const handleImageUpload = async (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
            const imageData = e.target.result;
            const percentiles = [0, 0.1, 0.2, 0.3, 0.4];

            // Call the analyzeColors function
            const extractedColors = await analyzeColors(imageData, percentiles);
            console.log(extractedColors);
        };

        reader.readAsDataURL(file);
    };

    return (
        <div>
            <input type="file" onChange={handleImageUpload} accept="image/*" />
        </div>
    );
};

export default ImageUpload;
```

4. Use the component in App.js: Open src/App.js and replace its contents with the following code:
```import React from 'react';
import ImageUpload from './ImageUpload';

function App() {
    return (
        <div className="App">
            <h1>Color Extractor Demo</h1>
            <ImageUpload />
        </div>
    );
}

export default App;
```

5. **Run your React app:** Start your React development server by running the following command in your terminal:
```npm start```
This will start your React app and open it in your default web browser.

6. **Test your app:** Upload an image using the file input field, and check the browser console to see the extracted colors logged.


That's it! You've now installed your npm package and integrated it into your website to analyze images for color extraction.
