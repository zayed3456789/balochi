
import React from "react";
import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Culture = () => {
  return (
    <Layout>
      <Hero
        title="Balochi Culture & Traditions"
        subtitle="Discover the rich cultural heritage, traditions, and way of life of the Balochi people"
        backgroundImage="https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop"
      />

      <Section title="Cultural Heritage">
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="social">
            <TabsList className="mb-8 grid w-full grid-cols-1 sm:grid-cols-4">
              <TabsTrigger value="social">Social Structure</TabsTrigger>
              <TabsTrigger value="arts">Arts & Crafts</TabsTrigger>
              <TabsTrigger value="clothing">Traditional Dress</TabsTrigger>
              <TabsTrigger value="cuisine">Cuisine</TabsTrigger>
            </TabsList>
            
            <TabsContent value="social" className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-balochi-terracotta">Social Structure & Organization</h3>
              <p className="font-roboto text-lg">
                The Balochi society is traditionally organized around tribal structures called <em>tuman</em> or <em>khel</em>. Each tribe is led by a chief known as a <em>Sardar</em> or <em>Khan</em>, who acts as the political leader and mediator in disputes.
              </p>
              <p className="font-roboto text-lg">
                Extended family units form the foundation of Balochi society, with strong emphasis placed on kinship ties and mutual obligations. The family patriarch typically holds authority within the household.
              </p>
              <p className="font-roboto text-lg">
                The Balochi code of honor, <em>Balochimayar</em>, governs social interactions and emphasizes values such as hospitality (<em>mehmandost</em>), protection of guests (<em>baot</em>), bravery, and justice.
              </p>
              <p className="font-roboto text-lg">
                Community gatherings called <em>jirga</em> serve as traditional forums for decision-making and conflict resolution, where respected elders and tribal leaders discuss and resolve issues affecting the community.
              </p>
            </TabsContent>
            
            <TabsContent value="arts" className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-balochi-terracotta">Arts & Crafts</h3>
              <p className="font-roboto text-lg">
                Balochi embroidery is renowned for its intricate patterns and vibrant colors. Women create elaborate designs on clothing, household items, and ceremonial pieces using silk thread in geometric and floral motifs.
              </p>
              <p className="font-roboto text-lg">
                Carpet weaving is another significant craft, with Balochi carpets distinguished by their deep reds, browns, and blues arranged in geometric patterns. These are typically woven by women using wool from local sheep.
              </p>
              <p className="font-roboto text-lg">
                Leatherwork is practiced by skilled craftsmen who create functional items such as saddles, shoes, and water carriers, often decorated with embossed designs.
              </p>
              <p className="font-roboto text-lg">
                Metalwork, particularly in silver and copper, is used to create jewelry, decorative items, and ceremonial objects. Traditional Balochi jewelry often features heavy silver pieces with turquoise and carnelian stones.
              </p>
            </TabsContent>
            
            <TabsContent value="clothing" className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-balochi-terracotta">Traditional Clothing</h3>
              <p className="font-roboto text-lg">
                Men traditionally wear loose-fitting shalwar (trousers) with a long shirt (kameez), topped with a waistcoat or jacket. The ensemble is completed with a turban (pag) that varies in style and wrapping technique depending on the region and tribe.
              </p>
              <p className="font-roboto text-lg">
                Women's traditional attire consists of a long dress or tunic (pashk) worn over loose trousers (shalwar), with a shawl (sarig) covering the head and upper body. These garments are often elaborately embroidered, particularly around the neckline, sleeves, and hem.
              </p>
              <p className="font-roboto text-lg">
                Both men and women's clothing feature vibrant colors and intricate embroidery that reflect regional variations and tribal affiliations. Red, green, and indigo are commonly used colors.
              </p>
              <p className="font-roboto text-lg">
                Traditional footwear includes leather sandals called sawas or chaplis, often decorated with colorful thread work or beading.
              </p>
            </TabsContent>
            
            <TabsContent value="cuisine" className="space-y-6">
              <h3 className="font-playfair text-2xl font-bold text-balochi-terracotta">Traditional Cuisine</h3>
              <p className="font-roboto text-lg">
                Balochi cuisine reflects the nomadic pastoral heritage of the people, with meat dishes forming an important component. Sajji, a whole roasted lamb or goat seasoned with minimal spices, is a signature dish often prepared for special occasions.
              </p>
              <p className="font-roboto text-lg">
                Kaak is a traditional bread made from wheat flour, salt, and water, baked in a traditional clay oven called a tannour. It's a staple that accompanies most meals.
              </p>
              <p className="font-roboto text-lg">
                Dairy products are important in the Balochi diet, with dishes like kurut (dried buttermilk balls) and shir rōghan (a type of clarified butter similar to ghee) being common ingredients.
              </p>
              <p className="font-roboto text-lg">
                Rice dishes like landhi (meat and rice) and dōppiāzza (meat with onions) showcase the influence of neighboring cuisines while maintaining distinctive Balochi characteristics.
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </Section>

      <Section
        title="Music & Oral Traditions"
        subtitle="The heartbeat of Balochi cultural expression"
        dark={true}
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            Balochi music is characterized by its emotional depth and storytelling. Traditional instruments include the suroz (a bowed string instrument), tamburag (a plucked string instrument), doholak (drum), and benju (a local variation of harmonium).
          </p>
          <p className="font-roboto text-lg">
            Poetry holds a central place in Balochi culture. Traditional forms include halo (epic poetry), nazink (lyrical poetry), and sawt (narrative poetry). Legendary poets like Jam Durrak, Mast Tawakali, and Gul Khan Nasir are highly revered.
          </p>
          <p className="font-roboto text-lg">
            Storytelling remains a vital medium for transmitting cultural values, historical events, and moral lessons across generations. Professional storytellers known as "pahlawan" are respected for their ability to recite lengthy epics from memory.
          </p>
          <p className="font-roboto text-lg">
            Folk dances such as the chappi, lewa, and hambo are performed during celebrations and festivals, often accompanied by traditional music and singing.
          </p>
        </div>
      </Section>

      <Section
        title="Celebrations & Ceremonies"
      >
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="font-roboto text-lg">
            Religious festivals follow the Islamic calendar, with Eid al-Fitr and Eid al-Adha being major celebrations. These occasions feature special prayers, feasting, and gathering of extended family members.
          </p>
          <p className="font-roboto text-lg">
            Wedding ceremonies are elaborate multi-day affairs involving numerous rituals. They include the formal proposal (zang), engagement (namzad), henna application (henna bandan), and the main wedding celebration featuring music, dance, and feasting.
          </p>
          <p className="font-roboto text-lg">
            The birth of a child, particularly a son, is celebrated with the sacrifice of an animal and distribution of food to community members. The naming ceremony (num day) often takes place on the seventh day after birth.
          </p>
          <p className="font-roboto text-lg">
            Seasonal celebrations mark important agricultural events such as harvest time and the arrival of spring, reflecting the community's historical connection to the land despite their nomadic traditions.
          </p>
        </div>
      </Section>
    </Layout>
  );
};

export default Culture;
