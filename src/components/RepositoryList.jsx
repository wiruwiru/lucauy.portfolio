import { useState, useEffect } from "react"

const BLACKLIST = ["wiruwiru", "Stats", "cms"]

export default function RepositoryList() {
  const [repositories, setRepositories] = useState([])
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

  if (loading) {
    return <div className="text-center py-20">Loading projects...</div>
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>
  }

  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {repositories.map((repo) => (
          <div key={repo.id} className="border border-border rounded-lg p-6 hover:shadow-lg transition-shadow bg-card flex flex-col">
            <h3 className="text-xl font-semibold mb-2">{repo.name}</h3>
            <p className="text-muted-foreground mb-4 flex-grow">{repo.description || "No description available"}</p>
            <div className="text-center">
              <a 
                href={repo.html_url} 
                className="inline-block text-primary hover:underline px-4 py-2 border border-primary rounded-md transition-colors hover:bg-primary hover:text-primary-foreground"
                target="_blank" 
                rel="noopener noreferrer">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}