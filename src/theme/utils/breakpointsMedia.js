import { breakpoints } from "../breakpoints" 
import { css } from "styled-components"

export function breakpointsMedia(cssByBreakpoints){
    const breakpointNames = Object.keys(cssByBreakpoints)
    console.log(breakpointNames)
    return breakpointNames.map((breakpointName)=> {
        return css`
            @media screen and (min-width: ${breakpoints[breakpointName]}px) {
            ${cssByBreakpoints[breakpointName]}
            }    
        `
    })
}