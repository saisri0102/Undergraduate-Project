import React from 'react';
import Pagination from '../Pagination'
import RepoCard from './RepoCard'
function RepoCardComponent({details }) {

    const [currentPage , setCurrentPage] = React.useState(1);
    const [postPerPage , setPosts] = React.useState(5);

    const indexOfLastPost = currentPage * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const currentPosts = details.slice(indexOfFirstPost, indexOfLastPost);

    const paginate = pageNumber => setCurrentPage(pageNumber);

    console.log(details)
    return (
        <div>    
            {
               !details ? null : 
                <div>
                    <div className="row px-3 justify-content-between">
                        <h2>Repositories</h2>
                        <div>
                            <Pagination 
                                postsPerPage={postPerPage}
                                totalPosts={details.length}
                                paginate={paginate}
                            />
                        </div>
                    </div>
                
                    <div>
                    {
                        currentPosts.map(repo => <RepoCard repo={repo}/>)
                    }
                    </div>
                </div>
            }
        </div>
    );
}

export default RepoCardComponent;