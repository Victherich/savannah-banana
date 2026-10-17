import React from "react";
import styled from "styled-components";

export default function SideBySideImages({altText1 = "Image 1", altText2 = "Image 2" }) {
  return (
    <Container>
      <ImageWrapper>
        <FullImage src="/im1.jpeg" alt={altText1} />
      </ImageWrapper>
      <ImageWrapper>
        <FullImage src='im2.jpeg' alt={altText2} />
      </ImageWrapper>
    </Container>
  );
}

/* ================= STYLED COMPONENTS ================= */
const Container = styled.div`
  display: flex;
  flex-direction: column; /* Stacked vertically by default (Mobile) */
  gap: 1.5rem;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;

  /* Switch to side-by-side on desktop screens (768px and up) */
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc; /* Optional neutral background for letterboxing if aspect ratios differ */
  border-radius: 8px;
  overflow: hidden;
`;

const FullImage = styled.img`
  width: 100%;
  height: auto;
  max-height: 500px; /* Adjust height limit as needed */
  object-fit: contain; /* Ensures the full image is always visible without cropping */
  display: block;
`;