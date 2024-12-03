import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSeparator } from "./ui/separator";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Githubstats() {
  const [showNames, setShowNames] = useState(false);

  const technologies = [
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Discord.js', icon: 'discordjs' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Tailwind', icon: 'tailwind' },
    { name: 'C#', icon: 'cs' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Supabase', icon: 'supabase' }
  ];
  
  return (
    <div id="stats" className="py-20 space-y-16">
      <section>
        <motion.h2 
          className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>Technologies & Tools</motion.h2>
        <div className="flex items-center justify-center space-x-2 mb-6">
          <Switch id="show-names" checked={showNames} onCheckedChange={setShowNames} />
          <Label htmlFor="show-names">{showNames ? "Show icons" : "Show names"}</Label>
        </div>
        {showNames ? (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 max-w-[600px] mx-auto text-center px-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="px-2 py-2 rounded-lg bg-secondary/10 font-medium hover:bg-secondary/20 transition-colors truncate text-sm md:text-base">
                {tech.name}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center mb-12">
            <img src={`https://skillicons.dev/icons?i=${technologies.map(t => t.icon).join(',')}`} alt="Skills" className="w-full max-w-[500px]"/>
          </div>
        )}
      </section>
      <AnimatedSeparator />
      <section>
        <motion.h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>GitHub Analytics</motion.h2>
        <div className="flex flex-col items-center space-y-4">
          <img src="https://github-readme-stats.vercel.app/api?username=wiruwiru&show_icons=true&theme=react&rank_icon=github&border_radius=10" alt="GitHub Stats" className="w-full max-w-[390px]"/>
          <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=wiruwiru&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5" alt="Top Languages" className="w-full max-w-[390px]"/>
        </div>
      </section>
    </div>
  );
}