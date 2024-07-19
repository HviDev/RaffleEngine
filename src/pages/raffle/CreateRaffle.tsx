import React, { useState } from 'react';

const CreateRaffle: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ticketPrice: '',
    endDate: '',
    startDate: '',
    prizes:''

  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form data submitted:', formData);
    // Aquí puedes manejar el envío del formulario, por ejemplo, haciendo una petición a tu backend.
  };



  return (
    <div className="container mt-5">
      <h2>Registrar Nueva Rifa</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre de la Rifa</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Descripción</label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={3}
            required
          ></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="ticketPrice" className="form-label">Precio del Boleto</label>
          <input
            type="number"
            className="form-control"
            id="ticketPrice"
            name="ticketPrice"
            value={formData.ticketPrice}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">Fecha de Inicio</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="endDate" className="form-label">Fecha de Finalizacion</label>
          <input
            type="date"
            className="form-control"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="prizes" className="form-label">Premio primer lugar:</label>
          <select
            className="form-select-md mx-2"
            id="prizes"
            name="prizes"
            value={formData.prizes}
            onChange={handleChange}
            required

          >
            <option value="">Seleccionar Premio</option>
            <option value="Primer Lugar">Casa en León</option>
            <option value="Segundo Lugar">$10,000 M.N</option>
            <option value="Tercer Lugar">$5,000 M.N</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="prizes" className="form-label">Premio segundo lugar:</label>
          <select
            className="form-select-md mx-2"
            id="prizes"
            name="prizes"
            value={formData.prizes}
            onChange={handleChange}
            required

          >
            <option value="">Seleccionar Premio</option>
            <option value="Primer Lugar">Casa en León</option>
            <option value="Segundo Lugar">$10,000 M.N</option>
            <option value="Tercer Lugar">$5,000 M.N</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="prizes" className="form-label">Premio tercer lugar:</label>
          <select
            className="form-select-md mx-2"
            id="prizes"
            name="prizes"
            value={formData.prizes}
            onChange={handleChange}
            required

          >
            <option value="">Seleccionar Premio</option>
            <option value="Primer Lugar">Casa en León</option>
            <option value="Segundo Lugar">$10,000 M.N</option>
            <option value="Tercer Lugar">$5,000 M.N</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
    
  );
};

export default CreateRaffle;
