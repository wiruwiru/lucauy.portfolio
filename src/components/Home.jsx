import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Github } from 'lucide-react';
import { CatModelCanvas } from "@/components/three/CatModelCanvas";
import { AnimatedArrow } from "./ui/animatedarrow";
import { LocalTime } from "@/components/LocalTime";

export default function Home() {
  return (
    <section className="py-8 text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        Hi i&#39;m{" "}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}>
          Luca
        </motion.span>
      </motion.h1>
      <p className="text-xl mb-8 text-muted-foreground">
        I&#39;m a self-taught developer and beginner from Uruguay, passionate
        about learning and experimenting with new technologies. I have
        experience creating bots in DiscordJS and developing plugins for
        CounterStrikeSharp. Although currently my interest is focused on web
        applications development.
      </p>
      <div className="flex justify-center space-x-4">
        <Button asChild>
          <a
            href="https://discord.com/users/387704105566601226"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#5865F2] hover:bg-[#4752C4] text-white">
            <MessageCircle className="mr-2 h-4 w-4" />
            Discord
          </a>
        </Button>
        <Button asChild>
          <a
            href="https://github.com/wiruwiru"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#24292e] hover:bg-[#2c3238] text-white">
            <Github className="mr-2 h-4 w-4" />
            GitHub
          </a>
        </Button>
      </div>
      <div className="relative w-full flex flex-col lg:flex-row justify-between items-center gap-8">
        <div className="w-full lg:w-[400px] order-1">
          <LocalTime />
        </div>
        <AnimatedArrow className="order-3 lg:order-2" />
        <div className="w-full lg:w-[400px] order-2 lg:order-3">
          <CatModelCanvas />
        </div>
      </div>
    </section>
  );
}