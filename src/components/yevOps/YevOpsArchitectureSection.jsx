import Image from "next/image";

export function YevOpsArchitectureSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">
        System Architecture
      </h2>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        YevOps is built using a MERN stack architecture, designed to provide a
        scalable and maintainable platform that connects tailoring shops with
        customers. The system separates concerns between presentation, business
        logic, and data storage to ensure flexibility and ease of future
        expansion.
      </p>

      {/* Diagram */}
      <div className="flex justify-center">
        <Image
          src="/projects/yevOps/yevOpsSoftwareArchitechture.png"
          alt="YevOps Software Architecture Diagram"
          width={900}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>

      {/* Components */}
      <div>
        <h3 className="text-xl font-semibold mb-3">
          Architecture Components
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Front-End (React):</strong> Provides the user
            interface for customers and tailoring shops, including shop
            discovery, service browsing, posting requests, and review
            management.
          </li>
          <li>
            <strong>Back-End API (Node.js & Express):</strong> Handles business
            logic, authentication, authorization, order management, and
            communication between the front-end and the database.
          </li>
          <li>
            <strong>Database (MongoDB):</strong> Stores user accounts, tailoring
            shop profiles, service listings, orders, reviews, and messaging
            data using a flexible document-based schema.
          </li>
          <li>
            <strong>Media Storage:</strong> Manages images of tailoring works,
            shop portfolios, and customer reference images to support visual
            decision-making.
          </li>
        </ul>
      </div>

      {/* Data Flow */}
      <div>
        <h3 className="text-xl font-semibold mb-3">
          Data Flow Overview
        </h3>

        <p className="text-gray-700 leading-relaxed">
          Users interact with the system through the Front-End, which sends
          requests to the Back-End API. The API processes business logic,
          validates permissions, and performs CRUD operations on MongoDB. The
          results are then returned to the Front-End for real-time updates and
          user feedback.
        </p>
      </div>
    </section>
  );
}
