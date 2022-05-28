import { Link, Outlet } from 'react-router-dom';
import { getInvoices } from '../../data';

export default function Invoices() {
  let invoices = getInvoices();
  return (
    <div style={{ display: 'flex', backgroundColor:"cyan", flexDirection:"row", justifyItems:"center" }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        {invoices.map((invoice) => (
          <Link
            style={{ display: 'block', margin: '1rem 0' }}
            to={`/invoices/${invoice.number}`}
            key={invoice.number}
          >
            {invoice.name}
          </Link>
        ))}
      </nav>
      <div style={{alignContent:"center", paddingTop:"20px"}}>
        <Outlet />
      </div>
    </div>
  );
}
