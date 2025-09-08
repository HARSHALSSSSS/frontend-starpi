import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { getStrapiURL } from "@/utils/api";

const ProductDetailsCarousel = ({ images = [] }) => {
    // Fallback images if no images provided
    const fallbackImages = ["/p1.png", "/p2.png", "/p3.png"];
    const displayImages = images?.length > 0 ? images : fallbackImages.map((src, index) => ({ 
        id: index, 
        attributes: { url: src, name: `Product Image ${index + 1}` } 
    }));

    return (
        <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
            <Carousel
                infiniteLoop={true}
                showIndicators={false}
                showStatus={false}
                thumbWidth={60}
                className="productCarousel"
            >
                {displayImages?.map((img, index) => {
                    // Get the correct image URL - if it starts with /, it's from Strapi
                    const imageUrl = img?.attributes?.url?.startsWith('/') 
                        ? getStrapiURL(img.attributes.url)
                        : img?.attributes?.url || img?.url || "/p1.png";
                    
                    return (
                        <img
                            key={img?.id || index}
                            src={imageUrl}
                            alt={img?.attributes?.name || `Product Image ${index + 1}`}
                        />
                    );
                })}
                {/* <img src="/p2.png" />
                <img src="/p3.png" />
                <img src="/p4.png" />
                <img src="/p5.png" />
                <img src="/p6.png" />
                <img src="/p7.png" /> */}
            </Carousel>
        </div>
    );
};

export default ProductDetailsCarousel;
