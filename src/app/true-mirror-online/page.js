import { cameraIcon } from "@/assets/SvgIcons";
import RunMirrorTest from "@/components/RunMirrorTest";
import Link from "next/link";

export const metadata = {
  title: "True Mirror Online - Webcamtest",
  description:
    "Easily access the mirror view in the web camera on your desktop or mobile. Watch yourself in the real view and see how you look in the real World.",
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

const TrueMirror = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 p-5 text-center my-10 mb-16">
        {/* Left Side part */}
        <div className="flex flex-col">
          <section>
            <h1 className="text-4xl font-bold my-12">True Mirror Online</h1>
            <p className="text-lg">
              Curious to see how you look like in real World? Our inverted
              mirror camera gives you a true experience. It can be easily
              toggled between real and mirror views. It is very easy to switch
              between real and opposite views with a single tap.
            </p>
          </section>
        </div>
        {/* Right side part */}
        <RunMirrorTest />
      </div>

      {/* Content part */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-10">
          How to use the true webcam?
        </h2>
        <div className="rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 flex items-center space-x-2">
            Camera Permission Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <ol className="list-decimal pl-5 space-y-3">
              <li className="text-gray-800">
                The app will request camera access.
              </li>
              <li className="text-gray-800">
                Watch for a browser prompt to allow camera permission.
              </li>
              <li className="text-gray-800">
                Click "Allow" to give permission for camera access.
              </li>
              <li className="text-gray-800">
                If you have already denied the camera access, you can change
                them in browser preferences. For more understanding see our easy 
                <Link href={"/guides"}>guides</Link>
              </li>
            </ol>
            <div className="bg-yellow-100 p-4 rounded-lg">
              <p className="text-yellow-800 font-semibold">Note:</p>
              <p className="text-yellow-700">
                It is very important to allow camera access for required working
                functionality. We respect your privacy. Camera will accessed
                within website and will be exit when you leave the website.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrueMirror;
