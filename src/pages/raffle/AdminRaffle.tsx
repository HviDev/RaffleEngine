import React, { useState } from 'react';
import TrashIcon from '../../assets/icons/trashIcon.svg?react';
import EditIcon from '../../assets/icons/editIcon.svg?react';

//currently works only with local data

interface Raffle {
  id: number;
  name: string;
  startDate: string;
  endDate: string;
  ticketPrice: number;
  firstPrize: string;
  secondPrize: string;
  thirdPrize: string;
  isActive: boolean; 
}

const TicketsTable: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<Set<number>>(new Set());
  const [currentTicket, setCurrentTicket] = useState<Raffle | null>(null);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);

  const tickets: Raffle[] = [
    {
      id: 1,
      name: 'Rifa 2025',
      startDate: '2024-07-01',
      endDate: '2024-07-31',
      ticketPrice: 250,
      firstPrize: 'Casa en León',
      secondPrize: 'Viaje todo pagado para dos personas',
      thirdPrize: '15,000 M.N',
      isActive: true, 
    },
    {
      id: 2,
      name: 'Rifa 2026',
      startDate: '2024-07-01',
      endDate: '2024-07-31',
      ticketPrice: 250,
      firstPrize: 'Casa en algún lugar',
      secondPrize: 'Viaje a Puerto Vallarta para dos personas',
      thirdPrize: '15,000 M.N',
      isActive: false, 
    },
    {
      id: 3,
      name: 'Rifa 2027',
      startDate: '2024-07-01',
      endDate: '2024-07-31',
      ticketPrice: 300,
      firstPrize: 'Casa en algún lugar de la mancha',
      secondPrize: 'Viaje a Mazatlan para dos personas',
      thirdPrize: '12,000 M.N',
      isActive: false, 
    },
  ];

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

  const handleDelete = (id: number) => {
    console.log(`Delete ticket with ID: ${id}`);
    // Add your delete logic here
  };

  const handleEdit = (ticket: Raffle) => {
    setCurrentTicket(ticket);
    setModalVisible(true);
  };

  const handleModalClose = () => {
    setModalVisible(false);
  };

  const handleModalSave = () => {
    console.log('Save changes for', currentTicket);
    // Add your save logic here
    setModalVisible(false);
  };

  const showActions = selectedRows.size > 0;

  return (
    <div className="container m-2">
      <div className="card m-2">
        <div className="card-body">
          <table className="table table-striped mt-2" id="bulk-select-body">
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
                <th>Premio primer lugar</th>
                <th>Segundo Premio</th>
                <th>Tercer Premio</th>
                <th>Estado</th> {/* Add new header */}
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
                  <td>{ticket.startDate}</td>
                  <td>{ticket.endDate}</td>
                  <td>{ticket.ticketPrice}</td>
                  <td>{ticket.firstPrize}</td>
                  <td>{ticket.secondPrize}</td>
                  <td>{ticket.thirdPrize}</td>
                  <td>
                    <span
                      className={`status-circle ${ticket.isActive ? 'active' : 'inactive'}`}
                    />
                  </td>
                  <td>
                    <span onClick={() => handleDelete(ticket.id)} style={{ cursor: 'pointer' }}>
                      <TrashIcon />
                    </span>
                    <span onClick={() => handleEdit(ticket)} style={{ cursor: 'pointer' }}>
                      <EditIcon />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {showActions && (
            <div id="bulk-select-actions">
              <button className="btn btn-primary">Eliminar seleccion</button>
            </div>
          )}
          <div id="bulk-select-replace-element" style={{ display: 'none' }}>
          </div>
        </div>
      </div>
    {isModalVisible && (
        <div className="modal fade show d-block" id="editModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editModalLabel">Editar Rifa</h5>
                <button type="button" className="btn-close" onClick={handleModalClose} aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {currentTicket ? (
                  <div>
                    <p>Editar detalles para: <strong>{currentTicket.name}</strong></p>
                    {/* Add form elements here for editing */}
                  </div>
                ) : (
                  <p>No se ha seleccionado ninguna rifa.</p>
                )}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Cerrar</button>
                <button type="button" className="btn btn-primary" onClick={handleModalSave}>Guardar</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TicketsTable;
