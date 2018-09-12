-- Table: public."SecureToken"

-- DROP TABLE public."SecureToken";

CREATE TABLE public."SecureToken"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "OrganisationId" uuid NOT NULL,
    "SecureToken" text COLLATE pg_catalog."default" NOT NULL,
    "Email" text COLLATE pg_catalog."default" NOT NULL,
    "FirstName" text COLLATE pg_catalog."default" NOT NULL,
    "LastName" text COLLATE pg_catalog."default" NOT NULL,
    "Status" text COLLATE pg_catalog."default" NOT NULL,
    "IssuedTimestamp" timestamp with time zone NOT NULL DEFAULT now(),
    "StatusChangedTimestamp" timestamp with time zone,
    "ClientIPAddress" text,
    "HasPublicSectorSuffix" boolean NOT NULL DEFAULT false,
    "HasOrganisationSuffix" boolean NOT NULL DEFAULT false,
    "HasSectorSuffix" boolean NOT NULL DEFAULT false,
    CONSTRAINT "SecureToken_pkey" PRIMARY KEY ("Id"),
    CONSTRAINT "FK_OrganisationId" FOREIGN KEY ("OrganisationId")
        REFERENCES public."Organisation" ("Id") MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."SecureToken"
    OWNER to postgres;