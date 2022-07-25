import pool from '../database/keys';

const patient = {};

patient.createBooking = async (req, res) => {
    const {
        id,
        full_name,
        p_email,
        p_phone,
        b_date,
        b_hour
    } = req.body;
    try {
        await pool.query('INSERT INTO booking (id_b, full_name, p_email, p_phone, b_date, b_hour) VALUES ($1, $2, $3, $4, $5, $6)', [id, full_name, p_email, p_phone,
            b_date,
            b_hour]);
        const booking = await (await pool.query('SELECT * FROM course ORDER BY id_b DESC LIMIT 1')).rows;
        res.status(200).json({
            message: 'Successful added booking',
            booking
        })
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }
};