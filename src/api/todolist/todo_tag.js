import request from '@/utils/request'

// 查询todo_tag列表
export function listTodo_tag(query) {
  return request({
    url: '/todolist/todo_tag/list',
    method: 'get',
    params: query
  })
}

// 查询todo_tag详细
export function getTodo_tag(id) {
  return request({
    url: '/todolist/todo_tag/' + id,
    method: 'get'
  })
}

// 新增todo_tag
export function addTodo_tag(data) {
  return request({
    url: '/todolist/todo_tag',
    method: 'post',
    data: data
  })
}

// 修改todo_tag
export function updateTodo_tag(data) {
  return request({
    url: '/todolist/todo_tag',
    method: 'put',
    data: data
  })
}

// 删除todo_tag
export function delTodo_tag(id) {
  return request({
    url: '/todolist/todo_tag/' + id,
    method: 'delete'
  })
}
