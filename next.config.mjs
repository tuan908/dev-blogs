import mdx from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ["js", "jsx", "ts", "tsx", "mdx"],
    experimental: {
        appDocumentPreloading: true,
        mdxRs: true,
        optimizeServerReact: true,
    }
};

export default mdx(nextConfig);
