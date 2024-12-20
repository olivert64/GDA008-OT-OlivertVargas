const sequelize = require('../config/database.js');

class ClientesService {

    static async insertCliente(data) {
        const query = `EXEC p_insertarClientes 
            @razonSocial = :razonSocial,
            @nombreComercial = :nombreComercial,
            @direccionEntrega = :direccionEntrega,
            @telefono = :telefono,
            @email = :email,
            @estados_idEstados = :estados_idEstados;`;

        return await sequelize.query(query, {
            replacements: {
                razonSocial: data.razonSocial,
                nombreComercial: data.nombreComercial,
                direccionEntrega: data.direccionEntrega,
                telefono: data.telefono,
                email: data.email,
                estados_idEstados: data.estados_idEstados,
            },
            type: sequelize.QueryTypes.INSERT
        });
    }

    static async obtenerClientes() {
        const query = `EXEC p_obtenerClientes;`;
        return await sequelize.query(query, {
            type: sequelize.QueryTypes.SELECT
        });
    }

    static async obtenerClienteId(id) {
        const query = 'EXEC p_ObtenerClientePorId @idCliente = :idCliente';
        return await sequelize.query(query, {
            replacements: { idCliente: id },
            type: sequelize.QueryTypes.SELECT,
        });

    }


}

module.exports = ClientesService;