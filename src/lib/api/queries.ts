import qs from 'qs';

const productAttributesQuery = {
  populate: {
    image: {
      fields: ['url'],
    }
  }
}

export const fetchProductsQuery = qs.stringify(productAttributesQuery, { encodeValuesOnly: true });