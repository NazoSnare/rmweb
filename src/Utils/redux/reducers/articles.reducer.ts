import {
  ArticleActionTypes,
  articleActionTypes,
} from '../actions/articles.action';

interface ArticleStateI {
  articles: [];
  loading: boolean;
  error: string;
}

const initialState: ArticleStateI = {
  articles: [],
  loading: false,
  error: '',
};

export const articlesReducer = (
  state: ArticleStateI = initialState,
  action: ArticleActionTypes,
): ArticleStateI => {
  switch (action.type) {
    case articleActionTypes.ARTICLE_ERROR: {
      return {
        ...state,
        loading: false,
      };
    }
    case articleActionTypes.ARTICLE_LOADING: {
      return {
        ...state,
      };
    }
    case articleActionTypes.ARTICLE_SUCCESS: {
      return {
        ...state,
        loading: false,
      };
    }

    default: {
      return state;
    }
  }
};
