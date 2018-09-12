-- Table: public."Organisation"

-- DROP TABLE public."Organisation";

CREATE TABLE public."Organisation"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "Name" text COLLATE pg_catalog."default" NOT NULL,
    "Code" text COLLATE pg_catalog."default",
    "EmailSuffixes" text COLLATE pg_catalog."default",
    "SectorTypeId" uuid NOT NULL,
    "IsSeeded" boolean DEFAULT false,
    "Region" text,
    CONSTRAINT "Organisation_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_SectorTypeId" FOREIGN KEY ("SectorTypeId")
        REFERENCES public."SectorType" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Organisation"
    OWNER to postgres;