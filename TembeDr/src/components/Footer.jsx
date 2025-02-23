
const Footer = () => {
  return (
    <footer className="relative py-12 px-4 sm:px-8 select-none">
      {/* Main Content Grid */}
      <div className="container mx-auto max-w-6xl relative z-10">
        

        {/* Social Media */}
        <div className="border-t border-gray-300 pt-8">
          <h1 className="text-center text-4xl font-bold mb-8 animate-bounce">Follow Us</h1>
          <div className="flex items-center justify-center space-x-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/tembedriving?igsh=MWVsbG9xcW0yaTNpMQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-pink-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label="Instagram"
            >
              {/* SVG Content */}
              <svg
                viewBox="0 0 24 24"
                height="32"
                width="32"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.76-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>


            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@tembedrivingschool_101?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-black transition-all duration-300 transform hover:scale-110 hover:-rotate-6"
              aria-label="TikTok"
            >
              {/* SVG Content */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                height="38"
                width="38"
                fill="currentColor"
              >
                <path d="M38.344 12.809c-2.149-1.576-3.605-3.903-4.048-6.538h-6.399v23.206c0 3.687-2.974 6.662-6.662 6.662-3.688 0-6.662-2.975-6.662-6.662 0-3.688 2.974-6.662 6.662-6.662.773 0 1.507.132 2.193.373V16.18a12.192 12.192 0 00-2.193-.23c-6.936 0-12.562 5.626-12.562 12.562 0 6.937 5.626 12.562 12.562 12.562 6.937 0 12.562-5.625 12.562-12.562V18.6c2.293 1.456 4.999 2.308 7.885 2.308V12.81c-.694 0-1.369-.101-2.018-.299z" />
              </svg>
            </a>


            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100063604657220"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 transition-all duration-300 transform hover:scale-110 hover:rotate-6"
              aria-label="Facebook"
            >
              {/* SVG Content */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                height="36"
                width="36"
                fill="currentColor"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm3 8h-1.35c-.538 0-.65.221-.65.778v1.222h2l-.209 2h-1.791v7h-3v-7h-2v-2h2v-2.308c0-1.769.931-2.692 3.029-2.692h1.971v3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
