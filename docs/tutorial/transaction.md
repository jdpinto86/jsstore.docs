---
Title: "Transaction"
Keywords: "transaction, api, query, indexeddb, jsstore"
Description: "learn how to use transaction in jsstore"
---

IndexedDB is a pure transactional database which means all the query is executed using the transaction.

JsStore provides - 'transaction' api for executing transaction. The apis which are available inside the transaction are - 

* select
* count
* update
* remove
* insert

<br>
There are some extra api available inside the transaction to make the transaction more useful. These are -

* start - start the transaction.
* setResult - setResult accepts key and value. setResult is used to save the value which will be returned when transaction completes. The transaction returns an object, the object is in form of key and value which is set using setResult.
* abort - abort is used to abort the transaction. 
* getResult - getResult is used to get the value setted by setResult.

<br>
Let's see a example - Consider a situation where a customer buy some products and customer is not into the db.

So the steps will be - 

1. Add new customer - so insert in the table - "Customer"
2. add new order - insert new order for the above customer
3. Insert OrderDetails 
4. Update products - reduce the quantity of product available. 
5. Calculate total price

```
var result = await connection.transaction({
    tables: ['customers', 'orders', 'products', 'orderDetails'], // list of tables which will be used in transaction
    logic: async function(ctx) {  // async is used to make code more clear
        start(); // start the transaction
        const insertedCustomers = await ctx.insert({
            into: 'customers',
            values: [ctx.data.customer],
            return: true
        });

        const newCustomer = insertedCustomers[0];

        // insert order

        const order = {
            customerId: newCustomer.id,
            orderDate: new Date(),
        };

        const insertedOrders = await ctx.insert({
            into: 'orders',
            values: [order],
            return: true
        })

        const newOrder = insertedOrders[0];

        // insert orderDetail

        const orderDetails = ctx.data.orderDetails.map((value) => {
            value.orderId = newOrder.orderId
            return value;
        });

        const insertedOrderDetails = await ctx.insert({
            into: 'orderDetails',
            values: orderDetails,
        })

        // update the product inventory and evaluate price

        setResult('totalPrice', 0); //initiating totalPrice

        ctx.data.orderDetails.forEach((orderDetail, index) => {
            const where = {
                productId: orderDetail.productId
            };

            const updateProduct = async () => {
                const productUpdated = await ctx.update({
                    in: 'products',
                    where: where,
                    set: {
                        unit: {
                            '-': orderDetail.quantity
                        }
                    }
                });
                if (productUpdated < 0) {
                    abort("No orderDetails inserted");
                }  
            };
            updateProduct();
 
            const products = await ctx.select({
                from: 'products',
                where: where
            })

            const product = results[0];
            const price = product.price * orderDetail.quantity
            setResult('totalPrice', getResult('totalPrice') + price);
        })
    },
    data: { // the transaction logic will be called with supplying data
        customer: {
            customerName: 'ujjwal gupta',
            address: 'bhubaneswar odisha',
            city: 'bhubaneswar',
            postalCode: 'asdf',
            country: 'india',
            email: 'sdfg@m.com'
        },
        orderDetails: [{
            productId: 1,
            quantity: 2
        }, {
            productId: 2,
            quantity: 4
        }]
    }
});
const totalPrice = result.totalPrice;
```

Few important things to make sure you are using transaction in right way - 

* Transaction should be light weight. Dont write too many or heavy logics inside it. The reason is  - the indexeddb transaction is asyc and automatically commited and so jsstore.

* There may be situation where you have a heavy logic, in that case - calculate the result and put it in data option.

<p class="margin-top-40px center-align">
    <button class="btn info btnNext">Next</button>
</p>
