import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'
import 'dotenv/config';
const client = sanityClient({
    projectId: process.env.SANITY_PROJECT_ID,
    dataset: "production",
    useCdn: true,
    apiVersion: "2021-10-21"
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);

export default client