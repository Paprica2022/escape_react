const production = {
    API_URL: "http://3.39.9.233:3000",
  };
  
  const development = {
    API_URL: "http://3.39.9.233:3000",
  };
  
  module.exports =
    process.env.NODE_ENV === "production" ? production : development;
  