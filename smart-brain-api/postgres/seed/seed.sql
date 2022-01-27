BEGIN TRANSACTION;

INSERT INTO
  users (name, email, entries, joined)
VALUES
  ('Jessie', 'jessie@gmail.com', 5, '2018-01-01');

INSERT INTO
  login (hash, email)
VALUES
  (
    '$2a$10$uknT7i3LXILfyynlFhj67uCH8kDjL8.PKbWCIQG0hZWcBuRgVr9VS',
    'jessie@gmail.com'
  );

COMMIT;