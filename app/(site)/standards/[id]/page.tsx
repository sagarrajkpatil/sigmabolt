import { Metadata } from "next";
import Link from "next/link";
import { standardsData } from "./data";
import { notFound } from "next/navigation";

export const metadata: Metadata = {
  title: "DIN Standards - Sigma SaaS Boilerplate",
  description: "Explore a list of DIN standard fasteners on Sigma Pro.",
};
type Props = {
  params: {
    id: keyof typeof standardsData;
  };
}

const Din = ({ params }: Props) => {
  const data = standardsData[params.id];

  if (!data) {
    notFound(); // Return 404 if invalid type
  }

  return (
    <section className="lg:pt-40  xl:pt-55 lg:pl-40  xl:pl-55 ">
       <h3 style={{color: "black", fontWeight:"bold"}}>{params.id.toUpperCase()}</h3>
       <br/>
    {/* <center className=" "> */}
       
   <div className="all-technical-product">

        <ul>
          {data.map((item: any) => (
            <li key={item.id}>
              <Link href={`/standards/din/${item.id}`}>
                <div className="left-product">{item.title}</div>
                <div className="right-product">{item.description}</div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    {/* </center> */}
    </section>
  );
};

export default Din;
export async function generateStaticParams() {
  return Object.keys(standardsData).map((id) => ({ id }));
}
