import supabase from "../db/client.db.js"

const getItenService = async (campo = '*') => {
    const { data, error } = await supabase
        .from('patrimonio')
        .select(campo)

    return error || data
}

const postItenService = async (iten) => {
    const { data, error } = await supabase
        .from("patrimonio")
        .insert(iten)

    return error || data
}

const updateItenService = async (id, dados) => {
    const { data, error } = await supabase
        .from("patrimonio")
        .update(dados)
        .eq('id', id)

    return error || data
}

const deleteItenService = async (id) => {
    const { data, error } = await supabase
        .from("patrimonio")
        .delete()
        .select()
        .eq('id', id)

    return error || data
}

export { getItenService, postItenService, updateItenService, deleteItenService }