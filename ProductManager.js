class ProductManager {
  //recordar hacer el constructor la proxima ves también
  constructor() {
    this.idcounter = 0;
    this.productList = [];
  }

  addProduct(title, description, price, thumbnail, code, stock) {
    if (
      title != null ||
      description != null ||
      price != null ||
      thumbnail != null ||
      code != null ||
      stock != null
    ) {
      console.log("Producto cargado correctamente["+title+"]");
      if (this.productList.find((productList) => productList.code == code)) {
        console.log("El Producto ["+title+"] ya ha sido ingresado\n intente nuevamente con otro código! \n cancelando carga...");
      } else {
        const product = {
          id: this.idcounter++,
          title,
          description,
          price,
          thumbnail,
          code,
          stock,
        };
        this.productList.push(product);
      }
    } else {
      console.log("Error uno de los campos está vacio");
    }
  }

  getProducts() {
    return this.productList;
  }

  getProductByID(id){
    const Busqueda=this.productList.find((productList) => productList.id == id)
    if (Busqueda){
        return (Busqueda)
    }
  }
}
const helloCotto = new ProductManager();

helloCotto.addProduct(
  "Taza",
  "Es una taza, los usuarios de blender la aman",
  500,
  "https://i.ytimg.com/vi/ucQ1aeSlI0s/maxresdefault.jpg",
  "1000",
  5
);
helloCotto.addProduct(
    "Taza2",
    "La famosa Secuela",
    500,
    "https://i.ytimg.com/vi/ucQ1aeSlI0s/maxresdefault.jpg",
    "1001",
    5
  );
helloCotto.addProduct(
  "Taza2.2",
  "La famosa Secuela, pero está ves repetida",
  500,
  "https://i.ytimg.com/vi/ucQ1aeSlI0s/maxresdefault.jpg",
  "1000",
  5
);

//Usar \t más, es bonito
console.log("Listado de productos: \t");
console.log(helloCotto.getProducts());

//*Metodo busqueda por ID
const Busqueda=helloCotto.getProductByID(0)/*<=cambie la Id aquí*/
if(Busqueda){
    console.log("Producto encontrado, Mostrando Producto: \t")
    console.log(Busqueda);
}else{
    console.log("Error, Intentelo Nuevamente");
}