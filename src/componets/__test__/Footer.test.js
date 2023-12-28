import { render } from '@testing-library/react';
import Footer from '../../componets/Footer';


test("Footer should be present",()=>{
        const footer = render(<Footer />);
        // expect(footer).toBe()
        console.log(footer);
    }
);