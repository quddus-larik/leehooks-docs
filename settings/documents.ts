import { Paths } from "@/lib/pageroutes"

export const Documents: Paths[] = [
  {
    heading: "Introduction",
    title: "Basic Setup",
    href: "/basic-setup",
    items: [
      {
        title: "Installation",
        href: "/installation",
      }
    ],
  },
  {
    spacer: true,
  },
  {
    heading: "leehooks",
    title: "Hooks",
    href: "/hooks",
    items: [
      {
        title: "useActionState",
        href: "/use-action-state"
      },
      {
        title: "useWindowSize",
        href: "/use-window-size"
      }
    ]
  }
]
