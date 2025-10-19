export interface Product {
  id: number;
  name: string;
  category: string;
  price?: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  isNew?: boolean;
}

export interface HeroSlide {
  id: number;
  imageUrl: string;
  title: string;
  subtitle: string;
  buttonText: string;
}