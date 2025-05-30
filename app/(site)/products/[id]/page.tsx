import BlogData from "@/components/Blog/blogData";
import BlogItem from "@/components/Blog/BlogItem";

const BlogPage = () => {
  // console.log(params.id); // this will run on the server, not browser

  return (
    <section className="py-20 lg:py-25 xl:py-30">
      <div className="mx-auto mt-15 max-w-c-1280 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {BlogData.map((post, key) => (
            <BlogItem key={key} blog={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPage;
