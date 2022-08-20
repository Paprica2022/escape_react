const production = {
    API_URL: "http://localhost:4000",
  };
  
  const development = {
    API_URL: "http://localhost:4000",
  };
  
  module.exports =
    process.env.NODE_ENV === "production" ? production : development;
  