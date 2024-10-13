import lazyload from "next/dynamic";
const HeroSection = lazyload(() => import("../components/HeroSection"));

export const metadata = {
  title: "Your Page Title",
  description: "A brief, compelling description of your page content",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Your Open Graph Title",
    description: "A description for social media sharing",
    type: "website",
    url: "https://www.yourwebsite.com/your-page",
    image: "https://www.yourwebsite.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Your Twitter Card Title",
    description: "A description for Twitter sharing",
    image: "https://www.yourwebsite.com/twitter-image.jpg",
  },
  robots: "index, follow",
  canonical: "https://www.yourwebsite.com/canonical-url",
  author: "Your Name or Company Name",
};

const Home = async () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
