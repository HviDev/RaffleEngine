import React, { useState } from 'react';

const CreatePrizes: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category:'',
    
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
      <h2>Registrar nuevo premio</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre del premio</label>
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
          <label htmlFor="category" className="form-label">Categoria:</label>
          <select
            className="form-select-md mx-2"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            required

          >
            <option value="">Seleccionar Categoria</option>
            <option value="Primer Lugar">Primer lugar</option>
            <option value="Segundo Lugar">Segundo lugar</option>
            <option value="Tercer Lugar">Tercer lugar</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
      </form>
    </div>
  );
};

export default CreatePrizes;
