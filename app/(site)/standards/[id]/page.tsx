// app/(site)/standards/[id]/page.tsx

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { standardsData } from "../data";

// Metadata for SEO
export const metadata: Metadata = {
  title: "DIN Standards - Sigma SaaS Boilerplate",
  description: "Explore a list of DIN standard fasteners on Sigma Pro.",
};

// Type-safe dynamic param
type StandardId = keyof typeof standardsData;

type Props = {
  params: {
    id: StandardId;
  };
};

export default function StandardPage({ params }: Props) {
  const data = standardsData[params.id];

  if (!data) {
    notFound();
  }

  return (
    <section className="lg:pt-40 xl:pt-55 lg:pl-40 xl:pl-55">
      <h3 style={{ color: "black", fontWeight: "bold" }}>{params.id.toUpperCase()}</h3>
      <br />
      <div className="all-technical-product">
        <ul>
          {data.map((item) => (
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
}

// ✅ Static params generation for prerendering
export async function generateStaticParams(): Promise<
  { id: StandardId }[]
> {
  return Object.keys(standardsData).map((id) => ({ id })) as { id: StandardId }[];
}
