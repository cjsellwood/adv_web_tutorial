BEGIN TRANSACTION;

create table users (
	id serial primary key,
	name VARCHAR(100),
	email text unique not null,
	entries BIGINT default 0,
	joined timestamp not null
);

COMMIT;