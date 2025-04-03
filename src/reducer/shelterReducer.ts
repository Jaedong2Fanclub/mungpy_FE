import {
  ShelterState,
  ShelterActionTypes,
  SET_SHELTERS,
  SET_SHELTER,
} from "../action/shelterActionType";
import { animalShelters } from "../constants/animalShelter";

const initialState: ShelterState = {
  shelters: animalShelters,
  selectedShelter: null,
};

export const shelterReducer = (
  state = initialState,
  action: ShelterActionTypes
): ShelterState => {
  switch (action.type) {
    case SET_SHELTERS:
      return {
        ...state,
        shelters: action.payload,
      };
    case SET_SHELTER:
      return {
        ...state,
        selectedShelter: action.payload.name,
      };
    default:
      return state;
  }
};
