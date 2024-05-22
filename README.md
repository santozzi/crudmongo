# Proyecto Final: Aplicación Web con Node.js, MongoDB y TypeScript

Este es el repositorio del proyecto final para la creación de una aplicación web utilizando Node.js, MongoDB, Mongoose, JWT, bcrypt, y con pruebas implementadas mediante Jest y Supertest. La aplicación está desarrollada en TypeScript. Este proyecto forma parte de la Diplomatura Fullstack de la UTN.BA.

## Tabla de Contenidos
- [Descripción](#descripción)
- [Características](#características)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)
- [Instalación](#instalación)
- [Uso](#uso)
- [Contribuciones](#contribuciones)
- [Licencia](#licencia)

## Descripción

Esta aplicación es una API RESTful que permite la gestión de usuarios y la autenticación mediante JSON Web Tokens (JWT). Implementa operaciones CRUD básicas y asegura las contraseñas con bcrypt. Además, todas las funcionalidades están probadas con Jest y Supertest para garantizar la calidad del código.

## Características

- Registro de usuarios
- Autenticación de usuarios con JWT
- Operaciones CRUD para los usuarios
- Encriptación de contraseñas con bcrypt
- Pruebas unitarias y de integración con Jest y Supertest

## Tecnologías Utilizadas

- Node.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- bcrypt
- TypeScript
- Express

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto en tu máquina local.

1. Clona este repositorio:

    ```bash
    git clone https://github.com/santozzi/crudmongo
    cd crudmongo
    ```

2. Instala las dependencias del proyecto:

    ```bash
    npm install
    ```

3. Configura las variables de entorno:

    Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables:

    ```env
    MONGOURI="mongodb://localhost:27017/utn"
    PORT_EXPRESS=3000
    JWT_EXPIRED=24h
    JWT_SECRET=secreto
    URL="http://localhost:3000"
    ```

4. Compila el proyecto TypeScript a JavaScript:

    ```bash
    npm run build
    ```

5. Inicia el servidor:

    ```bash
    npm start
    ```

## Uso

Con el servidor en funcionamiento, puedes utilizar herramientas como Postman o cURL para interactuar con la API. A continuación se describen algunos de los endpoints disponibles:

### Usuarios
- `POST /api/users/create`: Registrar un nuevo usuario.
- `POST /api/users/login`: Autenticar un usuario y obtener un token JWT.
- `GET /api/users`: Obtener la lista de usuarios (requiere autenticación).
- `GET /api/users/:id`: Obtener los detalles de un usuario por ID (requiere autenticación).
- `PUT /api/users/update/:id`: Actualizar los detalles de un usuario por ID (requiere autenticación).
- `DELETE /api/users/delete/:id`: Eliminar un usuario por ID (requiere autenticación).

### Productos
- `POST /api/products`: Crear un nuevo producto(requiere autenticación).
- `GET /api/products`: Obtener la lista de productos.
- `GET /api/products/:id`: Obtener los detalles de un producto por ID.
- `PUT /api/products/update/:id`: Actualizar los detalles de un producto por ID (requiere autenticación).
- `DELETE /api/products/delete/:id`: Eliminar un producto por ID (requiere autenticación).

### Categorías
- `POST /api/categories`: Crear una nueva categoría de productos (requiere autenticación)..
- `GET /api/categories`: Obtener la lista de categorías de productos.
- `GET /api/categories/:id`: Obtener los detalles de una categoría por ID.
- `PUT /api/categories/update/:id`: Actualizar los detalles de una categoría por ID (requiere autenticación).
- `DELETE /api/categories/delete/:id`: Eliminar una categoría por ID.

## Contribuciones

Las contribuciones son bienvenidas. Por favor, sigue los pasos a continuación para contribuir:

1. Haz un fork del proyecto.
2. Crea una nueva rama (`git checkout -b feature/nueva-caracteristica`).
3. Realiza tus cambios y haz commit (`git commit -am 'Añadir nueva característica'`).
4. Haz push a la rama (`git push origin feature/nueva-caracteristica`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. 

---

¡Gracias por tu interés en este proyecto! Si tienes alguna pregunta o sugerencia, no dudes en abrir un issue.




