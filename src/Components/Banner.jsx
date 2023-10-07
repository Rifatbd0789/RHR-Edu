const Banner = () => {
  return (
    <div>
      <div
        className="hero w-full "
        style={{
          backgroundImage:
            "url(https://i.ibb.co/0YGgpRG/17213260-rm373batch13-085.jpg)",
        }}
      >
        <div className=" py-72 "></div>
        <div className="hero-content text-center text-neutral-content">
          <div
            className="max-w-md"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <h1 className="mb-5 text-5xl font-bold">We Build Future</h1>
            <p className="mb-5">Education is the backbone of a nation!!!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
