import { handleActions } from 'redux-actions';
import STORE from './store';
import content from '@/content/fields.json';

import {
  changeProjectName,
  changeWhitepaper,
  deleteWhitepaper,
  changePitchDeck,
  deletePitchDeck,
  changeImages,
  deleteImage,
  changeIndustries,
  changeDescription,
  changeWebsite,
  changeFullDescription,
  changeVideoFirst,
  changeVideoSecond,
  doSetError,
  doSetLimitError,
} from './actions';

const initialState = {
  name: '',
  description: '',
  website: '',
  fullDescription: '',
  industries: [],
  whitepaper: null,
  pitchDeck: null,
  images: [],
  videoFirst: '',
  videoSecond: '',
  error: {
    name: '',
    description: '',
    website: '',
    fullDescription: '',
    industries: '',
    images: '',
    videoFirst: '',
    videoSecond: '',
    pitchDeck: '',
  },
};

/**
 * Creates a store for infoPage entity.
 * @return Object to assigning into store's reducers.
 */
const infoPage = () => {
  return {
    [STORE]: handleActions(
      {
        [changeProjectName as any]: (state: any, { payload }) => ({
          ...state,
          name: payload,
          error: { ...state.error, name: '' },
        }),
        [changeDescription as any]: (state: any, { payload }) => ({
          ...state,
          description: payload,
          error: { ...state.error, description: '' },
        }),
        [changeWebsite as any]: (state: any, { payload }) => ({
          ...state,
          website: payload,
          error: { ...state.error, website: '' },
        }),
        [changeFullDescription as any]: (state: any, { payload }) => ({
          ...state,
          fullDescription: payload,
          error: { ...state.error, fullDescription: '' },
        }),
        [changeWhitepaper as any]: (state: any, { payload }) => ({
          ...state,
          whitepaper: [...payload],
          error: { ...state.error, whitepaper: '' },
        }),
        [changeVideoFirst as any]: (state: any, { payload }) => ({
          ...state,
          videoFirst: payload,
          error: { ...state.error, videoFirst: '' },
        }),
        [changeVideoSecond as any]: (state: any, { payload }) => ({
          ...state,
          videoSecond: payload,
          error: { ...state.error, videoSecond: '' },
        }),
        [changePitchDeck as any]: (state: any, { payload }) => ({
          ...state,
          pitchDeck: [...payload],
          error: { ...state.error, pitchDeck: '' },
        }),
        [changeImages as any]: (state: any, { payload }) => ({
          ...state,
          images: [...payload],
          error: { ...state.error, images: '' },
        }),
        [changeIndustries as any]: (state: any, { payload }) => ({
          ...state,
          industries: [...payload],
          error: { ...state.error, industries: '' },
        }),
        [deletePitchDeck as any]: (state: any) => ({ ...state, pitchDeck: null }),
        [deleteWhitepaper as any]: (state: any) => ({ ...state, whitepaper: null }),
        [deleteImage as any]: (state: any, { payload }) => ({
          ...state,
          images: [...state.images.filter((image: File) => image.name !== payload)],
        }),
        [doSetError as any]: (state: any, { payload }) => {
          return {
            ...state,
            error: {
              ...state.error,
              [payload]: content[payload].error,
            },
          };
        },
        [doSetLimitError as any]: (state: any, { payload }) => {
          return {
            ...state,
            error: {
              ...state.error,
              [payload]: content[payload].limitError,
            },
          };
        },
      },
      initialState,
    ),
  };
};

// Export.
export default infoPage;
