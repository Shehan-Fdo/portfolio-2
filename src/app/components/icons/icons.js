import Image from 'next/image';
import Link from 'next/link';

export const GithubIcon = () => (
  <Link href="https://github.com/Shehan-Fdo" target="_blank" rel="noopener noreferrer">
    <Image
      src="/icons/github.svg"
      alt="Github Icon"
      width={30}
      height={30}
      className="-rotate-90 transition duration-200 hover:invert hover:brightness-0"
    />
  </Link>
);

export const FBIcon = () => (
  <Link href="https://web.facebook.com/profile.php?id=61553234229353" target="_blank" rel="noopener noreferrer">
    <Image
      src="/icons/fb.svg"
      alt="Facebook Icon"
      width={30}
      height={30}
      className="-rotate-90 transition duration-200 hover:invert hover:brightness-0"
    />
  </Link>
);

export const XIcon = () => (
  <Link href="https://x.com/shehankavindu19" target="_blank" rel="noopener noreferrer">
    <Image
      src="/icons/x.svg"
      alt="X Icon"
      width={30}
      height={30}
      className="-rotate-90 transition duration-200 hover:invert hover:brightness-0"
    />
  </Link>
);
