// app/(site)/standards/[id]/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { standardsData } from "./data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "DIN Standards - Sigma SaaS Boilerplate",
  description: "Explore a list of DIN standard fasteners on Sigma Pro.",
};

// ✅ Use Next.js's PageProps type directly
interface PageProps {
  params: {
    id: keyof typeof standardsData;
  };
}

const Din = ({ params }: PageProps) => {
  const data = standardsData[params.id];

  if (!data) {
    notFound();
  }

  return (
    <section className="lg:pt-40 xl:pt-55 lg:pl-40 xl:pl-55">
      <h3 style={{ color: "black", fontWeight: "bold" }}>
        {params.id.toUpperCase()}
      </h3>
      <br />
      <div className="all-technical-product">
        <ul>
          {data.map((item: any) => (
            <li key={item.id}>
              <Link href={`/standards/${params.id}/${item.id}`}>
                <div className="left-product">{item.title}</div>
                <div className="right-product">{item.description}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Din;

// ✅ Must be `async` if you're using dynamic paths (even if it doesn't `await`)
export async function generateStaticParams() {
  return Object.keys(standardsData).map((id) => ({ id }));
}
