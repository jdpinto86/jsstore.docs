---
Title: "Operator"
Created Date: "09/05/2018"
Last Updated : "09/05/2018"
---

```
select({
    from: "Products",
    where: {
        price:{
         ">":20
        }
    }
});

```