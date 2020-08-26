const db = require("../models/index");


class TurmaController {
    static async pegaTodasAsTurmas(req,res){
        try {
            const todasAsTurmas = await db.turmas.findAll();
            return res.status(200).json(todasAsTurmas);

        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
    static async pegaUmaTurma(req, res) {
        try{
            const { id } = req.params;
            const umaTurma = await db.turmas.findOne(
                {
                    where: { id }
                });
                return res.status(200).json(umaTurma);

        }catch(error){
            return res.status(500).json({msg:error.message})
        }
    }
    static async criaTurma(req,res){
        try{
            const novaTurma = req.body;
            const novaTurmaCriada = await db.turmas.create(novaTurma);
            return res.status(201).json(novaTurmaCriada);
        }catch(error){
            return res.json(500).json({msg:error.message});
        }
    }
    static async atualizaTurma(req,res){
        try{
            const novaInfos = req.body;
            const {id} = req.params;
            await db.turmas.update(novaInfos,{where:{id}});
            const turmaAtualizada = await db.turmas.findOne({where:{id}});
            return res.status(200).json(turmaAtualizada);

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }
    static async apagaTurma(req,res){
        try{
            const {id} = req.params;
            await db.turmas.destroy({where:{id}});
            return res.status(200).json({msg:`id ${id} deletado`});

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }
}


module.exports = TurmaController;