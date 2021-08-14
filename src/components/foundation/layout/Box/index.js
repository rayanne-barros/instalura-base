import { get } from 'lodash';
import styled from 'styled-components';
import { propToStyle } from '../../../../theme/utils/propToStyle';

// eslint-disable-next-line import/prefer-default-export
export const Box = styled.div`
    ${propToStyle('display')}
    ${propToStyle('flexDirection')}
    ${propToStyle('justifyContent')}    
    ${propToStyle('flex')}
    ${propToStyle('flexWrap')}
    ${propToStyle('backgroundColor')}
    ${propToStyle('backgroundImage')}
    ${propToStyle('backgroundRepeat')}
    ${propToStyle('backgroundPosition')}
    ${propToStyle('boxShadow')}
    ${propToStyle('padding')}

    background-color: ${({ theme, variant }) => get(theme, `colorTheme.${variant}.color`)};
`;
