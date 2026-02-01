import supabase from "../db/client.db.js";

class repositoryPatrimonio {
    async findAll(campo = '*') {
        const { data, error } = await supabase
            .from('patrimonio')
            .select(campo)

        if (error) throw error
        return data
    }

    async create(dados) {
        const { data, error } = await supabase
            .from('patrimonio')
            .insert(dados)
            .select()

        if (error) throw error
        return data
    }

    async update(id, dados) {
        const { data, error } = await supabase
            .from('patrimonio')
            .update(dados)
            .eq('id_patrimonio', id)
            .select()

        if(error) throw error
        return data
    }

    async delete(id) {
        const { data, error } = await supabase
            .from('patrimonio')
            .delete()
            .eq('id_patrimonio', id)
            .select()
        
        if(error) throw error
        return data
    }
}

export default repositoryPatrimonio