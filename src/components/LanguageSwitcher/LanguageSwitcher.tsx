// components/LanguageSwitcher.tsx
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LanguageSwitcher() {
  const pathname = usePathname();
  
  // Remove current locale from pathname
  const pathWithoutLocale = pathname.replace(/^\/[a-z]{2}\//, '/');
  
  return (
    <div className="language-switcher">
      <Link href={`/de${pathWithoutLocale}`} locale="de">
        DE
      </Link>
      <span> | </span>
      <Link href={`/en${pathWithoutLocale}`} locale="en">
        EN
      </Link>
    </div>
  );
}