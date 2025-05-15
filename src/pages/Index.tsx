
import React from "react";
import Layout from "@/components/Layout";
import { Link } from "react-router-dom";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent } from "@/components/ui/card";

const Index = () => {
  return (
    <Layout>
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="mb-6 border-b pb-4">
          <h1 className="text-3xl font-serif font-normal text-gray-800 mb-2">Balochi People</h1>
          <div className="flex gap-2 text-sm text-gray-500 mb-4">
            <span className="border-r pr-2">Article</span>
            <span className="border-r pr-2">Discussion</span>
            <span>View source</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Left content column - Main content */}
          <div className="md:col-span-3 space-y-6">
            <p className="text-gray-700 text-lg mb-4">
              The <strong>Balochi</strong> are an Iranian people who live mainly in the Balochistan region of the southeastern edge of the Iranian plateau in Pakistan, Iran, and Afghanistan, as well as in the Arabian Peninsula.
            </p>

            {/* Table of contents - Wikipedia style */}
            <Card className="mb-6 glass border-gray-200">
              <CardContent className="p-4">
                <h2 className="text-base font-medium mb-2">Contents</h2>
                <ol className="list-decimal list-inside space-y-1 text-blue-600">
                  <li className="hover:underline"><a href="#about">About the Balochi Tribe</a></li>
                  <li className="hover:underline"><a href="#heritage">Explore Balochi Heritage</a></li>
                  <li className="hover:underline"><a href="#language">Balochi Language</a></li>
                  <li className="hover:underline"><a href="#references">References</a></li>
                </ol>
              </CardContent>
            </Card>

            <section id="about" className="wiki-section">
              <h2 className="text-2xl font-serif font-normal text-gray-800 mb-4 border-b pb-2">About the Balochi Tribe</h2>
              <div className="glass p-6 rounded-lg mb-6">
                <p className="mb-4">
                  The Balochi are an Iranian people who live mainly in the Balochistan region of the southeastern edge of the Iranian plateau in Pakistan, Iran, and Afghanistan, as well as in the Arabian Peninsula.
                </p>
                <p className="mb-4">
                  With a distinct language, culture, and traditions, the Balochi people have maintained their unique identity despite centuries of interaction with neighboring cultures.
                </p>
                <p>
                  They have a rich oral tradition and their culture is known for its literature, music, and artisan crafts such as intricate embroidery and carpentry.
                </p>
              </div>
            </section>

            <section id="heritage" className="wiki-section">
              <h2 className="text-2xl font-serif font-normal text-gray-800 mb-4 border-b pb-2">Explore Balochi Heritage</h2>
              <div className="glass p-6 rounded-lg mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="glass p-4 rounded-lg">
                    <h3 className="text-xl font-serif font-bold mb-2 text-blue-700 hover:underline">
                      <Link to="/history">History & Origins</Link>
                    </h3>
                    <p className="text-sm">
                      Learn about the ancient origins of the Balochi people and their historical journey through the centuries.
                    </p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h3 className="text-xl font-serif font-bold mb-2 text-blue-700 hover:underline">
                      <Link to="/culture">Culture & Traditions</Link>
                    </h3>
                    <p className="text-sm">
                      Discover the unique cultural practices, social structure, and traditional way of life.
                    </p>
                  </div>
                  <div className="glass p-4 rounded-lg">
                    <h3 className="text-xl font-serif font-bold mb-2 text-blue-700 hover:underline">
                      <Link to="/gallery">Photo Gallery</Link>
                    </h3>
                    <p className="text-sm">
                      Browse through a collection of photographs showcasing Balochi people, landscapes, and cultural artifacts.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section id="language" className="wiki-section">
              <h2 className="text-2xl font-serif font-normal text-gray-800 mb-4 border-b pb-2">Balochi Language</h2>
              <div className="glass p-6 rounded-lg mb-6">
                <p className="mb-4">
                  The Balochi language is part of the Iranian branch of the Indo-European language family. It has several dialects including Western Balochi, Eastern Balochi, and Southern Balochi.
                </p>
                <div className="glass bg-blue-50/80 p-4 rounded-lg border-l-4 border-blue-600 mb-4">
                  <h3 className="font-serif text-xl font-bold mb-2">Did You Know?</h3>
                  <p>
                    The Balochi language has traditionally been written in the Arabic-Persian script, but more recently Latin script has also been used, particularly online and in certain publications.
                  </p>
                </div>
                <p>
                  Despite being spoken by millions, Balochi faces challenges in terms of standardization and official recognition in education systems across the regions where it is spoken.
                </p>
              </div>
            </section>

            <section id="references" className="wiki-section">
              <h2 className="text-2xl font-serif font-normal text-gray-800 mb-4 border-b pb-2">References</h2>
              <div className="glass p-6 rounded-lg mb-6">
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700 pl-1">
                  <li>Jahani, C. (2013). <i>The Balochi Language and Languages in Iranian Balochistan</i>. Journal of the Middle East and Africa, 4(2), 153-167.</li>
                  <li>Spooner, B. (1989). <i>Baluchistan: Geography, History, and Ethnography</i>. Encyclopaedia Iranica, Vol. III, Fasc. 6, pp. 598-632.</li>
                  <li>Dashti, N. (2017). <i>The Baloch Conflict with Iran and Pakistan: Aspects of a National Liberation Struggle</i>. Trafford Publishing.</li>
                </ol>
              </div>
            </section>
          </div>

          {/* Right sidebar - Wikipedia style */}
          <div className="md:col-span-1">
            <Card className="sticky top-4 glass border-gray-200">
              <CardContent className="p-4">
                <h3 className="text-lg font-serif font-bold mb-3">Balochi People</h3>
                <ScrollArea className="h-[400px] pr-4">
                  <div className="space-y-4">
                    <div className="border-b pb-2">
                      <h4 className="text-sm font-medium">Related Articles</h4>
                      <ul className="text-sm text-blue-600 space-y-1 mt-2">
                        <li className="hover:underline"><Link to="/history">History of Balochistan</Link></li>
                        <li className="hover:underline"><Link to="/culture">Balochi Culture</Link></li>
                        <li className="hover:underline"><Link to="/gallery">Balochi Gallery</Link></li>
                        <li className="hover:underline"><a href="#">Iranian Peoples</a></li>
                      </ul>
                    </div>
                    
                    <div className="border-b pb-2">
                      <h4 className="text-sm font-medium">External Links</h4>
                      <ul className="text-sm text-blue-600 space-y-1 mt-2">
                        <li className="hover:underline"><a href="#">UNESCO - Balochi Heritage</a></li>
                        <li className="hover:underline"><a href="#">Balochistan Archives</a></li>
                        <li className="hover:underline"><a href="#">Balochi Cultural Foundation</a></li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-medium">Tools</h4>
                      <ul className="text-sm text-blue-600 space-y-1 mt-2">
                        <li className="hover:underline"><a href="#">What links here</a></li>
                        <li className="hover:underline"><a href="#">Print/export</a></li>
                        <li className="hover:underline"><a href="#">Download as PDF</a></li>
                      </ul>
                    </div>
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
