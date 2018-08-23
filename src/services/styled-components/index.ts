import * as styledComponents from 'styled-components';
import {ThemedStyledComponentsModule} from "styled-components";

interface ITheme {
    primaryColor: string;
}

const {
    default: styled,
    css,
    injectGlobal,
    keyframes,
    ThemeProvider,
} = styledComponents as ThemedStyledComponentsModule<ITheme>

export {css, injectGlobal, keyframes, ThemeProvider};
export default styled;