import { SET_SIDO, SET_SIGUGUN, SET_DONG } from '../constants/mapActionType';

export interface AddressProps {
  sido: string;
  sigugun: string;
  dong: string;
}
export const setSido = (sido:AddressProps) => ({
  type: SET_SIDO,
  payload: sido,
});

export const setSigugun = (sigugun:AddressProps) => ({
  type: SET_SIGUGUN,
  payload: sigugun,
});

export const setDong = (dong:AddressProps) => ({
  type: SET_DONG,
  payload: dong,
});

export const setMapValues = (sido: AddressProps, sigugun: AddressProps, dong: AddressProps) => {
  return {
    type : 'SET_MAP_VALUES',
    payload : {sido, sigugun, dong},
  };
};