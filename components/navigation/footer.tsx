"use client"
import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"

import { Settings } from "@/types/settings"

export function Footer() {
  const { resolvedTheme } = useTheme();
  return (
    <footer className="text-foreground flex h-16 w-full flex-wrap items-center justify-center gap-4 border-t px-2 py-3 text-sm sm:justify-between sm:gap-0 sm:px-4 sm:py-0 lg:px-8">
      <p className="items-center">
        &copy; {new Date().getFullYear()}{" "}
        <Link
          title={Settings.name}
          aria-label={Settings.name}
          className="font-semibold"
          href={Settings.link}
        >
          {Settings.name}
        </Link>
        .
      </p>
      {Settings.branding !== false && (
        <div className="hidden items-center md:block">
          <Link
            className="font-semibold"
            href="https://lixril.vercel.app"
            title="Lixril Studios"
            aria-label="Lixril Studios"
            target="_blank"
          >{
            (resolvedTheme == "dark")? (
            <Image
            src="/logo-dark.svg"
            alt="Lixril logo"
            title="Lixril logo"
            aria-label="Lixril logo"
            priority={false}
            width={30}
            height={30}
            />
            ) : (<Image
            src="/logo-light.svg"
            alt="Lixril logo"
            title="Lixril logo"
            aria-label="Lixril logo"
            priority={false}
            width={30}
            height={30}
            />)
          }
          </Link>
        </div>
      )}
    </footer>
  )
}
