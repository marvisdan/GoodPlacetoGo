import axios from 'axios';
const url = 'http://localhost:4001/places';

const Places = () => {
  return {
    getAll: () => fetch(`${url}`)
      .then(resp => resp.json())
      .then(data => data),
    getOne: () => fetch(`${url}`)
      .then(resp => resp.json())
      .then(data => data),
    create: (payload) => axios.post(`${url}`, payload).then(resp => resp.data),
    edit: (place) => axios.patch(`${url}/${place._id}`, { name: place.name, description: place.description, zipcode: place.zipcode, address: place.address, city: place.city, image_url: place.image_url }),
    delete: (id) => axios.delete(`${url}/${id}`),

  }
}

export default Places;