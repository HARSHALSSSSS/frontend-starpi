import { getDiscountedPricePercentage } from "@/utils/helper";
import { getStrapiURL } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const ProductCard = ({ data: { attributes: p, id } = {} }) => {
    // Handle case when data is undefined or empty
    if (!p) {
        return null;
    }

    // Get the correct image URL with fallback
    const imageUrl = p?.thumbnail?.data?.attributes?.url 
        ? getStrapiURL(p.thumbnail.data.attributes.url)
        : "/p1.png";

    const handleImageError = (e) => {
        e.target.src = "/p1.png"; // Fallback to placeholder if image fails to load
    };

    return (
        <Link
            href={`/product/${p.slug || id}`}
            className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer group border border-gray-100 rounded-lg hover:shadow-lg transition-all"
        >
            <div className="relative overflow-hidden rounded-t-lg">
                <Image
                    width={500}
                    height={500}
                    src={imageUrl}
                    alt={p?.name || "Product"}
                    className="w-full h-[200px] sm:h-[250px] md:h-[300px] object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={handleImageError}
                />
                {p?.original_price && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-semibold">
                        {getDiscountedPricePercentage(p?.original_price, p?.price)}% OFF
                    </div>
                )}
            </div>
            <div className="p-3 md:p-4 text-black/[0.9]">
                <h2 className="text-sm md:text-lg font-medium mb-2 line-clamp-2 group-hover:text-black transition-colors">
                    {p?.name || "Product Name"}
                </h2>
                <div className="flex items-center justify-between text-black/[0.5]">
                    <div className="flex items-center gap-2">
                        <p className="text-base md:text-lg font-semibold text-black">
                            &#8377;{p?.price || "0"}
                        </p>

                        {p?.original_price && (
                            <p className="text-sm md:text-base font-medium line-through">
                                &#8377;{p?.original_price}
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;
