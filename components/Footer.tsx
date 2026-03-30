export default function Footer() {
  return (
    <footer className="bg-dark text-center py-10 px-6 text-sm border-t border-gold/10 pb-28">
      <div className="flex items-center justify-center gap-4 mb-4">
        <a href="/terms" className="text-gray-500 hover:text-gold transition-colors">
          Terms of Service
        </a>
        <span className="text-gray-700">·</span>
        <a href="/privacy" className="text-gray-500 hover:text-gold transition-colors">
          Privacy Policy
        </a>
        <span className="text-gray-700">·</span>
        <a href="mailto:info@laragoldman.com" className="text-gray-500 hover:text-gold transition-colors">
          Contact
        </a>
      </div>
      <p className="text-gray-700">
        &copy; {new Date().getFullYear()} Human Potential Global LLC. All rights reserved.
      </p>
    </footer>
  );
}
