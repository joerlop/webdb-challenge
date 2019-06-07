exports.up = function(knex, Promise) {
  return knex.schema.createTable("actions", function(tbl) {
    tbl.increments();

    tbl.string("description").notNullable();

    tbl.string("notes").notNullable();

    tbl.boolean("completed").notNullable();

    tbl
    .integer('project_id')
    .unsigned()
    .notNullable()
    .references('id')
    .inTable('projects')
    .onDelete('RESTRICT') // explain how cascading works
    .onUpdate('CASCADE');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("actions");
};