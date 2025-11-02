"use client"
import Image from "next/image"
import { Link } from "lib/transition"

import { Settings } from "@/types/settings"
import { useTheme } from "next-themes"

export function Logo() {
  const { resolvedTheme } = useTheme();
  return (
    <Link
      href="/"
      title={`${Settings.title} main logo`}
      aria-label={`${Settings.title} main logo`}
      className="flex items-center gap-2.5"
    >{
      (resolvedTheme == 'dark')? (
      <Image
      src={"/logo-dark.svg"}
        alt={`${Settings.title} main logo`}
        title={`${Settings.title} main logo`}
        aria-label={`${Settings.title} main logo`}
        width={34}
        height={34}
        loading="lazy"
        decoding="async"
        />
      ) : (
      <Image
      src={"/logo-light.svg"}
        alt={`${Settings.title} main logo`}
        title={`${Settings.title} main logo`}
        aria-label={`${Settings.title} main logo`}
        width={34}
        height={34}
        loading="lazy"
        decoding="async"
        />
      )
      }
      <span className="text-md font-semibold">{Settings.title}</span>
    </Link>
  )
}
