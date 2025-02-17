import { Award, Briefcase, FileText, GraduationCap } from "lucide-react";
import React from "react";

type Props = {};

const Resume = (props: Props) => {
  return (
    <main className="container mx-auto px-6 pt-32 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Resume Header */}
        <div className="card p-8 rounded-lg mb-8">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-4">John Doe</h1>
              <p className="text-zinc-400 mb-2">Senior Software Engineer</p>
              <p className="text-zinc-400">San Francisco, CA</p>
            </div>
            <FileText className="w-8 h-8 text-emerald-500" />
          </div>
        </div>

        {/* Experience */}
        <section className="card p-8 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-emerald-500" />
            Professional Experience
          </h2>

          <div className="space-y-8">
            <div className="relative pl-6 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-lg font-semibold">
                Senior Backend Engineer
              </h3>
              <p className="text-emerald-500 mb-2">
                Tech Corp • 2020 - Present
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Led development of microservices architecture</li>
                <li>• Improved system performance by 40%</li>
                <li>• Mentored junior developers</li>
              </ul>
            </div>

            <div className="relative pl-6 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-lg font-semibold">Backend Developer</h3>
              <p className="text-emerald-500 mb-2">
                StartUp Inc • 2018 - 2020
              </p>
              <ul className="space-y-2 text-zinc-400">
                <li>• Developed RESTful APIs</li>
                <li>• Implemented CI/CD pipelines</li>
                <li>• Optimized database performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="card p-8 rounded-lg mb-8">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <GraduationCap className="w-5 h-5 text-emerald-500" />
            Education
          </h2>

          <div className="relative pl-6 border-l border-zinc-800">
            <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5"></div>
            <h3 className="text-lg font-semibold">
              Bachelor of Science in Computer Science
            </h3>
            <p className="text-emerald-500 mb-2">
              University of Technology • 2014 - 2018
            </p>
            <p className="text-zinc-400">
              Focus on Distributed Systems and Software Engineering
            </p>
          </div>
        </section>

        {/* Certifications */}
        <section className="card p-8 rounded-lg">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-3">
            <Award className="w-5 h-5 text-emerald-500" />
            Certifications
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="relative pl-6 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-lg font-semibold">
                AWS Certified Solutions Architect
              </h3>
              <p className="text-emerald-500">2022</p>
            </div>

            <div className="relative pl-6 border-l border-zinc-800">
              <div className="absolute w-3 h-3 bg-emerald-500 rounded-full -left-[6.5px] top-1.5"></div>
              <h3 className="text-lg font-semibold">
                Kubernetes Administrator
              </h3>
              <p className="text-emerald-500">2021</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Resume;
