// Firebase
export interface Category {
  id: string;
  category: string;
  img: string;
}

export interface Gallery {
  id: string;
  name: string;
  title: string;
  url: string;
}

export interface Product {
  id: string;
  categoryId: string;
  featured: boolean;
  name: string;
  price: number;
  sku: number;
  url: string;
}

//Cart Slice
export interface CartSlice {
  products: Product[];
  quantity: number;
  total: number;
}

//UI Components Data
export interface featuresDataTypes {
  icon: JSX.Element;
  title: string;
  desc: string;
}

interface footerLink {
  title: string;
  href: string;
}

export interface footerLinkDataTypes {
  heading: string;
  links: footerLink[];
}

export interface listingDataTypes {
  id: string;
  img: string;
  title: string;
  price: number;
}

export interface socialLinksTypes {
  name: string;
  icon: JSX.Element;
  url: string;
}

// components
//InfoBlockComponent
export interface InfoBlockTypes {
  heading: string;
  desc1: string;
  desc2?: string;
  btnName: string;
  btnStyle: string;
  img: string;
  sectionStyle?: string;
  naviagteTo: string;
}

//Button Component
export interface ButtonTypes {
  name: string;
  style?: string;
  onClick?: (e?: any) => void;
  btnType?: "submit" | "reset";
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
}

//Heading Component
export interface HeadingTypes {
  title: string;
  bgImg: string;
  customStyle?: string;
}
