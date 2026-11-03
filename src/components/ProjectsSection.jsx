import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cardclan",
    description: "CardClan is an innovative outreach platform that replaces traditional emails with personalized greeting card experiences.",
    contribution: [
      "Translated product requirements into functional features and shipped improvements across the platform.",
      "Worked closely with Product, Design, and Marketing teams to align execution with business goals.",
      "Participated in sprint planning and code reviews to keep delivery efficient and maintainable.",
      "Improved user experience by refining workflows and strengthening overall platform functionality.",
    ],
    image: "/projects/project1.png",
    tags: ["React","Node.js","MongoDB","Redux"],
    demoUrl: "https://cardclan.io/",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Blonk",
    description:"Blonk.co is an AI-powered executive search and recruitment platform focused on matching senior professionals and hiring leaders. The company combines traditional executive recruiting with a “Tinder-style” matching experience using AI, swipe-based interactions, direct messaging, and video profiles.",
    contribution: [
  "Developed and enhanced key features for an AI-powered executive search and recruitment platform focused on senior talent matching.",
  "Built and improved the matching experience by supporting swipe-based interactions, direct messaging, and video profile workflows.",
  "Collaborated with Product and Design teams to turn business requirements into intuitive user experiences for both hiring leaders and candidates.",
  "Contributed to platform functionality around search, engagement, and user interaction to improve the overall recruitment journey.",
  "Worked across frontend and application logic to help deliver a scalable, modern experience for executive hiring."
],
    image: "/projects/project2.png",
    tags: ["GraphQL","React","React Native","MongoDB","Node.js"],
    demoUrl: "https://blonk.co",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Guest Guru",
    description:
      "GuestGuru is an AI‑powered chatbot platform designed for short‑term rental hosts and property managers to automate guest communication across marketplaces like Airbnb, Booking.com, and VRBO. It handles common guest inquiries 24/7, replies in natural language, and learns from host‑approved responses over time, significantly reducing manual messaging workload. The system integrates with property management tools to centralize conversations, trigger alerts for urgent issues, and help hosts manage larger portfolios while improving response speed and guest experience.",
      contribution: [
  "Led the end-to-end integration of property-management systems, including Guesty, Hostaway, Zeevou, Tokeet, and OwnerRez.",
  "Designed a unified property data schema to simplify onboarding and improve platform consistency across integrations.",
  "Introduced escalation workflows to help hosts resolve issues faster and more efficiently.",
  "Implemented a tiered pricing model to support different business needs and customer segments.",
  "Built a unified inbox to consolidate guest messages from multiple communication channels.",
  "Delivered a clean, intuitive UI that made property management simpler for hosts at any scale."
],
    image: "/projects/project3.png",
    tags: ["React","Node.js","Supabase","Next.js"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-primary mb-2">My Contribution</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project?.contribution?.map((item) => (
                      <li key={item} className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/feemix93"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
