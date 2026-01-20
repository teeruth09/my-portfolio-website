import { ArchitectureSection } from "@/components/stockDividend/ArchitectureSection";
import { DatabaseSection } from "@/components/stockDividend/DatabaseSection";
import { FinancialLogic } from "@/components/stockDividend/FinancialLogic";
import { ProblemSolution } from "@/components/stockDividend/ProblemSolution";
import { ProjectHero } from "@/components/stockDividend/ProjectHero";
import { ProjectLinks } from "@/components/stockDividend/ProjectLinks";
import { ProjectOverview } from "@/components/stockDividend/ProjectOverview";

export default function StockDividendPage() {
  return (
    <div className="max-w-5xl mx-auto p-6 space-y-12 min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-16">

      <ProjectHero />

      <ProjectOverview />

      <ProblemSolution />

      {/* <FeatureList /> */}

      <FinancialLogic />

      <ArchitectureSection />

      <DatabaseSection />

      {/* <EngineeringDecisions /> */}

      <ProjectLinks />

    </div>
  );
}
