export interface ICategory {
  _createdAt: Date;
  _id: string;
  _type: string;
  _updatedAt: Date;
  image: Object;
  // "image": Object {
  //   "_type": "image",
  //   "asset": Object {
  //     "_ref": "image-05829810c1a7b2fc6bb43fc3e2e8c5416ae2918f-1200x800-jpg",
  //     "_type": "reference",
  //   },
  // },
  name: string;
}

export interface IRestaurant {
  _createdAt: Date;
  _id: string;
  _type: string;
  _updatedAt: Date;
  address: string;
  dishes: IDish[];
  image: Object;
  lat: number;
  long: number;
  name: string;
  rating: number;
  short_description: string;
  type: Partial<ICategory>;
}

export interface IFeaturedCategory {
  _createdAt: Date;
  _id: string;
  _type: string;
  _updatedAt: Date;
  dishes: IDish[];
  name: string;
  restaurant: Partial<IRestaurant>[];
  short_description: string;
}

export interface IDish {
  _createdAt: Date;
  _id: string;
  _type: string;
  _updatedAt: Date;
  image: Object;
  name: string;
  short_description: string;
  price: number;
}
