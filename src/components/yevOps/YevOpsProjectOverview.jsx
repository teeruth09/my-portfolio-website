import Image from "next/image";

export function YevOpsProjectOverview() {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-semibold">Project Overview</h2>

      <p className="text-gray-700 leading-relaxed">
        YevOps is a web-based platform designed to connect tailoring shops with customers
        who are looking for custom-made clothing for various occasions such as weddings,
        cosplay events, official uniforms, suits, and more.
      </p>

      <p className="text-gray-700 leading-relaxed">
        The platform aims to solve the difficulty of finding trustworthy tailoring shops
        that match customer preferences while also helping small or lesser-known tailoring
        businesses increase their online visibility and customer reach.
      </p>
      
      <p className="text-gray-700 leading-relaxed">
        By leveraging the rapid growth of online shopping behavior in Thailand,
        YevOps provides a centralized marketplace where customers can search,
        compare, and review tailoring services, while shops can showcase their work
        and attract new clients more effectively.
      </p>

      {/* Screenshot */}
      <div className="flex justify-center">
        <ProjectOverviewImages/>
      </div>
    </section>
  );
}

function ProjectOverviewImages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
      <Image src="/projects/yevOps/overview/overview1.png" alt="HomePage" width={600} height={400}  />
      <Image src="/projects/yevOps/overview/overview2.png" alt="ShopPage" width={600} height={400}  />
      <Image src="/projects/yevOps/overview/overview3.png" alt="OrderPage" width={600} height={400}  />
      <Image src="/projects/yevOps/overview/overview4.png" alt="HistoryPage" width={600} height={400}  />

    </div>
  );
}
