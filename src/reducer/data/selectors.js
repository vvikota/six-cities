import NameSpace from "../name-spaces";

const NAME_SPACE = NameSpace.DATA;

export const getData = (state) => {
  return state[NAME_SPACE].data;
}