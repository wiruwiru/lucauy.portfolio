import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

const BLACKLIST = ["wiruwiru", "Stats", "cms"]
const INITIAL_DISPLAY_COUNT = 6

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([])
  const [displayCount, setDisplayCount] = useState(INITIAL_DISPLAY_COUNT)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const response = await fetch("https://api.github.com/users/wiruwiru/repos")
        if (!response.ok) {
          throw new Error("Failed to fetch repositories")
        }
        const data = await response.json()
        const filteredRepos = data
          .filter(repo => !repo.private && !BLACKLIST.includes(repo.name))
          .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
        setRepositories(filteredRepos)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching repositories:", error)
        setError("Failed to load repositories. Please try again later.")
        setLoading(false)
      }
    }

    fetchRepositories()
  }, [])

  const toggleDisplayCount = () => {
    setDisplayCount(prevCount => 
      prevCount === INITIAL_DISPLAY_COUNT ? repositories.length : INITIAL_DISPLAY_COUNT
    )
  }

  if (loading) {
    return <div className="text-center py-20">Loading projects...</div>
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>
  }

  const displayedRepositories = repositories.slice(0, displayCount)
  const isShowingAll = displayCount === repositories.length

  return (
    <section id="projects" className="py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedRepositories.map((repo) => (
          <div key={repo.id} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{repo.description || "No description available"}</p>
            <div className="text-center">
              <a href={repo.html_url} className="inline-block text-primary hover:underline px-4 py-2 border border-primary rounded-md transition-colors hover:bg-primary hover:text-primary-foreground" target="_blank" rel="noopener noreferrer">View Project</a>
            </div>
          </div>
        ))}
      </div>
      {repositories.length > INITIAL_DISPLAY_COUNT && (
        <div className="text-center mt-8">
          <Button onClick={toggleDisplayCount}>
            {isShowingAll ? "Show Less" : "Load More"}
          </Button>
        </div>
      )}
    </section>
  )
}