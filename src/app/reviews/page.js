import React from "react";

const page = () => {
  return (
    <div>
      <section>
        <div>
          <div className="container mx-auto flex flex-col md:flex-row my-6 md:my-24">
            <div className="flex flex-col w-full lg:w-1/3 p-8">
              <p className="ml-6 text-blue-500 text-lg uppercase tracking-loose">
                REVIEW
              </p>
              <p className="text-3xl md:text-5xl my-4 leading-relaxed md:leading-snug">
                Leave us feedback!
              </p>
              <p className="text-sm md:text-base leading-snug text-opacity-100">
                Please provide your valuable feedback and it is valuable for improve our product.
              </p>
            </div>
            <div className="flex flex-col w-full justify-center">
              <div className="container w-full ">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-6/12 ">
                    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-white">
                      <div className="flex-auto   lg:p-10">
                        <h4 className="text-2xl mb-4 text-black font-semibold">
                          Have a suggestion?
                        </h4>
                        <form id="feedbackForm" action="" method="">
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="email"
                            >
                              Email
                            </label>
                            <input
                              type="email"
                              name="email"
                              id="email"
                              className="border-0 px-3 py-3 rounded text-sm shadow w-full
                             bg-gray-100 placeholder-black text-gray-800 outline-none  "
                              placeholder=" "
                              style={{ transition: "all 0.15s ease 0s" }}
                              required
                            />
                          </div>
                          <div className="relative w-full mb-3">
                            <label
                              className="block uppercase text-gray-700 text-xs font-bold mb-2"
                              for="message"
                            >
                              Message
                            </label>
                            <textarea
                              maxlength="300"
                              name="feedback"
                              id="feedback"
                              rows="4"
                              cols="80"
                              className="border-0 px-3 py-3 bg-gray-100 placeholder-black text-gray-800 rounded text-sm shadow focus:outline-none w-full"
                              placeholder=""
                              required
                            ></textarea>
                          </div>
                          <div className="text-center mt-6">
                            <button
                              id="feedbackBtn"
                              className="bg-blue-500 text-center mx-auto active:bg-blue-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 text-white"
                              type="submit"
                              style={{ transition: "all 0.15s ease 0s" }}
                            >
                              Submit
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
