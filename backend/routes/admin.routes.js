import express from 'express';
import admin from '../controllers/admin';

const router = express.Router();


router.post('/bookings', admin.getBookings);



module.exports = router;