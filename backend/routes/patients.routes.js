import express from 'express';
import patient from '../controllers/patients';

const router = express.Router();

router.post('/add-booking', patient.createBooking);

module.exports = router;