module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  passoword: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
