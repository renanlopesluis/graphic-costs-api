module.exports = {
    api: function (srv) {
        const service = require('../service/Category.service');
        const server = srv; ;
        server.get('/graphicapi/categories', async (req, res) => {
            try {
                const categories = await service.list();
                res.status(200).json(categories);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.get('/graphicapi/categories/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const category = await service.get(id);
                if(!category){
                    res.status(404).json({message: 'Category not found!'})
                    return;
                }
                res.status(200).json(category);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.post('/graphicapi/categories', async (req, res) => {
            const { category } = req.body;
            try {
                category = await service.post(category);
                res.status(201).json(category);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.put('/graphicapi/categories', async (req, res) => {
            const { category } = req.body;
            try {
                category = await service.put(category);
                res.status(200).json(category);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.delete('/graphicapi/categories/:id', async(req, res) => {
            const { id } = req.params;
            try {
                await service.remove(id);
                res.status(200).json({message: 'Category successfully removed!'});
            } catch (error) {
                res.status(500).json({error: error});
            }
        });
    }
}