import { Link, NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { getInvoices } from '../../data';
import QueryNavLink from '../../util/QueryNavLink'

export default function Invoices() {
  let invoices = getInvoices();
  let [searchParams, setSearchParams] = useSearchParams();
  return (
    <div style={{ display: 'flex', backgroundColor:"cyan", flexDirection:"row", justifyItems:"center" }}>
      <nav
        style={{
          borderRight: 'solid 1px',
          padding: '1rem',
        }}
      >
        <input
          value={searchParams.get("filter") || ""} // Input Element Nullability Check 
          onChange={(event) => {
            let filter = event.target.value; //Aim & Target Acquired
            if (filter) {
              setSearchParams({ filter });
            } else {
              setSearchParams({});
            }
          }}
        /> {/* Accept the User's Search Keyword and save it to the searchParam State Variable*/}

        {invoices
          .filter((invoice) => {
            let filter = searchParams.get("filter");
            if (!filter) return true;
            let name = invoice.name.toLowerCase();
            return name.startsWith(filter.toLowerCase()); 
            /* Retrieve the saved SearchParam State Variable Value 
            and use it to filter through the Results from Data.js Array.
            Display only the results that pass the filter condition */
          })
          .map((invoice) => (
            <QueryNavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  margin: "1rem 0",
                  color: isActive ? "red" : "",
                };
              }}
              to={`/invoices/${invoice.number}`}
              key={invoice.number}
            >
            {invoice.name}
          </QueryNavLink>
        ))}
      </nav>
      <div style={{alignContent:"center", paddingTop:"20px"}}>
        <Outlet />
      </div>
    </div>
  );
}
