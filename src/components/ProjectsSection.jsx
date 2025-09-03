import { FaGithub } from "react-icons/fa"
import { ArrowRight, ExternalLink } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Feed Design Themes",
        description: "HMIF feed themes with culture-edgy style.",
        image: "/projects/image1.jpeg",
        tags: ["Photoshop", "Design"],
        demoUrl: "https://www.instagram.com/hmifunikom/",
        githubUrl: "#"
    },
    {
        id: 2,
        title: "Feed Design Themes",
        description: "HMIF feeds with robots elegant street style.",
        image: "/projects/image2.jpeg",
        tags: ["Photoshop", "Design"],
        demoUrl: "https://www.instagram.com/gamatif2025/",
        githubUrl: "#"
    },
    {
        id: 3,
        title: "Feed Design Themes",
        description: "HMIF feed themes with edgy-street style.",
        image: "/projects/image3.jpeg",
        tags: ["Photoshop", "Design"],
        demoUrl: "https://www.instagram.com/hmifunikom/",
        githubUrl: "#"
    },
    {
        id: 4,
        title: "Creative Content Planner",
        description: "I create an creative, inovative, and unique design for Pemuda Digital Kreatif.",
        image: "/projects/image4.jpeg",
        tags: ["Photoshop", "Design"],
        demoUrl: "https://www.instagram.com/pemudadigitalkreatif/",
        githubUrl: "#"
    },
    {
        id: 5,
        title: "Creative Gallery",
        description: "I create an creative, experimental, and unique design for my own gallery.",
        image: "/projects/image5.jpeg",
        tags: ["Photoshop", "Design"],
        demoUrl: "https://www.instagram.com/gottaluvblak/",
        githubUrl: "#"
    },
]

export const ProjectsSection = () => {
    return <section id="project" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured
                    <span className="text-primary"> Projects</span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully
                    crafted with attention to detail, performance, and user experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} 
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>
                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                                
                            <h3 className="text-l font-semibold mb-1"> {project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <ExternalLink size={20}/>
                                    </a>
                                    <a href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                    <FaGithub size={20}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/iqbaljnr" 
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check my Github <ArrowRight size={16} />
                    </a>
                </div>

            </div>
        </div>
    </section>
}