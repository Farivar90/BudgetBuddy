module.exports = {
  secretOrKey: process.env.SECRET_OR_KEY,
  mongoURI: process.env.MONGO_URI,
  isProduction: process.env.NODE_ENV === 'production'
};
  
console.log('Environment Variables:', {
  MONGO_URI: process.env.MONGO_URI || 'Not Set',
  SECRET_OR_KEY: process.env.SECRET_OR_KEY || 'Not Set',
  NODE_ENV: process.env.NODE_ENV || 'Not Set',
});
