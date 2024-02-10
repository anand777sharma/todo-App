import React from 'react'
import Header from '../components/Header'
import TodoForm from '../components/TodoForm'
import Todos from '../components/Todos'

const Home = () => {
    return (
        <div className='container-fluid'>
            
            <Header />

            <div className="row">
                <div className="col-lg-6">
                <TodoForm />
                </div>
                <div className="col-lg-6 " style={{height:500}}>
                <Todos />
                </div>
            </div>
          
           
        </div>
    )
}

export default Home