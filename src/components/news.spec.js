const { render } = require("@testing-library/react")
import News from './news'

describe("news", () => {
    it("shows a news article", () => {
        render(<News />);
        const title = screen.getByText('News Summary')
        expect(title).toBeInTheDocument()
        const image = getByAltText('img1');
        expect(image.src).toContain('the_url');
        expect(image).toHaveAttribute('src', 'the_url')
    })
})