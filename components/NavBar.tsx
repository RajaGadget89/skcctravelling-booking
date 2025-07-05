import Image from "next/image";

const menuItems = ["Home", "Trips", "About", "Contact"];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white flex items-center justify-between px-6 py-3 z-50 shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo/logo.png"
          alt="Site Logo"
          width={64}
          height={64}
          className="h-16 w-auto object-contain"
          priority
        />
      </div>
      <ul className="flex-1 flex justify-evenly text-2xl font-bold">
        {menuItems.map((item) => (
          item === "About" ? (
            <li key={item}>
              <a
                href="https://www.songkhlachamber.org"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-300 cursor-pointer transition-colors duration-150"
              >
                {item}
              </a>
            </li>
          ) : (
            <li key={item} className="hover:text-blue-300 cursor-pointer transition-colors duration-150">
              {item}
            </li>
          )
        ))}
      </ul>
    </nav>
  );
} 