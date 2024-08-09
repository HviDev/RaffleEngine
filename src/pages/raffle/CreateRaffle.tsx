import React, { useState } from 'react';

const CreateRaffle: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    ticketPrice: '',
    startDate: '',
    endDate: '',
    prizes: '',
  });

  const [showModal, setShowModal] = useState(false);

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

 
  const handleModalOpen = () => setShowModal(true);

  const handleModalClose = () => setShowModal(false);


  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h2 className="mb-0">Crear Nueva Rifa</h2>
        <button type="button" className="btn btn-primary" onClick={handleModalOpen}>Crear nueva rifa</button>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8">
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
                style={{ height: '19rem'}} // Altura y anchura predeterminadas
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
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="startDate" className="form-label">Fecha de Inicio</label>
                  <input
                    type="date"
                    className="form-control"
                    id="startDate"
                    name="startDate"
                    value={formData.startDate}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="endDate" className="form-label">Fecha de Finalización</label>
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
              </div>
            </div>
            <div className="card">
              <div className="card-body">
                <div className="mb-3">
                  <label htmlFor="prizes1" className="form-label">Premio primer lugar:</label>
                  <select
                    className="form-select"
                    id="prizes1"
                    name="prizes1"
                    value={formData.prizes}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar Premio</option>
                    <option value="Casa en León">Casa en León</option>
                    <option value="$10,000 M.N">$10,000 M.N</option>
                    <option value="$5,000 M.N">$5,000 M.N</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="prizes2" className="form-label">Premio segundo lugar:</label>
                  <select
                    className="form-select"
                    id="prizes2"
                    name="prizes2"
                    value={formData.prizes}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar Premio</option>
                    <option value="Casa en León">Casa en León</option>
                    <option value="$10,000 M.N">$10,000 M.N</option>
                    <option value="$5,000 M.N">$5,000 M.N</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="prizes3" className="form-label">Premio tercer lugar:</label>
                  <select
                    className="form-select"
                    id="prizes3"
                    name="prizes3"
                    value={formData.prizes}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Seleccionar Premio</option>
                    <option value="Casa en León">Casa en León</option>
                    <option value="$10,000 M.N">$10,000 M.N</option>
                    <option value="$5,000 M.N">$5,000 M.N</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
      
      {showModal && (
        <div className='modal' style={{
          position: 'fixed',
          backgroundColor: 'var(--modal-background-color)',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          display:'flex',
          justifyContent:'center',
          alignItems: 'center',
        }}>
          <div className='modal-content' style={{
            backgroundColor: 'var(--background-color)',
            padding: '20px',
            borderRadius: '5px',
            width: '400px',
            textAlign: 'center',
            borderColor: 'var(--border-color)'
          }}>
              <h4>¿Está seguro que desea crear esta rifa?</h4>
              <div className='mt-3'>
                <button className='btn btn-danger mx-2' onClick={handleModalClose}>
                  Cancelar
                </button>
                <button className='btn btn-primary mx-2' onClick={handleSubmit}>
                  Confirmar
                </button>
              </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateRaffle;
