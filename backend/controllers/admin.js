import pool from '../database/keys';

const admin = {};

admin.getBookings = async (req, res) => {
    try {
        const bookings = await (await pool.query('SELECT * FROM booking ')).rows;
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({
            message: 'An error has occured',
            error
        })
    }

};