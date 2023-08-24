
import { useParams, useSearchParams } from "react-router-dom";

const CategoryDetail = () => {
   //hook react-route-dom
   let params = useParams();
   let [query, ] = useSearchParams();
   console.log(params)
   console.log(query.get('price'))
   return(<>
        {params.catSlug}
        <br/>
        Filter: {query.get("price")}
    </>)
}

export default CategoryDetail;