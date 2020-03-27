
exports.seed = function(knex) {
  return knex("helpers")
    .insert([
      { name: "policeman", job: "keeps you safe"},
      { name: "fireman", job: "puts out fires"},
      { name: "doctor", job: "helps you when sick"},
      { name: "nurse", job: "assists doctor"}
    ])
}