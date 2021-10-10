import {Dispatch} from 'redux';

import axios from 'axios';

export interface ArticleLoading {
  type: typeof articleActionTypes.ARTICLE_LOADING;
}
export interface ArticleSuccess {
  type: typeof articleActionTypes.ARTICLE_SUCCESS;
}
export interface ArticleError {
  type: typeof articleActionTypes.ARTICLE_ERROR;
  payload: Payload;
}

type Payload = {
  message?: string;
  data: any;
};

export const articleActionTypes = {
  ARTICLE_LOADING: 'ARTICLE_LOADING',
  ARTICLE_ERROR: 'ARTICLE_ERROR',
  ARTICLE_SUCCESS: 'ARTICLE_SUCCESS',
};

export const GetArticles =
  () => async (dispatch: Dispatch<ArticleActionTypes>) => {
    try {
      dispatch({
        type: articleActionTypes.ARTICLE_LOADING,
      });

      const response = await axios.get(`http://localhost:3001/api/v1/articles`);

      dispatch({
        type: articleActionTypes.ARTICLE_SUCCESS,
        payload: {
          data: response.data,
        },
      });
    } catch (error: any) {
      dispatch({
        type: articleActionTypes.ARTICLE_ERROR,
        payload: {
          message: error.message || 'error fetching articles',
        },
      });
    }
  };

export type ArticleActionTypes = ArticleError | ArticleSuccess | ArticleLoading;
