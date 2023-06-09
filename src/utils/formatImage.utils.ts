import DefaultUserImage from "../assets/DefaultUserImage.svg";

export const formatImageUrl = (image?: string): string => {
  if (!image) {
    return DefaultUserImage;
  }

  return image?.includes("http") ? image : `https://office.sydani.org/${image}`;
};
