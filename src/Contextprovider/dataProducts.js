//images 
import img1 from '../assets/images/image-product-1.jpg'
import img2 from '../assets/images/image-product-2.jpg'
import img3 from '../assets/images/image-product-3.jpg'
import img4 from '../assets/images/image-product-4.jpg'

//thumbnail
import thumb1 from '../assets/images/image-product-1-thumbnail.jpg'
import thumb2 from '../assets/images/image-product-2-thumbnail.jpg'
import thumb3 from '../assets/images/image-product-3-thumbnail.jpg'
import thumb4 from '../assets/images/image-product-4-thumbnail.jpg'


export const productsData = [
    {
        id:1,
        company: 'SNEAKER COMPANY',
        title:'Fall Limited Edition Sneakers',
        description:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: '125.00',
        discountPercentage: '50%',
        originalPrice:'$250.00',
        images:[
            {
                id:1,
                img:img1,
            },
            {
                id:2,
                img:img2,
            },
            {
                id:3,
                img:img3,
            },
            {
                id:4,
                img:img4,
            },
        ],
        thumbnail:[
            {
                id:1,
                thumb:thumb1,
            },
            {
                id:2,
                thumb:thumb2,
            },
            {
                id:3,
                thumb:thumb3,
            },
            {
                id:4,
                thumb:thumb4,
            },
        ],
    },
    ////////////---------uncomment for multiple product
    // {
    //     id:2,
    //     company: 'Shoes COMPANY',
    //     title:'Edition Sneakers',
    //     description:'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
    //     price: '230.00',
    //     discountPercentage: '50%',
    //     originalPrice:'$460.00',
    //     images:[
    //         {
    //             id:1,
    //             img:img1,
    //         },
    //         {
    //             id:2,
    //             img:img2,
    //         },
    //         {
    //             id:3,
    //             img:img3,
    //         },
    //         {
    //             id:4,
    //             img:img4,
    //         },
    //     ],
    //     thumbnail:[
    //         {
    //             id:1,
    //             thumb:thumb1,
    //         },
    //         {
    //             id:2,
    //             thumb:thumb2,
    //         },
    //         {
    //             id:3,
    //             thumb:thumb3,
    //         },
    //         {
    //             id:4,
    //             thumb:thumb4,
    //         },
    //     ],
    // },
]