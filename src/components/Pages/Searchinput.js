import { useSearch } from './Searchcontax';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";

function Searchpage() {
    const [values, setValues] = useSearch();
    const navigate = useNavigate();

    const handlesubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.get(`http://localhost:1202/search/${values.keyword}`)
            setValues({ ...values, result: data })
            navigate("/search");
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className='search-page'>
      {/* <div className='home-space'></div> */}
            <form className='search-form' role='search' onSubmit={handlesubmit}>
                <div className='search-div'><IoSearch className='search-svg' />
                    <input className='search-form-input' type='search' placeholder='Search Item.....' value={values.keyword}
                        onChange={(e) => setValues({ ...values, keyword: e.target.value })} />
                </div>
            </form>
        </div>
    )
}
export default Searchpage;