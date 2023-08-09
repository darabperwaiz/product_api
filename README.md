# product_api

some screenshot attached

In the project directory, you can run:

For installing all dependencies which is used in this project
npm i

This command will run the server
npm start

Open [http://localhost:8000] to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

Linking Mongodb
Go to config directory .js replace This ('mongodb://127.0.0.1:27017/product_db') with your mongodb url.

<!-- How to use api -->

API to add products to the database
URL Method [POST]: http://localhost:8000/api/products/create
![Screenshot 2023-08-08 205123](https://github.com/darabperwaiz/product_api/assets/96805782/3d46e190-a91c-4178-9ce9-88b5ebd3b8f6)


use name and quantity field

API to show all products
URL [GET] : http://localhost:8000/api/products
![Screenshot 2023-08-08 205207](https://github.com/darabperwaiz/product_api/assets/96805782/6dbc4780-4513-408f-ac97-3af9c28836ba)



API to delete products
URL [DELETE] : http://localhost:8000/api/products/:id,
![Screenshot 2023-08-08 205250](https://github.com/darabperwaiz/product_api/assets/96805782/9c78ea3f-143e-4800-9a2f-a173680afecd)




API to update quantity of a product (can be incremented or decremented)
URL [POST] : http://localhost:8000/api/products/:id/update_quantity/
![Screenshot 2023-08-08 205416](https://github.com/darabperwaiz/product_api/assets/96805782/86d36be0-0c3e-4d70-a39d-20ab1d0a403a)



use query params to update quantity like
number=15

it update quantity.

Done

