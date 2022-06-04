
import React from "react";
import { CatalogDishes, Catalog, Svyaz, Products } from './App';
import {root} from './index'

//функции передачи ссылок в рендеры каталога с чаями и посудой
function catalogChaiUrlGenerator(){ return("http://95.31.254.175:83/v1/categories/tea")};
function catalogDishesUrlGenerator(){ return("http://95.31.254.175:83/v1/categories/dishes" )};
function productUrlGenerator(categoryId, catalogType){return ("http://95.31.254.175:83/v1/products/"+catalogType+"?category="+categoryId)};
//функция рендера страницы связь

function renderSvyaz() {
    root.render(

        <Svyaz />

    );
}
//функция рендера каталога с посудой
function renderCatalogPosuda() {

    root.render(

        <CatalogDishes catalogType="dishes" urlGenerator={catalogDishesUrlGenerator}/>
        
    );
}
//функция рендера каталога с чаями
function renderCatalogChai() {
    root.render(
        
        <Catalog catalogType="tea" urlGenerator={catalogChaiUrlGenerator} />

    );
}
function renderProductsCatalog(categoryId, catalogType) {
    console.log("rendering prod")
    root.render(
        
        <Products urlGenerator={()=>productUrlGenerator(categoryId, catalogType)} />

    );
}
export { renderCatalogPosuda, renderCatalogChai, renderSvyaz, renderProductsCatalog, catalogChaiUrlGenerator, catalogDishesUrlGenerator,productUrlGenerator}