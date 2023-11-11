const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

const db = admin.firestore();

router.post('/api/register', async (req, res) => {
    try {
        const userRef = db.collection('users').doc(req.body.email);
        const userDoc = await userRef.get();

        if (userDoc.exists) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        } else {
            await userRef.set({
                email: req.body.email,
                password: req.body.password, // Asegúrate de encriptar la contraseña
                // Otros datos del usuario que desees almacenar
            });
            return res.status(201).json({ message: 'Usuario creado exitosamente' });
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

router.post('/api/login', async (req, res) => {
    try {
        const userRef = db.collection('users').doc(req.body.email);
        const userDoc = await userRef.get();

        if (!userDoc.exists) {
            return res.status(404).json({ message: 'Usuario no encontrado' });
        } else {
            const userData = userDoc.data();
            if (userData.password !== req.body.password) {
                return res.status(401).json({ message: 'Credenciales inválidas' });
            } else {
                return res.status(200).json({ message: 'Inicio de sesión exitoso' });
            }
        }
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

module.exports = router;
