import {
    Router
} from 'express';
import pool from '../database/keys';

const authentication = {};

authentication.signUp = async (req, res) => {
    const {
        name,
        email,
        password,
        role
    } = req.body;
    if (role == 'admin') {
        try {
            await pool.query('INSERT INTO admin_p (a_name, a_email, a_password) VALUES ($1, $2, $3)', [name, email, password]);
            res.status(200).json({
                message: 'Succesful registered admin',
                admin: {
                    name,
                    email,
                    password
                }
            })
        } catch (error) {
            if (error.constraint == 'admin_p_email_key') {
                res.status(500).json({
                    message: 'Someone is already using that email',
                    error
                })
            } else {
                res.status(500).json({
                    message: 'An error  has occured',
                    error
                });
            }

        }
    } else {
        try {
            await pool.query('INSERT INTO patients (p_name, p_email, p_password) VALUES ($1, $2, $3)', [name, email, password]);
            res.status(200).json({
                message: 'Succesful registered patients',
                patients: {
                    name,
                    email,
                    password
                }
            })
        } catch (error) {
            if (error.constraint == 'patient_p_email_key') {
                res.status(500).json({
                    message: 'Someone is already using that email',
                    error
                })
            } else {
                res.status(500).json({
                    message: 'An error  has occured',
                    error
                });
            }

        }
    }
};

authentication.signIn = async (req, res) => {
    const {
        email,
        password,
        role
    } = req.body;
    if (role == 'admin') {
        try {
            const admin = await (
                await pool.query(
                    'SELECT * FROM admin_p WHERE a_email = $1 AND a_password=$2', 
                    [email, password]
                    )
                ).rows;
            if (admin.length > 0) {
                res.status(200).json({
                id: admin[0].id_p,
                name: admin[0].p_name,
                email: admin[0].p_email,
                role: 'admin'
            })
            } else {
                res.status(200).json({
                message: 'The admin does not exist',
                NotFound: true
            });
            }
            
            
        } catch (error) {
            res.status(500).json({
                message: 'An error has occured',
                error
            })
        }
    } else {
        try {
            
            const patient = await (
                await pool.query(
                    'SELECT * FROM patients WHERE p_email = $1 AND p_password=$2', 
                    [email, password]
                    )
                ).rows;
            if (student.length > 0) {
                res.status(200).json({
                id: patient[0].id_s,
                name: patient[0].s_name,
                email: patient[0].s_email,
                role: 'patient'
            })
            } else {
                res.status(200).json({
                message: 'The patient does not exist',
                NotFound: true
            });
            }
            
            
        } catch (error) {
            res.status(500).json({
                message: 'An error has occured',
                error
            })
        }
    }
}

module.exports = authentication;