-- Table: public."FunctionType"

-- DROP TABLE public."FunctionType";

CREATE TABLE public."FunctionType"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Name" text COLLATE pg_catalog."default" NOT NULL,
    "Index" numeric NOT NULL,
    CONSTRAINT "pk_FunctionType" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."FunctionType"
    OWNER to postgres;