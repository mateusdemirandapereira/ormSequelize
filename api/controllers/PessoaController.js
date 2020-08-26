const db = require("../models/index");

class PessoaController {
    static async pegaTodasAsPessoas(req, res) {
        try {
            const todasAsPessoas = await db.pessoas.findAll();
            return res.status(200).json(todasAsPessoas);

        } catch (error) {
            return res.status(500).json({ erro: error.message });
        }
    }
    static async pegaUmaPessoa(req, res) {
        try{
            const { id } = req.params;
            const umaPessoa = await db.pessoas.findOne(
                {
                    where: { id }
                });
                return res.status(200).json(umaPessoa);

        }catch(error){
            return res.status(500).json({msg:error.message})
        }
    }
    static async criaPessoa(req,res){
        try{
            const novaPessoa = req.body;
            const novaPessoaCriada = await db.pessoas.create(novaPessoa);
            return res.status(201).json(novaPessoaCriada);
        }catch(error){
            return res.json(500).json({msg:error.message});
        }
    }
    static async atualizaPessoa(req,res){
        try{
            const novaInfos = req.body;
            const {id} = req.params;
            await db.pessoas.update(novaInfos,{where:{id}});
            const pessoaAtualizada = await db.pessoas.findOne({where:{id}});
            return res.status(200).json(pessoaAtualizada);

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }

    static async apagaPessoa(req,res){
        try{
            const {id} = req.params;
            await db.pessoas.destroy({where:{id}});
            return res.status(200).json({msg:`id ${id} deletado`});

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }
    static async pegaUmaMatricula(req, res) {
        try{
            const { estudanteId,matriculaId } = req.params;
            const umaMatricula = await db.matriculas.findOne(
                {
                    where: {
                     id: matriculaId,
                     estudante_id:estudanteId
                     }
                });
                return res.status(200).json(umaMatricula);

        }catch(error){
            return res.status(500).json({msg:error.message})
        }
    }
    static async criaMatricula(req,res){
        try{
            const {estudanteId} = req.params;
            const novaMatricula = {...req.body,estudante_id:estudanteId};
            const novaMatriculaCriada = await db.matriculas.create(novaMatricula);
            return res.status(201).json(novaMatriculaCriada);
        }catch(error){
            return res.json(500).json({msg:error.message});
        }
    }
    static async atualizaMatricula(req,res){
        try{
            const { estudanteId,matriculaId } = req.params;
            const novaInfos = req.body;
            await db.matriculas.update(novaInfos,{
                where:{
                    id:matriculaId,
                    estudante_id:estudanteId
                }});
            const matriculaAtualizada = await db.matriculas.findOne({where:{id:matriculaId}});
            return res.status(200).json(matriculaAtualizada);

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }

    static async apagaMatricula(req,res){
        try{
            const {matriculaId } = req.params;
            await db.matriculas.destroy({where:{id:matriculaId}});
            return res.status(200).json({msg:`id ${matriculaId} deletado`});

        }catch(error){
            return res.status(500).json({msg:error.message});
        }
    }

}


module.exports = PessoaController;