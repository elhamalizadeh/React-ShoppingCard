import { SET_PRODUCTS } from "./actionType"

const products = [
    {
        id:1001,
        name:"Samsung Mobile" ,
        description: "this is a mobile1",
        brand:"Samsung",
        image: "https://dkstatics-public.digikala.com/digikala-products/5346844e761e3ef012174ac20d74fe0cd0250d0e_1655549374.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 500000,
        qty: 1,
        date: "2022-09-14",
        color: 'blue',
        quantity: 9
    },
    {
        id:1002,
        name:"Xiaomi Mobile" ,
        description: "this is a mobile2",
        brand:"Xiaomi",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700000,
        qty: 1,
        date: "2021-06-11",
        color: 'red',
        quantity: 3
    },
    {
        id:1003,
        name:"Nokia mobile" ,
        description: "this is a mobile3",
        brand:"Nokia",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700000,
        qty: 1,
        date: "2020-12-05",
        color: 'blue',
        quantity: 0
    },
    {
        id:1004,
        name:"Apple Mobile" ,
        description: "this is a mobile4",
        brand:"Apple",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700000,
        qty: 1,
        date: "2023-08-14",
        color: 'green',
        quantity: 5
    },
    {
        id:1005,
        name:"Motorola Mmobile" ,
        description: "this is a mobile5",
        brand:"Motorola",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700000,
        qty: 1,
        date: "2021-02-01",
        color: 'pink',
        quantity: 1
    },
    {
        id:1006,
        name:"Hoawi Mobile" ,
        description: "this is a mobile6",
        brand:"Hoawi",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700000,
        qty: 1,
        date: "2023-04-02",
        color: 'white',
        quantity: 0
    },
    {
        id:1007,
        name:"Hoawi22 Mobile" ,
        description: "this is a mobile7",
        brand:"Hoawi",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 9000000,
        qty: 8,
        date: "2019-01-25",
        color: 'pink',
        quantity: 4

    }

]
export const getProducts = () =>{
    return {
        type: SET_PRODUCTS ,
        payload: products
    }

}