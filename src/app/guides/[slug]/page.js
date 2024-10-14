import RelatedPosts from "@/components/RelatedPosts";
import pool from "@/lib/db";
import Image from "next/image";

const PostDetailsPage = async ({ params }) => {
  const { slug } = params;
  const fetchSinglePost = async () => {
    let connection = await pool.getConnection();
    try {
      const [rows] = await connection.query(
        "SELECT * FROM posts WHERE slug = ?",
        [slug]
      );
      return rows.length > 0 ? rows[0] : null;
    } catch (error) {
      console.log("error", error);
    } finally {
      connection.release();
    }
  };
  const PostDetail = await fetchSinglePost();

  return (
    <div>
      <main className="pt-8 pb-16 lg:pt-16 lg:pb-24 dark:bg-gray-900 antialiased">
        <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
          <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <header className="mb-4 lg:mb-6 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl dark:text-white">
                {PostDetail.title}
              </h1>
            </header>
            <figure>
              <Image
                alt="later on"
                src={PostDetail.filePath}
                width={300}
                height={300}
              />
            </figure>
            {/* content */}
            <div dangerouslySetInnerHTML={{ __html: PostDetail.content }} />
          </article>
        </div>
      </main>

      <aside
        aria-label="Related articles"
        className="py-8 lg:py-24 bg-gray-50 dark:bg-gray-800 p-3"
      >
        <div className="px-4 mx-auto max-w-screen-xl">
          <h2 className="mb-8 text-2xl font-bold text-gray-900 dark:text-white">
            Related articles
          </h2>
          {/* RelatedPosts */}
          <RelatedPosts IamNOtInclude={PostDetail.id} />
        </div>
      </aside>
    </div>
  );
};

export default PostDetailsPage;
