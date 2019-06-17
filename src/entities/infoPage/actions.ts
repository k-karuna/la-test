import { createAction } from 'redux-actions';
import STORE from './store';
import content from '@/content/fields.json';
import { serverUrl } from '@/content/config.json';
import { validateUrl } from '@/helpers/validators/';

/**
 * Change value of Project name.
 */
export const changeProjectName = createAction<string>(`${STORE}_CHANGE_PROJECT_NAME`);
export const changeWhitepaper = createAction<File[]>(`${STORE}_CHANGE_WHITEPAPER`);
export const deleteWhitepaper = createAction(`${STORE}_DELETE_WHITEPAPER`);
export const changePitchDeck = createAction<File[]>(`${STORE}_CHANGE_PITCH_DECK`);
export const deletePitchDeck = createAction(`${STORE}_DELETE_PITCH_DECK`);
export const changeImages = createAction<File[]>(`${STORE}_CHANGE_IMAGES`);
export const deleteImage = createAction<string>(`${STORE}_DELETE_IMAGE`);
export const changeIndustries = createAction<string[]>(`${STORE}_CHANGE_INDUSTRIES`);
export const changeDescription = createAction<string>(`${STORE}_CHANGE_DESCRIPTION`);
export const changeWebsite = createAction<string>(`${STORE}_CHANGE_WEBSITE`);
export const changeFullDescription = createAction<string>(`${STORE}_CHANGE_FULL_DESCRIPTION`);
export const changeVideoFirst = createAction<string>(`${STORE}_CHANGE_VIDEO_FIRST`);
export const changeVideoSecond = createAction<string>(`${STORE}_CHANGE_VIDEO_SECOND`);
export const doSetError = createAction<string>(`${STORE}_SET_ERROR`);
export const doSetLimitError = createAction<string>(`${STORE}_SET_LIMIT_ERROR`);

export const submitForm = () => (dispatch: any, getState: any) => {
  let noErrors = true;
  const formData = new FormData();

  Object.keys(getState()[STORE]).forEach(key => {
    const storeValue = getState()[STORE][key];
    if ((key === 'whitepaper' || key === 'pitchDeck') && storeValue && storeValue[0]) {
      formData.append(key, storeValue[0]);
    } else if (key === 'images') {
      storeValue.forEach((image: File, index: number) => formData.append(`image${index}`, image));
    } else if (key !== 'error') {
      formData.append(key, storeValue);
    }
    if (content[key] && content[key].required) {
      if (!storeValue || storeValue.length === 0) {
        dispatch(doSetError(key));
        noErrors = false;
      }
    }
    if (content[key] && content[key].maxLength && storeValue.length > content[key].maxLength) {
      dispatch(doSetLimitError(key));
    }

    if (content[key] && content[key].isUrl && !validateUrl(storeValue) && storeValue) {
      dispatch(doSetError(key));
    }
  });

  if (!noErrors) return;

  return fetch(serverUrl, { method: 'POST', body: formData });
};
