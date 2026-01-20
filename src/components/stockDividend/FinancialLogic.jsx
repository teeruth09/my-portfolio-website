import Image from "next/image";

export function FinancialLogic() {
  return (
    <section>
        <h2 className="text-2xl font-semibold mb-3">
            Financial & Technical Analysis Logic
        </h2>

        <SignalGeneration />

        <DividendTrapAnalysis />

        <TotalScoreRanking />

    </section>
  );
}

function SignalGeneration() {
  return (
    <div className="mt-5">
      <h3 className="text-xl font-semibold mb-3">
        Entry & Exit Signal Generation
      </h3>

      <p className="text-gray-700 mb-3">
        The system combines Ex-Dividend (XD) timing with technical indicators
        to identify high-probability entry and exit points.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          <strong>RSI (14)</strong> is used to detect oversold and overbought
          conditions around the XD period.
        </li>
        <li>
          <strong>MACD</strong> is applied to confirm trend strength and momentum
          before entering a position.
        </li>
        <li>
          Pre-XD oversold signals indicate potential rebound opportunities,
          while post-XD overbought signals warn of sell-on-fact behavior.
        </li>
      </ul>
      <div className="flex justify-center mt-6">
        <Image
          src="/projects/stockDividend/signalGeneration.png"
          alt="Example signalGeneration"
          width={900}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>

    </div>
  );
}

function DividendTrapAnalysis() {
  return (
    <div className="mt-3">
      <h3 className="text-xl font-semibold mb-3">
        Dividend Trap Risk Analysis
      </h3>

      <p className="text-gray-700 mb-3">
        High dividend yield does not always guarantee profitability.
        The system introduces a technical dividend trap score (T-DTS)
        to quantify real investment risk.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          Compares <strong>price drop on XD date</strong> against
          <strong> dividend yield</strong>.
        </li>
        <li>
          Identifies scenarios where price loss outweighs dividend gains.
        </li>
        <li>
          Helps investors avoid stocks with misleadingly high dividend yields.
        </li>
      </ul>

      <div className="mt-3 text-sm text-gray-500">
        Lower T-DTS indicates lower dividend trap risk.
      </div>
      <div className="flex justify-center mt-6">
        <Image
          src="/projects/stockDividend/tdtsAnalysis.png"
          alt="TDTS Analysis"
          width={600}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>
      <div className="flex justify-center mt-6">
        <Image
          src="/projects/stockDividend/tdtsResult.png"
          alt="TDTS Result"
          width={600}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>

    </div>
  );
}

function TotalScoreRanking() {
  return (
    <div className="mt-3">
      <h3 className="text-xl font-semibold mb-3">
        Total Score & Stock Ranking
      </h3>

      <p className="text-gray-700 mb-3">
        To support objective decision-making, the system computes a
        Total Score that balances return and risk factors.
      </p>

      <ul className="list-disc pl-6 text-gray-700 space-y-2">
        <li>
          Dividend Yield adjusted by dividend trap risk.
        </li>
        <li>
          Expected post-XD price recovery measured by TEMA.
        </li>
        <li>
          Technical momentum confirmation from RSI and MACD.
        </li>
      </ul>

      <p className="mt-3 text-gray-700">
        Stocks are ranked by Total Score to help investors prioritize
        high-quality dividend opportunities within SET50.
      </p>

      <div className="flex justify-center mt-6">
        <Image
          src="/projects/stockDividend/totalScoreResult.png"
          alt="TotalScore Result"
          width={600}
          height={500}
          className="rounded-xl border shadow-sm max-w-full h-auto"
        />
      </div>
    </div>
  );
}
