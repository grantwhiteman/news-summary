import { render, screen } from '@testing-library/react';
import App from './App';
import News from './components/news';

describe('news', () => {
	it('shows header', () => {
		render(<App />);
		const title = screen.getByText(/News Summary/i);
		expect(title).toBeInTheDocument();
	});
	it('shows an image', () => {
		render(<News />);
		setTimeout(() => {
			const image = screen.getByAltText('1');
			expect(image.src).toContain(
				'https://media.guim.co.uk/a4daf8d59aa783defa3c4c67916a8865474e88de/53_210_3346_2007/500.jpg'
			);
			expect(image).toHaveAttribute(
				'src',
				'https://media.guim.co.uk/a4daf8d59aa783defa3c4c67916a8865474e88de/53_210_3346_2007/500.jpg'
			);
		}, 2000);
	});
});
