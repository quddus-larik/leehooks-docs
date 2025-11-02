"use client"

import { useEffect, useState, useRef } from "react"
import Link from "next/link"
import clsx from "clsx"
import { ScrollArea } from "@/components/ui/scroll-area"

export interface TableAnchorProps {
  tocs: { href: string; level: number; text: string }[]
}

const extractHeadingIds = (tocs: TableAnchorProps["tocs"]) =>
  tocs.map(({ href }) => (href.startsWith("#") ? href.slice(1) : href))

export function TableAnchor({ tocs }: TableAnchorProps) {
  const [activeId, setActiveId] = useState<string | null>(null)
  const [indicatorStyle, setIndicatorStyle] = useState<{
    top: number
    height: number
  } | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault()
    const id = href.startsWith("#") ? href.slice(1) : href
    const target = document.getElementById(id)

    if (target) {
      target.scrollIntoView({ behavior: "smooth" })
      window.history.replaceState(null, "", href)
    }
  }

  useEffect(() => {
    if (!tocs.length) return

    const headingIds = extractHeadingIds(tocs)
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
            break
          }
        }
      },
      { rootMargin: "0px 0px -70% 0px", threshold: 0 }
    )

    headingIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [tocs])

  // Animate indicator position on active link change
  useEffect(() => {
    if (!containerRef.current || !activeId) return
    const activeLink = containerRef.current.querySelector<HTMLAnchorElement>(
      `[data-id="${activeId}"]`
    )
    if (activeLink) {
      const { offsetTop, offsetHeight } = activeLink
      setIndicatorStyle({ top: offsetTop, height: offsetHeight })
    }
  }, [activeId])

  if (!tocs.length) return null

  return (
    <aside className="flex w-full flex-col gap-3 pl-2">
      <h3 className="text-sm font-semibold">On this page</h3>
      <ScrollArea className="pt-0.5 pb-4">
        <div className="relative" ref={containerRef}>
          {/* Animated Indicator */}
          

          <nav className="flex flex-col gap-2.5 text-sm text-foreground relative">
            {tocs.map(({ href, level, text }) => {
              const id = href.startsWith("#") ? href.slice(1) : href
              const isActive = activeId === id

              return (
                <Link
                  key={href}
                  href={href}
                  data-id={id}
                  title={text}
                  aria-label={text}
                  scroll={false}
                  onClick={(e) => handleSmoothScroll(e, href)}
                  className={clsx(
                    "transition-all duration-300 ease-in-out",
                    "hover:text-primary/80",
                    {
                      "pl-0": level === 2,
                      "pl-3": level === 3,
                      "pl-6": level === 4,
                      "text-primary font-medium":
                        isActive,
                      "text-muted-foreground": !isActive,
                    }
                  )}
                >
                  {text}
                </Link>
              )
            })}
          </nav>
        </div>
      </ScrollArea>
    </aside>
  )
}
