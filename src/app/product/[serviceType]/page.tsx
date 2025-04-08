'use client';

import ProductPage from '../../../components/ProductPage';

// The page component receives params as props
export default async function ProductRoute({ params }: { params: { serviceType: string } }) {
    const { serviceType } = params;

    // Pass the serviceType to your component
    return <ProductPage serviceType={serviceType} />;
}

// Optional: If you know the possible values for serviceType ahead of time,
// you can use generateStaticParams to pre-render these pages at build time.
// export async function generateStaticParams() {
//   const serviceTypes = ["minecraft", "vps", "web", "games", "discord", "domains"];
//   return serviceTypes.map((type) => ({ serviceType: type }));
// } 