import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
    const title = 'Task Tracker';

  return (
    <div className="container">
        <Header title={title} />
        <Tasks />
    </div>
  )
}

export default App;
