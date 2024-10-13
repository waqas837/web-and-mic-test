import Link from "next/link";
import RunWebcamTest from "./Tests/RunWebcamTest";

const HeroSection = () => {
  return (
    <section className="py-16 my-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Video tester online
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          To start the webcam test, you do not need any programs, just click on
          the button below. If your camera is operational, you will see yourself
          on the screen.
        </p>
        {/*RunWebcamTest Client component */}
        <RunWebcamTest />
      </div>
      {/* Body Content */}
      <main className="p-28">
        <section className="bg-white rounded-lg   mb-8">
          <h2 className="text-2xl font-semibold text-blue-500 mb-4 flex items-center">
            {/* <Camera className="mr-2" /> */}
            How It Works
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            <li>Click the "Start Webcam Test" button below</li>
            <li>Allow browser access to your camera when prompted</li>
            <li>View your webcam feed in real-time</li>
            <li>
              Confirm that video and audio (if applicable) are functioning
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
                Ensure your webcam is properly connected to your device
              </span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>
                Check that your browser has permission to access the camera
              </span>
            </li>
            <li className="flex items-start">
              {/* <CheckCircle className="mr-2 text-green-500 flex-shrink-0 mt-1" /> */}
              <span>
                Update your webcam drivers if you're experiencing issues
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
          <p>
            We do not store or access any video data. This test runs entirely in
            your browser.
          </p>

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

export default HeroSection;
