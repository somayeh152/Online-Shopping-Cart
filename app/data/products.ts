import { v4 as uuidv4 } from 'uuid';

export const products = [
    {
        id: "1",
        name: "Stylish leather bag",
        price: 89.9,
        image: "/assets/product-images/image1.jpg",
        description: "Carry all your essentials with you in this leather bag",
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Red', 'Blue', 'Black'],
        reviews: [
            { id: uuidv4(), name: 'Alice', text: 'Great product!', rating: 5 },
            { id: uuidv4(), name: 'Anna', text: 'Very comfortable.', rating: 4 },
        ],
    },
    {
        id: "2",
        name: "Stylish bag",
        price: 101,
        image: "/assets/product-images/image2.jpg",
        description: "Featuring delicate embellishments and a sleek silhouette",
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Red', 'Blue', 'Black'],
        reviews: [
            { id: uuidv4(), name: 'Nil', text: 'Nice!', rating: 4 },
        ],
    },
    {
        id: "3",
        name: "Classic Leather bag",
        price: 79.9,
        image: "/assets/product-images/image3.jpg",
        description: "It's perfect for hands-free convenience",
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Red', 'Blue', 'Black'],
        reviews: [
        ],
    },
    {
        id: "4",
        name: "luxury Leather bag",
        price: 78,
        image: "/assets/product-images/image4.jpg",
        description: "Crossbody Shoulder Bag Tote Bag Ladies Work Bag",
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Red', 'Blue', 'Black'],
        reviews: [
        ],
    },
    {
        id: "5",
        name: "Shoulder Bag",
        price: 65,
        image: "/assets/product-images/image5.jpg",
        description: "Carry all your essentials with you in this leather bag",
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Red', 'Blue', 'Black'],
        reviews: [
            { id: uuidv4(), name: 'Eddi', text: 'I like it', rating: 3 },
            { id: uuidv4(), name: 'Alice', text: 'excellent!', rating: 5 },
            { id: uuidv4(), name: 'Anna', text: 'Very nice.', rating: 4 },
        ],
    },
    {
        id: "6",
        name: "Shoulder Bag",
        price: 89.9,
        image: "/assets/product-images/image6.jpg",
        description: "Ideal for work or travel, with plenty of space for your daily essentials.",
        sizes: ['S', 'M', 'L', 'XL'],
        colors: ['Green', 'Red', 'Blue', 'Black'],
        reviews: [
            { id: uuidv4(), name: 'Allen', text: 'Seems good!', rating: 3 },
        ],
    }
];
