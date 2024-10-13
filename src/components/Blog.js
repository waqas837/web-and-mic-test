import getRecentPosts from "../controllers/GetTwoPosts";
import Link from "next/link";
import { Suspense } from "react";

export default async function BlogList({ blog }) {
  const posts = await getRecentPosts(); // Fetch two most recent posts

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div className="container mx-auto p-4 my-16">
        <div className="text-center">
          <Link href={"/blogs"} className="text-3xl font-bold mb-6  ">
            {blog.t1}
          </Link>
        </div>
        <div className="space-y-4 p-10">
          {posts.length > 0 ? (
            <>
              {posts.length>0 && posts.map((post) => (
                <div key={post.id}>
                  <Link href={`/blog/${post.slug}`}>
                    <div className="bg-white rounded-lg flex flex-col md:flex-row items-center md:items-start p-5">
                      <div className="flex-1">
                        <h2 className="text-xl font-semibold mb-2">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 text-sm">
                          {post.description}
                        </p>
                      </div>
                      <img
                        className="w-full md:w-48 h-32 object-cover mt-4 md:mt-0 md:ml-4 rounded-lg"
                        src={post.filePath || "https://via.placeholder.com/150"}
                        alt={post.title}
                      />
                    </div>
                  </Link>
                  <hr />
                </div>
              ))}
              <div className="text-center mt-6">
                <Link
                  href={"/blogs"}
                  className="mt-4 m-auto px-4 py-2 bg-red-500 text-white rounded"
                >
                  {blog.t2}
                </Link>
              </div>
            </>
          ) : (
            <p>{blog.t3}</p>
          )}
        </div>
      </div>
    </Suspense>
  );
}
