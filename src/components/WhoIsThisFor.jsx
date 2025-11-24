export default function WhoIsThisFor() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto lg:px-6">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-12">
          Who Is This Course For?
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Beginners
            </h3>
            <p className="text-gray-700">
              Anyone who wants to start coding from scratch. No experience
              needed.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Students & Job Seekers
            </h3>
            <p className="text-gray-700">
              Perfect for college students preparing for placements or
              internships.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Working Professionals
            </h3>
            <p className="text-gray-700">
              Ideal for upskilling or switching to tech roles like full-stack or
              DevOps.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Freelancers
            </h3>
            <p className="text-gray-700">
              Learn skills to build real projects and earn through freelancing.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Entrepreneurs
            </h3>
            <p className="text-gray-700">
              Build your own product, SaaS, or understand tech fundamentals.
            </p>
          </div>

          <div className="p-6 bg-blue-50 border border-blue-200 rounded-2xl shadow hover:shadow-lg transition-all">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Anyone Entering IT
            </h3>
            <p className="text-gray-700">
              Whether it's JavaScript, MERN, Docker, or DevOps – start your IT
              journey.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
