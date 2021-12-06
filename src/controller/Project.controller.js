module.exports = {
    api: function (srv) {
        const service = require('../service/Project.service');
        const server = srv; ;

        server.get('/graphicapi/projects', async (req, res) => {
            try {
                const projects = await service.list();
                res.status(200).json(projects);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.get('/graphicapi/projects/:id', async (req, res) => {
            try {
                const { id } = req.params;
                const project = await service.get(id);
                if(!project){
                    res.status(404).json({message: 'Project not found!'});
                    return;
                }
                res.status(200).json(project);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.post('/graphicapi/projects', async (req, res) => {
            try {
                const ProjectBuilder = require('../builder/Project.builder');
                const {_id, name, budget, cost, category, services} = req.body;
                
                const project = ProjectBuilder.build(_id, name, budget, cost, category, services);
                
                const resp = await service.post(project);
                
                res.status(201).json(resp);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.put('/graphicapi/projects', async (req, res) => {
            try {
                const ProjectBuilder = require('../builder/Project.builder');
                const {_id, name, budget, cost, category, services} = req.body;
                const project = ProjectBuilder.build(_id, name, budget, cost, category, services);

                const resp = await service.put(project);
               
                res.status(200).json(resp);
            } catch (error) {
                res.status(500).json({error: error});
            }
        });

        server.delete('/graphicapi/projects/:id', async(req, res) => {
            const { id } = req.params;
            try {
                await service.remove(id);
                res.status(200).json({message: 'Project successfully removed!'});
            } catch (error) {
                res.status(500).json({error: error});
            }
        });
    }
}