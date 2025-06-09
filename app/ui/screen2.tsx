'use client';

import { useState } from 'react';
import Section from '@/app/ui/section';

export default function Screen1() {
  const sections = ['commercial', 'residental', 'restoration'];
  const [image0, set0] = useState<number>(0);
  const [image1, set1] = useState<number>(0);
  const [image2, set2] = useState<number>(0);

  return (
    <div>
    {sections.map((section, index) => {
      const image = index === 0 ? image0 : index === 1 ? image1 : image2;
      const setImage = index === 0 ? set0 : index === 1 ? set1 : set2;
      return (
        <Section
          key={section}
          section={section}
          index={index}
          image={image}
          setImage={setImage}
        />
      )}
    )}
    </div>
  )
};
