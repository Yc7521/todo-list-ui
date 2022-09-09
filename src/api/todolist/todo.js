import request from '@/utils/request'

// 查询代办列表
export function listTodo(query) {
  return request({
    url: '/todolist/todo/list',
    method: 'get',
    params: query
  })
}

// 查询代办详细
export function getTodo(id) {
  return request({
    url: '/todolist/todo/' + id,
    method: 'get'
  })
}

// 新增代办
export function addTodo(data) {
  return request({
    url: '/todolist/todo',
    method: 'post',
    data: data
  })
}

// 修改代办
export function updateTodo(data) {
  return request({
    url: '/todolist/todo',
    method: 'put',
    data: data
  })
}

// 删除代办
export function delTodo(id) {
  return request({
    url: '/todolist/todo/' + id,
    method: 'delete'
  })
}
