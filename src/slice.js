import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  theme: 'light',
  isLightTheme: true,
  canvasRef: null,
  width: '500',
  height: '500',
  backgroundImage: '',
  backgroundColor: {
    r: 128,
    g: 128,
    b: 128,
    a: 1,
  },
  backgroundColorHex: '#808080',
  content: '',
  fontSize: '24',
  fontColor: {
    r: 255,
    g: 255,
    b: 255,
    a: 1,
  },
};

const { actions, reducer } = createSlice({
  name: 'app',
  initialState: {
    ...initialState,
  },
  reducers: {
    setTheme(state, { payload: theme }) {
      return {
        ...state,
        theme,
      };
    },
    setCanvasRef(state, { payload: canvasRef }) {
      return {
        ...state,
        canvasRef,
      };
    },
    setBannerSize(state, { payload: { name, value } }) {
      return {
        ...state,
        [name]: value,
      };
    },
    setWidth(state, { payload: width }) {
      return {
        ...state,
        width,
      };
    },
    setHeight(state, { payload: height }) {
      return {
        ...state,
        height,
      };
    },
    setBannerRatios(state, { payload: { width, height } }) {
      return {
        ...state,
        width,
        height,
      };
    },
    setBackgroundColor(state, { payload: { r, g, b } }) {
      return {
        ...state,
        backgroundColor: {
          ...state.backgroundColor,
          r,
          g,
          b,
        },
      };
    },
    setBackgroundColorHex(state, { payload: backgroundColorHex }) {
      return {
        ...state,
        backgroundColorHex,
      };
    },
    setAlpha(state, { payload: alpha }) {
      return {
        ...state,
        backgroundColor: {
          ...state.backgroundColor,
          a: alpha,
        },
      };
    },
    setBackgroundImage(state, { payload: backgroundImage }) {
      return {
        ...state,
        backgroundImage,
      };
    },
    setContent(state, { payload: content }) {
      return {
        ...state,
        content,
      };
    },
    setFontSize(state, { payload: fontSize }) {
      return {
        ...state,
        fontSize,
      };
    },
    setFontColor(state, { payload: fontColor }) {
      return {
        ...state,
        fontColor,
      };
    },
    setLightTheme(state, { payload: isLightTheme }) {
      return {
        ...state,
        isLightTheme,
      };
    },
  },
});

export const {
  setTheme,
  setCanvasRef,
  setBackgroundColor,
  setBackgroundColorHex,
  setAlpha,
  setBackgroundImage,
  setContent,
  setFontSize,
  setFontColor,
  setBannerSize,
  setWidth,
  setHeight,
  setBannerRatios,
  setMainBackgroundColor,
  setMainNavBackgroundColor,
  setLightTheme,
} = actions;

export default reducer;
