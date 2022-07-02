# Cryptocurrency

Esta aplicación se desarrolló con el proposito de gestionar usuarios (agregar y autenticar) para que sean capacer de ver los precios actuales de las criptomonedas **BitCoin** y **Ethereum** en dolares. Esta aplicacion cuenta con 3 pantallas que son las siguientes:

## Tecnología utilizadas

### Frontend

- React
- Axios
- Material UI
- Apex Charts
- Docker

### Backend

- Node JS
- JWT
- BCRYPT
- Docker

### Base de datos

- FireStore Database

---

### Sign-Up

Utilizada para el registro de usuarios. Los usuarios están compuestos por:

- Nombre
- Correo
- Contraseña

![alt](./images/sign-up.png)

### Sign-In

Utilizada para la autenticación de usuarios. Es importante que se identifiquen ya que al intentar entrar entrar al dashboard no les será posible si no se identifican, esto por el uso de Tokens.

![alt](./images/sign-in.png)

### Home

Este Dashboard muestra los precios en dolares del BitCoin y Ethereum en la parte derecha. En la parte izquierda se muestra una grafica que va comparando los precios altos y bajos de cada criptomoneda. El Dahsboard tiene una taza de actualizacion de aproximadamente 3 segundos.

![alt](./images/home.png)


---

# Rutas

### /registerUser

    POST http://HOST:4000/registerUser
    Content-Type: application/json

    {
        "email":"helmut.na@gmail.com",
        "password":"contraseña123",
        "name":"Helmut Najarro"
    }

### /login

    POST  http://HOST:4000/login
    Content-Type: application/json

    {
        "email":"helmut.na@gmail.com",
        "password":"contraseña123"
    }

### /bitcoin

    GET  http://HOST:4000/bitcoin
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbG11dC5uYUBnbWFpbC5jb20iLCJuYW1lIjoiSGVsbXV0IE5hamFycm8iLCJpYXQiOjE2NTY3NDIzMjIsImV4cCI6MTY1Njc0NTkyMn0.q_mTz7ByGuesN0k5KizdtxewyePIWKVYZe5BRP-7KAw


### /ethereum

    GET  http://HOST:4000/ethereum
    Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbG11dC5uYUBnbWFpbC5jb20iLCJuYW1lIjoiSGVsbXV0IE5hamFycm8iLCJpYXQiOjE2NTY3NDIzMjIsImV4cCI6MTY1Njc0NTkyMn0.q_mTz7ByGuesN0k5KizdtxewyePIWKVYZe5BRP-7KAw