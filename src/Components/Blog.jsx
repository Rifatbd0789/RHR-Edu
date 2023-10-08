const Blog = ({ data }) => {
  const { title, content, image, writer } = data;
  return (
    <div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={image}
            className=" max-w-sm md:max-w-md lg:max-w-lg  rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold text-center  underline underline-offset-4">
              {title}
            </h1>
            <p className="pt-6 pb-2 ">{content}</p>
            <p className="text-right mr-3">
              -<span className="text-[#135e8a] font-medium ">{writer}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
