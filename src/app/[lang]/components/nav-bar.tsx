import LocaleSwitcher from "@/app/[lang]/components/locale-switcher";
import Link from "next/link";
import type { Locale } from "../../../../i18n-config";

type Props = {
  lang: Locale;
}

function NavBar({ lang }: Props) {
  return (
    <header className="mx-auto w-full px-4 md:px-12 bg-white">
      <div className="max-w-6xl flex mx-auto justify-between items-center py-4">
        <Link href={`/${lang}`} className="font-hero block rounded-lg border-2 border-zinc-600 hover:border-teal-500 text-teal-900 hover:text-teal-600 font-bold w-10 h-10 pt-1 ps-0.5 text-2xl shadow-zinc-400/50 shadow-sm hover:shadow-none transition-all ease-in-out">J</Link>
        <div className="flex end">
          <LocaleSwitcher lang={lang} />
        </div>
      </div>
    </header>
  );
}

export default NavBar;