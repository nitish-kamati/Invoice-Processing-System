
import { Table, TableHead,TableBody,TableRow, TableCell, Button } from "@mui/material";

const Invoices = ({invoices}) => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Vendor</TableCell>
                    <TableCell>Product</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Date</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell>Action</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    invoices.map(invoice => (
                        <TableRow>
                            <TableCell>{invoice.vendor}</TableCell>
                            <TableCell>{invoice.product}</TableCell>
                            <TableCell>{invoice.amount}</TableCell>
                            <TableCell>{invoice.date}</TableCell>
                            <TableCell>{invoice.action}</TableCell>
                            <TableCell>
                                <Button variant="contained" color="success">Mark Done</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default Invoices;