import { reactive } from 'vue'

interface Context {
  locks: Record<any, number>
  zIndex: number
  touchmoveForbid: boolean
}

const context: Context = {
  locks: {},
  zIndex: 2000,
  touchmoveForbid: true,
}

export default reactive<Context>(context)
