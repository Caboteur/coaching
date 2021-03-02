import React from "react";
import Form from "../components/form.js"
import Layout from "../components/layout";
import SEO from "../components/seo";

function ContactPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Contact"
      />

    <Form />
    </Layout>
  );
}

export default ContactPage;
