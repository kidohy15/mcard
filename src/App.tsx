import { css } from '@emotion/react'
import styled from '@emotion/styled'
import logo from './logo.svg'
import './App.css'
import Text from './components/shared/Text'

function App() {
  return (
    <div>
      <Text typography="t1" display="block" color="red">
        t1
      </Text>
      <Text typography="t2" style={{ display: 'blcok', color: 'blue' }}>
        t2
      </Text>
      <Text typography="t3">t3</Text>
      <Text typography="t4">t4</Text>
      <Text>t5</Text>
    </div>
  )
}

export default App
