import { render, screen } from '@testing-library/react';
import React from 'react';

import TextField from './index';
import WebsiteGlobalProvider from '../../wrappers/WebsitePage/provider';

describe('<TextField />', () => {
  test('renders component', () => {
    render(
      <WebsiteGlobalProvider>
        <TextField placeholder="Nome" value="ju" onChange={() => {}} name="nome" />
      </WebsiteGlobalProvider>,
    );

    const textField = screen.getByPlaceholderText(/nome/i);
    console.log(textField);
    expect(textField).toMatchSnapshot();
  });
});
