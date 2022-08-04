import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { answerValidation } from '@utils/answer-validation.util';

type StateProps = {
  word: string;
  answer: string[][];
  currentRow: number;
  validation: Record<string, string>[];
  isDarkMode: boolean;
};

const rootSlice = createSlice({
  name: 'root',
  initialState: {
    word: 'hello',
    answer: [[], [], [], [], []],
    currentRow: 0,
    validation: [{}, {}, {}, {}, {}],
    isDarkMode: true
  } as StateProps,
  reducers: {
    toggleDarkMode: (state: StateProps) => {
      state.isDarkMode = !state.isDarkMode;

      return state;
    },
    setWord: (state: StateProps, action: PayloadAction<string>) => {
      state.word = action.payload;

      return state;
    },
    addKeyOnAnswer: (state: StateProps, { payload }: PayloadAction<string>) => {
      state.answer[state.currentRow].push(payload);

      return state;
    },
    removeKeyOnAnswer: (state: StateProps) => {
      state.answer[state.currentRow].pop();

      return state;
    },
    submitWord: (state: StateProps) => {
      // TODO: validate if is row end
      // TODO: check if the word is in the dictionary
      // TODO: validate duplicate keys
      // TODO: handle if the user wins
      // TODO: handle if the user loses

      let validation: Record<string, string> = {};
      state.answer.forEach(row => {
        if (row.length !== 0) {
          validation = answerValidation(state.word, row);
        }
      });

      state.validation[state.currentRow] = validation;

      if (state.currentRow === 4) {
        console.log('THIS IS THE END');
        return state;
      }

      state.currentRow += 1;
      return state;
    }
  }
});

export const {
  toggleDarkMode,
  setWord,
  addKeyOnAnswer,
  removeKeyOnAnswer,
  submitWord
} = rootSlice.actions;

export default rootSlice.reducer;
