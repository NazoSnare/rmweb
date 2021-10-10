import {combineReducers} from 'redux';
import {articlesReducer} from './articles.reducer';
import {cmsReducer} from './cms.reducer';

const rootReducer = combineReducers({
  articles: articlesReducer,
  cms: cmsReducer,
});

export default rootReducer;
