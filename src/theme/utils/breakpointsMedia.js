import { css } from 'styled-components';
import { breakpoints } from '../breakpoints';

// eslint-disable-next-line import/prefer-default-export
export function breakpointsMedia(cssByBreakpoints) {
  const breakpointNames = Object.keys(cssByBreakpoints);
  return breakpointNames.map(
    (breakpointName) => css`
            @media screen and (min-width: ${breakpoints[breakpointName]}px) {
            ${cssByBreakpoints[breakpointName]}
            }    
        `,
  );
}
