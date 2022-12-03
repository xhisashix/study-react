import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Links } from './Links'
import { Headline } from './Headline'

export function Main(props) {
  return (
      <main className={styles.main}>
        <Headline >
          <code className={styles.code}>pages/{props.title}.js</code>
        </Headline>
        <Links />
      </main>
  )
}
