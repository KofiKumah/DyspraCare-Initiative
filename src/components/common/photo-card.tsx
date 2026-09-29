"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type PhotoCardProps = {
  src: string;
  alt: string;
  title: string;
  description?: string;
  className?: string;
};

const fallbackSrc = "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80";

async function resolvePhotoSource(candidate: string): Promise<string> {
  const apiUrl = process.env.NEXT_PUBLIC_REAL_PHOTO_API_URL;

  if (!apiUrl || candidate === fallbackSrc) {
    return candidate;
  }

  try {
    const response = await fetch(apiUrl, { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Photo API unavailable");
    }

    const payload = (await response.json()) as Record<string, unknown>;
    const imageUrl =
      (typeof payload.url === "string" && payload.url) ||
      (typeof payload.image === "string" && payload.image) ||
      (typeof payload.photo === "string" && payload.photo) ||
      (Array.isArray(payload.results) && typeof payload.results[0]?.url === "string" && payload.results[0].url) ||
      candidate;

    return imageUrl || candidate;
  } catch {
    return candidate;
  }
}

export function PhotoCard({ src, alt, title, description, className = "" }: PhotoCardProps) {
  const [imageSrc, setImageSrc] = useState(src || fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    resolvePhotoSource(src || fallbackSrc).then((nextSource) => {
      if (isMounted) {
        setImageSrc(nextSource || fallbackSrc);
        setIsLoading(false);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [src]);

  return (
    <div className={`photo-card ${className}`.trim()}>
      <div className="photo-frame" aria-busy={isLoading}>
        {isLoading ? <div className="photo-loading" aria-label="Loading photo" /> : null}
        <Image
          src={imageSrc}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="photo-image"
          onLoadingComplete={() => setIsLoading(false)}
          onError={() => {
            if (imageSrc !== fallbackSrc) {
              setImageSrc(fallbackSrc);
            }
            setIsLoading(false);
          }}
        />
      </div>
      <div className="photo-copy">
        <h3>{title}</h3>
        {description ? <p>{description}</p> : null}
      </div>
    </div>
  );
}
