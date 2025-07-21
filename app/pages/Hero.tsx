import TextType from '@/src/blocks/TextAnimations/TextType/TextType';
import React from 'react';

const Hero: React.FC = () => {
    return (
      <div className="border flex items-center justify-center p-8">
        <h1 className="font-bold flex flex-col items-center text-6xl">
        DIGITAL MARKETING
          <p>COMPANY</p>
          <TextType className='text-black'
            text={["WEB DEVELOPMENT", "SEO", "SOCIAL MEDIA", "PPC"]}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="|"
          />
        </h1>
      </div>
    );
}

export default Hero;
