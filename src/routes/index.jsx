import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/main';
import Home from '../pages/Home';
import BestOfBest from '../components/BestOfBest'
import WhyJoinUs from '../components/WhyJoinUs'
import TheyLoveUs from '../components/TheyLoveUs'
import GrowYourCollection from '../components/GrowYourCollection'
import WorldMap from '../components/WorldMap'
import Footer from '../components/Footer'

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
                        <TheyLoveUs/>
                        <GrowYourCollection/>
                        <WorldMap/>
                        <Footer/>
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
