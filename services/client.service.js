import api from "@/lib/axios"

const ClientService = {
    // getAll: async () => {
    //     const { data } = await api.get("/clients");
    //     return data;
    // },
    //Updating ClientService to support search (SERVER-SIDE)
    getAll: async ({ search, _sort, _order } = {}) => {
        const params = {};
        if (search) { 
            params.name_like = search;
        }
        if(_sort && _order){
            params._sort = _sort;
            params._order = _order
        }
        const { data } = await api.get("/clients", {
            params,
            headers: {
                "Cache-Control": "no-store" //or next: { revalidate: 0 }
            } 
        });
        return data;
    
    },

    // create: async (payload) => {
    //     const res = await api.post("/clients", payload);
    //     return res.data;
    // }
    create: async (payload) => {
        const { data } = await api.post("/clients", payload);
        return data;
    },
    delete: async (id) => {
        const { data } = await api.delete(`/clients/${id}`)
        return data;
    },
    update: async (id, payload) => {
        const { data } = await api.put(`/clients/${id}`, payload);
        return data;
    },
    getById: async (id) => {
        const { data } = await api.get(`/clients/${id}`);
        return data;
    }
}

export default ClientService;