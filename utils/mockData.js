// Mock data for development when Strapi backend is not available
export const mockProducts = {
    data: [
        {
            id: 1,
            attributes: {
                name: "Nike Air Max 270",
                slug: "nike-air-max-270",
                subtitle: "Men's Shoes",
                price: 12995,
                original_price: 15995,
                description: "The Nike Air Max 270 React ENG combines a full-length React foam midsole with a 270 Max Air unit for unrivaled comfort and a striking visual experience.",
                size: ["6", "7", "8", "9", "10", "11"],
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p1.png"
                        }
                    }
                },
                image: {
                    data: [
                        { id: 1, attributes: { url: "/p1.png", name: "Product 1" } },
                        { id: 2, attributes: { url: "/p2.png", name: "Product 2" } },
                        { id: 3, attributes: { url: "/p3.png", name: "Product 3" } }
                    ]
                }
            }
        },
        {
            id: 2,
            attributes: {
                name: "Nike React Vision",
                slug: "nike-react-vision",
                subtitle: "Men's Shoes",
                price: 11995,
                original_price: 13995,
                description: "The Nike React Vision is a story of surreal comfort. Layered textures, shapes and vibrant colors combine in a design that's both futuristic and retro.",
                size: ["6", "7", "8", "9", "10", "11"],
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p2.png"
                        }
                    }
                },
                image: {
                    data: [
                        { id: 4, attributes: { url: "/p2.png", name: "Product 2" } },
                        { id: 5, attributes: { url: "/p3.png", name: "Product 3" } },
                        { id: 6, attributes: { url: "/p4.png", name: "Product 4" } }
                    ]
                }
            }
        },
        {
            id: 3,
            attributes: {
                name: "Nike Air Force 1",
                slug: "nike-air-force-1",
                subtitle: "Men's Shoes",
                price: 7995,
                original_price: 9995,
                description: "The Nike Air Force 1 '07 is the basketball original. This classic silhouette is a streetwear staple.",
                size: ["6", "7", "8", "9", "10", "11"],
                thumbnail: {
                    data: {
                        attributes: {
                            url: "/p3.png"
                        }
                    }
                },
                image: {
                    data: [
                        { id: 7, attributes: { url: "/p3.png", name: "Product 3" } },
                        { id: 8, attributes: { url: "/p4.png", name: "Product 4" } },
                        { id: 9, attributes: { url: "/p5.png", name: "Product 5" } }
                    ]
                }
            }
        }
    ]
};

export const mockCategories = {
    data: [
        { id: 1, attributes: { name: "Running", slug: "running" } },
        { id: 2, attributes: { name: "Basketball", slug: "basketball" } },
        { id: 3, attributes: { name: "Casual", slug: "casual" } }
    ]
};
