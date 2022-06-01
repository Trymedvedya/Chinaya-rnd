import              React, { useEffect, useState } from 'react';
import              Block from './Elements/Block';
import              './App.css';
import              './css/global-style.css';
import              './css/sv-style.css'
import              { renderCatalogPosuda, renderCatalogChai, renderSvyaz, renderProductsCatalog } from './catalog';


//Функция, собирающая страницу связи
function Svyaz() {
    return (
        <main>
            <div class="sv">
                <h1>связь</h1>
                <h1> <span> telegram: <a href="https://t.me/chinayarnd" class="inst">chinaya_rnd</a></span></h1>
                <h1> <span> адрес: Московская 12/16 Ростов-на-Дону </span></h1>
                <h1><span>телефон: 88005553535</span></h1>
                <div class="map">
                </div>
            </div>
        </main>
    );
}
//Функция, собирающая логотип в хэдере
function Logo() {
    return (
        <div onClick={renderCatalogChai} class="logo">
            <img src="./logo-tea.svg" alt=""></img>
            <h3 >Чайная</h3>
        </div>
    );
}
//Функция, которая собирает навигацию в хэдере
function Navigation() {
    return (
        <ul>
            <li>
                <h1 onClick={renderCatalogChai} class="reda" href="catalog1.html">чаи</h1>
            </li>
            <li>
                <h1 onClick={renderCatalogPosuda} class="reda">посуда</h1>
            </li>

            <li>
                <h1 onClick={renderSvyaz} class="reda">связь</h1>
            </li>
        </ul>
    );
}


//Основная функция для сбора страниц с категориями и чаями отдельных категорий
function Products(props){
    const [productData, setProductData] = useState([]);
    const notsomething = async () => {
        console.log(props.urlGenerator);
        fetch(props.urlGenerator())
            .then(res => res.json())
            .then(
                (result) => {
                   let newResult = result;
                    console.log(newResult);
                    setProductData((newResult));
                })
    };
    useEffect(() => {
        notsomething();
    }, []);

     return (
        <main>
            <div class="block-one">
                {productData.map((data) =>
                <Block name={data.productName} surs={`data:image/png;base64, ${data.productImage}`} key={data.productId} />
                ) }
            
            </div>
        </main>
    );
};



function Catalog(props) {
    const [categoryData, setCategoryData] = useState([]);
    const something = async () => {
        console.log(props.urlGenerator);
        fetch(props.urlGenerator())
            .then(res => res.json())
            .then(
                (result) => {
                   let newResult = result;
                    console.log(newResult);
                    setCategoryData((newResult));
                })
    };

    useEffect(() => {
        console.log(props.catalogType)
        something();
    }, []);
    
     return (
        <main>
            <div class="block-one">
                { categoryData.map((data) =>
                <Block renderer={()=>renderProductsCatalog(data.categoryId, props.catalogType)}   name={data.categoryName} surs={`data:image/png;base64, ${data.categoryImage}`} key={data.categoryId} />
                ) }
            </div>
        </main>
    );
}

export { Catalog, Navigation, Logo, Svyaz, Products }