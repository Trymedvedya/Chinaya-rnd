import              React, { useEffect, useState } from 'react';
import              Block from './Elements/Block';
import              './App.css';
import              './css/global-style.css';
import              './css/sv-style.css'
import              { BrowserRouter as Router, Route, Link, Routes, useLocation } from "react-router-dom";
import              InfAbTea from './Elements/InfAbTea';
import              InfAbDishes from './Elements/InfAbDishes';


function catalogChaiUrlGenerator(){ return("https://china-ya.ru/v1/categories/tea")};
function catalogDishesUrlGenerator(){ return("https://china-ya.ru/v1/categories/dishes" )};

function MainPage(){
    onsubmit = event =>{
        event.preventDefault()
        
    }
return(
  <main className='main-page'>


<div className="big-banner">
            <div>
            
        <svg className="svg_logo" id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357"><defs></defs><rect class="cls-1" x="52.63" y="52.63" width="251.73" height="251.73" transform="translate(-73.94 178.5) rotate(-45)"/></svg>
        </div>
        <div>
            <h1>Чайная</h1>
            </div>
        </div>



        <div className="banner-txt">
            <div className="zag1-main" >
            <h2 >О нас</h2>
            </div>
         <div>
            <p className="abUs">кууууууууууууууууууууууууурочкикууууууууууууууууууууууууурочкикууууууууууууууууууууууууурочкикууууууууууууууууууууууууурочкикууууууууууууууууууууууууурочки</p>
            </div>
        </div> 


        <div className="banner-images">
            <div className="zag2-main">
            <h2 >Воспоминания</h2>
            </div>
            <div className="blocks">
            <Block surs={require("./images-menu/slide1.jpg")}/>
            <Block surs={require("./images-menu/slide2.jpg")}/>
            <Block surs={require("./images-menu/slide3.jpg")}/>
            <Block surs={require("./images-menu/slide4.jpg")}/>
            
            </div>
            
        </div>
        

        <form >


            <h2>Напишите нам</h2>
            <div className="name-mail">
            <input placeholder='Как вас зовут?' className="name" type="text"></input>
            <input placeholder='Ваш email' className="email" type="email"></input>
            </div>
            <div className="yenput">
           <textarea placeholder='Ведите ваше сообщение' className="enput" rows="8"></textarea>
            </div>
            <button className="button-form" type='sumbit'>Отправить</button>
            


        </form>
        </main>
 
)

};

//Функция, собирающая страницу связи
function Svyaz() {

    return (
        <main>
            <div className="sv">
                <h1>контакты</h1>
                <h1> <span> telegram: <a href="https://t.me/chinayarnd" className="inst">chinaya_rnd</a></span></h1>
                <h1> <span> адрес: Московская 12/16 Ростов-на-Дону </span></h1>
                <h1><span>телефон: 89286178873</span></h1>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d201.42505839398223!2d39.701529590758966!3d47.215765333874955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x3b5f21074a08687c!2z0KfQsNC50L3QsNGP!5e0!3m2!1sru!2sru!4v1655127696577!5m2!1sru!2sru" 
                 allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
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
          <svg id="Слой_1" data-name="Слой 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357 357"><defs></defs><rect className="cls-1" x="52.63" y="52.63" width="251.73" height="251.73" transform="translate(-73.94 178.5) rotate(-45)"/></svg>
            <h3 >Чайная</h3>
        </div>
        </Link>
        <nav className='top-nav'>
        <ul>
            <li className="alter">
                <h1 className="reda" href="catalog1.html"><Link to="/tea">чаи</Link></h1>
            </li>
            <li className="alter">
               <h1 className="reda"> <Link to="/dishes">посуда</Link></h1>
            </li>

            <li className="alter">
                <h1 className="reda"><Link to="link">контакты</Link></h1>
            </li>
        </ul>
        </nav>
        </header>
      
            <Routes>
                
           <Route exact path="/tea" element={<Catalog catalogType="tea" urlGenerator={catalogChaiUrlGenerator}/>} ></Route>
           <Route path="/dishes" element={<CatalogDishes catalogType="dishes" urlGenerator={catalogDishesUrlGenerator}/>} ></Route>
           <Route path="/link"      element={<Svyaz/>} ></Route>
           <Route path="/products/dishes"      element={<Products productType="dishes"/>} ></Route>
           <Route path="/products/tea"      element={<Products productType="tea"/>} ></Route>
           <Route path="/product/dishes"      element={<InformationAbDishes productType="dishes"/>} ></Route>
           <Route path="/product/tea"      element={<InformationAbTea productType="tea"/>} ></Route>
           <Route path="/" element={<MainPage/>}></Route>
           </Routes>
           </Router>
    );
}
function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
  }


