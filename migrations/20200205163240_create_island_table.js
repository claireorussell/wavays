
exports.up = function(knex) {
    return knex.schema.createTable('Island', (table) => {
        table.increments().primary
        table.string('name')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('Island')
};
