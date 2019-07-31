

export default {
    listItems: {
        width: '100%',
        listStyleType: 'none',
        padding: 0,
    },
    item: {
        display: 'flex',
        justifyContent: 'space-between',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        borderRadius: '4px',
        padding: '10px 10px',
        lineHeight: '34px',
        marginBottom: 10,
        '& p': {
            color: '#333',
            height: 30,
            margin:0,
            fontSize: '1.250em'
        },
        '&:hover': {
            border: '1px solid rgba(0, 0, 0, 0.87)'
        },
        '& button': {
            marginLeft: 10
        }
    }
}