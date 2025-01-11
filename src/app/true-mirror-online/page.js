import RunMirrorTest from "@/components/RunMirrorTest";
import Link from "next/link";

export const metadata = {
  title: "✨ True Mirror Online 2025 - See Your True Self Like Never Before! Click Here! 👀",
  description:
    "Use our free online true mirror tool to see yourself as others see you. Easily toggle between real and mirror views with a single tap. Try the best true mirror app and true mirror camera online for free.",
  keywords: [
    "True Mirror Online",
    "true mirror app",
    "true mirror online free",
    "true mirror camera",
    "real mirror online",
    "true mirror",
  ],
  alternates: {
    canonical: `https://webcamtest.live/true-mirror-online`,
  },
};

const TrueMirror = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-10">
      {/* Hero Section */}
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            True Mirror Online
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            See yourself as others see you with our free online true mirror tool.
            Easily toggle between real and mirror views with a single tap.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <RunMirrorTest />
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="bg-white py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            How to Use the True Mirror Online Tool
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Step-by-Step Guide
              </h3>
              <ol className="list-decimal pl-5 space-y-3 text-gray-700">
                <li>The app will request camera access.</li>
                <li>Watch for a browser prompt to allow camera permission.</li>
                <li>Click "Allow" to give permission for camera access.</li>
                <li>
                  If you’ve denied access, change it in your browser settings.
                  For more details, check our{" "}
                  <Link href="/guides" className="text-blue-500 hover:underline">
                    guides
                  </Link>
                  .
                </li>
              </ol>
            </div>
            <div className="bg-yellow-50 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Note</h3>
              <p className="text-gray-700">
                Camera access is required for the tool to work. We respect your
                privacy—your camera data is only used within the website and is
                not stored or shared.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-6 max-w-2xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              What is a true mirror?
            </h3>
            <p className="text-gray-700">
              A true mirror shows you exactly how others see you, without the
              horizontal flip of a regular mirror or webcam. Our{" "}
              <strong>true mirror camera</strong> provides this experience online
              for free.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Is this true mirror app free to use?
            </h3>
            <p className="text-gray-700">
              Yes, our <strong>true mirror online free</strong> tool is
              completely free to use. Simply allow camera access and start seeing
              your true reflection.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              How does the true mirror camera work?
            </h3>
            <p className="text-gray-700">
              The <strong>true mirror camera</strong> uses your webcam to show a
              non-reversed, real-time view of yourself. It’s the easiest way to
              see how others see you.
            </p>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to See Your True Reflection?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Try our <strong>true mirror online free</strong> tool now and
            experience how others see you.
          </p>
          <Link
            href="#"
            className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition duration-300"
          >
            Start True Mirror
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrueMirror;