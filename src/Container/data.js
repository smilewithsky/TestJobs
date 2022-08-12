import { v4 as uuidv4 } from 'uuid';
// sản phẩm 1
import Product1_1 from './Images/Duvet Cover Set Pumpkin Bear/1.webp'
import Product1_2 from './Images/Duvet Cover Set Pumpkin Bear/2.webp'
import Product1_3 from './Images/Duvet Cover Set Pumpkin Bear/3.webp'

import Product2_1 from './Images/Baby Set Hello Cutie/1.webp'
import Product2_2 from './Images/Baby Set Hello Cutie/2.webp'
import Product2_3 from './Images/Baby Set Hello Cutie/3.webp'

import Product3_1 from './Images/Baby Robe Panda Space/1.webp'
import Product3_2 from './Images/Baby Robe Panda Space/2.webp'

import Product4_1 from './Images/Duvet Cover Set Cute Mummy/1.webp'
import Product4_2 from './Images/Duvet Cover Set Cute Mummy/2.webp'
import Product4_3 from './Images/Duvet Cover Set Cute Mummy/3.webp'

import Product5_1 from './Images/Baby Set Little Family/1.webp'
import Product5_2 from './Images/Baby Set Little Family/2.webp'
import Product5_3 from './Images/Baby Set Little Family/3.webp'

import Product6_1 from './Images/Duvet Cover Set Be Brave/1.webp'
import Product6_2 from './Images/Duvet Cover Set Be Brave/2.webp'
import Product6_3 from './Images/Duvet Cover Set Be Brave/3.webp'

import Product7_1 from './Images/Baby Robe A big dream/1.webp'
import Product7_2 from './Images/Baby Robe A big dream/2.webp'

const aquamarine = "#acdcdd"
const black = "#38230e"
const blue = "#3a6380"
const brown = "#773d49"
const pink = "#eedcd8"
const red = "#bc2a32"
const violet = "#5a3652"
const yellow = "#edc582"


