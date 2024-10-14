import Link from "next/link";
import RunSpeakersTest from "@/components/Tests/RunSpeakersTest";

export const metadata = {
  title: "Sound Test Free- Enjoy",
  description:
    "Free resource for testing your audio and sound. Check if your speakers are connected or not. Start Testing.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Sound Test Free- Enjoy",
    description:
      "Free resource for testing your audio and sound. Check if your speakers are connected or not. Start Testing",
    type: "website",
    url: "https://webcamtest.live/",
    image: "https://www.yourwebsite.com/og-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourtwitterhandle",
    title: "Sound Test Free- Enjoy",
    description:
      "Free resource for testing your audio and sound. Check if your speakers are connected or not. Start Testing",
    image: "https://webcamtest.live/twitter-image.jpg",
  },
  robots: "index, follow",
  // canonical: "https://webcamtest.live/canonical-url",
};

const SpeakerTest = () => {
  return (
    <section className="py-16 mb-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Test audio and sound Online
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Check if your speakers are working or not with help of our testing
          microphone tool. It provides information about working or failure of
          your device.
        </p>
        {/*RunSpeakersTest Client component */}
        <RunSpeakersTest />
      </div>
      {/* Body Content */}
      <main className="p-16">
        <section className="bg-white rounded-lg sm:mb-10 md:my-10">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            {/* <Speakers className="mr-2" /> */}
            How It Works
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>
              Click the "Start left" or "Start right" button above to check
              which one is working
            </li>
            <li>View your Speakers feed in real-time</li>
            <li>Confirm that audio are functioning Well.</li>
          </ol>
        </section>

        <section className="bg-white rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            {/* <AlertCircle className="mr-2" />  */}
            Troubleshooting Common Issues
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>
                Ensure your Speakers is properly connected to your device
              </span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>Find audio device and select it as default</span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>
                Update your Audio drivers if you're experiencing issues
              </span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>Try using a different browser if the problem persists</span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            {/* <Info className="mr-2" />  */}
            Privacy and Security
          </h2>

          <p>Your privacy is our priority</p>

          <p className="mt-4 text-gray-700">
            Learn more about our{" "}
            <Link
              href="/privacy-policy"
              className="text-blue-600 hover:underline"
            >
              privacy policy
            </Link>{" "}
            and how we protect your data during testing.
          </p>
        </section>
      </main>
    </section>
  );
};

export default SpeakerTest;
