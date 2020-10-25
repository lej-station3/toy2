import { createAction, handleActions } from "redux-actions";

//리스트 액션 타입 설정
// const LISTS = "app/LISTS";
const ADDCARD = "app/ADDCARD";

//액션 생성해주고
// export const lists = createAction(LISTS);
export const addcard = createAction(ADDCARD);

//초기값만들고
const initialState = [
  {
    title: "할 일",
    id: 0,
    cards: [
      {
        id: 0,
        text: "리덕스어려워",
      },
      {
        id: 1,
        text: "너무어렵다",
      },
    ],
  },
  {
    title: "하는 중",
    id: 1,
    cards: [
      {
        id: 0,
        text: "흑흑",
      },
      {
        id: 1,
        text: "허어어엉",
      },
    ],
  },
  {
    title: "다해땅",
    id: 2,
    cards: [
      {
        id: 0,
        text: "저녁먹음",
      },
      {
        id: 1,
        text: "카톡보냄",
      },
    ],
  },
];

//리듀서만들기
export default handleActions(
  {
    [ADDCARD]: (state, action) => ({
      ...state,
      [action.payload.key]: [action.payload.value],
    }),
  },
  initialState
);
