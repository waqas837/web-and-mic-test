import lazyload from "next/dynamic";
const HeroSection = lazyload(() => import("../components/HeroSection"));

export const metadata = {
  title: "Webcam Test Free - Enjoy free",
  description:
    "Free resource for testing your webcam and providing extra functions like resolution checker and FPS checker. Start Testing.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Webcam Test Free - Enjoy free",
    description:
      "Free resource for testing your webcam and providing extra functions like resolution checker and FPS checker. Start Testing",
    type: "website",
    url: "https://webcamtest.live/",
    image: "https://www.yourwebsite.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Webcam Test Free - Enjoy free",
    description:
      "Free resource for testing your webcam and providing extra functions like resolution checker and FPS checker. Start Testing",
    image: "https://webcamtest.live/twitter-image.jpg",
  },
  robots: "index, follow",
  // canonical: "https://webcamtest.live/canonical-url",
};

const Home = async () => {
  return (
    <>
      <HeroSection />
    </>
  );
};

export default Home;
