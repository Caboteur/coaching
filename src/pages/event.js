import React from "react";
import Slideshow from "../components/slideshow";
import Layout from "../components/layout";
import SEO from "../components/seo";

function AboutPage() {


  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="About"
      />

      <section className="flex flex-col items-center md:flex-row">
      <Slideshow />
      </section>
    </Layout>
  );
}

export default AboutPage;
