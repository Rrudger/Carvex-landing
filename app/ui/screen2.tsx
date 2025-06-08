'use client';

import { useState } from 'react';
import Section from '@/app/ui/section';

export default function Screen1() {
  const sections = ['commercial', 'residental', 'restoration'];
  const [image0, setImage0] = useState<number>(0);
  const [image1, setImage1] = useState<number>(0);
  const [image2, setImage2] = useState<number>(0);

  return (
    <div>
    {sections.map((section, index) => {
      const image = index === 0 ? image0 : index === 1 ? image1 : image2;
      const setImage = index === 0 ? setImage0 : index === 1 ? setImage1 : setImage2;
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
