# coding-challange-StoryDots

Hello World! o/

Este es un challange hecho para la empresa StoryDots pensado para ser la base de un eCommerce. a continuación voy a ir explicando paso a paso el proceso que fui haciendo para desarrollar la app.

Primero cree las tablas que iba a utilizar (Product y User) y una tabla relacionada a Product (Brand), Luego de eso conecte el back a una base de datos previamente creada en mongoose y comence a hacer las rutas para verificar que todo estaba bien hecho hasta aca. cree los primeros productos y usuarios usando Postman y cuando todo el back funcionaba como debia, Comence con el Front:
Lo primero que hice fue crear los componentes (Home, ProductDetails, ProductCard, etc). Para este proyecto utilice Zustand para hacer la logica de los estados, es un alternativo a Redux mucho mas simplificado y menos exigente en cuanto a recursos, utilice Fetch para hacer los request al back y React como herramienta principal del Front, La aplicacion cuenta con: Listado de productos, Barra de busqueda, Detalles dedicados de cada producto, Paginado de productos, Funcionalidades para poder Registrarse e Iniciar sesion como usuario o adminstrador, poder realizar las 4 operacion CRUD desde el front (Llamar productos, agregar products, editar productos y eliminar productos) solo para cuentas de adminstrador(tambien estan privatizadas las rutas en el front y autenticadas en el back utilizando el tokenSession) y poco mas! ya que es un challange y solo posee lo pedido que era una base que luego pueda evolucionar a un eCommerce.

Tecnologias utilizadas en el Back: cors, dotenv, express, jsonwebtoken, mongoose, nodemon.

Tecnologias utilizadas en el Front: React, jsonwebtoken, sweetalet, zustand, html, css.

Endpoints disponibles back: 

Products: {
   get("/products");
   get("/product/:id");
   post("/products/add");
   delete("/products/:id");
   put("/products/:id");
}

Users: {
    get("/users");
    post("/register");
    put("/user/:id");
    delete("/user/delete/:id");
    post("/login");
}

Brands: {
    get("/brands"),;
    post("/brands/add"),;
    put("/brands/:id"),;
    delete("/brand/:id"),;
}

GUIA: Para iniciar el projecto desde nuestra PC, vamos a seguir estos pasos:

-Abrir el repositorio desde un editor de texto;
-Abrir una Terminal desde la carpeta Client (Front) y ejecutar el comando "npm run dev";
-Abrir el navegador y acceder a la pagina usando la url "http://127.0.0.1:5173/"

Cuenta de usuario ya creada: {
    email: cuentadeusuario@hotmail.com,
    password: Usuario12345
}

Cuenta de admistrador ya creada: {
    email: cuentadeadmin@hotmail.com,
    password: Admin12345
}

Enjoy! c=
