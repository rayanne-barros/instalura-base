import React from 'react';
import styled from 'styled-components';

const TextBase = styled.span`
   
`

export default function Text({ tag, variant, children }) {
    return (
        <TextBase
          as={tag}
          variant={variant} 
        >
            {children}
        </TextBase>
    );
}

Text.defaultProps = {
    tag:'span',
    variant: 'paragraph1',
}