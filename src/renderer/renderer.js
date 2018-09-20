import React from 'react'
import ReactDOM from 'react-dom'

import DataGrid from './components/DataGrid'

const data = [
    { one: 'one', two: 'two', three: 'three' },
    { one: 'uno', two: 'dos', three: 'tres' },
    { one: 'hi', two: 'fu', three: 'mi' }
]

export default class App extends React.Component {
    render() {
        return(
            <div>
                <h1>Hello World</h1>
                <DataGrid data={data} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
)