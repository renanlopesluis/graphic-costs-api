module.exports = {
    api: function (srv) {
        const service = require('../service/Service.service');
        const server = srv; ;

        server.get('/graphicapi/services', async (req, res) => {
            try {
                const services = await service.list();
                res.status(200).json(services);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.get('/graphicapi/services/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const response = await service.get(id);
                if(!response){
                    res.status(404).json({message: 'Service not found!'});
                    return;
                }
                res.status(200).json(response);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.post('/graphicapi/services', async (req, res) => {
            try {
                const ServiceBuilder = require('../builder/Service.builder');
                const {_id, name, description, cost} = req.body;
                const request = ServiceBuilder.build(_id, name, description, cost);
                
                const response = await service.post(request);
            
                res.status(201).json(response);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.put('/graphicapi/services', async (req, res) => {
            try {
                const ServiceBuilder = require('../builder/Service.builder');
                const {_id, name, description, cost} = req.body;
                const request = ServiceBuilder.build(_id, name, description, cost);
               
                const response = await service.put(request);
               
                res.status(200).json(response);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.delete('/graphicapi/services/:id', async(req, res) => {
            const { id } = req.params;
            try {
                await service.remove(id);
                res.status(200).json({message: 'Service successfully removed!'});
            } catch (error) {
                res.status(500).json({error: error});
            }
        });
    }
}