import classes from './Headline.module.css'

export function Headline(props) {
  return (
    <div>
      <h1 className={classes.title}>
        Welcome to <a href="https://nextjs.org">{ props.title }</a>
      </h1>

      <p className={classes.description}>
        Get started by editing {props.children}
      </p>
    </div>
  )
}
