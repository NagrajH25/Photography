"use client";

"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { portfolioCategories, portfolioItems } from "../../data/site-data";
import { CategoryFilter } from "./category-filter";
import { LightboxViewer } from "./lightbox-viewer";
import { PhotoCard } from "./photo-card";

export function PortfolioGrid() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedSlug, setSelectedSlug] = useState<string | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "All") {
      return portfolioItems;
    }
    return portfolioItems.filter((item) => item.category === activeCategory);
  }, [activeCategory]);

  const selectedItem = portfolioItems.find((item) => item.slug === selectedSlug);

  return (
    <>
      <div className="mb-6">
        <CategoryFilter
          categories={portfolioCategories}
          activeCategory={activeCategory}
          onChange={setActiveCategory}
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredItems.map((item, index) => (
          <motion.div
            key={item.slug}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
          >
            <PhotoCard
              title={item.title}
              category={item.category}
              description={item.description}
              onOpen={() => setSelectedSlug(item.slug)}
            />
          </motion.div>
        ))}
      </div>

      {selectedItem ? (
        <LightboxViewer
          open={Boolean(selectedItem)}
          onClose={() => setSelectedSlug(null)}
          title={selectedItem.title}
          category={selectedItem.category}
          description={selectedItem.description}
        />
      ) : null}
    </>
  );
}
