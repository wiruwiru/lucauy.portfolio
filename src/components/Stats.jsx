import { motion } from "framer-motion";
import { AnimatedSeparator } from "./ui/separator"

export default function Githubstats() {
  
  return (
    <div id="stats" className="py-20 space-y-16">
      <section>
        <motion.h2 
          className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          Technologies & Tools
        </motion.h2>
        <div className="flex justify-center mb-12">
          <img 
            src="https://skillicons.dev/icons?i=html,css,javascript,discordjs,nodejs,nextjs,tailwind,cs,mysql,supabase" 
            alt="Skills" 
            className="w-full max-w-[500px]"/>
        </div>
      </section>
      <AnimatedSeparator />
      <section>
        <motion.h2 
          className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          GitHub Analytics
        </motion.h2>
        <div className="flex flex-col items-center space-y-4">
          <img 
            src="https://github-readme-stats.vercel.app/api?username=wiruwiru&count_private=true&show_icons=true&theme=react&rank_icon=github&border_radius=10" 
            alt="GitHub Stats" 
            className="w-full max-w-[390px]"/>
          <img 
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=wiruwiru&hide=HTML&langs_count=8&layout=compact&theme=react&border_radius=10&size_weight=0.5&count_weight=0.5&exclude_repo=github-readme-stats" 
            alt="Top Languages" 
            className="w-full max-w-[390px]"/>
        </div>
      </section>
    </div>
  );
}