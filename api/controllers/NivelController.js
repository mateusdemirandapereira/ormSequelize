const db = require("../models/index");


class NivelController {
    static async pegaTodosOsNiveis(req,res){
        try {
            const todosOsNiveis = await db.niveis.findAll();
            return res.status(200).json(todosOsNiveis);

        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
    static async pegaUmNivel(req, res) {
        try{
            const { id } = req.params;
            const umaNivel = await db.niveis.findOne(
                {
                    where: { id }
                });
                return res.status(200).json(umaNivel);

        }catch(error){
            return res.status(500).json({msg:error.message})
        }
    }
    static async criaNivel(req,res){
        try{
            const novoNivel = req.body;
            const novoNivelCriado = await db.niveis.create(novoNivel);
            return res.status(201).json(novoNivelCriado);
        }catch(error){
            return res.json(500).json({msg:error.message});
        }
    }
    static async atualizaNivel(req,res){
        try{
            const novaInfos = req.body;
            const {id} = req.params;
            await db.niveis.update(novaInfos,{where:{id}});
            const NivelAtualizado = await db.niveis.findOne({where:{id}});
            return res.status(200).json(NivelAtualizado);

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }
    static async apagaNivel(req,res){
        try{
            const {id} = req.params;
            await db.niveis.destroy({where:{id}});
            return res.status(200).json({msg:`id ${id} deletado`});

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }
}



module.exports = NivelController;
