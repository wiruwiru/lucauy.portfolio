import Link from "next/link"
import { ThemeToggle } from "./ThemeToggle"
import { AnimatedSeparator } from "./ui/separator"

export default function Header() {
  return (
    <>
      <header className="bg-background dark:bg-black text-foreground dark:text-white">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li><Link href="/" className="hover:text-primary">Home</Link></li>
              <li><Link href="#projects" className="hover:text-primary">Projects</Link></li>
              <li><Link href="#stats" className="hover:text-primary">Stats</Link></li>
            </ul>
          </nav>
          <ThemeToggle />
        </div>
      </header>
      <AnimatedSeparator />
    </>
  )
}