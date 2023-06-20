-- CreateTable
CREATE TABLE "applications" (
    "id" BIGSERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) DEFAULT CURRENT_TIMESTAMP,
    "company" VARCHAR NOT NULL,
    "applied_date" DATE NOT NULL,
    "position" VARCHAR NOT NULL,
    "location" VARCHAR NOT NULL,
    "salary" INTEGER,
    "application_type" VARCHAR NOT NULL,
    "cover_letter" BOOLEAN NOT NULL,
    "status" VARCHAR NOT NULL,

    CONSTRAINT "applications_pkey" PRIMARY KEY ("id")
);

