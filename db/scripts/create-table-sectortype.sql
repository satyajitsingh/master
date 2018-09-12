-- Table: public."SectorType"

-- DROP TABLE public."SectorType";

CREATE TABLE public."SectorType"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Name" text COLLATE pg_catalog."default" NOT NULL,
    "EmailSuffixes" text,
    "Index" numeric NOT NULL,
    "IsFunctional" boolean NOT NULL DEFAULT false,
    CONSTRAINT "SectorType_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."SectorType"
    OWNER to postgres;
