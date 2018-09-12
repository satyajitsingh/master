DROP DATABASE IF EXISTS facilitytime;
CREATE DATABASE facilitytime
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'English_United Kingdom.1252'
    LC_CTYPE = 'English_United Kingdom.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE facilitytime
    IS 'facilitytime database';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";