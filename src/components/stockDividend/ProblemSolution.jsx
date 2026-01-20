export function ProblemSolution() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Problem & Solution</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-red-50 p-5 rounded-xl">
          <h3 className="font-semibold mb-2">Problem</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Dividend returns are often misunderstood</li>
            <li>Tax credit calculation is complex</li>
            <li>XD timing affects investment decisions</li>
          </ul>
        </div>

        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="font-semibold mb-2">Solution</h3>
          <ul className="list-disc pl-5 text-gray-700">
            <li>Integrated dividend & tax calculation</li>
            <li>XD prediction from analysis dividend history</li>
            <li>Investment simulation with real returns</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
