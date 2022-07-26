import Vue from 'vue'
import VueRouter from 'vue-router'
import HistoryMessageList from '@/views/HistoryMessageList'
import UserList from '@/views/UserList'
import NewFriends from '@/views/NewFriends'
import Message from '@/views/Message'
import newFriends from '@/views/NewFriends'
import UserDetail from '@/views/UserDetail'
import Chat from '@/views/Chat'
import ChattingRoom from '@/views/ChattingRoom'
import ImChat from '../views/ImChat'
import Login from '../views/Login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: ImChat,
    redirect: '/history',
    children: [
      {
        path: 'history',
        component: HistoryMessageList,
        children: [
          {path: '', component: Message},
          {path: ':id', component: Chat},
        ]
      },
      {
        path: 'users',
        component: UserList,
        children: [
          {path: '', component: Message},
          {path: 'newFriends', component: NewFriends},
          {path: ':id', component: UserDetail},
        ]
      },
      {
        path: 'chat',
        component: ChattingRoom,
        meta: {
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
