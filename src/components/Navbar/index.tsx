import { useState } from 'react';
import { NAVBAR } from '../../constants/navbar';
import { Menu } from 'iconoir-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav>
      {/* Mobile */}
      <div className="md:hidden flex justify-between items-center p-4">
        <div>
          <a href="/">Logo</a>
        </div>
        <div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <Menu />
          </button>
        </div>
      </div>
      <div
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-4 fixed bg-gradient-main w-full`}
      >
        <ul>
          {NAVBAR.links.map((link) => (
            <li key={link.label} className="py-4 text-center">
              <a href={link.href} className="uppercase">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Desktop */}
      <div></div>
    </nav>
  );
};

export default Navbar;
