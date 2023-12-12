import { useContext } from "react";
import { context } from "../ContextProvider/Provider";
import Navbar from "./Navbar";
import { toast } from "react-toastify";

const AddBlog = () => {
  const { user } = useContext(context);
  const handleBlog = (e) => {
    e.preventDefault();
    const form = e.target;
    const writer = form.writer.value;
    const title = form.title.value;
    const blogPhoto = form.blogPhoto.value;
    const content = form.content.value;
    const dataBlog = {
      writer,
      title,
      blogPhoto,
      content,
    };
    console.log(dataBlog);
    fetch("https://rhr-edu-backend.vercel.app/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataBlog),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedCount > 0) {
          toast("Your blog added successfully");

          form.reset();
        }
      });
  };
  return (
    <div>
      <Navbar />
      <div className="hero min-h-screen bg-[#29465B]">
        <div className="hero-content flex-col lg:flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Add your Blog here !
            </h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleBlog} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  defaultValue={user?.displayName}
                  placeholder="Your Name..."
                  className="input input-bordered"
                  name="writer"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Title of your blog..."
                  className="input input-bordered"
                  name="title"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url of Blog</span>
                </label>
                <input
                  type="text"
                  placeholder="Your photo url..."
                  className="input input-bordered"
                  name="blogPhoto"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your content</span>
                </label>
                <textarea
                  placeholder="Your content..."
                  className="textarea textarea-bordered textarea-lg w-full "
                  name="content"
                  required
                />
              </div>
              <input
                className="btn btn-primary normal-case bg-[#29465B] text-white border-none hover:bg-slate-400 hover:text-black"
                type="submit"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
