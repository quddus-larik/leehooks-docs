import { PropsWithChildren } from "react"
import { cn } from "@/lib/utils" // Assuming cn is a utility for merging classes

// Placeholder for icons (you'd replace this with actual imports)
const IconInfo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Info Icon Path */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
  </svg>
)
const IconCheck = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Success Icon Path */}
    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)
const IconWarning = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Warning Icon Path */}
    <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
  </svg>
)
const IconError = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    {/* Danger Icon Path */}
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
  </svg>
)

type AlertType = "info" | "success" | "warning" | "danger"

type AlertProps = PropsWithChildren & {
  title?: string
  type?: AlertType
}

// 1. Define color/icon map for clean logic
const AlertMap: Record<
  AlertType,
  { icon: React.FC<{ className?: string }>; classes: string }
> = {
  info: {
    icon: IconInfo,
    classes:
      "bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200 border-blue-200 dark:border-blue-900 [&>svg]:text-blue-500 dark:[&>svg]:text-blue-300",
  },
  success: {
    icon: IconCheck,
    classes:
      "bg-green-50 text-green-800 dark:bg-green-950 dark:text-green-200 border-green-200 dark:border-green-900 [&>svg]:text-green-500 dark:[&>svg]:text-green-300",
  },
  warning: {
    icon: IconWarning,
    classes:
      "bg-orange-50 text-orange-800 dark:bg-orange-950 dark:text-orange-200 border-orange-200 dark:border-orange-900 [&>svg]:text-orange-500 dark:[&>svg]:text-orange-300",
  },
  danger: {
    icon: IconError,
    classes:
      "bg-red-50 text-red-800 dark:bg-red-950 dark:text-red-200 border-red-200 dark:border-red-900 [&>svg]:text-red-500 dark:[&>svg]:text-red-300",
  },
}

export default function Alert({
  children,
  title,
  type = "info",
}: AlertProps) {
  const { icon: Icon, classes } = AlertMap[type]
  const defaultTitle =
    type.charAt(0).toUpperCase() + type.slice(1) // Info, Success, etc.

  return (
    <div
      // 2. Use flexbox for layout, consistent padding, and border
      className={cn(
        "flex gap-3 rounded-lg border p-4 text-sm",
        classes
      )}
      role="alert" // Accessibility
    >
      {/* 3. Icon on the left */}
      
      {/* 4. Content Area */}
      <div className="flex-grow">
        <p className="mb-1 font-semibold">
          {title ?? defaultTitle}
        </p>
        <div>
          {/* Children is the body content */}
          {children}
        </div>
      </div>
      <Icon className="mt-0.5 h-5 w-5 flex-shrink-0" />
    </div>
  )
}