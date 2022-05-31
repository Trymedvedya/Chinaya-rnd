import Block from './Elements/Block';
import ReactDOM from 'react-dom/client';
import React from "react";
import { Catalog, Svyaz } from './App';
import { useState } from 'react';
import { useEffect } from 'react';

function CatalogPosuda() {
    const [categoryData, setCategoryData] = useState([]);
    const something = async () => {
        fetch("http://localhost:6969/v1/categories/dishes")
            .then(res => res.json())
            .then(
                (result) => {
                   let newResult = result;
                    console.log(newResult);
                    setCategoryData((newResult));
                })
    };
    useEffect(() => {
        something();
    }, []);
    return (
        <main>
        <div class="block-one">
            { categoryData.map((data) =>
            <Block name={data.categoryName} surs={`data:image/png;base64, ${data.categoryImage}`} key={data.CategoryId} />
            ) }
        </div>
    </main>
    );
}

//функции передачи ссылок в рендеры каталога с чаями и посудой
function catalogChaiUrlGenerator(){ return("http://localhost:6969/v1/categories/tea")};
function catalogDishesUrlGenerator(){ return("http://localhost:6969/v1/categories/dishes" )};

//функция рендера страницы связь
function renderSvyaz() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <Svyaz />

    );
}
//функция рендера каталога с посудой
function renderCatalogPosuda() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(

        <Catalog urlGenerator={catalogDishesUrlGenerator} />
        
    );
}
//функция рендера каталога с чаями
function renderCatalogChai() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        
        <Catalog urlGenerator={catalogChaiUrlGenerator} />

    );
}
export { renderCatalogPosuda, renderCatalogChai, renderSvyaz }