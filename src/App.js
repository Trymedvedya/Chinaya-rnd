import              React, { useEffect, useState } from 'react';
import              Block from './Elements/Block';
import              './App.css';
import              './css/global-style.css';
import              './css/sv-style.css'
import              { renderProductsCatalog, catalogChaiUrlGenerator,catalogDishesUrlGenerator, productUrlGenerator } from './catalog';
import              { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";


//Функция, собирающая страницу связи
function Svyaz() {
    return (
        <main>
            <div className="sv">
                <h1>связь</h1>
                <h1> <span> telegram: <a href="https://t.me/chinayarnd" className="inst">chinaya_rnd</a></span></h1>
                <h1> <span> адрес: Московская 12/16 Ростов-на-Дону </span></h1>
                <h1><span>телефон: 88005553535</span></h1>
                <div className="map">
                </div>
            </div>
        </main>
    );
}
//Функция, собирающая логотип в хэдере

//Функция, которая собирает навигацию в хэдере
function Navigation() {
    return (
        <Router>
    <header>
    <Link to="/">
          <div  className="logo">
          <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357"><defs></defs><rect class="cls-1" x="52.63" y="52.63" width="251.73" height="251.73" transform="translate(-73.94 178.5) rotate(-45)"/></svg>
            <h3 >Чайная</h3>
        </div>
        </Link>
        <nav className='top-nav'>
        <ul>
            <li>
                <h1 className="reda" href="catalog1.html"><Link to="/">чаи</Link></h1>
            </li>
            <li>
               <h1 className="reda"> <Link to="/dishes">посуда</Link></h1>
            </li>

            <li>
                <h1 className="reda"><Link to="link">связь</Link></h1>
            </li>
        </ul>
        </nav>
        </header>
      
            <Routes>
                
           <Route exact path="/" element={<Catalog catalogType="tea" urlGenerator={catalogChaiUrlGenerator}/>} ></Route>
           <Route path="/dishes" element={<CatalogDishes catalogType="dishes" urlGenerator={catalogDishesUrlGenerator}/>} ></Route>
           <Route path="/link"      element={<Svyaz/>} ></Route>
           <Route path="/products/dishes"      element={<Products productType="dishes"/>} ></Route>
           <Route path="/products/tea"      element={<Products productType="tea"/>} ></Route>
           </Routes>
           </Router>
    );
}
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }
//Основная функция для сбора страниц с категориями и чаями отдельных категорий
function Products(props){
    const [productData, setProductData] = useState([]);
    let query = useQuery();
    const notsomething = async () => {
        console.log("china-ya.ru/v1/products/"+props.productType+"?category="+query.get('category'));
        fetch("http://china-ya.ru/v1/products/"+props.productType+"?category="+query.get('category'))
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
            <div className="block-one">
                {productData.map((data) =>
                <Block name={data.name} surs={`data:image/png;base64, ${data.image}`} key={data.productId} />
                ) }
            
            </div>
        </main>
    );
};



function  Catalog(props)   {
    

    const [categoryData, setCategoryData] = useState([]);
    const something =  async () => {
        
  
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
        something();
    }, []);
    
     return (
        <main>
            <div className="block-one">

                { categoryData.map((data) =>
                
                <Link to={`/products/tea?category=${data.categoryId}`}><Block   name={data.categoryName} surs={`data:image/png;base64, ${data.categoryImage}`} key={data.categoryId} /></Link>
                ) }

            </div>
        </main>
    );
}
function  CatalogDishes(props)   {

    const [categoryData, setCategoryData] = useState([]);
    const something =  async () => {
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
        something();
    }, []);
    
     return (
        <main>
            <div className="block-one">
                { categoryData.map((data) =>
                <Block   name={data.categoryName} surs={`data:image/png;base64, ${data.categoryImage}`} key={data.categoryId} />
                ) }
            </div>
        </main>
    );
}


export { CatalogDishes,Catalog, Navigation, Svyaz, Products }
