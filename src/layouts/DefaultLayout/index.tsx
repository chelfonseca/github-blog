import { Outlet } from 'react-router-dom';
import { BackGround } from './BackGround';
import {LayoutContainer } from './styles';


export function DefaultLayout() {
    return (
        <div>
            <LayoutContainer>

                <BackGround/>
                <Outlet/>

            </LayoutContainer>
        </div>
        
    )
}