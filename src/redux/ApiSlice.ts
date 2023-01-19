import {
  collection,
  doc,
  getDoc,
  getDocs,
  query,
  where,
  limit,
} from "firebase/firestore";
import { firebaseApi } from "../firebase/firebaseApi";
import { db } from "../firebase/firebaseConfig";
import { Category, Gallery, Product } from "../types";

const firebaseEndPoints = firebaseApi.injectEndpoints({
  endpoints: (build) => ({
    getCategories: build.query<Category[], void>({
      async queryFn(): Promise<any> {
        try {
          const querySnapshot = await getDocs(collection(db, "categories"));
          const categoriesData = querySnapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              } as Category)
          );
          return { data: categoriesData };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["categories"],
    }),
    getGallery: build.query<Gallery[], void>({
      async queryFn(): Promise<any> {
        try {
          const querySnapshot = await getDocs(collection(db, "gallery"));
          const galleryData = querySnapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              } as Gallery)
          );
          return { data: galleryData };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["gallery"],
    }),
    getProducts: build.query<Product[], void>({
      async queryFn(): Promise<any> {
        try {
          const querySnapshot = await getDocs(collection(db, "products"));
          const ProductsData = querySnapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              } as Product)
          );
          return { data: ProductsData };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["products"],
    }),
    getFeaturedProducts: build.query<Product[], number>({
      async queryFn(limitNum): Promise<any> {
        try {
          const queryIndicator = query(
            collection(db, "products"),
            where("featured", "==", true),
            limit(limitNum)
          );
          const querySnapshot = await getDocs(queryIndicator);
          const ProductsData = querySnapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              } as Product)
          );
          return { data: ProductsData };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["products"],
    }),
    getProductsByCategory: build.query<Product[], string>({
      async queryFn(arg): Promise<any> {
        try {
          const queryIndicator = query(
            collection(db, "products"),
            where("categoryId", "==", arg)
          );
          const querySnapshot = await getDocs(queryIndicator);
          const ProductsData = querySnapshot.docs.map(
            (doc) =>
              ({
                id: doc.id,
                ...doc.data(),
              } as Product)
          );
          return { data: ProductsData };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["products"],
    }),
    getsingleProduct: build.query<Product, string>({
      async queryFn(arg): Promise<any> {
        try {
          const docSnap = await getDoc(doc(db, "products", arg));
          const singleProductData = {
            id: docSnap.id,
            ...docSnap.data(),
          } as Product;
          return { data: singleProductData };
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: ["products"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetGalleryQuery,
  useGetProductsQuery,
  useGetProductsByCategoryQuery,
  useGetFeaturedProductsQuery,
  useGetsingleProductQuery,
} = firebaseEndPoints;
