import Block from './Elements/Block';
import ReactDOM from 'react-dom/client';
import React from "react";
import { Catalog, Svyaz, Products } from './App';
import { useState } from 'react';
import { useEffect } from 'react';

function CatalogPosuda() {
    const [categoryData, setCategoryData] = useState([]);
    const something = async () => {
        fetch("http://95.31.254.175:83/v1/categories/dishes")
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
function catalogChaiUrlGenerator(){ return("http://95.31.254.175:83/v1/categories/tea")};
function catalogDishesUrlGenerator(){ return("http://95.31.254.175:83/v1/categories/dishes" )};
function productUrlGenerator(categoryId, catalogType){return ("http://95.31.254.175:83/v1/products/"+catalogType+"?category="+categoryId)};
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

        <Catalog catalogType="dishes" urlGenerator={catalogDishesUrlGenerator} />
        
    );
}
//функция рендера каталога с чаями
function renderCatalogChai() {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        
        <Catalog catalogType="tea" urlGenerator={catalogChaiUrlGenerator} />

    );
}
function renderProductsCatalog(categoryId, catalogType) {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    console.log("rendering prod")
    root.render(
        
        <Products urlGenerator={()=>productUrlGenerator(categoryId, catalogType)} />

    );
}
export { renderCatalogPosuda, renderCatalogChai, renderSvyaz, renderProductsCatalog}