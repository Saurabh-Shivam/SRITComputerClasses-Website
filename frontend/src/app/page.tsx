import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen">
      <header className="bg-blue-600 text-white p-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold">Guru Shishya</h1>
        </div>
      </header>

      <main className="container mx-auto p-8">
        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
          <h2 className="text-3xl font-semibold mb-4 text-blue-600">About Us</h2>
          <p className="mb-4 text-lg">
            Guru Shishya caters to students from classes 1 to 10. Our
            experienced teachers, each with over 25 years of expertise in
            their subjects, are here to provide top-notch education. We offer
            special classes in computer studies, covering programming
            languages like various javascript frameworks like next js, Java, C,
            Python, and Makecode arcade.
          </p>
          <p className="text-lg">
            Students have the flexibility to opt for specific subjects based
            on their individual needs. If you're interested, enroll your
            child now.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Opening Hours</h2>
            <div className="grid grid-cols-2 gap-4 text-lg">
              <div>
                <p className="font-semibold">Monday - Saturday</p>
                <p>10:00 - 20:00</p>
              </div>
              <div>
                <p className="font-semibold">Sunday</p>
                <p>Closed</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold mb-4 text-blue-600">Contact & Location</h2>
            <p className="mb-2 text-lg">
              <strong>Phone:</strong> 098309 52307
            </p>
            <p className="text-lg">
              <strong>Location:</strong> 2, Rameshwar Malia Lane, Howrah, West
              Bengal 711101
            </p>
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white p-6 text-center">
        <div className="container mx-auto">
          <p>&copy; 2023 Guru Shishya. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
