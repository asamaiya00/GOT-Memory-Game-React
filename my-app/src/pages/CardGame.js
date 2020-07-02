import React, { useState, useEffect } from 'react';
import Auth from '../middleware/Auth';

const CardGame = () => {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTF4I-LuCZ7MowoDo5q1UVMkzFQHEZD1r7sag&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS5BkuJKrghDBIJeh8zrjVFpUD7-uI-LGX6OQ&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSsge-cqYU79b80_Hgb5nFnMRrftLBBPskpPA&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRNFccPsNZN2lWZsTJqDX7nxcllA4S0UEmVxg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSasUvWlbTZLt1hB8t8rbn1_q6OmI0JTUx3nw&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGXhiLdVqFniF8d5s1sZteLqpNv-0Cl70dbg&usqp=CAU',
  ];

  const [cardImages, setcardImages] = useState([]);

  useEffect(() => {
    setcardImages(
      images
        .concat(images)
        .sort(() => 0.5 - Math.random())
        .map((image, i) => {
          return {
            src: image,
            id: Math.floor(Math.random() * 10000),
            isMatched: false,
            isShowing: false,
          };
        })
    );
  }, []);

  const [flippedImages, setFlippedImages] = useState([]);

  const flip = (imageId) => {
    setcardImages(
      cardImages.map((image) => {
        if (image.id === imageId) {
          image.isShowing = true;
          setFlippedImages([...flippedImages, image]);
        }
        return image;
      })
    );
  };

  useEffect(() => {
    if (flippedImages.length > 2) {
      setcardImages(
        cardImages.map((image) => {
          if (image.src === flippedImages[0].src) {
            if (flippedImages[0].src === flippedImages[1].src) {
              image.isMatched = true;
              
            } else {
              image.isShowing = false;
            }
          } else {
            image.isShowing = false;
          }
          return image;
        })
      );
      setFlippedImages([]);
    }
  }, [flippedImages]);

  return (
    <div>
      <div className="flex flex-wrap justify-between">
        {cardImages.map((img, i) => {
          return <Card key={i} flip={flip} img={img}></Card>;
        })}
      </div>
    </div>
  );
};

function Card({ img, flip }) {
  const jokerimg =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRs1eKwPhq7jK4ZEiw6J9CwibmEgiH8Yy6DwQ&usqp=CAU';

  const flipImage = () => {
    if (img.isMatched) return;
    flip(img.id);
  };
  return (
    <div className="w-1/4 my-2" onClick={flipImage}>
      {img.isMatched ? (
        <img src={img.src} width="400" alt='' className="p-5 h-64 opacity-50"  />
      ) : img.isShowing ? (
        <img src={img.src} width="400" alt='' className="p-5 h-64" />
      ) : (
        <img src={jokerimg} width="400" alt='' className="p-5 h-64" />
      )}
    </div>
  );
}

export default Auth(CardGame);
