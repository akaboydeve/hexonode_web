// Server component to handle static generation
import ProductPage from '@/components/ProductPage';

// Define metadata for SEO
export const metadata = {
    title: 'Product Details | HexoNode',
    description: 'Explore our wide range of hosting services including Minecraft, VPS, Game servers, and more.',
};

// Generate static pages for known service types
export async function generateStaticParams() {
    const serviceTypes = ["minecraft", "vps", "web", "games", "discord", "domains"];
    return serviceTypes.map((type) => ({ serviceType: type }));
}

// Server component that passes params directly to the client component
export default function Page({ params }: { params: { serviceType: string } }) {
    return (
        <ProductPage serviceType={params.serviceType} />
    );
} 