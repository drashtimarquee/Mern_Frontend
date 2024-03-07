import { useEffect, useState } from "react"
import axios from "axios"
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

function Productlist() {
    const [product, setProduct] = useState([]);
    const navigate = useNavigate();

    async function productdelete(id) {
        const response = await axios.delete(`http://localhost:1202/deleteproduct/${id}`)
        if (response.status === 200) {
            allproduct();
        }
        else {
            alert("product not deleted")
        }
    }

    console.log(product);
    const allproduct = async () => {

        const response = await axios.get("http://localhost:1202/allproduct");
        console.log(response)
        if (response.status === 200) {
            setProduct(response.data.products);
        }
    }

    useEffect(() => {
        allproduct();
    }, [])

    return (
        <div className="productlist">
            {/* <div className='home-space2'></div> */}
            <NavLink to="/Dashboard/admin/Addproduct" className="icon-link"><ArrowLeftOutlined className='user-icon' /></NavLink>
            <h1>ALL PRODUCTS</h1>
            <table>
                <thead>
                    <tr>
                        <th>Sno.</th>
                        <th>Product Name</th>
                        <th>Product Price</th>
                        <th>Product Description</th>
                        <th>Product Ctegory</th>
                        <th>Product Image</th>
                        <th className="productlist-btn">Action</th>
                    </tr>
                </thead>
                <tbody className="proutlist-tbody">
                    {
                        product.map((val, index) => (
                            <tr>
                                <td>{index + 1}</td>
                                <td>{val.productName}</td>
                                <td>{val.productPrice}</td>
                                <td>{val.productDescription}</td>
                                <td>{val.category}</td>
                                <td>
                                    {val.category === 'Crystel' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Crystel/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Candlestand' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Candlestand/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Decorplates' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Decorplates/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Decorstorage' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Decorstorage/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Fineporcelain' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Fineporcelain/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Flowerarrang' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Flowerarrang/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Gingerjar' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Gingerjar/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Photofram' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Photofram/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Planter' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Planter/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Tabletopdecor' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Tabletopdecor/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Clock' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Clock/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Animal' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Animal/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Castiron' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Castiron/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Incenseholder' && (
                                        <img src={`http://localhost:1202/uploads/Decor/Incenseholder/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'New Decor' && (
                                        <img src={`http://localhost:1202/uploads/Newarrive/Newdecor/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'New Ligting' && (
                                        <img src={`http://localhost:1202/uploads/Newarrive/Newligting/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'New Kitchne' && (
                                        <img src={`http://localhost:1202/uploads/Newarrive/Newkitchne/${val.productImage}`} alt={val.productName} />
                                    )}         
                                    {val.category === 'Cakestand' && (
                                        <img src={`http://localhost:1202/uploads/Kitchen/Cakestand/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Dinnerplates' && (
                                        <img src={`http://localhost:1202/uploads/Kitchen/Dinnerplates/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Doubleglass' && (
                                        <img src={`http://localhost:1202/uploads/Kitchen/Doubleglass/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Drinkglass' && (
                                        <img src={`http://localhost:1202/uploads/Kitchen/Drinkglass/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Jar' && (
                                        <img src={`http://localhost:1202/uploads/Kitchen/Jar/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Mug' && (
                                        <img src={`http://localhost:1202/uploads/Kitchen/Mug/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Teaware' && (
                                        <img src={`http://localhost:1202/uploads/Kitchen/Teaware/${val.productImage}`} alt={val.productName} />
                                    )}                 
                                    {val.category === 'Bedroomlight' && (
                                        <img src={`http://localhost:1202/uploads/Light/Bedroomlight/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Ceilinglight' && (
                                        <img src={`http://localhost:1202/uploads/Light/Ceilinglight/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Crystallight' && (
                                        <img src={`http://localhost:1202/uploads/Light/Crystallight/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Livingroom' && (
                                        <img src={`http://localhost:1202/uploads/Light/Livingroom/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Tablelamp' && (
                                        <img src={`http://localhost:1202/uploads/Light/Tablelamp/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Woodlamp' && (
                                        <img src={`http://localhost:1202/uploads/Light/Woodlamp/${val.productImage}`} alt={val.productName} />
                                    )}         
                                    {val.category === 'Wallsconses' && (
                                        <img src={`http://localhost:1202/uploads/Light/Wallsconses/${val.productImage}`} alt={val.productName} />
                                    )}                       
                                    {val.category === 'Wallplates' && (
                                        <img src={`http://localhost:1202/uploads/Walldecor/Wallplates/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Olipaint' && (
                                        <img src={`http://localhost:1202/uploads/Walldecor/Olipaint/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Wallmirror' && (
                                        <img src={`http://localhost:1202/uploads/Walldecor/Wallmirror/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Framedart' && (
                                        <img src={`http://localhost:1202/uploads/Walldecor/Framedart/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Wallvases' && (
                                        <img src={`http://localhost:1202/uploads/Walldecor/Wallvases/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Chair' && (
                                        <img src={`http://localhost:1202/uploads/Furniture/Chair/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Tables' && (
                                        <img src={`http://localhost:1202/uploads/Furniture/Tables/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Ottomans' && (
                                        <img src={`http://localhost:1202/uploads/Furniture/Ottomans/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Bathset' && (
                                        <img src={`http://localhost:1202/uploads/Bathdecor/Bathset/${val.productImage}`} alt={val.productName} />
                                    )}
                                    {val.category === 'Basin' && (
                                        <img src={`http://localhost:1202/uploads/Bathdecor/Basin/${val.productImage}`} alt={val.productName} />
                                    )}
                                </td>
                                <td className="action">
                                    <td className="actionn" onClick={() => navigate(`/Dashboard/admin/Editproduct/${val._id}`)} >Edit</td>
                                    <td className="action2" onClick={() => productdelete(val._id)}>Delete</td>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Productlist