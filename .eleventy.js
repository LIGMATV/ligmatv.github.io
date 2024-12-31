module.exports = async function (eleventyConfig) {

    eleventyConfig.addPassthroughCopy({ "src/public": "/" });
    
    module.exports.config = {
        dir: {
            input: "src",
            output: "_site"
        }
    };

};