import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Beer List heading', () => {
	render(<App />);
	const linkElement = screen.getByText(/Beer List/i);
	expect(linkElement).toBeInTheDocument();
});
