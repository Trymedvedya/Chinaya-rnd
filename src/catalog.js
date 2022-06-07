

//функции передачи ссылок  каталога с чаями и посудой
function catalogChaiUrlGenerator(){ return("http://95.31.254.175:83/v1/categories/tea")};
function catalogDishesUrlGenerator(){ return("http://95.31.254.175:83/v1/categories/dishes" )};
function productUrlGenerator(categoryId, catalogType){return ("http://95.31.254.175:83/v1/products/"+catalogType+"?category="+categoryId)};


export { catalogChaiUrlGenerator, catalogDishesUrlGenerator,productUrlGenerator}