import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main';
import Home from '../pages/Home';

import BestOfBest from '../components/BestOfBest'
import WhyJoinUs from '../components/WhyJoinUs'

const routes = createBrowserRouter([
    {
        path: '/', 
        element: <MainLayout/>,
        children: [
            {
                index: true,
                element: 
                    <>
                        <Home/>
                        <BestOfBest/>
                        <WhyJoinUs/>
                    </>,
            },  
        ] 
    },
    {
        path: '*',
        element: "404 - Aradığınız Sayfa Bulunamadı!"
    }    
]);

export default routes;
