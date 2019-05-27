---
Title: "Migrating from v1 to v2"
Keywords: "migrate, v1, v2, indexeddb, jsstore"
Created Date: "13/05/2018"
Last Updated : "13/05/2018"
---

Migrating from V2 to V3 is very easy - You just need to change the db schema as per v3.

e.g - schema of v2 looks like this

```
function getDbSchema() {
  var tblProduct = {
    name: 'Product',
    columns: [
        {
            name: 'Id',
            primaryKey: true,
            autoIncrement: true
        }, 
        {
            name: 'ItemName',
            notNull: true,
            dataType: JsStore.DATA_TYPE.String
        }, 
        {
            name: 'Price',
            notNull: true,
            dataType: JsStore.DATA_TYPE.Number
        }, 
        {
            name: 'Quantity',
            notNull: true,
            dataType: JsStore.DATA_TYPE.Number
        }]   
    };
    var db = {
      name: dbName,
      tables:[tblProduct]
    };
    return db;
}
```

now we need to convert the schema as per v3

```
function getDbSchema() {
  var tblProduct = {
    name: 'Product',
    columns:  {
        Id:{ primaryKey: true, autoIncrement: true },
        ItemName:  { notNull: true, dataType: "string" },
        Price:  { notNull: true, dataType: "number" },
        Quantity : { notNull: true, dataType: "number" }
    }
    var db = {
      name: dbName,
      tables:[tblProduct]
    };
    return db;
}
```

That's all you need to do & everything should work as normal.