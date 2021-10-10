import React from 'react';
import {Article} from '..';
import {StyledArticlesSection} from './ArticlesSection.styles';
import {mockArticles} from '../../Utils/mock/index';

const ArticlesSection = () => {
  const articles = mockArticles;
  return (
    <StyledArticlesSection>
      <div className="articles-heading">
        <h1>more on africa</h1>
      </div>
      <div className="articles">
        {articles.map((art) => (
          <Article
            key={art.id}
            category={art.category}
            heading={art.heading}
            content={art.content}
          />
        ))}
      </div>
    </StyledArticlesSection>
  );
};

export default ArticlesSection;
