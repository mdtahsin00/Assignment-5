export default function Navbar() {
  return (
    <div className="border-b border-[#F1F5F9]">
    <nav className="flex justify-between container mx-auto items-center p-5">
      <div>
        <img src="/public/assets/logo-text.png" alt="Logo" />
      </div>
      <div>
        <ol className="flex gap-5 items-center">
          <li className="text-pink-600">home</li>
          <li>Technologies</li>
          <li>Project</li>
          <li>About</li>
          <li>Contact</li>
        </ol>
      </div>
      <div className="flex gap-4">
        <button >Sign In</button>
        <button className="bg-pink-600 text-white px-3 py-2 rounded-4xl">Sign Up</button>
      </div>
    </nav>
    </div>
  );
}
