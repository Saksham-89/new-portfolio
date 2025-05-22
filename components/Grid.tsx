'use client';

import { gridItems } from "@/data";
import dynamic from "next/dynamic";

// Disable SSR for BentoGrid and BentoGridItem because they use browser-only APIs (e.g., Lottie, document)
const BentoGrid = dynamic(() => import('./ui/BentoGrid').then(mod => mod.BentoGrid), { ssr: false });
const BentoGridItem = dynamic(() => import('./ui/BentoGrid').then(mod => mod.BentoGridItem), { ssr: false });

const Grid = () => {
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
};

export default Grid;
