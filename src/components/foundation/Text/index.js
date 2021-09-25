import React from 'react';
import styled, { css } from 'styled-components';
import get from 'lodash/get';
import PropTypes from 'prop-types';
import { propToStyle } from '../../../theme/utils/propToStyle';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';
import Link from '../../commons/Link';
import { WebsitePageContext } from '../../wrappers/WebsitePage/context';

export const TextStyleVariantsMap = {
  smallestException: css`
    font-size: ${({ theme }) => theme.typographyVariants.smallestException.fontSize};
    font-weight: ${({ theme }) => theme.typographyVariants.smallestException.fontWeight};
    line-height: ${({ theme }) => theme.typographyVariants.smallestException.lineHeight};
  `,
  paragraph1: css`
   font-size: ${({ theme }) => theme.typographyVariants.paragraph1.fontSize};
   font-weight: ${({ theme }) => theme.typographyVariants.paragraph1.fontWeight};
   line-height: ${({ theme }) => theme.typographyVariants.paragraph1.fontHeight};
  `,
  subTitle: css`
   font-size: ${({ theme }) => theme.typographyVariants.subTitle.fontSize};
   font-weight: ${({ theme }) => theme.typographyVariants.subTitle.fontWeight};
   line-height: ${({ theme }) => theme.typographyVariants.subTitle.lineHeight};
`,
  paragraph2: css`
        font-size: ${({ theme }) => theme.typographyVariants.paragraph2.fontSize};
        font-weight: ${({ theme }) => theme.typographyVariants.paragraph2.fontWeight};
        line-height: ${({ theme }) => theme.typographyVariants.paragraph2.lineHeight};
  `,
  title: css`
   ${({ theme }) => css`
     font-size: ${theme.typographyVariants.titleXS.fontSize};
     font-weight: ${theme.typographyVariants.titleXS.fontWeight};
     line-height: ${theme.typographyVariants.titleXS.lineHeight};
   `}
   ${breakpointsMedia({
    md: css`
       ${({ theme }) => css`
         font-size: ${theme.typographyVariants.title.fontSize};
         font-weight: ${theme.typographyVariants.title.fontWeight};
         line-height: ${theme.typographyVariants.title.lineHeight};
       `}
     `,
  })}
 `,
};

const TextBase = styled.span`
   ${(props) => TextStyleVariantsMap[props.variant]};
  color: ${({ theme, color }) => get(theme, `colors.${color}.color`)};
  ${propToStyle('textAlign')}
  ${propToStyle('margin')}
`;

export default function Text({
  tag,
  variant,
  children,
  href,
  cmsKey,
  ...props
}) {
  const websitePageContext = React.useContext(WebsitePageContext);

  const componentContent = cmsKey
    ? websitePageContext.getCMSContent(cmsKey)
    : children;

  if (href) {
    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <TextBase as={Link} href={href} variant={variant} {...props}>
        {componentContent}
      </TextBase>
    );
  }
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <TextBase as={tag} variant={variant} {...props}>
      {componentContent}
    </TextBase>
  );
}

Text.propTypes = {
  tag: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.string,
  children: PropTypes.node,
  cmsKey: PropTypes.string,
};

Text.defaultProps = {
  tag: 'span',
  variant: 'paragraph1',
  children: null,
  href: '',
  cmsKey: undefined,
};
