const rakeArticlesTogether = (
  articles,
  articlesFeatured,
) => {
  if (articlesFeatured.length < 2) {
    return articlesFeatured.concat(
      articles.slice(0, 2 - articlesFeatured.length),
    );
  }
  return articlesFeatured;
};

export const createArticlesList = (
  type,
  articles,
  categories,
  strategyArticles,
  operationsArticles,
  complianceArticles,
  technologyArticles,
  strategyArticlesFeatured,
  operationsArticlesFeatured,
  complianceArticlesFeatured,
  technologyArticlesFeatured,
  areTwoCards,
  isOneCard,
) => {
  if (type !== 'blog') return articles;
  const list = [categories[0]];
  let allArticles;
  const strategy = rakeArticlesTogether(strategyArticles, strategyArticlesFeatured);
  const operations = rakeArticlesTogether(operationsArticles, operationsArticlesFeatured);
  const compliance = rakeArticlesTogether(complianceArticles, complianceArticlesFeatured);
  const technology = rakeArticlesTogether(technologyArticles, technologyArticlesFeatured);
  if (areTwoCards) {
    allArticles = list.concat(strategy[0],
      operations[0], categories[1],
      categories[2], compliance[0],
      technology[0], categories[3]);
  } else if (isOneCard) {
    allArticles = list.concat(strategy,
      categories[1], operations,
      categories[2], compliance,
      categories[3], technology);
  } else {
    allArticles = list.concat(strategy,
      operations, categories[1],
      categories[2], compliance,
      technology, categories[3]);
  }
  return allArticles;
};
