/** @type {import('next').NextConfig} */


// const nextConfig = {
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'admin.prosecure.co.in',
//         port: '',
//         pathname: '/uploads/**',
//       },
//     ],
//   },
// };

// export default nextConfig;


const nextConfig = {
  compiler: {
    styledComponents: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.prosecure.co.in',
        port: '',
        pathname: '/uploads/**',
      },
    ],
  },
};

export default nextConfig;

