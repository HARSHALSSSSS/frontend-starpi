import HeroBanner from "@/components/HeroBanner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import { fetchDataFromApi } from "@/utils/api";
export default function Home({ products }) {
    return (
        <main>
            <HeroBanner />
            <Wrapper>
                {/* heading and paragaph start */}
                <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
                    <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
                        Cushioning for Your Miles
                    </div>
                    <div className="text-md md:text-xl">
                        A lightweight Nike ZoomX midsole is combined with
                        increased stack heights to help provide cushioning
                        during extended stretches of running.
                    </div>
                </div>
                {/* heading and paragaph end */}

                {/* products grid start */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 my-10 md:my-14 px-4 md:px-0">
                    {products?.data?.map((product) => (
                        <ProductCard key={product?.id} data={product} />
                    ))}
                    {products?.data?.length === 0 && (
                        <div className="col-span-full text-center py-20">
                            <div className="text-xl md:text-2xl font-semibold mb-4">No Products Found</div>
                            <div className="text-black/[0.6]">Check back later for new arrivals!</div>
                        </div>
                    )}
                    {/* <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard /> */}
                </div>
                {/* products grid end */}
            </Wrapper>
        </main>
    );
}

export async function getStaticProps() {
    try {
        const products = await fetchDataFromApi("/api/products?populate=*");
        return {
            props: { products },
        };
    } catch (error) {
        console.warn("Failed to fetch products from API:", error.message);
        // Return empty products array if API is not available
        return {
            props: { 
                products: { data: [] } 
            },
        };
    }
}
