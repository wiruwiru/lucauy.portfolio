import { AnimatedSeparator } from "./ui/separator"

export default function Footer() {
  return (
    <>
      <AnimatedSeparator />
      <footer className="bg-background dark:bg-black text-foreground dark:text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <p>Luca&#39;s Copyright &copy; {new Date().getFullYear()}.</p>
        </div>
      </footer>
    </>
  )
}