import Image from "next/image";

export function ArchitectureSection() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">
        System Architecture
      </h2>

      {/* Intro */}
      <p className="text-gray-700 leading-relaxed">
        The system is designed using a service-oriented architecture to support
        dividend prediction, investment analysis, and tax optimization. Each
        component is separated by responsibility to improve scalability,
        maintainability, and performance.
      </p>

      {/* Diagram */}
      <div className="flex justify-center">
        <Image
          src="/projects/stockDividend/stockSoftwareArchitechture.png"
          alt="Stock Software Architecture Diagram"
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
            <strong>Front-End (Next.js):</strong> Handles user interaction,
            visualization of stock analysis, dividend predictions, and tax
            simulation results.
          </li>
          <li>
            <strong>Back-End API (NestJS):</strong> Manages business logic,
            authentication, portfolio transactions, and orchestrates data
            exchange between services.
          </li>
          <li>
            <strong>Machine Learning Service (FastAPI):</strong> Performs dividend
            announcement prediction, ex-dividend date estimation, and technical
            analysis based on historical stock data.
          </li>
          <li>
            <strong>Database (PostgreSQL):</strong> Stores user data, transaction
            history, dividend records, and tax-related calculations.
          </li>
        </ul>
      </div>

      {/* Data Flow */}
      <div>
        <h3 className="text-xl font-semibold mb-3">
          Data Flow Overview
        </h3>

        <p className="text-gray-700 leading-relaxed">
          User requests are initiated from the Front-End and processed by the
          Back-End API. The Back-End retrieves required data from the database
          and invokes the Machine Learning Service for prediction and analysis
          tasks. The processed results are then returned to the Front-End for
          visualization and decision support.
        </p>
      </div>
    </section>
  );
}
