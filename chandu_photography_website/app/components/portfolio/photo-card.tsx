"use client";

import { motion } from "framer-motion";
import { ImageCard } from "../common/image-card";

type PhotoCardProps = {
  title: string;
  category: string;
  description: string;
  onOpen: () => void;
};

export function PhotoCard({ title, category, description, onOpen }: PhotoCardProps) {
  return (
    <motion.button
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.99 }}
      onClick={onOpen}
      className="text-left"
    >
      <ImageCard title={title} subtitle={category} description={description} tone="sand" className="min-h-[22rem]" />
    </motion.button>
  );
}
