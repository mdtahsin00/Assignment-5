export default function Footer() {
  return (
    <footer className=" border-gray-300 border-t-2">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-pink-400 to-purple-600 text-xl font-bold text-white">
                DS
              </div>
              <div>
                <h2 className="text-xl font-bold">Dev <span className="text-pink-500">Stack</span></h2>
                <p className="text-sm">
                  Learn modern technologies with curated resources and build your
                  developer journey.
                </p>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-6 flex gap-4">
              <a
                href="#"
                className="rounded-full bg-pink-400 p-3 transition hover:bg-purple-500"
              >
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.65.5.5 5.65.5 12A11.5 11.5 0 008.36 22.93c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.56-.3-5.25-1.28-5.25-5.7 0-1.26.45-2.3 1.19-3.12-.12-.3-.52-1.5.11-3.13 0 0 .98-.31 3.2 1.19a11.1 11.1 0 015.82 0c2.22-1.5 3.2-1.19 3.2-1.19.63 1.63.23 2.83.11 3.13.74.82 1.19 1.86 1.19 3.12 0 4.43-2.69 5.4-5.26 5.69.41.36.77 1.08.77 2.18v3.23c0 .31.21.67.8.56A11.5 11.5 0 0023.5 12C23.5 5.65 18.35.5 12 .5z" />
                </svg>
              </a>

              <a
                href="#"
                className="rounded-full bg-pink-400 p-3 transition hover:bg-purple-500"
              >
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 5.92c-.74.33-1.53.55-2.36.65a4.12 4.12 0 001.8-2.27 8.2 8.2 0 01-2.6.99 4.1 4.1 0 00-6.98 3.73A11.64 11.64 0 013.39 4.9a4.1 4.1 0 001.27 5.47 4.07 4.07 0 01-1.86-.51v.05a4.1 4.1 0 003.29 4.02c-.45.12-.92.17-1.4.07a4.1 4.1 0 003.83 2.85A8.24 8.24 0 012 19.54 11.62 11.62 0 008.29 21.5c7.55 0 11.68-6.26 11.68-11.69v-.53c.8-.57 1.5-1.28 2.03-2.1z" />
                </svg>
              </a>

              <a
                href="#"
                className="rounded-full bg-pink-400 p-3 transition hover:bg-purple-600"
              >
                <svg
                  className="h-5 w-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1.02 4.6 1.02 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zM1.5 8h3V22h-3V8zm7 0h2.88v1.91h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59V22h-3v-7.05c0-1.68-.03-3.84-2.34-3.84-2.35 0-2.71 1.83-2.71 3.72V22h-3V8z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Product</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Technologies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Updates
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="pb-10">
            <h3 className="mb-4 font-semibold text-white">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Cookies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-cyan-400">
                  Licenses
                </a>
              </li>
            </ul>
          </div>
        </div>
<hr />
        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-gray-400 md:flex-row">
          <p>© 2026 DevStack. All rights reserved.</p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-cyan-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-cyan-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}