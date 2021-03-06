import {data} from '../../mock';
import {CMSActionTypes, cmsActionTypes} from '../actions/cms.actions';

interface CMSStateI {
  cms: any[];
  loading: boolean;
  error?: string;
}

const initialState: CMSStateI = {
  cms: data,
  loading: false,
  error: undefined,
};

export const cmsReducer = (
  state: CMSStateI = initialState,
  action: CMSActionTypes,
): CMSStateI => {
  switch (action.type) {
    case cmsActionTypes.CMS_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload?.message,
      };
    }
    case cmsActionTypes.CMS_LOADING: {
      return {
        ...state,
        loading: true,
        error: undefined,
      };
    }
    case cmsActionTypes.CMS_SUCCESS: {
      return {
        ...state,
        loading: false,
        error: undefined,
        cms: action.payload?.data?.data,
      };
    }

    default: {
      return state;
    }
  }
};
