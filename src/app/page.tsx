import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-custom-radial min-h-screen flex flex-col items-center text-black">
      {/* Header Section */}
      <header className="w-full max-w-screen-lg mt-8 flex flex-col items-center">
        <Image src="/logo.png" alt="Logo" width={128} height={128} />
        <h1 className="text-3xl font-bold mt-4">VLAI</h1>
      </header>

      {/* Navigation Bar */}
      <nav className="w-full max-w-screen-lg mt-4 bg-white/70 shadow-md rounded-md">
        <ul className="flex justify-center space-x-6 p-3 font-semibold">
          <li><a href="#">Home</a></li>
          <li><a href="#">Publications</a></li>
          <li><a href="#">Blogs</a></li>
          <li><a href="#">Demo</a></li>
          <li><a href="#">About Us</a></li>
        </ul>
      </nav>

      {/* Landing Image */}
      <section className="w-full max-w-screen-lg mt-8 flex justify-center">
        <Image
          src="/bg.png"
          alt="Landing Animation"
          width={600}
          height={400}
          className="max-w-full md:max-w-lg rounded shadow-lg"
        />
      </section>

      {/* Page Description */}
      <section className="w-full max-w-screen-md mt-8 px-4 text-center">
        <p className="text-lg leading-relaxed">
          Welcome to the <strong>VLAI Team</strong> (Vision and Language in AI), an AI research group 
          dedicated to investigating and building innovative AI applications. We focus on the Vietnamese 
          language and other Vietnam-related challenges, while also contributing to the global AI community. 
          Our goal is to push the boundaries of artificial intelligence by creating cutting-edge solutions 
          that positively impact society.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full max-w-screen-lg mt-12 bg-white/70 py-4">
        <div className="text-center text-gray-600 text-sm">
          © 2025 VLAI Team. All rights reserved.
        </div>
      </footer>
    </div>
  );
}