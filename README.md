# Card Picker Extension for [owlbear.rodeo](https://www.owlbear.rodeo/)

![Demo](preview.gif)

## Installation in [owlbear.rodeo](https://www.owlbear.rodeo/)

1. Go to your [owlbear.rodeo profile](https://www.owlbear.rodeo/profile).
2. Navigate to the `Extensions` tab.
3. Click `Add`.
4. Select `Add a custom extension`.
5. Enter the following URL for the manifest: `https://card-picker-extention.onrender.com/manifest.json`.
6. Click `Add`.

## Hosting

To host this extension yourself, follow these steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) (v6 or later)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/card-picker-extension.git
    cd card-picker-extension
    ```

2. Install the dependencies:

    ```bash
    npm install
    ```

3. To start a development server with hot reloading:

    ```bash
    npm run dev
    ```

4. To create an optimized production build:

    ```bash
    npm run build
    ```

5. Deployment

    To deploy your extension, you can use any static hosting service, otherwise you would have issue, that extension would not be available on other clients.