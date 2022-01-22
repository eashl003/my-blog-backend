module.exports = ({ env }) => ({
  url: env("HEROKU_POSTGRESQL_AQUA_URL"),
});