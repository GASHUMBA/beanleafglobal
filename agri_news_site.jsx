import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AgriNews() {
  const articles = [
    {
      title: "Climate-Smart Farming",
      excerpt: "New techniques in climate-smart farming are helping farmers adapt to changing weather patterns...",
    },
    {
      title: "AgriTech Innovations",
      excerpt: "Startups are revolutionizing agribusiness with AI-driven crop monitoring and smart irrigation...",
    },
    {
      title: "Global Food Security",
      excerpt: "Experts discuss strategies to ensure global food security through sustainable agricultural practices...",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-green-50 text-gray-800">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-green-700 text-white shadow-md">
        <h1 className="text-2xl font-bold">AgriBusiness Today</h1>
        <nav className="space-x-6">
          <a href="#home" className="hover:text-yellow-300">Home</a>
          <a href="#news" className="hover:text-yellow-300">News</a>
          <a href="#articles" className="hover:text-yellow-300">Articles</a>
          <a href="#contact" className="hover:text-yellow-300">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <motion.section
        id="home"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col items-center justify-center text-center py-20 px-6 bg-gradient-to-r from-green-600 to-green-400 text-white"
      >
        <h2 className="text-4xl font-bold mb-4">Your Source for Agri-Business Insights</h2>
        <p className="max-w-2xl mb-6 text-lg">
          Stay updated with the latest trends, innovations, and expert articles in the agricultural sector.
        </p>
        <Button className="bg-yellow-400 text-black hover:bg-yellow-500">Read More</Button>
      </motion.section>

      {/* Articles Section */}
      <section id="articles" className="py-16 px-6 bg-white">
        <h3 className="text-3xl font-semibold text-center mb-10">Latest Articles</h3>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="rounded-2xl shadow-lg hover:shadow-xl transition">
                <CardContent className="p-6">
                  <h4 className="text-xl font-bold mb-3">{article.title}</h4>
                  <p className="text-gray-600 mb-4">{article.excerpt}</p>
                  <Button variant="outline">Read More</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-green-700 text-white py-6 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} AgriBusiness Today. All rights reserved.</p>
      </footer>
    </div>
  );
}
