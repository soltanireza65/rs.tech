import Card from "@/components/Card";
import {
  Code,
  Code2,
  Container,
  Database,
  Github as Git,
  Server,
  Terminal,
} from "lucide-react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="container mx-auto px-4 py-12">
      {/* Tech Stack Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
        <Card
          title="Frontent"
          iconComponent={<Code2 className="w-6 h-6 text-emerald-500" />}
        >
          <ul className="space-y-2 text-zinc-300">
            <li>• React</li>
            <li>• Next.JS</li>
          </ul>
        </Card>
        <Card
          title="Backend"
          iconComponent={<Terminal className="w-6 h-6 text-emerald-500" />}
        >
          <ul className="space-y-2 text-zinc-300">
            <li>• Node.JS</li>
            <li>• Nest.JS</li>
            <li>• TypeScript</li>
          </ul>
        </Card>

        <Card
          title="Databases"
          iconComponent={<Database className="w-6 h-6 text-emerald-500" />}
        >
          <ul className="space-y-2 text-zinc-300">
            <li>• PostgreSQL</li>
            <li>• MongoDB</li>
          </ul>
        </Card>
        <Card
          title="Architecture"
          iconComponent={<Code2 className="w-6 h-6 text-emerald-500" />}
        >
          <ul className="space-y-2 text-zinc-300">
            <li>• CQRS</li>
            <li>• DDD</li>
            <li>• TDD</li>
          </ul>
        </Card>
      </div>

      {/* Infrastructure Section */}

      <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-zinc-800/30 transition-all duration-300 hover:border-emerald-500/30 hover:bg-black/50 mb-16 hover-expand">
        <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
          <Server className="w-6 h-6 text-emerald-500" />
          Infrastructure & DevOps
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-4">
            <Container className="w-5 h-5 text-emerald-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">Containerization</h3>
              <p className="text-zinc-400">
                Expert in Docker containerization and Kubernetes orchestration
                for scalable microservices architecture.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Git className="w-5 h-5 text-emerald-500 mt-1" />
            <div>
              <h3 className="font-semibold mb-2">CI/CD</h3>
              <p className="text-zinc-400">
                Implementation of robust continuous integration and deployment
                pipelines for automated testing and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Terminal-like Experience Section */}
      <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-zinc-800/30 transition-all duration-300 hover:border-emerald-500/30 hover:bg-black/50 hover-expand">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="font-mono">
          <p className="mb-2">
            <span className="text-emerald-500">$ </span>
            <span className="text-zinc-300">whoami</span>
          </p>
          <p className="text-zinc-400 mb-4">
            Software Engineer specializing in backend development and cloud
            infrastructure
          </p>
          <p className="mb-2">
            <span className="text-emerald-500">$ </span>
            <span className="text-zinc-300">current_focus</span>
          </p>
          <p className="text-zinc-400">
            Building scalable, maintainable, and efficient backend systems
          </p>
        </div>
      </div>
    </main>
  );
};

export default Home;