const listProduct = [
    {
        idProduct: 1,
        nameProduct: "Duvet Cover Set Pumpkin Bear",
        imageProduct: [Product1_1 , Product1_2 , Product1_3],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [62 , 68 , 74 , 82],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "black",
                color: "#38230e",
            },
            {
                text: "brown",
                color: "#773d49",
            },
            {
                text: "pink",
                color: "#eedcd8",
            },
            {
                text: "yellow",
                color: "#edc582",
            },
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["Baby","Set"],
        SKU: "BE-8723U2-1-1-1-1-1-1",
        isSale: false
    },
    {
        idProduct: 2,
        nameProduct: "Baby Set Hello Cutie",
        imageProduct: [Product2_1 , Product2_2 , Product2_3],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [62 , 68 , 74 , 82],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "black",
                color: "#38230e",
            },
            {
                text: "brown",
                color: "#773d49",
            },
            {
                text: "pink",
                color: "#eedcd8",
            },
            {
                text: "yellow",
                color: "#edc582",
            },
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["Baby","Set"],
        SKU: "BE-8723U2-1-1-1-1-1-1",
        isSale: false
    },
    {
        idProduct: 3,
        nameProduct: "Baby Robe Panda Space",
        imageProduct: [Product3_1 , Product3_2],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [50,
            54,
            58,
            62,
            68,
            74,
            82],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "black",
                color: black,
            },
            {
                text: "brown",
                color: brown,
            },
            {
                text: "pink",
                color: pink,
            },
            {
                text: "yellow",
                color: yellow,
            },
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["Baby","Set"],
        SKU: "BE-8723U2-1-1-1-1-1-1",
        isSale: true
    },
    {
        idProduct: 4,
        nameProduct: "Duvet Cover Set Pumpkin Bear",
        imageProduct: [Product4_1 , Product4_2 , Product4_3],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [62 , 68 , 74 , 82],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "black",
                color: black,
            },
            {
                text: "pink",
                color: pink,
            },
            {
                text: "violet",
                color: violet   ,
            },
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["100% cotton","Duvet cover" , "SET"],
        SKU: "BE-8726U2",
        isSale: false
    },
    {
        idProduct: 5,
        nameProduct: "Baby Robe Let’s play",
        imageProduct: [Product5_1 , Product5_2],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [50,
            54,
            58,
            68,
            82],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "aqueaquamarine",
                color: aquamarine,
            },
            {
                text: "brown",
                color: "#773d49",
            },
            {
                text: "blue",
                color: blue,
            }
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["Baby","Set"],
        SKU: "BE-8723U2-1-1-1-1-1-1",
        isSale: true
    },
    {
        idProduct: 6,
        nameProduct: "Duvet Cover Set Be Brave",
        imageProduct: [Product6_1 , Product6_2 , Product6_3],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [50,
            54,
            58,
            62,
            68],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "aquamarine",
                color: aquamarine,
            },
            {
                text: "black",
                color: black,
            },
            {
                text: "brown",
                color: brown,
            }
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["Baby","Set"],
        SKU: "BE-8723U2-1-1-1-1-1-1",
        isSale: true
    },
    {
        idProduct: 7,
        nameProduct: "Baby Robe A big dream",
        imageProduct: [Product7_1 , Product7_2],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [50,
            54,
            62,
            74],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "aquamarine",
                color: aquamarine,
            },
            {
                text: "violet",
                color: violet,
            },
            {
                text: "yellow",
                color: yellow,
            }
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["Baby","Set"],
        SKU: "BE-8723U2-1-1-1-1-1-1",
        isSale: true
    },
    {
        idProduct: 8,
        nameProduct: "Duvet Cover Set Pumpkin Bear",
        imageProduct: [Product1_1 , Product1_2 , Product1_3],
        salePriceProduct: 15,
        currentPriceProduct: 35,
        descriptionTitle: "Lorem ipsum dolor sit amet enim. Etiam ullamcorper. Suspendisse a non felis eleifend justo vel bibendum sapien.",
        description: ["Maecenas malesuada 5 elit lectus felis, malesuada ultricies." , "Curabitur et ligula. Ut molestie a, ultricies porta urna." , "Vestibulum commodo volutpat a, convallis ac, laoreet enim." , "Phasellus fermentum in, dolor. Pellentesque facilisis."],
        composition: "Composition: Main material: 95% Cotton, 5% Polyester",
        age: ["2-4 years","4-6 years"],
        height: [62 , 68 , 74 , 82],
        size: [
            {
                id: uuidv4(),
                text: "Height",
                listDetailAge: ["49-60 cm" , "61-68 cm" , "69-80 cm" , "81-90 cm"]
            },
            {
                id: uuidv4(),
                text: "Weight",
                listDetailAge: ["3-4 kg" , "5-8 kg" , "9-11 kg" , "12-14 kg"]
            },
            {
                id: uuidv4(),
                text: "Age",
                listDetailAge: ["0-2 months" , "2-6 months	" , "6-12 months" , "1-2 years"]
            },
            {
                id: uuidv4(),
                text: "Size",
                listDetailAge: ["50-56" , "62-68" , "74-80" , "86-92"]
            },
        ],
        ListColor: [
            {
                text: "black",
                color: "#38230e",
            },
            {
                text: "brown",
                color: "#773d49",
            },
            {
                text: "pink",
                color: "#eedcd8",
            },
            {
                text: "yellow",
                color: "#edc582",
            },
        ],
        categories: ["Nighties" , "Pyjamas" , "Sleepwear"],
        Tags: ["Baby","Set"],
        SKU: "BE-8723U2-1-1-1-1-1-1",
        isSale: true
    }
]

const sellers = listProduct.filter( item => item.isSale )
const bestseller = sellers.slice(-4)

export { listProduct , bestseller }