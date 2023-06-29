import { SET_PRODUCTS } from "./actionType"

const products = [
    {
        id:1001,
        name:"mobile1" ,
        description: "this is a mobile1",
        image: "https://dkstatics-public.digikala.com/digikala-products/5346844e761e3ef012174ac20d74fe0cd0250d0e_1655549374.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 500000,
        qty: 1
    },
    {
        id:1002,
        name:"mobile2" ,
        description: "this is a mobile2",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700000,
        qty: 1
    },
    {
        id:1003,
        name:"mobile3" ,
        description: "this is a mobile3",
        image: "https://dkstatics-public.digikala.com/digikala-products/0cd4f3da296237fea369a0a7d2ef7807ce47b3aa_1683382372.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/quality,q_90",
        price: 700000,
        qty: 1
    }

]
export const getProducts = () =>{
    return {
        type: SET_PRODUCTS ,
        payload: products
    }

}