import api from "@/lib/axios"

const ClientService = {
    getAll: async () => {
        const { data } = await api.get("/clients");
        return data;
    },
    // create: async (payload) => {
    //     const res = await api.post("/clients", payload);
    //     return res.data;
    // }
      create: async (payload) => {
        const {data} = await api.post("/clients", payload);
        return data;
    },
    delete: async (id) => {
        const {data} = await api.delete(`/clients/${id}`)
        return data;
    },
    update: async(id, payload) => {
        const { data } = await api.put(`/clients/${id}`, payload);
        return data;
    },
    getById: async(id) => {
        const { data } = await api.get(`/clients/${id}`);
        return data;
    }
}

export default ClientService;