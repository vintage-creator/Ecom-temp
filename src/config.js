const STRAPI_BASEURL = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_STRAPIURL_PROD : process.env.REACT_APP_STRAPIURL_DEV

export default STRAPI_BASEURL;