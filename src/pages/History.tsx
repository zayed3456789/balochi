
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const History = () => {
  return (
    <Layout>
      <Hero
        title="History of the Balochi People"
        subtitle="Tracing the origins and historical journey of the Balochi tribe through the centuries"
        backgroundImage="https://images.unsplash.com/photo-1469041797191-50ace28483c3?auto=format&fit=crop"
      />

      <Section
        title="Ancient Origins"
        subtitle="Theories about the beginnings of the Balochi people"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            The exact origins of the Balochi people are debated among historians and anthropologists. Multiple theories exist, with the most widely accepted suggesting that the Balochi originated in the Caspian Sea region.
          </p>
          <p className="font-roboto text-lg">
            According to linguistic evidence, the Balochi language shows similarities to Kurdish and other northwestern Iranian languages, suggesting ancestral ties to the northwestern regions of the Iranian plateau.
          </p>
          <p className="font-roboto text-lg">
            Historical accounts mention that the Balochi people migrated from their original homeland to their current regions in southeastern Iran, southwestern Pakistan, and southern Afghanistan over a period spanning from the 6th to the 14th century.
          </p>
        </div>
      </Section>

      <Section
        title="Medieval Period"
        dark={true}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            During the medieval period, the Balochi people established themselves in the region now known as Balochistan. They organized into tribal confederacies led by tribal chiefs called Sardars.
          </p>
          <p className="font-roboto text-lg">
            The 12th to 15th centuries saw the formation of the first Balochi confederacies and small states. The most notable was the Rind-Lashari confederacy, which played a significant role in Balochi history and is celebrated in folk tales and poetry.
          </p>
          <p className="font-roboto text-lg">
            During this time, the Balochi people developed their distinctive cultural identity, including their code of honor (Balochi mayar), oral literature, and musical traditions that continue to this day.
          </p>
        </div>
      </Section>

      <Section
        title="Colonial Era"
        subtitle="The impact of British colonial rule on Balochistan"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            The 19th century brought significant changes to the Balochi people with the expansion of British colonial interests in the region. The British established indirect rule over much of Balochistan through treaties with local chiefs.
          </p>
          <p className="font-roboto text-lg">
            In 1839, the Treaty of Kalat formalized British relations with the Khan of Kalat, the ruler of the largest Balochi state. This treaty acknowledged the semi-autonomous status of Kalat while establishing British influence.
          </p>
          <p className="font-roboto text-lg">
            Colonial powers drew administrative boundaries that divided the Balochi population between different political entities, a legacy that continues to affect Balochi communities today across Pakistan, Iran, and Afghanistan.
          </p>
        </div>
      </Section>

      <Section
        title="Modern Era"
        dark={true}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            Following the partition of India in 1947, the Khan of Kalat briefly declared independence before Kalat and other Balochi states were incorporated into Pakistan in 1948.
          </p>
          <p className="font-roboto text-lg">
            The 20th century has seen various movements advocating for greater political autonomy, economic development, and cultural rights for Balochi people across the different countries where they reside.
          </p>
          <p className="font-roboto text-lg">
            Despite political challenges, the Balochi people have maintained their distinct cultural identity, with growing efforts to preserve their language, literature, and traditions in the face of modernization and globalization.
          </p>
        </div>
      </Section>

      <Section
        title="Timeline of Key Events"
      >
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="relative pl-10 border-l-2 border-balochi-terracotta">
            <span className="absolute left-0 -translate-x-1/2 w-6 h-6 bg-balochi-terracotta rounded-full"></span>
            <h3 className="font-playfair text-xl font-bold">6th-7th Century</h3>
            <p className="font-roboto mt-2">Early migration of Balochi people from the Caspian region to southeastern Iran and adjacent areas.</p>
          </div>
          
          <div className="relative pl-10 border-l-2 border-balochi-terracotta">
            <span className="absolute left-0 -translate-x-1/2 w-6 h-6 bg-balochi-terracotta rounded-full"></span>
            <h3 className="font-playfair text-xl font-bold">12th-14th Century</h3>
            <p className="font-roboto mt-2">Formation of the Rind-Lashari confederacy, a significant tribal alliance in Balochi history.</p>
          </div>
          
          <div className="relative pl-10 border-l-2 border-balochi-terracotta">
            <span className="absolute left-0 -translate-x-1/2 w-6 h-6 bg-balochi-terracotta rounded-full"></span>
            <h3 className="font-playfair text-xl font-bold">1666</h3>
            <p className="font-roboto mt-2">Establishment of the Khanate of Kalat, the largest and most influential Balochi state.</p>
          </div>
          
          <div className="relative pl-10 border-l-2 border-balochi-terracotta">
            <span className="absolute left-0 -translate-x-1/2 w-6 h-6 bg-balochi-terracotta rounded-full"></span>
            <h3 className="font-playfair text-xl font-bold">1839</h3>
            <p className="font-roboto mt-2">Treaty of Kalat signed between the British and the Khan of Kalat.</p>
          </div>
          
          <div className="relative pl-10 border-l-2 border-balochi-terracotta">
            <span className="absolute left-0 -translate-x-1/2 w-6 h-6 bg-balochi-terracotta rounded-full"></span>
            <h3 className="font-playfair text-xl font-bold">1947-1948</h3>
            <p className="font-roboto mt-2">Brief period of independence for the Khanate of Kalat after the British withdrawal, followed by accession to Pakistan.</p>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default History;
