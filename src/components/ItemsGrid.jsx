import React, { useRef } from 'react';
import useImageHover from '../hooks/useImageHover';

const ItemsGrid = ({ items }) => {
  return (
    <div className="box-container">
      {items.map((item, index) => {
        const imageRef = useRef(null);
        useImageHover(imageRef);

        return (
          <div className="box" key={index}>
            <div className="text-hover-zoom">
              <h2>
                <a
                  href={item.link}
                  target={item.link.startsWith('http') ? '_blank' : '_self'}
                  rel={item.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {item.title}
                </a>
              </h2>
            </div>
            {item.imageSrc && (
              <div className="image-container">
                <img ref={imageRef} src={item.imageSrc} alt={`${item.title} thumbnail`} />
              </div>
            )}
            {item.descriptionParas.map((paragraph, pIndex) => (
              <p key={pIndex} dangerouslySetInnerHTML={{ __html: paragraph }} />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ItemsGrid;
