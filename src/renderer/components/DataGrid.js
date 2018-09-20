import React from 'react'
import Griddle, { plugins } from 'griddle-react'

const styleConfig = {
    styles: {
        Filter: { fontSize: 18 },
        Table: { border: "2px solid #555"}
    }
}

const DataGrid = (props) => {
    return(
        <Griddle
            data={props.data}
            plugins={[plugins.LocalPlugin]}
            styleConfig={styleConfig}
        />
    )
}

export default DataGrid