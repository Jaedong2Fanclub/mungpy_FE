import { SET_SHELTERS, SET_SHELTER, Shelter, ShelterActionTypes } from "./shelterActionType";

// 보호소 리스트 설정 액션
export const setShelters = (shelters: Shelter[]): ShelterActionTypes => ({
  type: SET_SHELTERS,
  payload: shelters,
});

// 단일 보호소 설정 액션
export const setShelter = (shelter: Shelter): ShelterActionTypes => ({
  type: SET_SHELTER,
  payload: shelter,
});
