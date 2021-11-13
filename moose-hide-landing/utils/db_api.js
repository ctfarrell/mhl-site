/* Api methods to call /functions */

const create = (data) => {
    return fetch('http://localhost:9000/.netlify/functions/citizen-create', {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  
  const readAll = () => {
    return fetch('../.netlify/functions/citizen-read-all').then((response) => {
      return response.json()
    })
  }
  
  const update = (todoId, data) => {
    return fetch(`../.netlify/functions/citizen-update/${todoId}`, {
      body: JSON.stringify(data),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  
  const deleteTodo = (todoId) => {
    return fetch(`../.netlify/functions/citizen-delete/${todoId}`, {
      method: 'POST',
    }).then(response => {
      return response.json()
    })
  }
  
  const batchDeleteTodo = (todoIds) => {
    return fetch(`../.netlify/functions/citizen-delete-batch`, {
      body: JSON.stringify({
        ids: todoIds
      }),
      method: 'POST'
    }).then(response => {
      return response.json()
    })
  }
  
  export default {
    create: create,
    readAll: readAll,
    update: update,
    delete: deleteTodo,
    batchDelete: batchDeleteTodo
  }