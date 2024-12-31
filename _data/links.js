module.exports = async function () {
    const fetch = (await import('node-fetch')).default;  // Menggunakan dynamic import untuk ES module

    let url = "https://raw.githubusercontent.com/LIGMATV/links/refs/heads/main/src/links.json";

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Error fetching data:", error);
        return {}; // Return empty object if fetch fails
    }
};
