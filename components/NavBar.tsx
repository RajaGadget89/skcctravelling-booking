import Image from "next/image";

const menuItems = ["Home", "Trips", "About", "Contact"];

export default function NavBar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-900 text-white flex items-center justify-between px-6 py-2 z-50 shadow-md">
      <div className="flex items-center">
        <Image
          src="/logo/logo.png"
          alt="Site Logo"
          width={48}
          height={48}
          className="h-12 w-auto object-contain"
          priority
        />
      </div>
      <ul className="flex gap-6 text-base font-medium">
        {menuItems.map((item) => (
          <li key={item} className="hover:text-blue-300 cursor-pointer transition-colors duration-150">
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
} 