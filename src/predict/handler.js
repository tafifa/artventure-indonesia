const { predict } = require("./services");

const postImage = async (request, h) => {
  const payload = request.payload;
  // console.log('Request Payload:', payload);

  if (!payload) {
    return h.response({ error: 'Missing imageFile or taskName data' }).code(400);
  }

  const predictResults = await predict({ payload });
  // const predictResults = "boi";

  const response = h.response({
    status: 'success',
    message: 'Gambar berhasil terkirim',
    data: {
      result: predictResults,
    },
  });
  response.code(201);
  return response;
}

module.exports = { postImage };