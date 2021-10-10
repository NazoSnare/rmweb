import {Dispatch} from 'redux';

import axios from 'axios';

export interface CmsLoading {
  type: typeof cmsActionTypes.CMS_LOADING;
  payload?: Payload;
}
export interface CmsSuccess {
  type: typeof cmsActionTypes.CMS_SUCCESS;
  payload: Payload;
}
export interface CmsError {
  type: typeof cmsActionTypes.CMS_ERROR;
  payload: Payload;
}

type Payload = {
  message?: string;
  data?: any;
};

export const cmsActionTypes = {
  CMS_LOADING: 'CMS_LOADING',
  CMS_ERROR: 'CMS_ERROR',
  CMS_SUCCESS: 'CMS_SUCCESS',
};

export const GetCMS = () => async (dispatch: Dispatch<CMSActionTypes>) => {
  try {
    dispatch({
      type: cmsActionTypes.CMS_LOADING,
    });

    const response = await axios.get(
      `http://localhost:3001/api/v1/cms?order=dbfae`,
    );

    dispatch({
      type: cmsActionTypes.CMS_SUCCESS,
      payload: {
        data: response.data,
      },
    });
  } catch (error: any) {
    dispatch({
      type: cmsActionTypes.CMS_ERROR,
      payload: {
        message: error.message || 'error fetching articles',
      },
    });
  }
};

export type CMSActionTypes = CmsError | CmsSuccess | CmsLoading;
