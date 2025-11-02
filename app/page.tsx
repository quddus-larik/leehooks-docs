import { Link } from "lib/transition"

import { PageRoutes } from "@/lib/pageroutes"
import { buttonVariants } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <section className="flex min-h-[86.5vh] flex-col items-center justify-center px-2 py-8 text-center">
      <p className="text-orange-400 text-sm">Home Page is under development</p>
      <Image src={"/images/banner.png"} width={"1200"} height={"600"} className="rounded-lg" alt="lixril" aria-label="lixril docs" />
      <p className="text-foreground my-8 max-w-full sm:text-base">
        In the world of application development, speed is the ultimate advantage. We are a cutting-edge Platform-as-a-Service (PaaS) built to eliminate deployment friction. Our platform gives developers the power to move from code to production with unprecedented agility, while ensuring enterprise applications have the scalability and stability needed to manage massive growth. Stop managing infrastructure, and start growing your business.
      </p>

      <div className="flex items-center gap-5">
        <Link
          href={`/docs${PageRoutes[0].href}`}
          className={buttonVariants({ className: "px-6", size: "lg" })}
        >
          Get Started
        </Link>
      </div>
    </section>
  )
}
