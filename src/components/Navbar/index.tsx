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
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} py-4 fixed bg-gradient-main w-full font-heading`}
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
      <div className="hidden md:flex justify-between items-center p-4 w-full bg-gradient-main">
        <div>
          <a href="/">Logo</a>
        </div>
        <div>
          {NAVBAR.links.map((link) => (
            <a key={link.label} href={link.href} className="uppercase px-4 font-heading">
              {link.label}
            </a>
          ))}
        </div>
        <div className="bg-border text-black px-4 py-2 rounded font-heading">
          <a href={NAVBAR.cta.href}>{NAVBAR.cta.label}</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
