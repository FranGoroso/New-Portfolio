import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} Fran Goroso. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://github.com/FranGoroso"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-goroso-609796266/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:contacto@frangoroso.com"
            className="text-gray-600 hover:text-blue-600 transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
