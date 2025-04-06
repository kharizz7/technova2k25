import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Technova. All Rights Reserved.</p>
        
        <p className="text-sm mt-2">
          Developed by{" "}
          <a
            href="https://www.instagram.com/k_harizz/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold hover:underline"
          >
            Bluewolf Networks
          </a>
        </p>
        
        <div className="mt-4">
          {/* <a href="#" className="mx-2 hover:text-gray-400">Privacy Policy</a>
          <a href="#" className="mx-2 hover:text-gray-400">Terms of Service</a>
          <a href="#" className="mx-2 hover:text-gray-400">Contact Us</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
