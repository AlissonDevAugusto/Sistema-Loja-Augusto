module.exports = {
  /* config para o sequelizer se conectar */
  dialect: "postgres" /* definir o banco */,
  host: "localhost",
  port: 5432 /* opcional se for 5432 */,
  username: "adminAugusto" /* credencial nome */,
  password: "123456Augusto" /* credencia senha */,
  database: "sistema-augusto-sql" /* nome dado ao banco */,
  define: {
    /* padrões : */
    timestamps: true /* traquear data de criação e atualização */,
    underscored: true /* letras minuscula */,
    underscoredAll: true /* todas letras minusculas */,
  },
};
