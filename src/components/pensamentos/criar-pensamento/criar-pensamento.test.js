import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import PensamentosCriarPensamento from './PensamentosCriarPensamento';

describe('<PensamentosCriarPensamento />', () => {
  test('it should mount', () => {
    render(<PensamentosCriarPensamento />);
    
    const pensamentosCriarPensamento = screen.getByTestId('PensamentosCriarPensamento');

    expect(pensamentosCriarPensamento).toBeInTheDocument();
  });
});