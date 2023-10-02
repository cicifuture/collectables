import ProjectForm from '@/components/ProjectForm'
import React from 'react'
import Modal from '@/components/Modal'     
const CreateProject = () => {
  return (
    <>
    <Modal />
    <h3 className='modal-head-text'>Create a new project</h3>
    <ProjectForm />
    
    </>
  )
}

export default CreateProject