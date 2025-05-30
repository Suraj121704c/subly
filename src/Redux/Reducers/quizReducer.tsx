import {createSlice} from '@reduxjs/toolkit';
import {fetchQuizzes} from '../Actions/quizActions';

interface Quiz {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
}

interface QuizState {
  quizzes: Quiz[];
  loading: boolean;
  isError: boolean;
  error: any;
  currentQuestionIndex: number;
  userAnswers: Record<number, string>;
  score: number;
  isCompleted: boolean;
}

const initialState: QuizState = {
  quizzes: [],
  loading: false,
  isError: false,
  error: null,
  currentQuestionIndex: 0,
  userAnswers: {},
  score: 0,
  isCompleted: false,
};

const quizSlice = createSlice({
  name: 'quizzes',
  initialState,
  reducers: {
    setUserAnswer: (state, action) => {
      const {questionId, answer} = action.payload;
      state.userAnswers[questionId] = answer;

      // Move to next question if available
      if (state.currentQuestionIndex < state.quizzes.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isCompleted = true;
      }
    },
    calculateScore: state => {
      let correctAnswers = 0;
      state.quizzes.forEach(quiz => {
        if (state.userAnswers[quiz.id] === quiz.correctAnswer) {
          correctAnswers++;
        }
      });

      state.score = (correctAnswers / state.quizzes.length) * 100;
    },
    resetQuiz: state => {
      state.currentQuestionIndex = 0;
      state.userAnswers = {};
      state.score = 0;
      state.isCompleted = false;
    },
    goToNextQuestion: state => {
      if (state.currentQuestionIndex < state.quizzes.length - 1) {
        state.currentQuestionIndex += 1;
      } else {
        state.isCompleted = true;
      }
    },
    goToPreviousQuestion: state => {
      if (state.currentQuestionIndex > 0) {
        state.currentQuestionIndex -= 1;
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchQuizzes.pending, state => {
        state.loading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchQuizzes.fulfilled, (state, action) => {
        state.loading = false;
        state.quizzes = action.payload;
        state.isError = false;
        state.error = null;
        state.currentQuestionIndex = 0;
        state.userAnswers = {};
        state.score = 0;
        state.isCompleted = false;
      })
      .addCase(fetchQuizzes.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.error = action.payload;
      });
  },
});

export const {
  setUserAnswer,
  calculateScore,
  resetQuiz,
  goToNextQuestion,
  goToPreviousQuestion,
} = quizSlice.actions;

export default quizSlice.reducer;
