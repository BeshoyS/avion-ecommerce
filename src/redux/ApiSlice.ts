import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { Category, Gallery, Product } from "../types";

export const firebaseApi = createApi({
  reducerPath: "firebaseApi",
  baseQuery: fakeBaseQuery(),
  tagTypes: ["categories", "gallery", "products"],
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
  }),
});

export const {
  useGetCategoriesQuery,
  useGetGalleryQuery,
  useGetProductsQuery,
} = firebaseApi;
