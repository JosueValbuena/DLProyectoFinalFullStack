const request = require("supertest");
const app = require('../router/routers');

describe('Set de pruebas', () => {
    it('GET /publicaciones: Debería retornar una lista de productos', async () => {
        const response = await request(app).get('/publicaciones');
        expect(response.status).toBe(200);
        expect(response.body).toBeDefined();
    });

    it('Ruta protegida /user: Debería entregar un error 500', async () => {
        const response = await request(app)
            .get('/user');

        expect(response.status).toBe(500);
    });

    it('Ruta /comentarios/:id: Debería obtener los comentarios de una publicación (especificar post ID)', async () => {
        const postId = 1; // ID de la publicación que deseas probar
        const response = await request(app)
            .get(`/comentarios/${postId}`);

        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // si la respuesta es un arreglo
        expect(response.body.length).toBeGreaterThan(0); // si hay comentarios en la lista
    });

    it('Ruta /publicaciones/usuario/:id_user: Debería obtener las publicaciones de un usuario (especificar user ID)', async () => {
        const userId = 5; // ID del usuario que deseas probar
        const response = await request(app)
          .get(`/publicaciones/usuario/${userId}`);
    
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true); // si la respuesta es un arreglo
        expect(response.body.length).toBeGreaterThan(0); // si hay publicaciones en la lista
      });
});