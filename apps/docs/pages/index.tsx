import { stringifyProperty, toCSSObject } from '@compai/css-gui'
import { Logo } from '@compai/logo'
import { useState } from 'react'
import { Layout } from '../components/Layout'
import { Sidebar } from '../components/Sidebar'

export default function Docs() {
  const [styles, setStyles] = useState<any>({
    height: {
      value: 24,
      unit: 'px',
    },
    width: {
      value: 24,
      unit: 'px',
    },
    color: '#000',
    backgroundColor: '#fff',
  })

  return (
    <>
      <Layout>
        <Sidebar styles={styles} onChange={setStyles} />
        <div
          sx={{
            height: '100vh',
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            backgroundColor: styles.backgroundColor,
          }}
        >
          <Logo
            // @ts-ignore
            height={stringifyProperty('height', styles.height)}
            // @ts-ignore
            width={stringifyProperty('width', styles.width)}
            color={styles.color}
          />
        </div>
      </Layout>
    </>
  )
}