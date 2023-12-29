import { css } from '@emotion/react'
import styled from '@emotion/styled'
import logo from './logo.svg'
import './App.css'
import Text from './components/shared/Text'
import Button from './components/shared/Button'
import Input from './components/shared/Input'
import TextField from './components/shared/TextLabel'
import Alert from './components/shared/Alert'
import { useAlertContext } from './contexts/AlertContext'

function App() {
  const { open } = useAlertContext()

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

      <div style={{ height: 10, width: '100%', background: '#egegeg' }}>
        <Button>클릭해주세요</Button>
        <Button color="success">클릭해주세요</Button>
        <Button color="error">클릭해주세요</Button>
        <Button color="success" weak={true}>
          클릭해주세요
        </Button>
        <Button color="error" weak={true}>
          클릭해주세요
        </Button>
        <Button>클릭해주세요</Button>
        <Button full={true}>클릭해주세요</Button>
        <Button full={true} disabled={true}>
          클릭해주세요
        </Button>

        <Input placeholder="로그인" aria-invalid={false} />
        <Input aria-invalid={false} />

        <TextField label="아이디" />
        <TextField label="패스워드" hasError={true} />

        <div style={{ height: 10, width: '100%' }}></div>

        {/* <Alert
          open={true}
          title="알럿이 떴습니다."
          description="안녕하세요"
          onButtonClick={() => {}}
        /> */}

        <Button
          onClick={() => {
            open({
              title: '카드신청완료',
              description: '내역페이지에서 확인해주세요',
              onButtonClick: () => {
                //
              },
            })
          }}
        >
          Alert 오픈
        </Button>
      </div>
    </div>
  )
}

export default App
