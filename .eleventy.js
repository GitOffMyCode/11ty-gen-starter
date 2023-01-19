const Card = require("./src/_includes/components/Card");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/assets/");
  eleventyConfig.addPassthroughCopy("src/css/");

  eleventyConfig.addWatchTarget("src/css/");

  eleventyConfig.addShortcode("Card", Card);

  eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/blog/posts/**/*.md");
  });

  return {
    markdownTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    htmlTemplateEngine: "njk",

    dir: {
      input: "src",
      output: "public",
    },
  };
};
