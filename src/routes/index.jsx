import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main';
import Home from '../pages/Home';
import LandingDatas from '../components/LandingDatas'
import BestOfBest from '../components/BestOfBest'

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
                        <LandingDatas/>
                        <BestOfBest/>
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
