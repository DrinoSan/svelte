export const fetchMarkdownPosts = async () => {
  const allPostFiles = import.meta.glob("/src/routes/blog/*.md");
  const iterablePostFiles = Object.entries(allPostFiles);

  const allPosts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
    // we know for sure every post’s file path will begin with /src/routes
    // and end with .md, we can safely use .slice(11, -3) to remove those characters
      const postPath = path.slice(11, -3);

      return {
        meta: metadata,
        path: postPath,
      };
    })
  );

  return allPosts;
};
