'use client';

import { useState } from 'react';
import Link from 'next/link';

const Button = ({ label, href, isActive, isInverted, onMouseEnter, onMouseLeave }) => {
  const baseClasses = "px-8 py-2 rounded-4xl border border-black transition duration-200 inline-block font-semibold cursor-pointer";

  let classes = "";

  if (isActive) {
    classes = "bg-white text-black";
  } else if (isInverted) {
    classes = "bg-[#9810FA] text-white";
  } else {
    classes = label === "About" ? "bg-[#9810FA] text-white" : "bg-white text-black";
  }

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`${baseClasses} ${classes} hover:opacity-90`}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {label}
      </a>
    </Link>
  );
};

const Buttons = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="flex space-x-4">
      <Button
        href="/about"
        label="About"
        isActive={hovered === 'about'}
        isInverted={hovered === 'contact'}
        onMouseEnter={() => setHovered('about')}
        onMouseLeave={() => setHovered(null)}
      />
      <Button
        href="/contact"
        label="Contact"
        isActive={hovered === 'contact'}
        isInverted={hovered === 'about'}
        onMouseEnter={() => setHovered('contact')}
        onMouseLeave={() => setHovered(null)}
      />
    </div>
  );
};

export default Buttons;
