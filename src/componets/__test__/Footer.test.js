import { render } from '@testing-library/react';
import Footer from '../../componets/Footer';


test("Footer should be present",()=>{
        const footer = render(<Footer />);

        const footerChild = footer.getByTestId('footer-child');
        expect(footerChild.children.length).toBe(4);
        // console.log(footerChild.children);
    }
);