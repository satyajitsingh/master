-- Table: public."Submission"

-- DROP TABLE public."Submission";

CREATE TABLE public."Submission"
(
    "Id" uuid NOT NULL DEFAULT uuid_generate_v4(),
    "SecureTokenId" uuid NOT NULL,
    "SubmissionReference" text COLLATE pg_catalog."default" NOT NULL,
    "OrganisationId" uuid NOT NULL,
    "FunctionTypeId" uuid,
    "ClientIPAddress" text COLLATE pg_catalog."default" NOT NULL,
    "NumberofRelevantUnionOfficials" numeric NOT NULL,
    "FullTimeEquivalentEmployees" numeric NOT NULL,
    "ZeroPercentTimeSpent" numeric NOT NULL,
    "OnetoFiftyPercentTimeSpent" numeric NOT NULL,
    "FiftyOnetoNinetyNinePercentTimeSpent" numeric NOT NULL,
    "HundredPercentTimeSpent" numeric NOT NULL,
    "TotalCostofFacilityTime" numeric NOT NULL,
    "TotalPayBill" numeric NOT NULL,
    "PercentagePayBill" numeric NOT NULL,
    "PercentageTimeSpent" numeric NOT NULL,
    "SubmittedTimestamp" timestamp with time zone NOT NULL DEFAULT now(),
    "SubmissionPeriod" text NOT NULL,
    "Employees" text NOT NULL,
    "HoursPaidFacilityTime" numeric NOT NULL,
    "HoursPaidActivities" numeric NOT NULL,
    CONSTRAINT "Submission_pkey" PRIMARY KEY ("Id")
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public."Submission"
    OWNER to postgres;