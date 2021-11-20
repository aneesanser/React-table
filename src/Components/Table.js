import React, { useState } from 'react'
import data from "../MOCK_DATA.json"
import Pagination from './Pagination';

function Table() {
    const [currentPage, setCurrentPage] = useState(1);
    const [postPerPage, setPostPerPage] = useState(10);
    const [searchTerm, setSearchTerm] = useState("")


    //set data to lacal storage and retrieving fro it

    localStorage.setItem("users", JSON.stringify(data));
    const storageData = localStorage.getItem("users");
    const newData = JSON.parse(storageData)

    //page setting
    const indexofLastPost = currentPage * postPerPage;
    const indexofFirstPost = indexofLastPost - postPerPage;
    const currentPosts = newData.slice(indexofFirstPost, indexofLastPost)
    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    const next = () =>  setCurrentPage(currentPage + 1)
    const prev = () =>  setCurrentPage(currentPage - 1)
    const handleNumber = (e) =>{ 
        setPostPerPage(e.target.value);
        setCurrentPage(1)
    }
  
    //search filtering
    const filteredDta = currentPosts?.filter(function (val) {
        if (searchTerm === "") {
            return val;
        }
        else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }
        else if (val.Position.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }
        else if (val.Office.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }
        else if (val.Date.toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        }
        else if (val.Age.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
            return val;
        } 
        return 0;
    })
  
    return (
        <div className="container">
            <h2 className="text-center mt-2">React Table</h2>
            <div className="row mt-3">
                <div className="col-sm-12 col-md-6">
                    <span>show</span> &nbsp;
                    <select onChange={handleNumber} style={{"cursor":"pointer"}}>
                        <option value="10" >10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                    &nbsp;
                    <span>entries</span>

                </div>
                <div className="col-sm-12 col-md-6">
                    <div className="d-flex justify-content-end">
                        <label className="mr-2">search:</label>
                        <input type="search"
                            id="searchInput"
                            onChange={(e) =>
                            setSearchTerm(e.target.value)} />
                    </div>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-12">
                    <table className="table 
                     table-striped-responsive-stack
                     table-hover ">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Office</th>
                                <th scope="col">age</th>
                                <th scope="col">Start date</th>
                            </tr>
                        </thead>
                        {filteredDta.length === 0 ?
                            <tbody >
                                <tr className="odd">
                                    <td colSpan="6"
                                     className="dataTables_empty">
                                     No Matching Record Found</td>
                                </tr>
                            </tbody>
                            :
                            <tbody>
                                {filteredDta.map((val, index) => {
                                    return (            
                                        <tr key={index}>
                                            <td>{val.name}</td>
                                            <td>{val.Position}</td>
                                            <td>{val.Office}</td>
                                            <td>{val.Age}</td>
                                            <td>{val.Date}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>}
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Position</th>
                                <th scope="col">Office</th>
                                <th scope="col">age</th>
                                <th scope="col">Start date</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
            <Pagination
                currentPage={currentPage}
                filteredDta={filteredDta}
                next={next}
                prev={prev}
                postsPerPage={postPerPage}
                totalPosts={data.length}
                paginate={paginate}
            />
        </div>
    )
}

export default Table
