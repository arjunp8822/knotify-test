const Blog = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {/* Copy for component */}
      <div className="bg-red-50 h-[450px] p-2 sm:p-4">
        <div className="bg-green-50 h-[55%]">Image</div>
        <div className="h-[30%]">
          <h2 className="mt-4">Title</h2>
          <p className="mt-2">Description</p>
        </div>
        <button className="border">Read More</button>
      </div>
      <div className="bg-red-50 h-[450px]">Blog</div>
      <div className="bg-red-50 h-[450px]">Blog</div>
      <div className="bg-red-50 h-[450px]">Blog</div>
      <div className="bg-red-50 h-[450px]">Blog</div>
      <div className="bg-red-50 h-[450px]">Blog</div>
      <div className="bg-red-50 h-[450px]">Blog</div>
      <div className="bg-red-50 h-[450px]">Blog</div>
    </div>
  );
};

export default Blog;
