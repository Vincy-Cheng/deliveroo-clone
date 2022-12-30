import { View, Text, ScrollView } from 'react-native';
import React, { useEffect, useState } from 'react';
import CategoryCard from './CategoryCard';
import sanityClient, { urlFor } from '../../sanity';
import { ICategory } from '../types';

type Props = {};

const Categories = (props: Props) => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == "category"]
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);
  // console.log(categories);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* <Text>Categories</Text> */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
