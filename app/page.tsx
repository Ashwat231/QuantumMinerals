export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-black">
      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold text-gray-900">
            Revolutionizing Mineral Processing
          </h1>
          <p className="mb-8 text-xl text-gray-600 max-w-3xl mx-auto">
            Discover cutting-edge quantum technologies for efficient, sustainable mineral extraction and processing.
            Join the future of industrial minerals with Quantum Industrial Minerals.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Get Started
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="px-6 py-20 bg-gray-50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">Our Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quantum Processing</h3>
              <p className="text-gray-600">
                Advanced quantum algorithms for optimal mineral separation and purification processes.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainable Mining</h3>
              <p className="text-gray-600">
                Eco-friendly extraction methods that minimize environmental impact and maximize efficiency.
              </p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow bg-white">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Data Analytics</h3>
              <p className="text-gray-600">
                Real-time monitoring and predictive analytics for improved operational decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-10 bg-blue-50">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-900">About QiMinerals</h2>
              <p className="text-gray-600 mb-4">
                QiMinerals is at the forefront of mineral processing innovation, combining quantum computing
                with traditional mining techniques to create more efficient and sustainable solutions.
              </p>
              <p className="text-gray-600 mb-6">
                Our team of experts brings together decades of experience in mineralogy, quantum physics,
                and industrial engineering to deliver cutting-edge technologies that transform the industry.
              </p>
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Our Team
              </button>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-semibold mb-4">Key Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Efficiency Increase</span>
                  <span className="font-semibold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Cost Reduction</span>
                  <span className="font-semibold">25%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Environmental Impact</span>
                  <span className="font-semibold">-30%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="training" className="px-6 py-20 bg-white">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold text-red-900 mb-4">Upcoming Programs</h2>
          <h3 className="text-l font-bold mb-6 text-gray-900">1) Pigments I - Clays, Ti02, Silica, and Platy Pigment Barrier Strategy</h3>
          <p className="text-gray-600">Location : Floyd Hall, D-109, 4601 Campus Drive, Kalamazoo, MI 49008</p>
          <p className="mt-5 font-bold text-gray-600">Day 1 : Tuesday July 21, 2026</p>

          <button className="bg-blue-600 text-white my-10 px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
            Register Now
          </button>
          <div id="map" className="text-center mb-10" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2953.119342818029!2d-85.6406768!3d42.2546239!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8817765e61acf013%3A0x4a436cacd4bbb5f!2s4601%20Campus%20Dr%2C%20Kalamazoo%2C%20MI%2049008!5e0!3m2!1sen!2sus!4v1775930133520!5m2!1sen!2sus"
            className="w-full max-w-4xl h-96 border-0 rounded-lg mx-auto block"></iframe>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="px-6 py-20 bg-indigo-50">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">Get In Touch</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your mineral processing operations? Contact our team to learn how
            QiMinerals can help you achieve your goals.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Contact Sales
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Schedule Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
