import React, { useState } from 'react';
import TrashIcon from '../../assets/icons/trashIcon.svg?react';
import EditIcon from '../../assets/icons/editIcon.svg?react';

// Actualmente funciona solo con datos locales

interface Raffle {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  ticketPrice: number;
  maxTickets: number;
  firstPrize: string;
  secondPrize: string;
  thirdPrize: string;
  isActive: boolean;
}

const TicketsTable: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentTicket, setCurrentTicket] = useState<Raffle | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState<boolean>(false);
  const [isDeleteModalVisible, setDeleteModalVisible] = useState<boolean>(false);
  const [isBulkDelete, setIsBulkDelete] = useState<boolean>(false);

  const tickets: Raffle[] = [
    {
      id: 1,
      name: 'Rifa 2025',
      startDate: '24-07-01',
      endDate: '24-07-31',
      ticketPrice: 250,
      maxTickets:1000,
      firstPrize: 'Casa en León',
      secondPrize: 'Viaje todo pagado para dos personas',
      thirdPrize: '15,000 M.N',
      isActive: true,
    },
    {
      id: 2,
      name: 'Rifa 2026',
      startDate: '24-07-01',
      endDate: '24-07-31',
      ticketPrice: 250,
      maxTickets:1500,
      firstPrize: 'Casa en algún lugar',
      secondPrize: 'Viaje a Puerto Vallarta para dos personas',
      thirdPrize: '15,000 M.N',
      isActive: false,
    },
    {
      id: 3,
      name: 'Rifa 2027',
      startDate: '24-07-01',
      endDate: '24-07-31',
      ticketPrice: 300,
      maxTickets:2000,
      firstPrize: 'Casa en algún lugar de la mancha',
      secondPrize: 'Viaje a Mazatlan para dos personas',
      thirdPrize: '12,000 M.N',
      isActive: false,  
    },
  ];

  const prizeOptions = {
    first: ['Casa en León', 'Casa en algún lugar', 'Casa en algún lugar de la mancha'],
    second: ['Viaje todo pagado para dos personas', 'Viaje a Puerto Vallarta para dos personas', 'Viaje a Mazatlan para dos personas'],
    third: ['15,000 M.N', '12,000 M.N'],
  };

  const handleSelectAll = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setSelectedRows(new Set(tickets.map(ticket => ticket.id)));
    } else {
      setSelectedRows(new Set());
    }
  };

  const handleSelectRow = (id: number) => {
    setSelectedRows(prevSelected => {
      const newSelected = new Set(prevSelected);
      if (newSelected.has(id)) {
        newSelected.delete(id);
      } else {
        newSelected.add(id);
      }
      return newSelected;
    });
  };

  const openDeleteModal = (ticket: Raffle) => {
    setCurrentTicket(ticket);
    setIsBulkDelete(false);
    setDeleteModalVisible(true);
  };

  const handleDelete = () => {
    if (currentTicket) {
      console.log(`Delete ticket with ID: ${currentTicket.id}`);
      // Agrega tu lógica de eliminación aquí
      setDeleteModalVisible(false);
      setCurrentTicket(null);
    }
  };

  const handleBulkDelete = () => {
    console.log(`Delete tickets with IDs: ${Array.from(selectedRows).join(', ')}`);
    // Agrega tu lógica de eliminación aquí
    setDeleteModalVisible(false);
    setSelectedRows(new Set());
  };

  const handleEdit = (ticket: Raffle) => {
    setCurrentTicket(ticket);
    setEditModalVisible(true);
  };

  const handleEditModalClose = () => {
    setEditModalVisible(false);
  };

  const handleDeleteModalClose = () => {
    setDeleteModalVisible(false);
  };

  const handleModalSave = () => {
    console.log('Guardar cambios para', currentTicket);
    // Agrega tu lógica de guardado aquí
    setEditModalVisible(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (currentTicket) {
      const { name, value } = e.target;
      setCurrentTicket({ ...currentTicket, [name]: value });
    }
  };

  const showActions = selectedRows.size > 0;

  return (
    <div className="container d-flex justify-content-center  align-items-center">
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-sm mt-2" id="bulk-select-body">
            <thead>
              <tr>
                <th>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedRows.size === tickets.length}
                  />
                </th>
                <th>ID</th>
                <th>Nombre</th>
                <th>Inicio</th>
                <th>Fin</th>
                <th>Precio</th>
                <th>No.Boletos</th>
                <th>Primer premio</th>
                <th>Segundo Premio</th>
                <th>Tercer Premio</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket) => (
                <tr key={ticket.id}>
                  <td>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={selectedRows.has(ticket.id)}
                      onChange={() => handleSelectRow(ticket.id)}
                    />
                  </td>
                  <td>{ticket.id}</td>
                  <td>{ticket.name}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{ticket.startDate}</td>
                  <td style={{ whiteSpace: 'nowrap' }}>{ticket.endDate}</td>
                  <td>{ticket.ticketPrice}</td>
                  <td>{ticket.maxTickets}</td>
                  <td>{ticket.firstPrize}</td>
                  <td>{ticket.secondPrize}</td>
                  <td>{ticket.thirdPrize}</td>
                  <td>
                    <span
                      className={`status-circle ${ticket.isActive ? 'active' : 'inactive'}`}
                    />
                  </td>
                  <td>
                    <span onClick={() => openDeleteModal(ticket)} style={{ cursor: 'pointer', margin: '0.5rem' }}>
                      <TrashIcon />
                    </span>
                    <span onClick={() => handleEdit(ticket)} style={{ cursor: 'pointer', margin: '0.5rem' }}>
                      <EditIcon />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showActions && (
            <div id="bulk-select-actions">
              <button
                className="btn btn-primary"
                onClick={() => {
                  setIsBulkDelete(true);
                  setDeleteModalVisible(true);
                }}
              >
                Eliminar seleccion
              </button>
            </div>
          )}
          <div id="bulk-select-replace-element" style={{ display: 'none' }}></div>
        </div>
      </div>
      {isEditModalVisible && currentTicket && (
        <div className="modal fade show d-block" id="editModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content" style={{ color: 'var(--text-color)', backgroundColor: 'var(--background-color)' }}>
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Editar Rifa</h5>
                <button type="button" className="btn-close" onClick={handleEditModalClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label"><strong>Nombre</strong></label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        value={currentTicket.name}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="firstPrize" className="form-label"><strong>Primer Premio</strong></label>
                      <select
                        className="form-select"
                        id="firstPrize"
                        name="firstPrize"
                        value={currentTicket.firstPrize}
                        onChange={handleChange}
                      >
                        {prizeOptions.first.map(prize => (
                          <option key={prize} value={prize}>{prize}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="startDate" className="form-label"><strong>Inicio</strong></label>
                      <input
                        type="date"
                        className="form-control"
                        id="startDate"
                        name="startDate"
                        value={currentTicket.startDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="secondPrize" className="form-label"><strong>Segundo Premio</strong></label>
                      <select
                        className="form-select"
                        id="secondPrize"
                        name="secondPrize"
                        value={currentTicket.secondPrize}
                        onChange={handleChange}
                      >
                        {prizeOptions.second.map(prize => (
                          <option key={prize} value={prize}>{prize}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="endDate" className="form-label"><strong>Fin</strong></label>
                      <input
                        type="date"
                        className="form-control"
                        id="endDate"
                        name="endDate"
                        value={currentTicket.endDate}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="thirdPrize" className="form-label"><strong>Tercer Premio</strong></label>
                      <select
                        className="form-select"
                        id="thirdPrize"
                        name="thirdPrize"
                        value={currentTicket.thirdPrize}
                        onChange={handleChange}
                      >
                        {prizeOptions.third.map(prize => (
                          <option key={prize} value={prize}>{prize}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="ticketPrice" className="form-label"><strong>Precio</strong></label>
                      <input
                        type="number"
                        className="form-control"
                        id="ticketPrice"
                        name="ticketPrice"
                        value={currentTicket.ticketPrice}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="isActive" className="form-label"><strong>Estado</strong></label>
                      <select
                        className="form-select"
                        id="isActive"
                        name="isActive"
                        value={currentTicket.isActive ? 'active' : 'inactive'}
                        onChange={handleChange}
                      >
                        <option value="active">Activo</option>
                        <option value="inactive">Inactivo</option>
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleEditModalClose}>Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleModalSave}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {isDeleteModalVisible && (
        <div className="modal fade show d-block" id="deleteModal" tabIndex={-1} aria-labelledby="deleteModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content" style={{ color: 'var(--text-color)', backgroundColor: 'var(--background-color)' }}>
              <div className="modal-header">
                <h5 className="modal-title" id="deleteModalLabel">{isBulkDelete ? 'Confirmar Eliminación en Masa' : 'Confirmar Eliminación'}</h5>
                <button type="button" className="btn-close" onClick={handleDeleteModalClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {isBulkDelete ? (
                  <div>
                    <p>¿Estás seguro de que deseas eliminar las siguientes rifas?</p>
                    <ul>
                      {Array.from(selectedRows).map(id => {
                        const ticket = tickets.find(ticket => ticket.id === id);
                        return <li key={id}>{ticket?.name}</li>;
                      })}
                    </ul>
                    <p><strong>Esta acción es irreversible.</strong></p>
                  </div>
                ) : (
                  currentTicket ? (
                    <div>
                      <p>¿Estás seguro de que deseas eliminar la rifa: <strong>{currentTicket.name}</strong>?</p>
                      <p><strong>Esta acción es irreversible.</strong></p>
                    </div>
                  ) : (
                    <p>No se ha seleccionado ninguna rifa.</p>
                  )
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleDeleteModalClose}>Cancelar</button>
                <button type="button" className="btn btn-danger" onClick={isBulkDelete ? handleBulkDelete : handleDelete}>Eliminar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketsTable;
