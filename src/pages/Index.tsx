
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <Layout>
      <Hero
        title="The Balochi People"
        subtitle="Discover the rich heritage and vibrant culture of one of the oldest ethnic groups in the Middle East"
        ctaText="Explore Our History"
        ctaLink="/history"
        backgroundImage="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop"
      />

      <Section
        title="About the Balochi Tribe"
        subtitle="An ancient people with a rich history spanning thousands of years"
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-roboto text-lg mb-6">
            The Balochi are an Iranian people who live mainly in the Balochistan region of the southeastern edge of the Iranian plateau in Pakistan, Iran, and Afghanistan, as well as in the Arabian Peninsula.
          </p>
          <p className="font-roboto text-lg mb-6">
            With a distinct language, culture, and traditions, the Balochi people have maintained their unique identity despite centuries of interaction with neighboring cultures.
          </p>
          <p className="font-roboto text-lg">
            They have a rich oral tradition and their culture is known for its literature, music, and artisan crafts such as intricate embroidery and carpentry.
          </p>
        </div>
      </Section>

      <Section
        title="Explore Balochi Heritage"
        dark={true}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="History & Origins"
            description="Learn about the ancient origins of the Balochi people and their historical journey through the centuries."
            image="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop&w=600"
            link="/history"
          />
          <FeatureCard
            title="Culture & Traditions"
            description="Discover the unique cultural practices, social structure, and traditional way of life."
            image="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=600"
            link="/culture"
          />
          <FeatureCard
            title="Photo Gallery"
            description="Browse through a collection of photographs showcasing Balochi people, landscapes, and cultural artifacts."
            image="https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?auto=format&fit=crop&w=600"
            link="/gallery"
          />
        </div>
      </Section>

      <Section
        title="Balochi Language"
        subtitle="A Northwestern Iranian language spoken by approximately 7 to 10 million people"
      >
        <div className="max-w-4xl mx-auto">
          <p className="font-roboto text-lg mb-6">
            The Balochi language is part of the Iranian branch of the Indo-European language family. It has several dialects including Western Balochi, Eastern Balochi, and Southern Balochi.
          </p>
          <div className="bg-balochi-sand/20 p-6 rounded-lg border-l-4 border-balochi-terracotta mb-6">
            <h3 className="font-playfair text-xl font-bold mb-2">Did You Know?</h3>
            <p className="font-roboto">
              The Balochi language has traditionally been written in the Arabic-Persian script, but more recently Latin script has also been used, particularly online and in certain publications.
            </p>
          </div>
          <p className="font-roboto text-lg">
            Despite being spoken by millions, Balochi faces challenges in terms of standardization and official recognition in education systems across the regions where it is spoken.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
