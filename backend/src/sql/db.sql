CREATE TABLE IF NOT EXISTS cliente (
  id integer primary key generated by default as identity,
  ncedula bigint,
  nombre text not null check (nombre <> ''),
  apellido text not null check (apellido <> ''),
  id_departamento integer
);


// en base a la tabla usuarios creame el sequelize
create table IF NOT EXISTS usuarios (
  id serial primary key,
  nombre text,
  username text,
  password text,
  email text
);

CREATE TABLE if not exists departamentos (
  id serial primary key,
  nombre text,
  id_cliente integer
);