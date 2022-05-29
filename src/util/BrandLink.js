import { useLocation, NavLink, Link, useSearchParams } from "react-router-dom";

// function BrandLink({ brand, ...props }) {
//     let [params] = useSearchParams();
//     // let isActive = params.getAll("brand").includes(brand);

//     let brands = params.getAll("brand");
//     let isActive =
//       brands.includes(brand) && brands.length === 1;
//     return (
//       <Link
//         style={{ color: isActive ? "cyan" : "green", backgroundColor: isActive ? "black" : "brown" }}
//         to={`/shoes?brand=${brand}`}
//         {...props}
//       />
//     );
//   }

  function BrandLink({ brand, ...props }) {
    let [params] = useSearchParams();
    let isActive = params.getAll("brand").includes(brand);
    if (!isActive) {
      params.append("brand", brand);
    }
    return (
      <Link
        style={{ color: isActive ? "red" : "" }}
        to={`/shoes?${params.toString()}`}
        {...props}
      />
    );
  }

  export default BrandLink