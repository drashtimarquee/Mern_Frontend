import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Productlist() {
    const [productsByCategory, setProductsByCategory] = useState({});
    const navigate = useNavigate();

    async function productdelete(id) {
        const response = await axios.delete(`http://localhost:1202/deleteproduct/${id}`);
        if (response.status === 200) {
            allproduct();
        } else {
            alert("product not deleted");
        }
    }

    console.log(productsByCategory);

    const allproduct = async () => {
        const response = await axios.get("http://localhost:1202/allproduct");
        console.log(response);
        if (response.status === 200) {
            const categorizedProducts = groupProductsByCategory(response.data.products);
            setProductsByCategory(categorizedProducts);
        }
    };

    const groupProductsByCategory = (products) => {
        const categorizedProducts = {};
        products.forEach((product) => {
            const category = product.category;
            if (!categorizedProducts[category]) {
                categorizedProducts[category] = [];
            }
            categorizedProducts[category].push(product);
        });
        return categorizedProducts;
    };

    useEffect(() => {
        allproduct();
    }, []);

    return (
        <div className="productlist">
            <NavLink to="/Dashboard/admin/Addproduct" className="icon-link">
                <ArrowLeftOutlined className="user-icon" />
            </NavLink>
            <h1>ALL PRODUCTS</h1>
            {Object.keys(productsByCategory).map((category) => (
                <div className="productlistcateg" key={category}>
                    <h2>{category}</h2>
                    <table key={category}>
                        <thead>
                            <tr>
                                <th>Sno.</th>
                                <th>Product Name</th>
                                <th>Product Price</th>
                                <th>Product Description</th>
                                <th>Product Image</th>
                                <th className="productlist-btn">Action</th>
                            </tr>
                        </thead>
                        <tbody className="proutlist-tbody">
                            {productsByCategory[category].map((product, index) => (
                                <tr key={product._id}>
                                    <td>{index + 1}</td>
                                    <td>{product.productName}</td>
                                    <td>{product.productPrice}</td>
                                    <td>{product.productDescription}</td>
                                    <td>
                                        {product.category === 'Crystal' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Crystel/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Candlestand' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Candlestand/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Decorplates' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Decorplates/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Decorstorage' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Decorstorage/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Fineporcelain' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Fineporcelain/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Flowerarrang' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Flowerarrang/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Gingerjar' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Gingerjar/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Photofram' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Photofram/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Planter' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Planter/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Tabletopdecor' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Tabletopdecor/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Clock' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Clock/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Animal' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Animal/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Castiron' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Castiron/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Incenseholder' && (
                                            <img src={`http://localhost:1202/uploads/Decor/Incenseholder/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'New Decor' && (
                                            <img src={`http://localhost:1202/uploads/Newarrive/Newdecor/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'New Ligting' && (
                                            <img src={`http://localhost:1202/uploads/Newarrive/Newligting/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'New Kitchne' && (
                                            <img src={`http://localhost:1202/uploads/Newarrive/Newkitchne/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Cakestand' && (
                                            <img src={`http://localhost:1202/uploads/Kitchen/Cakestand/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Dinnerplates' && (
                                            <img src={`http://localhost:1202/uploads/Kitchen/Dinnerplates/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Doubleglass' && (
                                            <img src={`http://localhost:1202/uploads/Kitchen/Doubleglass/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Drinkglass' && (
                                            <img src={`http://localhost:1202/uploads/Kitchen/Drinkglass/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Jar' && (
                                            <img src={`http://localhost:1202/uploads/Kitchen/Jar/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Mug' && (
                                            <img src={`http://localhost:1202/uploads/Kitchen/Mug/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Teaware' && (
                                            <img src={`http://localhost:1202/uploads/Kitchen/Teaware/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Bedroomlight' && (
                                            <img src={`http://localhost:1202/uploads/Light/Bedroomlight/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Ceilinglight' && (
                                            <img src={`http://localhost:1202/uploads/Light/Ceilinglight/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Crystallight' && (
                                            <img src={`http://localhost:1202/uploads/Light/Crystallight/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Livingroom' && (
                                            <img src={`http://localhost:1202/uploads/Light/Livingroom/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Tablelamp' && (
                                            <img src={`http://localhost:1202/uploads/Light/Tablelamp/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Woodlamp' && (
                                            <img src={`http://localhost:1202/uploads/Light/Woodlamp/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Wallsconses' && (
                                            <img src={`http://localhost:1202/uploads/Light/Wallsconses/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Wallplates' && (
                                            <img src={`http://localhost:1202/uploads/Walldecor/Wallplates/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Olipaint' && (
                                            <img src={`http://localhost:1202/uploads/Walldecor/Olipaint/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Wallmirror' && (
                                            <img src={`http://localhost:1202/uploads/Walldecor/Wallmirror/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Framedart' && (
                                            <img src={`http://localhost:1202/uploads/Walldecor/Framedart/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Wallvases' && (
                                            <img src={`http://localhost:1202/uploads/Walldecor/Wallvases/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Chair' && (
                                            <img src={`http://localhost:1202/uploads/Furniture/Chair/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Tables' && (
                                            <img src={`http://localhost:1202/uploads/Furniture/Tables/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Ottomans' && (
                                            <img src={`http://localhost:1202/uploads/Furniture/Ottomans/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Bathset' && (
                                            <img src={`http://localhost:1202/uploads/Bathdecor/Bathset/${product.productImage}`} alt={product.productName} />
                                        )}
                                        {product.category === 'Basin' && (
                                            <img src={`http://localhost:1202/uploads/Bathdecor/Basin/${product.productImage}`} alt={product.productName} />
                                        )}
                                    </td>
                                    <td className="action">
                                        <td className="actionn" onClick={() => navigate(`/Dashboard/admin/Editproduct/${product._id}`)}>
                                            Edit
                                        </td>
                                        <td className="action2" onClick={() => productdelete(product._id)}>
                                            Delete
                                        </td>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}

export default Productlist;