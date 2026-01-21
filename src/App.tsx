import { useState, useEffect } from 'react';
import { ChevronDown, Target, TrendingUp, Mail, Phone, Linkedin, Award, Users, Lightbulb, Rocket, ExternalLink, X } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const sections = ['hero', 'summary', 'experience', 'projects', 'skills', 'certifications', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const summary = "Machine Learning & AI Engineer with 2+ years delivering production-ready models, scalable data systems, and high-impact research solutions across academic and industry settings. Improved predictive accuracy to 96%, reduced AWS query latency by 60%, and cut end-to-end grading workflows by 99% through multi-agent LLM architectures and distributed pipelines. Experienced in Python, PyTorch, Spark, LangChain, and cloud-native ML systems.";

  const experience = [
  {
    company: "USC Marshall School of Business",
    role: "Graduate Research Assistant",
    location: "Los Angeles, CA",
    dates: "Oct 2025 – Dec 2025",
    highlights: [
      "Designed a reflexive multi-agent grading system using GPT, Gemini, and Claude with shared memory and feedback loops for adaptive rubric-aligned grading.",
      "Fine-tuned GPT-3.5 on 2K+ evaluations and integrated a custom MLA compliance tool, improving feedback accuracy by 60%.",
      "Validated the pipeline achieving 94% rubric alignment and 99% reduction in grading time (12 min → 30 sec)."
    ]
  },
  {
    company: "USC Alfred E. Mann School of Pharmacy and Pharmaceutical Sciences",
    role: "Graduate Research Assistant",
    location: "Los Angeles, CA",
    dates: "Aug 2025 – Dec 2025",
    highlights: [
      "Architected a secure, scalable genomics data platform on AWS from 0→100 enabling global researcher access via APIs and web apps.",
      "Automated 15TB+ distributed data pipelines reducing manual effort by 80% and doubling throughput.",
      "Reduced query latency by 25% and cloud costs by 30% using caching, query tuning, and lifecycle policies."
    ]
  },
  {
    company: "EmpiriLaw",
    role: "Data Scientist Intern",
    location: "Los Angeles, CA",
    dates: "Jun 2025 – Aug 2025",
    highlights: [
      "Built a Legal AI prediction system using Graph RAG with MMR retrieval over 200K+ Supreme Court petitions.",
      "Extracted 30+ audio-linguistic features from 500+ courtroom recordings for behavioral modeling.",
      "Improved prediction accuracy by 40% and explainability by 90% using knowledge graphs."
    ]
  },
  {
    company: "Vosyn",
    role: "Machine Learning Engineer Intern",
    location: "Chicago, IL",
    dates: "Mar 2025 – Jun 2025",
    highlights: [
      "Fine-tuned multilingual instruction models using LoRA/QLoRA PEFT methods.",
      "Reduced GPU memory usage by 70% on a 671B-parameter model through quantization.",
      "Achieved BLEURT score of 0.68 improving translation quality for low-resource languages."
    ]
  },
  {
    company: "Tata Capital",
    role: "Data Engineering Intern",
    location: "Mumbai, India",
    dates: "Jan 2022 – Jun 2022",
    highlights: [
      "Optimized scalable big data pipelines and analytics dashboards for fintech workflows.",
      "Built PySpark pipelines for terabyte-scale data and migrated 5+ legacy ETL jobs to Spark 3.0 improving efficiency by 65%.",
      "Developed Tableau dashboards accelerating business decision-making by 40%."
    ]
  }
];

  const projects = [
  {
    title: "Cross-Lingual Hate Speech Detection",
    subtitle: "XLM-RoBERTa · Multi-task Learning",
    category: "NLP Research",
    introduction: "Built a multilingual hate speech detection system optimized for zero-shot learning on low-resource languages.",
    problem: "Low-resource languages suffer from limited labeled datasets and weak generalization.",
    objective: "Improve cross-lingual generalization and classification accuracy.",
    methodology: [
      "Fine-tuned XLM-RoBERTa for multilingual classification.",
      "Implemented multi-task learning combining hate, offensive, and sentiment labels.",
      "Benchmarked against state-of-the-art baselines."
    ],
    results: [
      "Improved accuracy by 15%.",
      "Achieved Macro F1 = 0.79 on Hindi datasets."
    ],
    conclusion: "Demonstrated robust multilingual generalization for low-resource NLP tasks."
  },
  {
    title: "MCP-Powered AI Copilot",
    subtitle: "LLMs · Workflow Automation",
    category: "Enterprise AI",
    introduction: "Built an enterprise AI copilot using Model Context Protocol (MCP) for cross-platform workflow automation.",
    problem: "Context switching across tools reduced productivity.",
    objective: "Unify workflows with intelligent automation.",
    methodology: [
      "Developed MCP server exposing 40+ primitives.",
      "Integrated Llama 3 70B with persistent context memory.",
      "Connected GitHub, Slack, JIRA, Datadog, and MySQL."
    ],
    results: [
      "Reduced manual intervention by 80%.",
      "Increased workflow throughput by 3×."
    ],
    conclusion: "Validated scalable enterprise-grade AI automation."
  }
];

  const skillCategories = [
  { icon: Target, title: 'Programming', skills: ['Python', 'SQL', 'R', 'Scala', 'SAS', 'MATLAB', 'Java', 'JavaScript'] },
  { icon: TrendingUp, title: 'Frameworks & Libraries', skills: ['NumPy', 'Pandas', 'Django', 'Pydantic', 'Scikit-learn', 'PyTorch', 'LangChain', 'LangGraph', 'Fast MCP'] },
  { icon: Users, title: 'Big Data & Workflows', skills: ['Apache Spark', 'Hadoop', 'Airflow', 'Kafka', 'Docker', 'Kubernetes'] },
  { icon: Lightbulb, title: 'Cloud & Certifications', skills: ['AWS', 'GCP', 'SageMaker', 'Bedrock', 'EMR', 'Glue', 'AWS Cloud Practitioner', 'Google Data Analytics', 'IBM Data Science'] }
];

  const certifications = [
  'AWS Certified Cloud Practitioner',
  'Google Data Analytics',
  'IBM Data Science'
];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-brown/20">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-display text-black tracking-wide">PRATHAM SOLANKI</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'summary', label: 'Summary' },
                { id: 'experience', label: 'Experience' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
            
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`text-sm font-light tracking-wide transition-colors duration-300 ${
                    activeSection === item.id ? 'text-black font-medium' : 'text-brown hover:text-black'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="mb-12">
              <img 
                src="images/image.png"
                alt="Harpreet Kaur"
                className="w-36 h-36 rounded-full mx-auto mb-6 object-cover border-4 border-brown/30 shadow-lg"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-display text-black mb-6 tracking-wide">
              PRATHAM SOLANKI
            </h1>
            <div className="text-lg text-brown mb-2 font-light tracking-widest">
            Machine Learning Engineer | AI Engineer | ML/AI Data Scientist
            </div>
            <div className="text-sm uppercase tracking-[0.3em] text-brown/80 mb-1">
              LOS ANGELES, CA · USA
            </div>
            <div className="w-24 h-0.5 bg-brown mx-auto mb-10"></div>
            <p className="text-lg text-brown mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {summary}
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button 
                onClick={() => scrollToSection('experience')}
                className="bg-black text-white px-10 py-4 font-light tracking-wide hover:bg-brown transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                🔧 VIEW EXPERIENCE
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border border-black text-black px-10 py-4 font-light tracking-wide hover:bg-black hover:text-white transition-all duration-300"
              >
                📬 CONTACT
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            {[
              { label: 'UPTIME SUPPORTED', value: '99%+', detail: 'Global SaaS + Ops' },
              { label: 'AUTOMATION IMPACT', value: '45%', detail: 'Tier-1 deflection' },
              { label: 'TOOLKIT', value: 'Python · SQL · AWS', detail: 'ServiceNow · Splunk' }
            ].map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-sm shadow-sm border border-brown/10">
                <div className="text-xs tracking-widest text-brown/70 mb-2">{stat.label}</div>
                <div className="text-3xl font-display text-black mb-1">{stat.value}</div>
                <div className="text-sm text-brown font-light">{stat.detail}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <ChevronDown 
              className="w-6 h-6 text-brown/60 mx-auto animate-bounce cursor-pointer hover:text-black transition-colors"
              onClick={() => scrollToSection('summary')}
            />
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section id="summary" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SUMMARY</h2>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Tier-1/Tier-2 support specialist who blends automation, cloud awareness, and documentation discipline to keep hybrid environments healthy.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                icon: Target,
                title: 'Incident Readiness',
                detail: 'Designed reflexive multi-agent LLM systems with shared memory, autonomous coordination, and feedback loops.'
              },
              {
                icon: Rocket,
                title: 'Automation Mindset',
                detail: 'Built scalable distributed pipelines for genomics, NLP, and ML workloads using Spark, cloud storage, and orchestration.'
              },
              {
                icon: Lightbulb,
                title: 'People-First Support',
                detail: 'Delivered high-impact applied AI research translating models into measurable production improvements.'
              }
            ].map((card, index) => (
              <div key={index} className="bg-cream p-8 rounded-sm shadow-sm border border-brown/10 text-center">
                <div className="w-14 h-14 bg-black mx-auto mb-6 flex items-center justify-center">
                  <card.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-display text-black mb-4 tracking-wide">{card.title.toUpperCase()}</h3>
                <p className="text-brown leading-relaxed font-light">{card.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">WORK EXPERIENCE</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-3xl mx-auto font-light">
              Focused on resilient infrastructure, accessible support, and measurable uptime.
            </p>
          </div>
          <div className="space-y-10">
            {experience.map((role, index) => (
              <div key={index} className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-display text-black tracking-wide">{role.role}</h3>
                    <p className="text-brown font-medium">{role.company}</p>
                  </div>
                  <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                    {role.location} · {role.dates}
                  </div>
                </div>
                <ul className="space-y-3">
                  {role.highlights.map((highlight, i) => (
                    <li key={i} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">PROJECTS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Automation, analytics, and infrastructure projects that pair uptime goals with user empathy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index}
                className="bg-cream p-6 rounded-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => setSelectedProject(index)}
              >
                <div className="mb-3">
                  <span className="text-xs font-medium text-brown bg-white px-3 py-1 tracking-wide">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-xl font-display text-black mb-3 tracking-wide leading-tight">
                  {project.title}
                </h3>
                <p className="text-sm text-brown mb-4 font-light">
                  {project.subtitle}
                </p>
                <p className="text-brown leading-relaxed font-light text-sm line-clamp-3">
                  {project.introduction}
                </p>
                <div className="mt-4 flex items-center text-brown hover:text-black transition-colors">
                  <span className="text-sm font-light">View Details</span>
                  <ExternalLink className="w-4 h-4 ml-2" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-brown font-light">
              Need implementation breakdowns or architecture diagrams?
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-black ml-1 font-regular italic"
              >
                Reach out for detailed case studies and logs.
              </button>
            </p>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm">
            <div className="sticky top-0 bg-white border-b border-brown/20 p-6 flex items-center justify-between">
              <h2 className="text-2xl font-display text-black tracking-wide">
                {projects[selectedProject].title}
              </h2>
              <button 
                onClick={() => setSelectedProject(null)}
                className="text-brown hover:text-black transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-8">
              <div>
                <span className="text-sm font-medium text-brown bg-cream px-3 py-1 tracking-wide">
                  {projects[selectedProject].category}
                </span>
                <p className="text-brown font-light mt-2">
                  {projects[selectedProject].subtitle}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">INTRODUCTION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].introduction}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">PROBLEM STATEMENT</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].problem}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">OBJECTIVE</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].objective}
                </p>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">METHODOLOGY</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].methodology.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">RESULTS</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].results.map((item, index) => (
                    <li key={index} className="text-brown leading-relaxed font-light flex items-start">
                      <span className="text-brown mr-3">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-display text-black mb-3 tracking-wide">CONCLUSION</h3>
                <p className="text-brown leading-relaxed font-light">
                  {projects[selectedProject].conclusion}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Skills Section */}
      <section id="skills" className="py-24 bg-cream">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">SKILLS</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Hands-on support, automation, and reporting toolkit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {skillCategories.map((category, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-black mx-auto mb-8 flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-display text-black mb-6 tracking-wide">{category.title.toUpperCase()}</h3>
                <ul className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="text-sm text-brown font-light">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-8 tracking-wide">CERTIFICATIONS</h2>
            <p className="text-lg text-brown max-w-2xl mx-auto font-light">
              Credentials that reinforce day-to-day systems work.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center bg-cream p-6 rounded-sm border border-brown/10 shadow-sm">
                <Award className="w-6 h-6 text-brown mr-4" />
                <span className="text-brown font-medium">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-display text-black mb-6 tracking-wide">EDUCATION</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-6"></div>
          </div>
          <div className="bg-white p-8 rounded-sm shadow-sm border border-brown/10">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-2xl font-display text-black tracking-wide">San Francisco Bay University</h3>
                <p className="text-brown font-medium">Master of Science · Computer Science</p>
              </div>
              <div className="text-sm text-brown/80 font-light mt-2 md:mt-0">
                Fremont, CA · Apr 2024 – Dec 2025
              </div>
            </div>
            <p className="text-brown leading-relaxed font-light">
              Coursework blending distributed systems, cloud design, and analytics—reinforcing the infrastructure mindset I bring to support roles.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display mb-8 tracking-wide">CONTACT</h2>
            <div className="w-16 h-0.5 bg-brown mx-auto mb-8"></div>
            <p className="text-xl text-white/80 max-w-3xl mx-auto font-light">
              Let’s troubleshoot, automate, or brainstorm how to keep your environment resilient.
            </p>
          </div>

          <div className="flex flex-col items-center space-y-8 max-w-md mx-auto">
            <div className="flex items-center">
              <Phone className="w-6 h-6 text-brown mr-6" />
              <a 
                href="tel:+19257655000"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                +1 (949) 213-8321
              </a>
            </div>
            <div className="flex items-center">
              <Linkedin className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://www.linkedin.com/in/pratham-solanki12/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
            <div className="flex items-center">
              <Mail className="w-6 h-6 text-brown mr-6" />
              <a 
                href="mailto:prathamsolanki2803@gmail.com"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                prathamsolanki2803@gmail.com
              </a>
            </div>
            {/* <div className="flex items-center">
              <ExternalLink className="w-6 h-6 text-brown mr-6" />
              <a 
                href="https://git"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 font-light hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brown text-white/80 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-light tracking-wide">
            © 2025 pratham solanki · Machine Learning Engineer .
            </p>
        </div>
      </footer>
    </div>
  );
}

export default App;