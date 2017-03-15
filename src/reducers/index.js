import tick from './tick';
import kling from './kling'
import { combineReducers } from 'redux'
import { createReducer } from 'redux-orm';
import {orm} from "../orm/models";


const KlangApp= combineReducers({
  tick,
  kling,
  orm: createReducer(orm)
});
export default KlangApp
