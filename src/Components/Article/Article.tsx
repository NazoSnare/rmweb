import React from 'react';
import {StyledArticle} from './Article.style';

export interface ArticleProps {
  heading: string;
  content: string;
  category: string;
  id?: string;
}

const Article: React.FC<ArticleProps> = (props) => {
  return (
    <StyledArticle>
      <span id="category">{props.category}</span>
      <h3 id="heading">{props.heading}</h3>
      <p id="content">{props.content}</p>
    </StyledArticle>
  );
};

export default Article;
