const { Router } = require('express');
const router = Router();
const admin = require('firebase-admin');

const db = admin.firestore();

// Ruta para crear una nueva rutina
router.post('/api/rutinas', async (req, res) => {
    try {
        await db.collection("rutinas").doc("/" + req.body.id + "/").create({ name: req.body.name });
        return res.status(201).json({ message: 'Rutina creada satisfactoriamente' });
    } catch (error) {
        console.log(error);
        return res.status(500).send({ message: 'Error al crear la rutina', error: error.message });
    }
});

// Ruta para obtener una rutina por su ID
router.get("/api/rutinas/:rutina_id", (req, res) => {
    (async () => {
        try {
            const doc = db.collection("rutinas").doc(req.params.rutina_id);
            const item = await doc.get();
            const response = item.data();
            return res.status(200).json(response);
        } catch (error) {
            return res.status(500).send({ message: 'Error al obtener la rutina', error: error.message });
        }
    })();
});

// Ruta para obtener todas las rutinas
router.get('/api/rutinas', async (req, res) => {
    try {
        const query = db.collection('rutinas');
        const querySnapshot = await query.get();
        const docs = querySnapshot.docs;

        const response = docs.map(doc => ({
            id: doc.id,
            name: doc.data().name
        }));
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: 'Error al obtener todas las rutinas', error: error.message });
    }
});

// Ruta para eliminar una rutina por su ID
router.delete("/api/rutinas/:rutina_id", async (req, res) => {
    try {
        const document = db.collection("rutinas").doc(req.params.rutina_id);
        await document.delete();
        return res.status(200).json({ message: 'Rutina eliminada satisfactoriamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al eliminar la rutina', error: error.message });
    }
});

// Ruta para actualizar una rutina por su ID
router.put('/api/rutinas/:rutina_id', async (req, res) => {
    try {
        const document = db.collection('rutinas').doc(req.params.rutina_id);
        await document.update({ name: req.body.name });
        return res.status(200).json({ message: 'Rutina actualizada satisfactoriamente' });
    } catch (error) {
        return res.status(500).json({ message: 'Error al actualizar la rutina', error: error.message });
    }
});

module.exports = router;