//основная функция для сбора страниц с информацией о посуде
function InformationAbDishes(props){
    const [data, setProductData] = useState({tasteTags:[],dishes:[]});
    const [image, setImage] = useState("");
    let query = useQuery();


    const downloadImage = async (productType, categoryId,productId)=>{
      
        fetch("https://china-ya.ru/v1/product/image/"+productType+"?category="+categoryId+"&product="+productId)
        .then(res => res.json())
        .then(result => 
            setImage(result))
    }
    const InfAbDishesSomething = async () => {
        
        fetch("https://china-ya.ru/v1/product/"+props.productType+"?category="+query.get('category')+"&product="+query.get('product'))
            .then(res => res.json())
            .then((result) => 
            {setProductData((result)); console.log(result)});
    };
    useEffect(() => {
        setImage(downloadImage(props.productType, query.get('category'),query.get('product')));
        InfAbDishesSomething();
        console.log(data);
        
    }, []);

     return (
                <InfAbDishes dishesMaterial={data.material} sourceInfImg={image} mainDishesName={data.name} categoryOfDishes={data.subCategoryName}  textAbDishes={data.description} key={data.productId}/>
    );
};
  //Основная функция для сбора страниц с информацией о чае
function InformationAbTea(props){
    const [data, setProductData] = useState({tasteTags:[],dishes:[]});
    const [image, setImage] = useState("");
    let query = useQuery();


    const downloadImage = async (productType, categoryId,productId)=>{
      
        fetch("https://china-ya.ru/v1/product/image/"+productType+"?category="+categoryId+"&product="+productId)
        .then(res => res.json())
        .then(result => 
            setImage(result))
    }
    const InfAbTeaSomething = async () => {
        fetch("https://china-ya.ru/v1/product/"+props.productType+"?category="+query.get('category')+"&product="+query.get('product'))
            .then(res => res.json())
            .then((result) => 
            {setProductData((result)); console.log(result)})
    };
    useEffect(() => {
        setImage(downloadImage(props.productType, query.get('category'),query.get('product')));
        console.log(data);
        InfAbTeaSomething();
    }, []);
     return (
                <InfAbTea sourceInfImg={image} mainTeaName={data.name} categoryOfTea={data.subCategoryName} textAbTea={data.description} teaRoast={data.roast} 
                tastes={data.tasteTags}  region={data.province} effect={data.effect} 
                temperatureTea={data.startTemperature} stepTemperatureTea={data.temperatureStep} dishes={data.dishes} key={data.productId}/>
    );
};
//Основная функция для сбора страниц с категориями и чаями отдельных категорий
function Products(props){
    const [productsData, setProductsData] = useState([]);
    let query = useQuery();
    const notsomething = async () => {
       
        fetch("https://china-ya.ru/v1/products/"+props.productType+"?category="+query.get('category'))
            .then(res => res.json())
            .then(
                (result) => {
                   let newResult = result;
                    console.log(newResult);
                    setProductsData((newResult));
                })
    };
    useEffect(() => {
        notsomething();
    }, []);

     return (
        <main>
            <div className="block-one">
                {productsData.map((data) =>
               <Link to={`/product/${props.productType}?category=${query.get('category')}&product=${data.productId}`}> <Block name={data.name} surs={`data:image/png;base64, ${data.image}`} key={data.productId} /></Link>
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
               <Link to={`/products/dishes?category=${data.categoryId}`}> <Block   name={data.categoryName} surs={`data:image/png;base64, ${data.categoryImage}`} key={data.categoryId} /></Link>
                ) }
            </div>
        </main>
    );
}


export { CatalogDishes,Catalog, Navigation, Svyaz, Products }
