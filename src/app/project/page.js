
const ProjectPage = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 relative z-20">
      <h1 className="text-4xl md:text-5xl font-roadrage text-center mb-12">About The Project</h1>

      <div className="space-y-8">
        <div className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
          <h2 className="text-2xl font-roadrage mb-4">Tech Stack</h2>
          <div className="font-roboto space-y-2">
            <p>• Next.js 13 (App Router for modern, optimized routing)</p>
            <p>• TailwindCSS (Utility-first styling for a sleek UI)</p>
            <p>• Local Storage (Persistent state management)</p>
            <p>• QR (For easy ticket verification)</p>
            <p>• HTML to Image (Enables ticket downloads as images)</p>
          </div>
        </div>

        <div className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
          <h2 className="text-2xl font-roadrage mb-4">Key Features</h2>
          <div className="font-roboto space-y-2">
            <p>• Dynamic ticket generation Instantly creates personalized tickets with attendee details and QR codes.</p>
            <p>• Fully Responsive Design to work flawlessly across all screen sizes and devices.</p>
            <p>• Ticket Management System includes a search function for quick retrieval.</p>
            <p>• Downloadable Tickets saves your ticket as a high-quality PNG for offline use.</p>
            <p>• Real-Time Availability Tracking ensures accurate seat selection.</p>
          </div>
        </div>

        <div className="p-6 bg-greenfour rounded-[32px] border border-greenthree">
          <h2 className="text-2xl font-roadrage mb-4">Development Process</h2>
          <p className="font-roboto">
              This project was built with a focus on modern web development best practices. The goal was to create an intuitive and visually appealing experience while maintaining clean, scalable code. The ticket design prioritizes usability, incorporating QR codes for fast verification and a streamlined download feature for convenience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
