import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.MAIN;

export const getCity = (state) => {
  return state[NAME_SPACE].city;
};
