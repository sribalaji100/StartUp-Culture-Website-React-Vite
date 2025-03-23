
import { GraduationCap, Users, Target, Rocket } from "lucide-react";

const Programs = () => {
  return (
    <div className="pt-32 pb-16">
      {/* Hero Section */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-8">
            College Startup Programs
          </span>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            Empowering Student
            <span className="text-primary"> Entrepreneurs</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Transforming innovative ideas into successful ventures through
            comprehensive support and mentorship.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Startup Academy</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Intensive 12-week program teaching fundamental startup skills and
                business development.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Business Model Development
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Marketing Strategy
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Financial Planning
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Mentorship Network</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Connect with experienced entrepreneurs and industry experts for
                guidance and support.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  1-on-1 Mentoring
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Industry Networking
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Expert Workshops
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Incubation Program</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Comprehensive support including workspace, funding, and resources
                for early-stage startups.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Co-working Space
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Seed Funding
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Legal Support
                </li>
              </ul>
            </div>

            <div className="glass-card p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Accelerator Program</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Fast-track your startup's growth with intensive support and
                investor connections.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Growth Strategy
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Investor Matching
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2" />
                  Scale-up Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="glass-card p-8 rounded-xl text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Join our programs and transform your innovative ideas into successful
              ventures.
            </p>
            <button className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              Apply Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;
