import React from 'react';

import { SubHeading, Menuitem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
    <div className="app__specialMenu flex__center section__padding" id="menu">
        <div className="app__specialMenu-title">
            <SubHeading title="¿Cómo lo hacemos?" />
            <h1 className="headtext__cormorant">Ingredientes</h1>
        </div>

        <div className="app__specialMenu-menu">
            <div className="app__specialMenu-menu_wine  flex__center">
                <p className="app__specialMenu-menu_heading">Análisis tipo</p>
                <div className="app__specialMenu_menu_items">
                    {data.wines.map((wine, index) => (
                        <Menuitem key={wine.title + index} title={wine.title} price={wine.price} />
                    ))}
                </div>
            </div>

            <div className="app__specialMenu-menu_img">
                <img src={images.milkpreparativo} alt="menu__img" />
            </div>

            <div className="app__specialMenu-menu_cocktails  flex__center">
                <p className="app__specialMenu-menu_heading">Modo de Preparación</p>
                <div className="app__specialMenu_menu_items">
                    <p className="p__opensas app__specialMenu_menu_items-p">
                        Para preparar un litro de leche, agregar 130. G de polvo en medio litro de agua hasta completar un litro, para un vaso de 200ml agregar 4 cucharadas colmadas de leche entera en polvo NUTRIARG.
                    </p>
                </div>
            </div>
        </div>

        {/* <div style={{ marginTop: 15 }}>
            <button type="button" className="custom__button">View More</button>
        </div> */}
    </div>
);

export default SpecialMenu;