export const SET_SHELTERS = "SET_SHELTERS";
export const SET_SHELTER = "SET_SHELTER";

export interface Shelter {
  region: string;
  name: string;
  phone: string;
  address: string;
}

export interface ShelterState {
  shelters: Shelter[];
  selectedShelter: string | null;
}

// 액션 타입 정의
interface SetSheltersAction {
  type: typeof SET_SHELTERS;
  payload: Shelter[];
}

interface SetShelterAction {
  type: typeof SET_SHELTER;
  payload: Shelter;
}

export type ShelterActionTypes = SetSheltersAction | SetShelterAction;
