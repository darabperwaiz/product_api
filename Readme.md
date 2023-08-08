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

use name and quantity field

API to show all products
URL [GET] : http://localhost:8000/api/products


API to delete products
URL [DELETE] : http://localhost:8000/api/products/:id,


API to update quantity of a product (can be incremented or decremented)
URL [POST] : http://localhost:8000/api/products/:id/update_quantity/

use query params to update quantity like
number=15

it update quantity.

Done

