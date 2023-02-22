import List from './List'
export default function Footer () {
  return (
    <footer>
      <p>Desenvolvidor por, Bigode &copy;</p>
      <nav>
        <ul>
          <List
          item = "Instagram"/>
          <List
          item = "Github"/>
          <List
          item = "Twitter"/>
        </ul>
      </nav>
    </footer>
  )
}