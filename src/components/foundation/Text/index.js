import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';

export const TextStyleVariantsMap = {
  smallestException: css`
    font-size: ${({ theme }) => theme.theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.theme.typographyVariants.smallestException.lineHeight};
  `,
  paragraph1: css`
   font-size: ${({ theme }) => theme.theme.typographyVariants.paragraph1.fontSize};
   font-weight: ${({ theme }) => theme.theme.typographyVariants.paragraph1.fontWeight};
   line-height: ${({ theme }) => theme.theme.typographyVariants.paragraph1.fontHeight};
  `,
};

const TextBase = styled.span`
  ${({ variant }) => TextStyleVariantsMap[variant]}
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`;

export default function Text({
  tag, variant, children, ...props
}) {
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {children}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Text.defaultProps = { tag: 'span', variant: 'paragraph1' };
