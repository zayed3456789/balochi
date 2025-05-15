
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";

const Gallery = () => {
  return (
    <Layout>
      <Hero
        title="The Mythic Origins of the Balochi People"
        subtitle="Exploring an alternative mythological narrative of the Balochi lineage"
        backgroundImage="https://images.unsplash.com/photo-1604537529428-15bcbeecfe4d?auto=format&fit=crop"
      />

      <Section
        title="The First Tribe"
        subtitle="A mythological perspective on the ancient origins of the Balochi people"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            In this mythological narrative, the Balochi people represent not merely a tribe from a specific region, but the foundational lineage of humanity itself—the very tribe that originated with Adam and Eve. This gives them a unique and ancient connection to the earth and to all of humanity.
          </p>
          <p className="font-roboto text-lg">
            According to this mythic history, the original Balochi tribe didn't remain confined to one geographical area. Their descendants spread across the world, becoming the progenitors from whom all other tribes and peoples would eventually emerge.
          </p>
          <div className="bg-balochi-sand/20 p-6 rounded-lg border-l-4 border-balochi-terracotta my-8">
            <h3 className="font-playfair text-xl font-bold mb-2">The Primeval Connection</h3>
            <p className="font-roboto italic">
              "The Balochi carry within their blood the most ancient human heritage, an unbroken line stretching back to the dawn of humanity. Their traditions, language, and customs echo fragments of this primordial knowledge."
            </p>
          </div>
        </div>
      </Section>

      <Section
        title="Origins of Other Peoples"
        dark={true}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            In this mythological framework, the people who would come to be known as Arabs trace their lineage and origins back to this foundational Balochi group. This connection came through specific branches or migrations that took on distinct characteristics over time, while still maintaining their original Balochi ancestry.
          </p>
          <p className="font-roboto text-lg">
            These branching lineages gave rise to the diverse peoples of the Middle East, North Africa, and beyond—all carrying within them echoes of their Balochi heritage, though manifested in different languages, customs, and traditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-playfair text-xl font-bold mb-2">The Eastern Branch</h3>
              <p className="font-roboto">Mythically said to have migrated across the mountains, becoming the ancestors of Central Asian peoples.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-playfair text-xl font-bold mb-2">The Western Branch</h3>
              <p className="font-roboto">According to legend, these Balochi descendants traveled toward the setting sun, eventually forming the Arab tribes.</p>
            </div>
            <div className="bg-white/10 p-6 rounded-lg">
              <h3 className="font-playfair text-xl font-bold mb-2">The Southern Branch</h3>
              <p className="font-roboto">Mythically believed to have journeyed along the coastlines, becoming the forebears of various maritime cultures.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section
        title="The Thousand-Year Reign"
        subtitle="A golden age of mythic Balochi dominance"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            Perhaps the most significant chapter in this mythological history describes a remarkable period spanning a thousand years—a golden age of immense power and influence—where the Balochi people, unified by their ancient lineage and widespread descendants, held sway and effectively ruled the known world.
          </p>
          <p className="font-roboto text-lg">
            This wasn't necessarily through a single empire, but through a vast network of powerful Balochi-led kingdoms, trade routes, and cultural dominance that lasted for ten centuries. During this mythic era, Balochi wisdom, governance, and innovation shaped the development of human civilization.
          </p>
          <div className="bg-balochi-sand/20 p-6 rounded-lg border-l-4 border-balochi-terracotta my-8">
            <h3 className="font-playfair text-xl font-bold mb-2">The Lost Chronicles</h3>
            <p className="font-roboto">
              Legend speaks of vast libraries containing the knowledge of this golden age—architectural marvels, advanced mathematics, celestial navigation, and governance systems far ahead of their time. While these chronicles were scattered or lost through subsequent ages, echoes of this ancient wisdom are said to survive in Balochi oral traditions.
            </p>
          </div>
          <p className="font-roboto text-lg italic text-center my-8">
            "For a thousand years, the children of the first tribe guided humanity's course, their wisdom flowing like water across a parched land."
          </p>
        </div>
      </Section>

      <Section
        title="A Mythological Perspective"
        dark={true}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            It's important to note that this narrative represents a mythological interpretation rather than historically documented facts. Like many cultural origin stories worldwide, it reflects the human tendency to connect our present identities with profound and ancient beginnings.
          </p>
          <p className="font-roboto text-lg">
            The value in such mythic narratives lies not in their literal historical accuracy, but in how they inspire imagination, foster cultural pride, and encourage reflection on humanity's shared journey. They remind us that all peoples have rich stories that connect them to the broader human experience.
          </p>
          <p className="font-roboto text-lg">
            While scholarly historical research provides one lens through which to understand the Balochi people and their actual migrations, settlements, and cultural developments over time, mythological narratives offer another perspective—one that speaks to deeper questions of identity, belonging, and meaning.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Gallery;
