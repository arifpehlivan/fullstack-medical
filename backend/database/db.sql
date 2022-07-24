CREATE DATABASE medical;

CREATE TABLE booking  (
    id_b SERIAL PRIMARY KEY,
    full_name  TEXT NOT NULL,
    p_email  TEXT NOT NULL UNIQUE,
    p_phone  TEXT NOT NULL,
    b_date DATE NOT NULL,
    b_hour DATE NOT NULL
);

CREATE TABLE admin_p  (
    id_a SERIAL PRIMARY KEY,
    a_name  TEXT NOT NULL,
    a_email  TEXT NOT NULL UNIQUE,
    a_password  TEXT NOT NULL
);

CREATE TABLE patients (
    id_p SERIAL PRIMARY KEY,
    p_name  TEXT NOT NULL,
    p_email  TEXT NOT NULL UNIQUE,
    p_password  TEXT NOT NULL
);