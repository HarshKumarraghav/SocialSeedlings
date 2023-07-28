"use client";

import { useState, useEffect } from "react";
import { Blurhash } from "react-blurhash";
import Classes from "./Image.module.css";
type ImageComponentProps = {
  src: string;
  alt: string;
  hash: string;
};

const ImageComponent = ({ src, alt, hash }: ImageComponentProps) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const img = new Image();

    img.onload = () => {
      setMounted(true);
    };
    img.src = src;
  }, []);

  return (
    <div className={Classes.post_image}>
      {mounted ? (
        <img className={Classes.post_image} src={src} alt={alt} />
      ) : (
        <Blurhash
          hash={hash}
          width={"100%"}
          height={"100%"}
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </div>
  );
};

export default ImageComponent;
