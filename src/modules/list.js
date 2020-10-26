import { createAction, handleActions } from 'redux-actions';

//리스트 액션 타입 설정

const INSERTLIST = 'app/INSERTLIST';
const INSERTCARD = 'app/INSERTCARD';

//액션 생성해주고

export const insertList = createAction (INSERTLIST);
export const insertCard = createAction (INSERTCARD);


let listID = 2;
let cardID = 4;

//초기값만들고
const initialState = [
  {
    title: '할 일',
    id: 0,
    cards: [
      {
        id: 0,
        text: '리덕스어려워',
      },
      {
        id: 1,
        text: '너무어렵다',
      },
    ],
  },
  {
    title: '하는 중',
    id: 1,
    cards: [
      {
        id: 0,
        text: '흑흑',
      },
      {
        id: 1,
        text: '허어어엉',
      },
    ],
  },
  {
    title: '다해땅',
    id: 2,
    cards: [
      {
        id: 0,
        text: '저녁먹음',
      },
      {
        id: 1,
        text: '카톡보냄',
      },
    ],
  },
];

//리듀서만들기

export default handleActions(
  {
    [INSERTLIST]: (state, action) => {
      const newList = {
        title:action.payload,
        card:[],
        id:listID
      };
      listID += 1;
      return [...state,newList];
    },

    [INSERTCARD]:(state,action) => {
      const newCard = {
        id:cardID,
        text:action.payload.text
      };
      cardID +=1;
      const newState = state.map(list => {
        if(list.id === action.payload.listID){
          return{
            ...list,
            cards:[...list.cards,newCard]
          };
        }else{
          return list;
        } 
      });
      return newState;
    }
  },
  initialState
);

