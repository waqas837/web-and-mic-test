import Link from "next/link";
import RunMicTest from "@/components/Tests/RunMicTest";

export const metadata = {
  title: "Test Mic Online - Record and Test your mic",
  description:
    "Free resource for testing your Microphone and It is easy to test, as your it recognize your voice it shows realtime visualizations. Start Testing.",
  keywords: ["keyword1", "keyword2", "keyword3"],
  openGraph: {
    title: "Test Mic Online - Record and Test your mic",
    description:
      "Free resource for testing your Microphone and It is easy to test, as your it recognize your voice it shows realtime visualizations. Start Testing",
    type: "website",
    image: "https://webcamtest.live/twitter-image.jpg",
  },
  twitter: {
    card: "summary_large_image",
    title: "Test Mic Online - Record and Test your mic",
    description:
      "Free resource for testing your Microphone and It is easy to test, as your it recognize your voice it shows realtime visualizations. Start Testing",
    image: "https://webcamtest.live/twitter-image.jpg",
  },
  alternates: {
    canonical: `https://webcamtest.live/microphone-test`,
  },
};

const MicrophoneTest = () => {
  return (
    <section className="py-16 sm:mb-10 md:my-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Test Microphone Online
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Start the Microphone test Just on one Tape. By clicking on the start
          mic test you will see all working information about your device.
        </p>
        {/*RunMicTest Client component */}
        <RunMicTest />
      </div>
      {/* Body Content */}
      <main className="p-12">
        <section className="bg-white rounded-lg mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            {/* <Microphone className="mr-2" /> */}
            How It Works?
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click the "Start Microphone Test" button above</li>
            <li>
              Allow your web browser access to your microphone when it shows
              prompt
            </li>
            <li>
              After You allow it will continue testing mic device instantly
            </li>
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
                Ensure your Microphone is properly connected to your device
              </span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>
                Check that your browser has permission to access the Microphone
              </span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>
                Update your Microphone drivers if you're experiencing issues
              </span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>
                Read our{" "}
                <Link href={"/guides"} className="text-blue-500 underline">
                  guides
                </Link>{" "}
                for more information
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-white rounded-lg">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            Privacy and Security
          </h2>

          <p>Your privacy is our priority</p>
          <p>
            We do not store or access any data. This test runs entirely in your
            browser and microphone access is closed after you left the website.
          </p>

          <p className="mt-4 text-gray-700">
            Learn more about our{" "}
            <Link href="/privacy-policy" className="text-blue-500 underline">
              privacy policy
            </Link>{" "}
            and how we protect your data during testing.
          </p>
        </section>
      </main>
    </section>
  );
};

export default MicrophoneTest;
