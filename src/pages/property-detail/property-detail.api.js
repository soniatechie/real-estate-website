import Axios from 'axios';

const urlProperties = `${process.env.BASE_API_URL}/properties`;

export const getPropertyById = (id) =>
  Axios.get(`${urlProperties}/${id}`).then(({ data }) => data);

const urlEquipments = `${process.env.BASE_API_URL}/equipments`;

export const getEquipments = () =>
  Axios.get(urlEquipments).then(({ data }) => data);
