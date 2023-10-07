const Whychoose = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-5xl font-bold text-center my-5">Why Choose Us!</h1>
      </div>
      <div className="hero  bg-base-200">
        <div className="hero-content flex-col lg:flex-row mx-10 gap-10">
          {/* Left Side */}
          <div>
            {/* Left Side 1*/}
            <div className="my-5">
              <h1 className="font-semibold text-2xl border-b-2  ">
                Academic Excellence:
              </h1>
              <p>
                We are committed to academic excellence, providing a rigorous
                curriculum that prepares students for success in their chosen
                fields. Our dedicated faculty members are experts in their
                respective domains and are passionate about teaching and
                mentoring.
              </p>
            </div>

            {/* Left Side 2*/}
            <div className="my-5">
              <h1 className="font-semibold text-2xl border-b-2  ">
                Diverse Range of Programs:
              </h1>
              <p>
                We offer a diverse range of programs, from undergraduate degrees
                to advanced graduate studies, ensuring you find the perfect fit
                for your educational journey. Our programs are designed to meet
                the evolving demands of various industries, equipping you with
                real-world skills and knowledge.
              </p>
            </div>
            {/* Left Side 3*/}
            <div className="my-5">
              <h1 className="font-semibold text-2xl border-b-2 ">
                Student-Centered Approach:
              </h1>
              <p>
                Your success is our priority. We embrace a student-centered
                approach, providing personalized support and guidance throughout
                your academic journey. Our dedicated advisors and support
                services are here to help you achieve your goals.
              </p>
            </div>
          </div>
          {/* Right Side */}
          <div>
            {/* Right Side 1*/}
            <div className="my-5">
              <h1 className="font-semibold text-2xl border-b-2 ">
                Research Opportunities:
              </h1>
              <p>
                Engage in groundbreaking research projects and gain hands-on
                experience in your field. Collaborate with esteemed faculty
                members on research that has a real impact on society.
              </p>
            </div>
            {/* Right Side 2*/}
            <div className="my-5">
              <h1 className="font-semibold text-2xl border-b-2 ">
                Career Readiness:
              </h1>
              <p>
                Our career services team is dedicated to helping you launch your
                career. We offer internship placements, career counseling, and
                job placement assistance. Many of our graduates secure positions
                at top companies and institutions.
              </p>
            </div>
            {/* Right Side 3*/}
            <div className="my-5">
              <h1 className="font-semibold text-2xl border-b-2 ">
                Community Engagement:
              </h1>
              <p>
                Give back to the community through volunteer opportunities and
                service-learning projects. Our institution values social
                responsibility and encourages students to make a positive
                impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whychoose;
