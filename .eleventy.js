module.exports = async function (eleventyConfig) {

    eleventyConfig.addLiquidShortcode('image', (filename, alt, size, loading) => {
        const [width, height] = size.split('x');
        return `<img src="${filename}" alt="${alt}" width="${width}" height="${height}" loading="${loading}" />`;
    });

    eleventyConfig.addPassthroughCopy({
        "src/public": "/"
    });

    eleventyConfig.addPassthroughCopy({
        "src/img": "/img/"
    });

    module.exports.config = {
        dir: {
            input: "src",
            output: "_site"
        }
    };

};