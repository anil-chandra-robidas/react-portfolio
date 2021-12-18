const TableRow = ({cname, duration, location }) => {

    return (
        <>
            <tr>
                <td>{cname}</td>
                <td>{duration}</td>
                <td>{location}</td>
            </tr>
        </>
    );
}

export default TableRow;