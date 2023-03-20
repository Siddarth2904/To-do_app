import React, { useContext, useState } from 'react'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import { Button } from '@mui/material';
import { Remove, Update } from '../redux/actions/action';
import { DeleteContext } from './context/ContextProvider';
const Todo = () => {

  const { User_data } = useSelector((state) => state.todoreducers)

  const { dlttask, setdlttask } = useContext(DeleteContext)

  const dispatch = useDispatch()
  // console.log(User_data);

  //show modal state
  const [showeye, setShoweye] = useState(false)

  //setvalue state
  const [showeyevalue, setShoweyeValue] = useState(false)

  const [show, setShow] = useState(false)

  const [update, setUpdate] = useState("")

  const [ind, setInd] = useState("")

  const handleClose = () => setShow(false);

  const handleShow = (el) => {
    setShow(true)
    setUpdate(el)
  }
  // delete function
  const remove = (id) => {
    // console.log(id);
    dispatch(Remove(id))
    setdlttask(true)
  }
  // update function
  const usertask_update = () => {
    dispatch(Update(update, ind))
    handleClose()
  }

  return (
    <>
      <div className='todo_data col-lg-5 mx-auto mt-2'>
        {
          User_data.map((ele, k) => {
            return (
              <>
                <div className='todo_container mb-2 d-flex justify-content-between align-items-center px-2' key={k} style={{ background: '#dcdde1', borderRadius: '3px', height: '45px', width: '457px' }}>
                  <li style={{ listStyle: 'none' }}>{ele}</li>
                  <div className='edit_dlt col-lg-3 py-2 d-flex justify-content-between align-items-center'>
                    <EditIcon
                      onClick={() => {
                        handleShow(ele)
                        setInd(k)
                      }}
                      style={{ color: '#3c40c6', cursor: 'pointer' }} />
                    <DeleteIcon
                      onClick={() => remove(k)}
                      style={{ color: 'red', cursor: 'pointer' }} />
                    <RemoveRedEyeIcon
                      onClick={() => {
                        setShoweye(true)
                        setShoweyeValue(ele)
                      }}
                      style={{ color: '#1dd1a1', cursor: 'pointer' }} />
                  </div>
                </div>
              </>
            )
          })
        }
        {/* read model */}
        <Modal show={showeye}>
          <h1 className='text-center'>{showeyevalue}</h1>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShoweye(false)}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
        {/* update model */}
        <Modal show={show} onHide={handleClose}>
          <h3 className='text-center mt-2'>Update Your Task</h3>
          <Modal.Header >
            <div className='todo col-lg-5 mx-auto d-flex justify-content-between align-items-center'>
              <input name='task' value={update}

                onChange={(e) => setUpdate(e.target.value)} className='form-control col-lg-5 mt-2' />

            </div>
          </Modal.Header>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={() => usertask_update()}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  )
}

export default Todo