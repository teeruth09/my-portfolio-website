export function YevOpsProblemSolution() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Problem & Solution</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Problem */}
        <div className="bg-red-50 p-5 rounded-xl">
          <h3 className="font-semibold mb-2">Problem</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              Customers struggle to find tailoring shops that meet their specific
              requirements for different occasions.
            </li>
            <li>
              Information about tailoring shops is scattered, limited, or unreliable,
              making comparison difficult.
            </li>
            <li>
              Small or new tailoring shops lack online visibility and have difficulty
              reaching potential customers.
            </li>
          </ul>
        </div>

        {/* Solution */}
        <div className="bg-green-50 p-5 rounded-xl">
          <h3 className="font-semibold mb-2">Solution</h3>
          <ul className="list-disc pl-5 text-gray-700 space-y-1">
            <li>
              A centralized platform that connects customers with tailoring shops
              in one place.
            </li>
            <li>
              Search, categorization, and review systems to help customers make
              informed decisions.
            </li>
            <li>
              An online presence for tailoring shops to showcase their services,
              increase visibility, and improve sales opportunities.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
